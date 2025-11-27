// components/Footer.tsx
"use client";

import { ArrowUp, ArrowUpRight, Linkedin } from "lucide-react";

export default function Footer() {
  const handleBackToTop = () => {
    if (typeof window === "undefined") return;
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.pushState(null, "", "#top");
  };

  return (
    <footer className="border-t border-slate-800/70 bg-slate-950/95">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        {/* Left: identity */}
        <div className="space-y-1">
          <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
            RAJIV BHANDARI • ICT Support & Full Stack Dev
          </p>
          <p className="text-[11px]">
            © {new Date().getFullYear()} Rajiv Bhandari. Built with Next.js &amp; Tailwind CSS.
          </p>
        </div>

        {/* Right: contact & navigation */}
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="mailto:bhandarirajiv25@gmail.com"
            className="inline-flex items-center gap-1 rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1.5 text-[11px] font-medium text-slate-100 transition-colors hover:border-emerald-400/70 hover:text-emerald-100"
          >
            <ArrowUpRight className="h-3 w-3" />
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/rajiv-bhandari25/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1.5 text-[11px] font-medium text-slate-100 transition-colors hover:border-emerald-400/70 hover:text-emerald-100"
          >
            <Linkedin className="h-3 w-3" />
            LinkedIn
          </a>
          <button
            type="button"
            onClick={handleBackToTop}
            className="inline-flex items-center gap-1 rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1.5 text-[11px] font-medium text-slate-200 transition-colors hover:border-emerald-400/70 hover:text-emerald-100"
          >
            <ArrowUp className="h-3 w-3" />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
