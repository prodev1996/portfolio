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
  { name: "Data Path", href: "#data-journey" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isResumePage = pathname === "/resume";

  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (isResumePage) return;

    const sections = homeLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean) as Element[];

    const updateNavigationState = () => {
      setScrolled(window.scrollY > 12);

      const marker = window.innerHeight * 0.24;
      let currentSection = homeLinks[0]?.name ?? "Home";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top - marker <= 0) {
          const match = homeLinks.find(
            (link) => link.href === `#${section.id}`
          );
          if (match) currentSection = match.name;
        }
      });

      setActive(currentSection);
    };

    updateNavigationState();
    window.addEventListener("scroll", updateNavigationState);
    window.addEventListener("resize", updateNavigationState);

    return () => {
      window.removeEventListener("scroll", updateNavigationState);
      window.removeEventListener("resize", updateNavigationState);
    };
  }, [isResumePage]);

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
        <Link
          href="/"
          className="text-base font-semibold tracking-[0.08em] text-[#223128] sm:text-lg"
        >
          Rajiv Bhandari
        </Link>

        {!isResumePage ? (
          <nav className="hidden items-center gap-1 lg:flex">
            {homeLinks.map((link) => {
              const isActive = active === link.name;
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
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
              <Link href="/resume" className="btn-outline ml-2">
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
          {!isResumePage ? (
            <nav className="flex flex-col gap-2">
              {homeLinks.map((link) => {
                const isActive = active === link.name;
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
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
                Resume
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
            </nav>
          )}
        </motion.div>
      )}
    </header>
  );
}
