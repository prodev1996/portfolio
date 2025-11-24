"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/#top" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches
    ) {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    } else {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  function toggleTheme() {
    if (theme === "dark") {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    } else {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }

  function isResumePage() {
    return pathname === "/resume";
  }

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-800/60 bg-slate-950/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/#top" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-xs font-semibold text-slate-950">
            RB
          </div>
          <div className="hidden text-left text-xs sm:block">
            <div className="font-semibold text-slate-100">Rajiv Bhandari</div>
            <div className="text-[11px] text-slate-400">
              ICT Support &amp; Developer
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 text-xs sm:flex sm:text-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-slate-300 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}

          {/* Resume pill */}
          <Link
            href="/resume"
            className={`rounded-full px-4 py-1.5 text-xs font-medium transition ${
              isResumePage()
                ? "bg-emerald-500 text-slate-950"
                : "border border-slate-700 bg-slate-900/60 text-slate-100 hover:border-emerald-500/70 hover:text-emerald-300"
            }`}
          >
            Resume
          </Link>

          {/* Theme toggle */}
          {isMounted && (
            <button
              type="button"
              onClick={toggleTheme}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-slate-200 transition hover:border-emerald-500/70 hover:text-emerald-300"
            >
              {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
            </button>
          )}
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-2 sm:hidden">
          {isMounted && (
            <button
              type="button"
              onClick={toggleTheme}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-slate-200 transition hover:border-emerald-500/70 hover:text-emerald-300"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          )}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-slate-200"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-slate-800 bg-slate-950/95 backdrop-blur-xl sm:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-2 py-1.5 text-slate-300 hover:bg-slate-900 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/resume"
              onClick={() => setMobileOpen(false)}
              className={`mt-1 rounded-full px-3 py-1.5 text-sm font-medium ${
                isResumePage()
                  ? "bg-emerald-500 text-slate-950"
                  : "border border-slate-700 bg-slate-900/80 text-slate-100 hover:border-emerald-500/70 hover:text-emerald-300"
              }`}
            >
              Resume
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
