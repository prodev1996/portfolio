"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, MouseEvent } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";

type NavItem = {
  label: string;
  href: string; // section hash or path
};

const navItems: NavItem[] = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function getSectionIdFromHref(href: string) {
  if (href.startsWith("/#")) return href.slice(2);
  if (href.startsWith("#")) return href.slice(1);
  return href;
}

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const [activeSection, setActiveSection] = useState<string>("top");
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [mounted, setMounted] = useState(false);

  // --------------------------
  // Theme setup (unchanged)
  // --------------------------
  useEffect(() => {
    setMounted(true);
    if (typeof window === "undefined") return;

    const root = window.document.documentElement;
    const stored = window.localStorage.getItem("theme");

    if (stored === "light" || stored === "dark") {
      root.classList.toggle("dark", stored === "dark");
      setTheme(stored);
      return;
    }

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    root.classList.toggle("dark", prefersDark);
    setTheme(prefersDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    if (!mounted || typeof window === "undefined") return;
    const nextTheme: "light" | "dark" = theme === "dark" ? "light" : "dark";
    const root = window.document.documentElement;
    root.classList.toggle("dark", nextTheme === "dark");
    window.localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  };

  const isOnResumePage = pathname === "/resume";

  // --------------------------
  // Navigation helper
  // --------------------------
  const navigateToSection = (sectionId: string) => {
    if (typeof window === "undefined") return;

    // highlight exactly what was clicked
    setActiveSection(sectionId);

    // If we're on another page (e.g., /resume), go to home first
    if (pathname !== "/") {
      router.push(`/#${sectionId}`);
      setIsMobileOpen(false);
      return;
    }

    const target = document.getElementById(sectionId);

    if (target) {
      const offset = 80; // navbar height
      const rect = target.getBoundingClientRect();
      const scrollTop = window.scrollY + rect.top - offset;

      window.scrollTo({
        top: scrollTop,
        behavior: "smooth",
      });

      // Update URL hash (purely for URL, we already set activeSection)
      window.history.pushState(null, "", `#${sectionId}`);
    } else if (sectionId === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.pushState(null, "", "#top");
    }

    setIsMobileOpen(false);
  };

  const handleNavClick =
    (href: string) =>
    (
      event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
    ) => {
      event.preventDefault();
      const sectionId = getSectionIdFromHref(href);
      navigateToSection(sectionId);
    };

  const desktopLinkBaseClasses =
    "relative inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors";

  const mobileLinkBaseClasses =
    "flex items-center justify-between rounded-xl px-3 py-2 text-sm font-medium";

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-800/60 bg-slate-950/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        {/* Logo / Brand */}
        <button
          type="button"
          className="group flex items-center gap-3"
          onClick={() => navigateToSection("top")}
        >
          <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-2xl border border-emerald-400/40 bg-gradient-to-tr from-emerald-500/30 via-emerald-400/20 to-cyan-400/30 shadow-[0_18px_40px_rgba(16,185,129,0.45)]">
            {/* overlay BEHIND text so RB stays sharp */}
            <span className="pointer-events-none absolute inset-px rounded-[18px] bg-slate-950/40 backdrop-blur-[2px]" />
            <span className="relative z-10 text-xs font-semibold tracking-[0.16em] text-emerald-50">
              RB
            </span>
          </div>
          <div className="hidden text-xs sm:block">
            <div className="font-semibold tracking-[0.16em] text-slate-200 group-hover:text-emerald-300">
              RAJIV BHANDARI
            </div>
            <div className="mt-0.5 text-[11px] text-slate-400">
              ICT Support &amp; Full Stack Dev
            </div>
          </div>
        </button>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-4 md:flex">
          <div className="flex items-center gap-1 rounded-full border border-slate-700/70 bg-slate-900/70 px-2 py-1 shadow-[0_18px_40px_rgba(15,23,42,0.8)]">
            {navItems.map((item) => {
              const sectionId = getSectionIdFromHref(item.href);
              const isActive = !isOnResumePage && activeSection === sectionId;

              return (
                <button
                  key={item.label}
                  onClick={handleNavClick(item.href)}
                  className={`${desktopLinkBaseClasses} ${
                    isActive
                      ? "border border-emerald-400/60 bg-emerald-500/15 text-emerald-200"
                      : "text-slate-300 hover:text-emerald-200"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-emerald-500/10 blur-xl" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-2">
            <Link
              href="/resume"
              className={`inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                isOnResumePage
                  ? "border-emerald-400/70 bg-emerald-500 text-slate-950 shadow-[0_18px_40px_rgba(16,185,129,0.65)]"
                  : "border-emerald-400/40 bg-slate-900/80 text-emerald-200 hover:border-emerald-400/80 hover:text-emerald-100"
              }`}
            >
              <span>View Resume</span>
            </Link>

            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-600/80 bg-slate-900/80 text-slate-300 shadow-[0_10px_25px_rgba(15,23,42,0.9)] transition-colors hover:border-emerald-400/70 hover:text-emerald-200"
              aria-label="Toggle theme"
            >
              {!mounted ? null : theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile: theme + menu */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-600/80 bg-slate-900/80 text-slate-300 shadow-[0_10px_25px_rgba(15,23,42,0.9)] transition-colors hover:border-emerald-400/70 hover:text-emerald-200"
            aria-label="Toggle theme"
          >
            {!mounted ? null : theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>
          <button
            type="button"
            onClick={() => setIsMobileOpen((open) => !open)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/80 text-slate-100 shadow-[0_16px_30px_rgba(15,23,42,0.9)] transition-colors hover:border-emerald-400/70 hover:text-emerald-200"
            aria-label="Toggle navigation menu"
          >
            {isMobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      {isMobileOpen && (
        <div className="border-t border-slate-800/70 bg-slate-950/95 backdrop-blur-xl md:hidden">
          <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
            <div className="space-y-1">
              {navItems.map((item) => {
                const sectionId = getSectionIdFromHref(item.href);
                const isActive = !isOnResumePage && activeSection === sectionId;

                return (
                  <button
                    key={item.label}
                    onClick={handleNavClick(item.href)}
                    className={`${mobileLinkBaseClasses} ${
                      isActive
                        ? "border border-emerald-400/70 bg-emerald-500/10 text-emerald-100"
                        : "border border-transparent text-slate-200 hover:border-slate-700/70 hover:bg-slate-900/80"
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="mt-4 flex items-center justify-between gap-3">
              <Link
                href="/resume"
                className={`inline-flex flex-1 items-center justify-center rounded-xl border px-3 py-2 text-sm font-medium transition-colors ${
                  isOnResumePage
                    ? "border-emerald-400/70 bg-emerald-500 text-slate-950 shadow-[0_18px_40px_rgba(16,185,129,0.65)]"
                    : "border-emerald-400/40 bg-slate-900/80 text-emerald-200 hover:border-emerald-400/80 hover:text-emerald-100"
                }`}
                onClick={() => setIsMobileOpen(false)}
              >
                View Resume
              </Link>
              <button
                type="button"
                onClick={() => navigateToSection("contact")}
                className="inline-flex flex-1 items-center justify-center rounded-xl border border-slate-700/80 bg-slate-900/80 px-3 py-2 text-sm font-medium text-slate-100 shadow-[0_16px_30px_rgba(15,23,42,0.9)] transition-colors hover:border-emerald-400/70 hover:text-emerald-200"
              >
                Let&apos;s talk
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
