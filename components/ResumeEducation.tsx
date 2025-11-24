"use client";

import { motion } from "framer-motion";

export default function ResumeEducation() {
  return (
    <motion.section
      aria-labelledby="education-heading"
      className="mt-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
    >
      <h2
        id="education-heading"
        className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400"
      >
        Education & Certifications
      </h2>

      <div className="space-y-4 text-xs text-slate-300">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
          <p className="text-sm font-semibold text-slate-100">
            Master of Information Technology (Advanced)
          </p>
          <p className="text-xs text-slate-400">
            Torrens University Australia • 2022 – 2024
          </p>
          <ul className="mt-2 space-y-1">
            <li>Focus on networking, cloud computing, and software development.</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
          <p className="text-sm font-semibold text-slate-100">
            Bachelor of Science in Computer Science & Information Technology
          </p>
          <p className="text-xs text-slate-400">
            Tribhuvan University, Nepal
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
          <p className="text-sm font-semibold text-slate-100">
            Certifications
          </p>
          <ul className="mt-2 space-y-1">
            <li>Google IT Support Professional Certificate</li>
            <li>Zendesk Customer Service fundamentals</li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
}
