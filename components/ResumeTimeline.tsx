"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experience = [
  {
    company: "SpaceTel IT",
    role: "Software Developer Intern",
    location: "Adelaide, SA",
    period: "May 2026 – Present",
    bullets: [
      "Support the administration and testing of a multi-role enterprise compliance platform, translating business requirements into system configurations.",
      "Configure workflows, system access roles, and permission hierarchies across end-user categories.",
      "Manage full defect lifecycles and coordinate pre-release UAT regression testing prior to production deployment.",
    ],
  },
  {
    company: "Adorable Home Care & Northern Disability",
    role: "Disability Support Worker (Part-time)",
    location: "Adelaide, SA",
    period: "2024 – Present",
    bullets: [
      "Work within regulated care environments across two providers, maintaining accurate digital case notes, incident records and shift handovers in line with privacy legislation, organisational policy and care quality requirements.",
      "Developed first-hand understanding of the systems, compliance documentation and quality standards that underpin safe care delivery.",
    ],
  },
  {
    company: "Sole Trader / Contract",
    role: "Application Support & IT Support Consultant",
    location: "Remote / Australia",
    period: "2022 – Present",
    bullets: [
      "Administer business applications across Microsoft 365, SharePoint, Teams, and custom web platforms.",
      "Write procedural user guides, release documentation, and change notes for non-technical stakeholders.",
      "Execute T-SQL and MySQL queries for data retrieval, validation, and reporting accuracy checks.",
    ],
  },
  {
    company: "Eydean Inc",
    role: "Application Support Developer",
    location: "Kathmandu, Nepal",
    period: "Dec 2020 – Mar 2022",
    bullets: [
      "Supported production React/Node web applications, managing defect resolution, API integration testing, and query optimization.",
    ],
  },
  {
    company: "CloudFactory",
    role: "Data Specialist",
    location: "Kathmandu, Nepal",
    period: "Nov 2017 – Nov 2020",
    bullets: [
      "Performed data validation, data review, quality assurance and accuracy checks across large volumes of structured digital data.",
      "Identified data errors, corrected inconsistencies and ensured outputs met required quality standards and project guidelines.",
      "Worked with web-based platforms and internal tools to process, verify and maintain accurate information.",
      "Collaborated with team members and supervisors to meet deadlines, improve data quality and support project delivery.",
      "Developed strong attention to detail, analytical thinking, problem-solving and documentation skills.",
    ],
  },
];

export default function ResumeTimeline() {
  return (
    <section aria-labelledby="experience-heading">
      <div className="mb-8 flex items-center gap-3">
        <Briefcase className="h-5 w-5 text-accent" />
        <h2
          id="experience-heading"
          className="text-lg font-black tracking-[-0.03em] text-text"
        >
          Work Experience
        </h2>
      </div>

      <div className="relative ml-2 border-l border-border pl-6 sm:pl-8">
        {experience.map((job, index) => (
          <motion.article
            key={job.company + job.role}
            className="relative mb-10 last:mb-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-xl font-bold tracking-tight text-text">
                {job.role}
              </h3>
              <span className="text-xs font-semibold text-text-faint">
                {job.period}
              </span>
            </div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.1em] text-accent">
              {job.company} <span className="mx-2 text-border-strong">|</span>{" "}
              <span className="text-text-faint">{job.location}</span>
            </p>
            <ul className="space-y-3 text-sm leading-relaxed text-text-muted">
              {job.bullets.map((bullet, bulletIndex) => (
                <li key={bulletIndex} className="flex gap-3">
                  <span className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
