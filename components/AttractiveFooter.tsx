import Link from "next/link";
import { FaArrowUp, FaEnvelope, FaLinkedin } from "react-icons/fa";

const footerLinks = [
  { label: "Overview", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function AttractiveFooter() {
  return (
    <footer className="relative mt-8 overflow-hidden border-t border-white/10 bg-[#05070d]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(139,92,246,0.20),transparent_30%),radial-gradient(circle_at_88%_20%,rgba(236,72,153,0.14),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.035),transparent_42%)]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[82%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#8b5cf6]/70 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 py-10 text-[#bdb5cc] sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="rounded-[28px] border border-white/10 bg-white/[0.035] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-6">
            <div className="flex items-start gap-4">
              <span className="relative inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-[linear-gradient(135deg,_rgba(139,92,246,0.42),_rgba(236,72,153,0.22))] text-sm font-black tracking-[0.18em] text-white shadow-[0_18px_36px_rgba(139,92,246,0.20)]">
                <span className="absolute inset-0 rounded-2xl bg-white/[0.05]" />
                <span className="relative">RB</span>
              </span>

              <div>
                <p className="text-sm font-black uppercase tracking-[0.28em] text-white">
                  Rajiv Bhandari
                </p>
                <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#9d94b3]">
                  Application Support | Microsoft 365 | Reporting
                </p>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#d8d1e6]">
                  Built to connect support experience, reporting focus, and live
                  client delivery into one clear career story.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#8f87a0]">
                Explore
              </p>
              <nav className="mt-3 flex flex-wrap gap-2">
                {footerLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs font-semibold text-[#d8d1e6] transition hover:border-[#8b5cf6]/50 hover:bg-[#8b5cf6]/10 hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#8f87a0]">
                Connect
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <a
                  href="mailto:bhandarirajiv25@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-[#d8d1e6] transition hover:border-[#ec4899]/50 hover:bg-[#ec4899]/10 hover:text-white"
                >
                  <FaEnvelope /> Email
                </a>
                <a
                  href="https://www.linkedin.com/in/rajiv-bhandari25/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-[#d8d1e6] transition hover:border-[#8b5cf6]/50 hover:bg-[#8b5cf6]/10 hover:text-white"
                >
                  <FaLinkedin /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-5 text-xs text-[#777184] sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright 2026 Rajiv Bhandari. Built with Next.js and Tailwind CSS.</p>
          <Link
            href="#home"
            className="inline-flex w-fit items-center gap-2 rounded-full text-[#a99fbc] transition hover:text-white"
          >
            Back to top
            <FaArrowUp className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
