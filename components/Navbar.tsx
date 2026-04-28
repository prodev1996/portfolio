"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { FileText } from "lucide-react";

const homeLinks = [
  { name: "Home", href: "#home" },
  { name: "Overview", href: "#about" },
  { name: "Skills", href: "#skills" },
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
      const marker = Math.max(headerHeight + 20, Math.min(window.innerHeight * 0.28, headerHeight + 110));
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
    <header className="fixed inset-x-0 top-3 z-50 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-3 py-2 backdrop-blur-2xl transition-all duration-300 sm:px-4 ${
          scrolled
            ? "border-white/10 bg-[#050505]/80 shadow-[0_18px_70px_rgba(0,0,0,0.5)]"
            : "border-white/5 bg-[#050505]/40 shadow-[0_12px_44px_rgba(0,0,0,0.24)]"
        }`}
      >
        <Link href="/" className="flex min-w-0 items-center gap-2 text-white">
          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs font-bold tracking-[0.16em] text-[#f8f7ef] shadow-[0_10px_32px_rgba(0,0,0,0.28)]">
            RB
          </span>
          <span className="hidden min-w-0 flex-col sm:flex">
            <span className="text-sm font-semibold tracking-[0.08em] text-white">
              Rajiv Bhandari
            </span>
            <span className="hidden text-[9px] uppercase tracking-[0.24em] text-[#9da99a] xl:inline">
              SQL • Data Quality • ETL Support
            </span>
          </span>
        </Link>

        {usesSectionNav ? (
          <nav className="hidden items-center rounded-full border border-white/10 bg-white/[0.03] p-1.5 lg:flex">
            {homeLinks.map((link) => {
              const isActive = active === link.name;
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActive(link.name)}
                  whileHover={{ y: -2 }}
                  className="relative rounded-full px-2 py-1.5 text-[12px] font-semibold xl:px-2.5"
                >
                  {isActive ? (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-full bg-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]"
                      transition={{ type: "spring", stiffness: 320, damping: 28 }}
                    />
                  ) : null}
                  <span
                    className={`relative z-10 transition ${
                      isActive
                        ? "text-white"
                        : "text-[#9a94a8] hover:text-white"
                    }`}
                  >
                    {link.name}
                  </span>
                </motion.a>
              );
            })}

            <motion.div whileHover={{ y: -2 }}>
              <Link
                href="/resume"
                className="ml-2 hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-[13px] font-bold text-white transition hover:border-[#7c6cf2]/42 hover:bg-[#7c6cf2]/12 xl:inline-flex"
              >
                <FileText className="h-4 w-4" />
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
          className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/[0.06] p-2 text-white transition hover:border-[#7c6cf2]/45 hover:text-[#c9c0ff] lg:hidden"
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
