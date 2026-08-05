"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { FileText } from "lucide-react";

const homeLinks = [
  { name: "Home", href: "#home" },
  { name: "Snapshot", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Credentials", href: "#credentials" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isResumePage = pathname === "/resume";
  const usesSectionNav = isHomePage;

  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!usesSectionNav) return;

    const sections = homeLinks
      .map((link) => {
        const element = document.querySelector(link.href);
        if (!element) return null;
        return {
          name: link.name,
          element,
        };
      })
      .filter(Boolean) as { name: string; element: Element }[];

    const updateNavigationState = () => {
      setScrolled(window.scrollY > 12);

      const headerHeight =
        document.querySelector("header")?.getBoundingClientRect().height ?? 104;
      const marker = Math.max(
        headerHeight + 20,
        Math.min(window.innerHeight * 0.28, headerHeight + 110),
      );
      const currentHash = window.location.hash;
      const hashMatch = homeLinks.find((link) => link.href === currentHash);

      if (hashMatch) {
        const target = document.querySelector(hashMatch.href);
        if (target) {
          const rect = target.getBoundingClientRect();
          const hashSectionInView =
            rect.top <= marker + 110 && rect.bottom > marker - 40;

          if (hashSectionInView) {
            setActive(hashMatch.name);
            return;
          }
        }
      }

      let currentSection = homeLinks[0]?.name ?? "Home";
      let closestSection = currentSection;
      let closestDistance = Number.POSITIVE_INFINITY;
      let markerMatched = false;

      sections.forEach(({ name, element }) => {
        const rect = element.getBoundingClientRect();

        if (rect.top <= marker && rect.bottom > marker) {
          currentSection = name;
          markerMatched = true;
        }

        const distance = Math.abs(rect.top - marker);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestSection = name;
        }
      });

      setActive(markerMatched ? currentSection : closestSection);
    };

    updateNavigationState();
    const rafId = window.requestAnimationFrame(updateNavigationState);
    const timeoutId = window.setTimeout(updateNavigationState, 140);
    window.addEventListener("scroll", updateNavigationState);
    window.addEventListener("resize", updateNavigationState);
    window.addEventListener("hashchange", updateNavigationState);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.clearTimeout(timeoutId);
      window.removeEventListener("scroll", updateNavigationState);
      window.removeEventListener("resize", updateNavigationState);
      window.removeEventListener("hashchange", updateNavigationState);
    };
  }, [usesSectionNav]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-[20px] border px-3 py-2.5 backdrop-blur-2xl transition-all duration-300 sm:px-4 ${
          scrolled
            ? "border-white/10 bg-[#050505]/85 shadow-[0_18px_70px_rgba(0,0,0,0.5)]"
            : "border-white/[0.06] bg-[#050505]/35 shadow-[0_12px_44px_rgba(0,0,0,0.2)]"
        }`}
      >
        <Link
          href="/"
          onClick={(event) => {
            if (isHomePage) {
              event.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="group flex min-w-0 items-center gap-2.5 text-white"
        >
          <span className="relative inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#6f67df] via-[#c55b9e] to-[#d48d37] p-[1.5px] shadow-[0_10px_28px_rgba(111,103,223,0.28)]">
            <span className="flex h-full w-full items-center justify-center rounded-[10px] bg-[#0a0910] text-[11px] font-black tracking-[0.06em] text-white">
              RB
            </span>
            <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-[#0a0910] bg-[#1e9b73] shadow-[0_0_8px_rgba(30,155,115,0.7)]" />
          </span>
          <span className="hidden min-w-0 flex-col sm:flex">
            <span className="text-sm font-black tracking-[0.02em] text-white">
              Rajiv Bhandari
            </span>
            <span className="hidden text-[9px] font-semibold uppercase tracking-[0.22em] text-[#8f87a0] xl:inline">
              Application Support · Data · Software
            </span>
          </span>
        </Link>

        {usesSectionNav ? (
          <nav className="hidden items-center gap-0.5 lg:flex">
            {homeLinks.map((link, index) => {
              const isActive = active === link.name;
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActive(link.name)}
                  className="group relative flex items-center gap-1.5 rounded-lg px-2.5 py-2 text-[12px] font-bold xl:px-3"
                >
                  <span
                    className={`font-mono text-[9px] transition ${
                      isActive ? "text-[#c55b9e]" : "text-[#5c5666] group-hover:text-[#8f87a0]"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`relative transition ${
                      isActive ? "text-white" : "text-[#9a94a8] group-hover:text-white"
                    }`}
                  >
                    {link.name}
                    {isActive ? (
                      <motion.span
                        layoutId="nav-active-underline"
                        className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-gradient-to-r from-[#6f67df] to-[#c55b9e]"
                        transition={{ type: "spring", stiffness: 320, damping: 28 }}
                      />
                    ) : null}
                  </span>
                </motion.a>
              );
            })}

            <motion.div whileHover={{ y: -2 }}>
              <Link
                href="/resume"
                className="ml-3 hidden items-center gap-2 rounded-[12px] bg-gradient-to-br from-[#6f67df] to-[#c55b9e] px-4 py-2 text-[12px] font-black text-white shadow-[0_10px_26px_rgba(111,103,223,0.28)] transition hover:brightness-110 xl:inline-flex"
              >
                <FileText className="h-3.5 w-3.5" />
                Resume
              </Link>
            </motion.div>
          </nav>
        ) : (
          <nav className="hidden items-center gap-3 lg:flex">
            <motion.div whileHover={{ y: -2 }}>
              <Link href="/" className="btn-outline">
                Back Home
              </Link>
            </motion.div>
            {!isResumePage ? (
              <motion.div whileHover={{ y: -2 }}>
                <Link href="/resume" className="btn-primary">
                  View Resume
                </Link>
              </motion.div>
            ) : null}
          </nav>
        )}

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/[0.06] p-2 text-white transition hover:border-[#6f67df]/45 hover:text-[#d9d2ff] lg:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiOutlineX size={22} /> : <HiOutlineMenu size={22} />}
        </button>
      </motion.div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mt-3 max-w-7xl rounded-[28px] border border-white/10 bg-[#050505]/95 p-3 shadow-[0_24px_70px_rgba(0,0,0,0.42)] backdrop-blur-xl lg:hidden"
        >
          {usesSectionNav ? (
            <nav className="flex flex-col gap-2">
              {homeLinks.map((link) => {
                const isActive = active === link.name;
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => {
                      setActive(link.name);
                      setMenuOpen(false);
                    }}
                    whileTap={{ scale: 0.99 }}
                    className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                      isActive
                        ? "bg-white/10 text-white"
                        : "text-[#a1a1aa] hover:bg-white/[0.06] hover:text-white"
                    }`}
                  >
                    {link.name}
                  </motion.a>
                );
              })}

              <Link
                href="/resume"
                onClick={() => setMenuOpen(false)}
                className="btn-outline mt-2 text-center"
              >
                View Resume
              </Link>
            </nav>
          ) : (
            <nav className="flex flex-col gap-2">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="btn-outline text-center"
              >
                Back Home
              </Link>
              {!isResumePage ? (
                <Link
                  href="/resume"
                  onClick={() => setMenuOpen(false)}
                  className="btn-primary text-center"
                >
                  View Resume
                </Link>
              ) : null}
            </nav>
          )}
        </motion.div>
      )}
    </header>
  );
}
