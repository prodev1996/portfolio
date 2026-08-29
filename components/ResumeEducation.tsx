"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, FileCheck } from "lucide-react";

const education = [
  {
    qualification: "Master of Information Technology (Advanced), Information Technology",
    institution: "Torrens University Australia",
    period: "2022 - 2024",
  },
  {
    qualification: "Professional Year, Information Technology",
    institution: "Performance Education",
    period: "Aug 2025 - 2026",
  },
  {
    qualification: "Bachelor's degree, Computer Science and Information Technology",
    institution: "Tribhuvan University",
    period: "2015 - 2019",
  },
];

const foundations = [
  "Zendesk Customer Service Professional Certificate, LinkedIn, issued Sep 2024.",
  "Google IT Support Specialization, Coursera, issued Nov 2020.",
  "Crash Course on Python, Coursera, issued Sep 2020.",
  "Cyber Security Foundation, Certiprof, issued Dec 2020.",
];

const attributes = [
  "Clear communication with both technical and non-technical stakeholders",
  "Strong attention to detail and structured troubleshooting habits built across multiple roles",
  "Analytical mindset, comfortable using SQL to turn raw data into clear, validated answers",
  "Proven ability to manage support tickets, documentation, and system changes end-to-end",
  "Growing technical depth toward data engineering, building on a support and software foundation",
  "Currently enrolled in a Professional Year Program for structured Australian workplace readiness",
];

export default function ResumeEducation() {
  return (
    <section>
      <div className="flex items-center gap-3 mb-8">
        <GraduationCap className="h-5 w-5 text-accent" />
        <h2 className="text-lg font-black tracking-[-0.03em] text-text">
          Education & Credentials
        </h2>
      </div>

      <div className="space-y-4 divide-y divide-border">
        {education.map((item, index) => (
          <motion.div
            key={item.qualification}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col justify-between gap-2 pt-4 first:pt-0 sm:flex-row sm:items-center"
          >
            <div>
              <h3 className="text-base font-bold text-text">
                {item.qualification}
              </h3>
              <p className="mt-1 text-sm font-medium text-text-muted">{item.institution}</p>
            </div>
            <span className="shrink-0 text-xs font-semibold text-text-faint">
              {item.period}
            </span>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 border-t border-border pt-8">
        <div className="flex items-center gap-3 mb-6">
          <Award className="h-5 w-5 text-accent" />
          <h3 className="text-sm font-bold text-text">Relevant Foundations</h3>
        </div>
        <div className="grid gap-3">
          {foundations.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex items-start gap-3 text-sm font-medium leading-relaxed text-text-muted"
            >
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {item}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-8 border-t border-border pt-8">
        <div className="flex items-center gap-3 mb-6">
          <FileCheck className="h-5 w-5 text-accent" />
          <h3 className="text-sm font-bold text-text">Professional Attributes</h3>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {attributes.map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-3 text-sm font-medium leading-relaxed text-text-muted"
            >
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
