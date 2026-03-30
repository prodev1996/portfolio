import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-[#e3e7df] bg-white/55 py-10 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 text-sm text-[#5e6f65] sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="font-semibold uppercase tracking-[0.22em] text-[#33463b]">
            Rajiv Bhandari
          </p>
          <p className="mt-2">
            Application Support • Full Stack Development • Data Analyst Transition
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
            href="https://github.com/prodev1996"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#dde5dd] bg-white px-4 py-2 text-sm text-[#294236] transition hover:border-[#1d2d25] hover:text-[#1d2d25]"
          >
            <FaGithub /> GitHub
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
