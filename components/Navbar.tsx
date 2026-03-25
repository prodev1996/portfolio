"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState, MouseEvent } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type NavItem = { label: string; href: string };

const navItems: NavItem[] = [
  { label: "Home", href: "#top" },
  { label: "Experience", href: "#experience" },
  { label: "Who I am", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
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
  const isOnResumePage = pathname === "/resume";

  const sectionIds = useMemo(
    () => navItems.map((i) => getSectionIdFromHref(i.href)),
    [],
  );

  const [activeSection, setActiveSection] = useState<string>("top");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Theme
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [mounted, setMounted] = useState(false);

  const headerRef = useRef<HTMLElement | null>(null);

  // ---------- Theme setup ----------
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

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
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

  // ---------- Lock scroll on mobile menu ----------
  useEffect(() => {
    if (typeof window === "undefined") return;
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  // ---------- Close mobile on route change ----------
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  // ---------- ESC closes ----------
  useEffect(() => {
    if (!isMobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMobileOpen]);

  // ---------- Observe sections on home page ----------
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (pathname !== "/") return;

    const headerHeight = headerRef.current?.getBoundingClientRect().height ?? 80;

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        if (!visible?.target?.id) return;
        setActiveSection(visible.target.id);
      },
      {
        root: null,
        rootMargin: `-${Math.round(headerHeight + 10)}px 0px -60% 0px`,
        threshold: [0.12, 0.2, 0.35, 0.5, 0.7],
      },
    );

    elements.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname, sectionIds]);

  // ---------- Smooth scroll ----------
  const navigateToSection = (sectionId: string) => {
    if (typeof window === "undefined") return;

    setActiveSection(sectionId);

    if (pathname !== "/") {
      router.push(`/#${sectionId}`);
      setIsMobileOpen(false);
      return;
    }

    const target = document.getElementById(sectionId);
    const headerHeight = headerRef.current?.getBoundingClientRect().height ?? 80;

    if (target) {
      const rect = target.getBoundingClientRect();
      const top = window.scrollY + rect.top - headerHeight;
      window.scrollTo({ top, behavior: "smooth" });
      window.history.pushState(null, "", `#${sectionId}`);
    } else if (sectionId === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.pushState(null, "", "#top");
    }

    setIsMobileOpen(false);
  };

  const handleNavClick =
    (href: string) =>
    (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
      event.preventDefault();
      navigateToSection(getSectionIdFromHref(href));
    };

  return (
    <header
      ref={(el) => {
        headerRef.current = el;
      }}
      className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/60 bg-slate-950/70 backdrop-blur-xl"
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        {/* Left: terminal-ish brand */}
        <button
          type="button"
          onClick={() => navigateToSection("top")}
          className="group inline-flex items-center gap-3"
          aria-label="Go to top"
        >
          <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl border border-emerald-400/35 bg-gradient-to-tr from-emerald-500/25 via-emerald-400/15 to-cyan-400/20 shadow-[0_18px_40px_rgba(16,185,129,0.35)]">
            <span className="pointer-events-none absolute inset-px rounded-[18px] bg-slate-950/40 backdrop-blur-[2px]" />
            <span className="relative z-10 text-xs font-semibold tracking-[0.18em] text-emerald-50">
              RB
            </span>
          </div>

          <div className="hidden text-left sm:block">
            <div className="text-xs font-semibold tracking-[0.18em] text-slate-200 group-hover:text-emerald-300">
              ~/dev-rajiv⚡️
            </div>
            <div className="mt-0.5 text-[11px] text-slate-400">
              Switch theme • Resume • Sections
            </div>
          </div>
        </button>

        {/* Desktop */}
        <div className="hidden items-center gap-3 md:flex">
          <div className="relative flex items-center gap-1 rounded-full border border-slate-700/60 bg-slate-900/55 px-2 py-1">
            {navItems.map((item) => {
              const id = getSectionIdFromHref(item.href);
              const isActive = !isOnResumePage && activeSection === id;

              return (
                <button
                  key={item.label}
                  onClick={handleNavClick(item.href)}
                  className={`relative rounded-full px-3 py-2 text-xs font-medium transition-colors ${
                    isActive ? "text-emerald-200" : "text-slate-200 hover:text-emerald-200"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navpill"
                      className="absolute inset-0 rounded-full border border-emerald-400/45 bg-emerald-500/10"
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </div>

          <Link
            href="/resume"
            className={`inline-flex items-center rounded-full border px-4 py-2 text-xs font-semibold transition-colors ${
              isOnResumePage
                ? "border-emerald-400/70 bg-emerald-500 text-slate-950"
                : "border-slate-700/70 bg-slate-900/55 text-slate-100 hover:border-emerald-400/70 hover:text-emerald-200"
            }`}
          >
            Resume
          </Link>

          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700/70 bg-slate-900/55 text-slate-200 transition-colors hover:border-emerald-400/70 hover:text-emerald-200"
            aria-label="Toggle theme"
          >
            {!mounted ? null : theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700/70 bg-slate-900/55 text-slate-200"
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
            onClick={() => setIsMobileOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700/70 bg-slate-900/55 text-slate-100"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile panel */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="border-t border-slate-800/70 bg-slate-950/95 backdrop-blur-xl md:hidden"
          >
            <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
              <div className="space-y-2">
                {navItems.map((item) => {
                  const id = getSectionIdFromHref(item.href);
                  const isActive = !isOnResumePage && activeSection === id;

                  return (
                    <button
                      key={item.label}
                      onClick={handleNavClick(item.href)}
                      className={`flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-sm font-medium transition-colors ${
                        isActive
                          ? "border-emerald-400/70 bg-emerald-500/10 text-emerald-100"
                          : "border-slate-800/70 bg-slate-900/40 text-slate-100 hover:border-slate-700 hover:bg-slate-900/60"
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && <span className="h-2 w-2 rounded-full bg-emerald-400" />}
                    </button>
                  );
                })}
              </div>

              <div className="mt-3 grid grid-cols-2 gap-2">
                <Link
                  href="/resume"
                  className={`inline-flex items-center justify-center rounded-2xl border px-4 py-3 text-sm font-semibold transition-colors ${
                    isOnResumePage
                      ? "border-emerald-400/70 bg-emerald-500 text-slate-950"
                      : "border-slate-800/70 bg-slate-900/40 text-slate-100 hover:border-emerald-400/70 hover:text-emerald-200"
                  }`}
                  onClick={() => setIsMobileOpen(false)}
                >
                  Resume
                </Link>

                <button
                  type="button"
                  onClick={() => navigateToSection("contact")}
                  className="inline-flex items-center justify-center rounded-2xl bg-emerald-500 px-4 py-3 text-sm font-semibold text-slate-950"
                >
                  Let’s talk
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
