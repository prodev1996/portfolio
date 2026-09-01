"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, FileCheck } from "lucide-react";

const education = [
  {
    qualification: "Master of Information Technology (Advanced)",
    institution: "Torrens University Australia",
    period: "2022 – 2024",
    current: false,
  },
  {
    qualification: "Professional Year Program, Information Technology",
    institution: "Performance Education",
    period: "2025 – 2026",
    current: true,
  },
  {
    qualification: "Bachelor of Computer Science and Information Technology",
    institution: "Tribhuvan University",
    period: "2015 – 2019",
    current: false,
  },
];

const certifications = [
  {
    name: "Google IT Support Specialization",
    issuer: "Coursera",
  },
  {
    name: "Zendesk Customer Service Professional Certificate",
    issuer: "LinkedIn Learning",
  },
  {
    name: "Crash Course on Python",
    issuer: "Coursera",
  },
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

      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.12em] text-text-faint">
            Education
          </h3>
          <div className="space-y-4">
            {education.map((item, index) => (
              <motion.div
                key={item.qualification}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border-b border-border pb-4 last:border-none last:pb-0"
              >
                <div className="flex items-start justify-between gap-2">
                  <h4 className="text-sm font-bold leading-tight text-text">
                    {item.qualification}
                  </h4>
                  {item.current && (
                    <span className="shrink-0 text-[10px] font-black uppercase tracking-[0.14em] text-accent">
                      Current
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm font-medium text-text-muted">{item.institution}</p>
                <p className="mt-1 text-xs font-semibold text-text-faint">{item.period}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="sm:border-l sm:border-border sm:pl-8">
          <div className="mb-4 flex items-center gap-2">
            <Award className="h-4 w-4 text-accent" />
            <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-text-faint">
              Certifications
            </h3>
          </div>
          <div className="space-y-4">
            {certifications.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border-b border-border pb-4 last:border-none last:pb-0"
              >
                <h4 className="text-sm font-bold leading-tight text-text">{item.name}</h4>
                <p className="mt-1 text-sm font-medium text-text-muted">{item.issuer}</p>
              </motion.div>
            ))}
          </div>
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
