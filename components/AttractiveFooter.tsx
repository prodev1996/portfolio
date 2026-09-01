"use client";

import { useState } from "react";
import Link from "next/link";
import { FaArrowUp, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { Check, Copy, Headset } from "lucide-react";
import { OPEN_SUPPORT_DESK_GAME_EVENT } from "@/components/GameTrigger";

const footerLinks = [
  { label: "Snapshot", href: "#about" },
  { label: "Capabilities", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const EMAIL = "bhandarirajiv25@gmail.com";

export default function AttractiveFooter() {
  const [copied, setCopied] = useState(false);

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable; the mailto link still works.
    }
  }

  return (
    <footer className="relative mt-8 border-t border-border bg-bg-sunken">
      <div className="relative mx-auto max-w-7xl px-4 py-12 text-text-muted sm:px-6 lg:px-8">
        <div className="grid gap-10 border-b border-border pb-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="flex items-start gap-4">
            <span className="relative inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-border text-sm font-black tracking-[0.18em] text-text">
              RB
            </span>

            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-text">
                Rajiv Bhandari
              </p>
              <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.22em] text-text-faint">
                Application Support | Data | Software
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-text-muted">
                Master of IT graduate with hands-on experience across
                application support, SQL-based data analysis, and software
                development. Currently completing a Professional Year
                Program and open to IT support, data analyst, and junior
                developer roles across Australia.
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.28em] text-text-faint">
                Explore
              </p>
              <nav className="mt-3 flex flex-wrap gap-2">
                {footerLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-md border border-border px-3 py-1.5 text-xs font-semibold text-text-muted transition hover:border-accent-border hover:text-accent"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.28em] text-text-faint">
                Connect
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-semibold text-text-muted transition hover:border-accent-border hover:text-accent"
                >
                  <FaEnvelope /> Email
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-semibold text-text-muted transition hover:border-accent-border hover:text-accent"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-accent" /> Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" /> Copy Email
                    </>
                  )}
                </button>
                <a
                  href="https://www.linkedin.com/in/rajiv-bhandari25/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-semibold text-text-muted transition hover:border-accent-border hover:text-accent"
                >
                  <FaLinkedin /> LinkedIn
                </a>
                <a
                  href="https://github.com/prodev1996"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-semibold text-text-muted transition hover:border-accent-border hover:text-accent"
                >
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-6 text-xs text-text-faint">References available upon request.</p>

        <div className="mt-3 flex flex-col gap-3 text-xs text-text-faint sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2">
            Copyright 2026 Rajiv Bhandari. Designed and built with Next.js and Tailwind CSS.
            <button
              type="button"
              onClick={() =>
                window.dispatchEvent(new Event(OPEN_SUPPORT_DESK_GAME_EVENT))
              }
              aria-label="A little something extra"
              title="A little something extra, click me"
              className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-border text-text-faint transition hover:scale-110 hover:border-accent-border hover:text-accent"
            >
              <Headset className="h-3.5 w-3.5" />
            </button>
          </p>
          <Link
            href="#home"
            className="inline-flex w-fit items-center gap-2 rounded-full text-text-faint transition hover:text-text"
          >
            Back to top
            <FaArrowUp className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
