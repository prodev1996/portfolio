"use client";

import Link from "next/link";
import {
  FaEnvelope,
  FaLinkedin,
  FaMapMarkerAlt,
  FaGlobe,
} from "react-icons/fa";
import { Download, ArrowLeft, Sparkles } from "lucide-react";
import { useMagnetic } from "@/components/useMagnetic";

export default function ResumeHeader() {
  const backRef = useMagnetic<HTMLAnchorElement>(0.3);
  const downloadRef = useMagnetic<HTMLAnchorElement>(0.3);

  return (
    <section className="relative border-b border-border pb-10">
      <span
        aria-hidden="true"
        className="font-heading pointer-events-none absolute -top-8 right-0 text-7xl font-bold text-accent/[0.14] sm:-top-10 sm:text-8xl"
      >
        CV
      </span>
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex-1">
          <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-border px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.25em] text-text-muted">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Professional Resume
          </div>

          <h1 className="font-heading text-5xl font-bold tracking-[-0.02em] text-text sm:text-6xl md:text-7xl">
            Rajiv <span className="text-accent">Bhandari</span>
          </h1>

          <p className="mt-4 text-xl font-medium tracking-tight text-text-muted sm:text-2xl">
            IT Application Support · Data Analysis · Software Development
          </p>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg">
            IT professional with a Master of Information Technology, based in Adelaide. My background spans application support, SQL-based data analysis, and software development, troubleshooting systems and delivering practical solutions across enterprise and client environments. SQL and data-quality work is where I keep gravitating, which is why data engineering is my longer-term goal.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {["Application Support", "Support & Troubleshooting", "Data Analysis", "SQL/MySQL", "Software Development", "Requirements Gathering", "Documentation"].map((item) => (
              <span key={item} className="cosmic-chip">
                {item}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link ref={backRef} href="/" className="btn-outline flex items-center gap-2 group">
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>

            <a
              ref={downloadRef}
              href="/Rajiv_Bhandari_Database_Resume_.pdf"
              className="btn-primary flex items-center gap-2 group"
            >
              <Download className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
              Download Resume (PDF)
            </a>
          </div>
        </div>

        <div className="w-full max-w-sm border-t border-border pt-6 lg:w-80 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 shrink-0">
          <div className="flex flex-col gap-5 text-sm font-medium text-text-muted">
            <a href="mailto:bhandarirajiv25@gmail.com" className="group flex items-center gap-3 transition hover:text-text">
              <FaEnvelope className="h-4 w-4 shrink-0 text-accent transition-transform group-hover:scale-110" />
              <span className="truncate">bhandarirajiv25@gmail.com</span>
            </a>

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="h-4 w-4 shrink-0 text-accent" />
              <span>Adelaide, SA</span>
            </div>

            <a href="https://www.linkedin.com/in/rajiv-bhandari25/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 transition hover:text-text">
              <FaLinkedin className="h-4 w-4 shrink-0 text-accent transition-transform group-hover:scale-110" />
              <span className="truncate">linkedin.com/in/rajiv-bhandari25</span>
            </a>

            <a href="https://www.rajivbhandari.com" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 transition hover:text-text">
              <FaGlobe className="h-4 w-4 shrink-0 text-accent transition-transform group-hover:scale-110" />
              <span className="truncate">rajivbhandari.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
