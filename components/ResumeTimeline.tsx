"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experience = [
  {
    company: "SpaceTel IT",
    role: "Software Developer (Intern)",
    location: "Adelaide, SA",
    period: "May 2026 – Present",
    bullets: [
      "Support the ongoing administration of a multi-role enterprise compliance platform, including workflow configuration, system access management, form setup and evidence-handling processes across Admin, Auditor and Client roles.",
      "Collaborate with business users and project stakeholders to translate requirements into functional system configurations and test scenarios, ensuring changes meet the intended business outcome before sign-off.",
      "Review release notes and coordinate testing of new system versions with key users prior to each production deployment; produce release summaries and test reports for stakeholder approval.",
      "Manage the full defect lifecycle — logging issues with structured reproduction steps and supporting evidence, liaising with developers on resolution and retesting fixes before release.",
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
    company: "Freelance / Contract",
    role: "Application Support & IT Consultant",
    location: "Adelaide, SA / Remote",
    period: "Mar 2022 – Present",
    bullets: [
      "Administer and support business applications for clients across Microsoft 365, SharePoint, Teams and web-based platforms — managing user access, permissions, workflows, system configurations and integrations.",
      "Gather and clarify business requirements, translate them into functional system or workflow changes and verify outcomes with clients before sign-off.",
      "Manage the full vendor support cycle: logging issues with supporting evidence, coordinating resolution timelines, following up on outcomes and identifying recurring problems requiring systemic improvement.",
      "Use SQL and MySQL to validate records, investigate data issues and troubleshoot reporting inconsistencies in database-backed applications.",
    ],
  },
  {
    company: "Eydean Inc",
    role: "Application Support Developer",
    location: "Kathmandu, Nepal",
    period: "Dec 2020 – Mar 2022",
    bullets: [
      "Developed and supported web applications using React, Django, MySQL and REST APIs — providing ongoing maintenance, bug resolution, feature implementation and post-change stability checks.",
      "Investigated and resolved user-reported application issues across the frontend, database and API layers, documenting findings and applying fixes with minimal disruption to business operations.",
      "Collaborated with team members and stakeholders to understand requirements, translate them into practical solutions and prepare clear documentation for system changes and handovers.",
    ],
  },
  {
    company: "CloudFactory",
    role: "Data Specialist",
    location: "Kathmandu, Nepal",
    period: "Nov 2017 – Sep 2020",
    bullets: [
      "Processed and quality-checked high-volume structured datasets to defined accuracy and confidentiality standards, flagging inconsistencies and contributing to continuous-improvement processes.",
    ],
  },
];

export default function ResumeTimeline() {
  return (
    <section
      className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[#120f1d]/82 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.3)] backdrop-blur-3xl sm:p-8"
      aria-labelledby="experience-heading"
    >
      <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-[#7c6cf2]/8 blur-[100px] pointer-events-none" />

      <div className="mb-8 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-[#7c6cf2]">
          <Briefcase size={22} />
        </div>
        <h2
          id="experience-heading"
          className="text-lg font-black tracking-[-0.04em] text-white"
        >
          Work Experience
        </h2>
      </div>

      <div className="relative ml-3 border-l-2 border-white/5 pl-6 sm:ml-4 sm:pl-8">
        {experience.map((job, index) => (
          <motion.article
            key={job.company + job.role}
            className="group relative mb-12 last:mb-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="absolute -left-[35px] top-1 h-5 w-5 rounded-full border-4 border-[#120f1d] bg-[#35aeca] shadow-[0_0_14px_rgba(53,174,202,0.55)] transition-transform group-hover:scale-125 sm:-left-[43px]" />

            <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-white/[0.04] to-transparent opacity-0 blur-xl transition duration-500 group-hover:opacity-100" />

            <div className="relative rounded-2xl border border-transparent p-5 transition duration-500 group-hover:border-white/10 group-hover:bg-white/[0.02]">
              <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-xl font-bold tracking-tight text-white transition group-hover:text-[#35aeca]">
                  {job.role}
                </h3>
                <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs font-semibold text-[#8f87a0] backdrop-blur-md">
                  {job.period}
                </span>
              </div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.1em] text-[#d9468f]">
                {job.company} <span className="mx-2 text-white/20">|</span>{" "}
                <span className="text-[#7c6cf2]">{job.location}</span>
              </p>
              <ul className="space-y-3 text-sm leading-relaxed text-[#c9c1d8]">
                {job.bullets.map((bullet, bulletIndex) => (
                  <motion.li
                    key={bulletIndex}
                    className="flex gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + bulletIndex * 0.05 }}
                  >
                    <span className="mt-[8px] flex h-1.5 w-1.5 shrink-0 rounded-full bg-[#f0abfc] shadow-[0_0_10px_rgba(240,171,252,0.8)]" />
                    <span>{bullet}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
