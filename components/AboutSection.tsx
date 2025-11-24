// components/AboutSection.tsx
"use client";

import { motion } from "framer-motion";
import Section from "./Section";

export default function AboutSection() {
  return (
    <Section id="about" eyebrow="About" title="A bit about me">
      <div className="space-y-10">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="space-y-4 text-sm leading-relaxed text-slate-200 max-w-3xl"
        >
          <p className="text-emerald-300 text-xs font-semibold tracking-[0.25em] uppercase">
            Tech-driven. Curious. Always improving.
          </p>

          <p>
            I work across both ICT operations and modern web development, combining
            hands-on technical support experience with practical full-stack development
            skills. My background includes Windows systems, Microsoft 365, Active
            Directory, Azure services, networking fundamentals, and development using
            <span className="font-semibold"> React, Next.js, Node.js, MongoDB, and MySQL</span>.
          </p>

          <p>
            I have contributed to real-world projects such as{" "}
            <span className="text-emerald-400 font-semibold">
              Glide Education & Visa Services
            </span>{" "}
            and{" "}
            <span className="text-emerald-400 font-semibold">Prime Roof Care</span>. My work has
            included user interface development, backend integrations, DNS and hosting
            configuration, performance optimisation, deployment, and ongoing support.
          </p>

          <p>
            I enjoy solving problems across a wide range of technical areas, whether
            they involve end-user support, system administration, automation,
            troubleshooting, or building clean and user-focused web interfaces. I work 
            calmly in busy environments, communicate clearly, and take ownership of 
            delivering consistent and reliable results.
          </p>

          <p>
            I am currently open to opportunities in{" "}
            <span className="font-semibold">
              ICT support, full-stack development, frontend engineering, cloud and Microsoft
              365 environments, and hybrid technical roles
            </span>{" "}
            where I can contribute meaningfully while continuing to learn and grow.
          </p>
        </motion.div>

        {/* Two value cards */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.05 }}
          className="grid gap-6 md:grid-cols-2"
        >
          {/* Strengths */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 text-xs text-slate-200 shadow-[0_18px_60px_rgba(0,0,0,0.5)]">
            <h3 className="mb-3 text-[0.7rem] font-semibold tracking-[0.22em] text-slate-400 uppercase">
              Strengths I bring
            </h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>Strong analytical and troubleshooting abilities across systems, applications, and networks.</li>
              <li>Experience building clean, modern web applications using React and Next.js.</li>
              <li>Clear and patient communication with both technical and non-technical users.</li>
              <li>Consistent focus on documentation, process improvement, and reliability.</li>
              <li>Ability to work comfortably across support, development, and cloud environments.</li>
            </ul>
          </div>

          {/* Growth areas */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 text-xs text-slate-200 shadow-[0_18px_60px_rgba(0,0,0,0.5)]">
            <h3 className="mb-3 text-[0.7rem] font-semibold tracking-[0.22em] text-slate-400 uppercase">
              What I am currently developing
            </h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>Modern workplace technologies such as Intune and Azure Active Directory.</li>
              <li>Advanced UI and performance optimisation in React and Next.js.</li>
              <li>Automation and scripting with PowerShell, Node.js, and APIs.</li>
              <li>Improved deployment, CI/CD, and production monitoring practices.</li>
              <li>Becoming a well-rounded contributor within dynamic technical teams.</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
