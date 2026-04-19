import { FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-white/10 bg-[#05070d] py-10 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 text-sm text-[#bdb5cc] sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="max-w-xl">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/12 bg-[linear-gradient(135deg,_rgba(124,108,242,0.2),_rgba(217,70,143,0.13))] text-xs font-black tracking-[0.18em] text-white shadow-[0_10px_24px_rgba(0,0,0,0.28)]">
              RB
            </span>
            <div>
              <p className="font-semibold uppercase tracking-[0.22em] text-white">
                Rajiv Bhandari
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#8f87a0]">
                Application Support • Microsoft 365 • Reporting
              </p>
            </div>
          </div>
          <p className="mt-3 leading-7">
            Built to share my support experience, reporting focus, and live
            client project work in one place.
          </p>
          <p className="mt-1 text-xs text-[#777184]">
            © 2026 Rajiv Bhandari. Built with Next.js and Tailwind CSS.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href="mailto:bhandarirajiv25@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-[#d8d1e6] transition hover:border-[#7c6cf2]/42 hover:text-white"
          >
            <FaEnvelope /> Email
          </a>
          <a
            href="https://www.linkedin.com/in/rajiv-bhandari25/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-[#d8d1e6] transition hover:border-[#7c6cf2]/42 hover:text-white"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href="#home"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-[#d8d1e6] transition hover:border-[#7c6cf2]/42 hover:text-white"
          >
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
