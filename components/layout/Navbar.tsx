"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (pathname !== "/") return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: "-15% 0px -60% 0px" },
    );
    for (const id of ["home", "projects", "about", "contact"]) {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    }
    return () => observer.disconnect();
  }, [pathname]);
  useEffect(() => {
    if (!open) return;
    function escape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    }
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, [open]);
  return (
    <header className="site-header">
      <div className="nav-inner">
        <Link
          href="/#home"
          className="brand"
          aria-label="Rajiv Bhandari home"
          onClick={() => setOpen(false)}
        >
          <span className="brand-monogram">
            rb<span>.</span>
          </span>
          <span className="brand-fullname">Rajiv Bhandari</span>
        </Link>
        <button
          ref={toggle}
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="main-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
        <nav
          id="main-navigation"
          aria-label="Main navigation"
          className={open ? "navigation is-open" : "navigation"}
        >
          {[
            { label: "Work", id: "projects" },
            { label: "About", id: "about" },
            { label: "Contact", id: "contact" },
          ].map((item) => (
            <Link
              href={"/#" + item.id}
              key={item.id}
              aria-current={
                pathname === "/" && active === item.id ? "location" : undefined
              }
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/writing"
            aria-current={pathname.startsWith("/writing") ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            Writing
          </Link>
          <Link
            href="/resume"
            aria-current={pathname === "/resume" ? "page" : undefined}
            className="nav-resume"
            onClick={() => setOpen(false)}
          >
            Résumé <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
