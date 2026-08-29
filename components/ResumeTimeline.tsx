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
      "Support the administration and testing of a multi-role enterprise compliance platform, including workflow configuration, system access management and evidence-handling processes across multiple user roles.",
      "Collaborate with business users and stakeholders to translate requirements into functional system configurations and test scenarios, ensuring changes meet the intended business outcome before sign-off.",
      "Review release notes and coordinate testing of new system versions with key users prior to each production deployment; produce test summaries and release documentation for stakeholder approval.",
      "Manage the full defect lifecycle: logging issues with structured reproduction steps and supporting evidence, liaising with developers on resolution and retesting fixes before release.",
      "Produce user documentation and support end-user adoption across multiple business roles, tailoring communication for both technical and non-technical audiences.",
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
    location: "Australia / Remote",
    period: "2022 – Present",
    bullets: [
      "Administer and support business applications for clients across Microsoft 365, SharePoint, Teams, Outlook and web-based platforms, managing user access, permissions, workflows and system configurations.",
      "Gather and clarify business requirements, translate them into practical system or workflow changes, and verify outcomes with clients before sign-off.",
      "Write and execute SQL/MySQL queries for data retrieval, validation, form submission troubleshooting and reporting accuracy checks, building practical data analysis habits alongside application support.",
      "Manage the full vendor support cycle: logging issues with evidence, coordinating resolution timelines and identifying recurring problems requiring systemic fixes.",
      "Produce user guides, change documentation and support notes; provide one-to-one guidance tailored to different levels of technical confidence.",
    ],
  },
  {
    company: "Eydean Inc",
    role: "Application Support Developer",
    location: "Kathmandu, Nepal",
    period: "Dec 2020 – Mar 2022",
    bullets: [
      "Maintained and supported production web applications built with React, Django, Node.js, MySQL and REST APIs, handling bug investigation, defect resolution and post-change stability checks.",
      "Investigated user-reported application issues across the frontend, database and API layers, documenting root cause and applying fixes with minimal disruption to business operations.",
      "Supported database-backed application features including data validation, query troubleshooting and API integration testing, building foundational SQL and data analysis skills.",
      "Collaborated with stakeholders to clarify requirements, translate them into practical solutions and prepare clear technical documentation for system changes and handovers.",
      "Managed source control and version tracking using Git/GitHub, supporting structured release and change management practices.",
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
