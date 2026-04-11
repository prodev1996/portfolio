import { FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-[#e3e7df] bg-[linear-gradient(180deg,_rgba(255,255,255,0.35),_rgba(255,250,242,0.78))] py-10 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 text-sm text-[#5e6f65] sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="max-w-xl">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/80 bg-[linear-gradient(135deg,_rgba(31,157,114,0.14),_rgba(255,255,255,0.94))] text-xs font-semibold tracking-[0.18em] text-[#1d2f26] shadow-[0_10px_24px_rgba(118,103,79,0.08)]">
              RB
            </span>
            <div>
              <p className="font-semibold uppercase tracking-[0.22em] text-[#33463b]">
                Rajiv Bhandari
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#7a897f]">
                Application Support • Microsoft 365 • Reporting
              </p>
            </div>
          </div>
          <p className="mt-3 leading-7">
            Built to share my support experience, reporting focus, and live
            client project work in one place.
          </p>
          <p className="mt-1 text-xs text-[#819086]">
            © 2026 Rajiv Bhandari. Built with Next.js and Tailwind CSS.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href="mailto:bhandarirajiv25@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-[#dde5dd] bg-white px-4 py-2 text-sm text-[#294236] transition hover:border-[#1f9d72] hover:text-[#1f9d72]"
          >
            <FaEnvelope /> Email
          </a>
          <a
            href="https://www.linkedin.com/in/rajiv-bhandari25/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#dde5dd] bg-white px-4 py-2 text-sm text-[#294236] transition hover:border-[#1f9d72] hover:text-[#1f9d72]"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href="#home"
            className="inline-flex items-center gap-2 rounded-full border border-[#dde5dd] bg-white px-4 py-2 text-sm text-[#294236] transition hover:border-[#1f9d72] hover:text-[#1f9d72]"
          >
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
