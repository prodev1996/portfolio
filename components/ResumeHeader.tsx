"use client";

import Link from "next/link";
import {
  FaEnvelope,
  FaLinkedin,
  FaMapMarkerAlt,
  FaGithub,
} from "react-icons/fa";
import { Download, ArrowLeft, Printer } from "lucide-react";
import { useMagnetic } from "@/components/useMagnetic";

export default function ResumeHeader() {
  const downloadRef = useMagnetic<HTMLAnchorElement>(0.3);

  return (
    <section className="relative border-b border-border pb-10 print:border-none print:pb-4">
      <span
        aria-hidden="true"
        className="font-heading pointer-events-none absolute -top-10 right-0 hidden text-6xl font-bold text-accent/[0.14] sm:block sm:text-7xl print:hidden"
      >
        CV
      </span>

      <Link
        href="/"
        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-text-faint transition hover:text-accent print:hidden"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Back to Home
      </Link>

      <h1 className="mt-6 font-heading text-5xl font-bold tracking-[-0.02em] text-text sm:text-6xl md:text-7xl">
        Rajiv <span className="text-accent">Bhandari</span>
      </h1>

      <p className="mt-3 text-xl font-bold tracking-tight text-text sm:text-2xl">
        Application Support Specialist &amp; Data Analyst
      </p>

      <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-semibold text-text-muted">
        <span className="inline-flex items-center gap-2">
          <FaMapMarkerAlt className="h-3.5 w-3.5 text-accent" />
          Adelaide, SA
        </span>
        <span className="text-border-strong">|</span>
        <a
          href="mailto:bhandarirajiv25@gmail.com"
          className="inline-flex items-center gap-2 transition hover:text-accent"
        >
          <FaEnvelope className="h-3.5 w-3.5 text-accent" />
          bhandarirajiv25@gmail.com
        </a>
        <span className="text-border-strong">|</span>
        <a
          href="https://www.linkedin.com/in/rajiv-bhandari25/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 transition hover:text-accent"
        >
          <FaLinkedin className="h-3.5 w-3.5 text-accent" />
          linkedin.com/in/rajiv-bhandari25
        </a>
        <span className="text-border-strong">|</span>
        <a
          href="https://github.com/prodev1996"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 transition hover:text-accent"
        >
          <FaGithub className="h-3.5 w-3.5 text-accent" />
          github.com/prodev1996
        </a>
      </div>

      <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg">
        Master of IT graduate based in Adelaide with hands-on experience
        across business application support, SQL data validation, and
        software delivery. Skilled in troubleshooting system issues,
        configuring user access, validating complex SQL datasets, and
        bridging technical communication between users and developers.
        Actively seeking IT support, data analyst, or junior developer roles
        across Australia.
      </p>

      <div className="mt-8 flex flex-wrap gap-2 print:hidden">
        {["Application Support", "Support & Troubleshooting", "Data Analysis", "SQL/MySQL", "Software Development", "Requirements Gathering", "Documentation"].map((item) => (
          <span key={item} className="cosmic-chip">
            {item}
          </span>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-4 print:hidden">
        <a
          ref={downloadRef}
          href="/Rajiv_Bhandari_Database_Resume_.pdf"
          download="Rajiv_Bhandari_Resume.pdf"
          className="btn-primary flex items-center gap-2 group"
        >
          <Download className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
          Download PDF Resume
        </a>

        <button
          type="button"
          onClick={() => window.print()}
          className="btn-outline flex items-center gap-2 group"
        >
          <Printer className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
          Print / Save
        </button>
      </div>
    </section>
  );
}
