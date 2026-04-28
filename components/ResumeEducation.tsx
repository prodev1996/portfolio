"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, FileCheck } from "lucide-react";

const education = [
  {
    qualification: "Professional Year Program (IT)",
    institution: "Performance Education, Australia",
    period: "Ongoing",
  },
  {
    qualification: "Master of Information Technology",
    institution: "Torrens University Australia",
    period: "Graduated: 2024",
  },
  {
    qualification: "Bachelor of Computer Science (IT)",
    institution: "Tribhuvan University, Nepal",
    period: "Graduated: 2019",
  },
];

const foundations = [
  "SQL and relational database foundations built through development work, MySQL exposure, and IT study.",
  "Strong data quality habits developed through high-volume validation, records accuracy, and anomaly checking work.",
  "Practical Git and GitHub experience for version control, structured workflows, and technical change tracking.",
  "Ready to contribute to data migration, ETL support, validation tasks, and guided project delivery environments.",
];

const attributes = [
  "Clear communication and dependable stakeholder support",
  "Attention to detail with structured troubleshooting habits",
  "Curious learner who adapts quickly to technical standards",
  "Ready to support guided trials, validation work, and go-live preparation",
];

export default function ResumeEducation() {
  return (
    <section className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[#120f1d]/82 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.3)] backdrop-blur-3xl sm:p-8">
      <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-[#35aeca]/8 blur-[100px] pointer-events-none" />

      <div className="flex items-center gap-4 mb-8">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-[#35aeca]">
          <GraduationCap size={22} />
        </div>
        <h2 className="text-lg font-black tracking-[-0.04em] text-white">
          Education & Credentials
        </h2>
      </div>

      <div className="space-y-4">
        {education.map((item, index) => (
          <motion.div
            key={item.qualification}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative flex flex-col justify-between gap-2 rounded-2xl border border-white/5 bg-white/[0.02] p-4 transition hover:border-white/10 hover:bg-white/[0.04] sm:flex-row sm:items-center"
          >
            <div>
              <h3 className="text-base font-bold text-white transition group-hover:text-[#35aeca]">
                {item.qualification}
              </h3>
              <p className="mt-1 text-sm font-medium text-[#bdb5cc]">{item.institution}</p>
            </div>
            <span className="shrink-0 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs font-semibold text-[#8f87a0] backdrop-blur-md">
              {item.period}
            </span>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 pt-8 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-[80%] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="flex items-center gap-3 mb-6">
          <Award className="h-5 w-5 text-[#e49a2f]" />
          <h3 className="text-sm font-bold text-white">Relevant Foundations</h3>
        </div>
        <div className="grid gap-3">
          {foundations.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-3 text-sm font-medium leading-relaxed text-[#d8d1e6] transition hover:bg-white/[0.08] hover:text-white"
            >
              <span className="mt-1 flex h-1.5 w-1.5 shrink-0 rounded-full bg-[#f0abfc] shadow-[0_0_8px_rgba(240,171,252,0.55)]" />
              {item}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-8 pt-8 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-[80%] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="flex items-center gap-3 mb-6">
          <FileCheck className="h-5 w-5 text-[#20a779]" />
          <h3 className="text-sm font-bold text-white">Professional Attributes</h3>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {attributes.map((item, index) => (
            <motion.li 
              key={item}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-3 rounded-2xl border border-white/5 bg-white/[0.02] p-3 text-sm font-medium leading-relaxed text-[#c9c1d8] transition hover:border-white/10 hover:text-white"
            >
              <span className="mt-1 flex h-1.5 w-1.5 shrink-0 rounded-full bg-[#20a779] shadow-[0_0_8px_rgba(32,167,121,0.55)]" />
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
