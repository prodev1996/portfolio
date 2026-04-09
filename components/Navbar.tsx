"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const homeLinks = [
  { name: "Home", href: "#home" },
  { name: "Strengths", href: "#what-i-do" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#tech-stack" },
  { name: "Growth", href: "#data-journey" },
  { name: "Experience", href: "#experience" },
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
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-4 py-3 backdrop-blur-xl transition-all duration-300 sm:px-6 ${
          scrolled
            ? "border-[#d7dfd8] bg-[#fffaf2]/92 shadow-[0_18px_40px_rgba(118,103,79,0.12)]"
            : "border-white/60 bg-white/68"
        }`}
      >
        <Link href="/" className="flex items-center gap-3 text-[#223128]">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/80 bg-[linear-gradient(135deg,_rgba(31,157,114,0.15),_rgba(255,255,255,0.92))] text-sm font-semibold tracking-[0.18em] text-[#1d2f26] shadow-[0_10px_24px_rgba(118,103,79,0.08)]">
            RB
          </span>
          <span className="hidden min-w-0 flex-col sm:flex">
            <span className="text-base font-semibold tracking-[0.08em] text-[#223128]">
              Rajiv Bhandari
            </span>
            <span className="text-[11px] uppercase tracking-[0.22em] text-[#6b7c73]">
              Application Support • Data Analytics
            </span>
          </span>
        </Link>

        {usesSectionNav ? (
          <nav className="hidden items-center gap-1 lg:flex">
            {homeLinks.map((link) => {
              const isActive = active === link.name;
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActive(link.name)}
                  whileHover={{ y: -2 }}
                  className="relative rounded-full px-4 py-2 text-sm"
                >
                  {isActive ? (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-full bg-[#1f9d72]"
                      transition={{ type: "spring", stiffness: 320, damping: 28 }}
                    />
                  ) : null}
                  <span
                    className={`relative z-10 transition ${
                      isActive
                        ? "text-white"
                        : "text-[#53645b] hover:text-[#1d2f26]"
                    }`}
                  >
                    {link.name}
                  </span>
                </motion.a>
              );
            })}

            <motion.div whileHover={{ y: -2 }}>
              <Link href="/resume" className="btn-outline ml-3">
                View Resume
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
                  Resume
                </Link>
              </motion.div>
            ) : null}
          </nav>
        )}

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-full border border-[#d7dfd8] bg-white/80 p-2 text-[#284134] transition hover:border-[#1f9d72] hover:text-[#1f9d72] lg:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiOutlineX size={22} /> : <HiOutlineMenu size={22} />}
        </button>
      </motion.div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mt-3 max-w-6xl rounded-[28px] border border-[#dde6de] bg-[#fffaf2]/95 p-3 shadow-[0_24px_50px_rgba(118,103,79,0.12)] backdrop-blur-xl lg:hidden"
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
                    className={`rounded-2xl px-4 py-3 text-sm transition ${
                      isActive
                        ? "bg-[#1f9d72] text-white"
                        : "text-[#53645b] hover:bg-[#eef5ef] hover:text-[#1d2f26]"
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
                  Resume
                </Link>
              ) : null}
            </nav>
          )}
        </motion.div>
      )}
    </header>
  );
}
