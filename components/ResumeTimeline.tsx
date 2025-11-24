"use client";

import { motion } from "framer-motion";

const experience = [
  {
    company: "IT Support & Freelance Developer",
    role: "ICT Support & Freelance Developer",
    location: "Adelaide, Australia",
    period: "Mar 2022 – Present",
    bullets: [
      "Provide day-to-day ICT support including troubleshooting Windows, Microsoft 365, printers, and basic networking issues.",
      "Deploy and maintain client websites (e.g. Glide Education, Prime Roof Care) including DNS, hosting, SSL, and backups.",
      "Configure accounts, mailboxes, and permissions within Microsoft 365 and related tools.",
      "Document solutions, create simple user guides, and train non-technical users.",
    ],
  },
  {
    company: "SA Mushroom",
    role: "Administrative Assistant (ICT Focus)",
    location: "Adelaide, Australia",
    period: "Dec 2024 – May 2025",
    bullets: [
      "Maintained records, reports, and schedules using Excel, Word, and SharePoint.",
      "Supported staff with IT issues related to email, shared drives, and devices.",
      "Helped organise digital files and improve information flow between teams.",
      "Strengthened attention to detail and communication in a fast-paced environment.",
    ],
  },
  {
    company: "Eydean",
    role: "Full Stack Developer",
    location: "Kathmandu, Nepal",
    period: "Dec 2020 – Mar 2022",
    bullets: [
      "Developed web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
      "Implemented REST APIs, authentication, and role-based access control.",
      "Collaborated with designers and product owners to deliver features on schedule.",
      "Optimised front-end performance and improved UX for web applications.",
    ],
  },
  {
    company: "CloudFactory",
    role: "Data Specialist",
    location: "Kathmandu, Nepal",
    period: "Nov 2017 – Sep 2020",
    bullets: [
      "Processed and validated large datasets following strict quality standards.",
      "Used custom tools and workflows to improve accuracy and throughput.",
      "Worked in distributed teams, communicating clearly on status and blockers.",
    ],
  },
];

export default function ResumeTimeline() {
  return (
    <section aria-labelledby="experience-heading">
      <h2
        id="experience-heading"
        className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400"
      >
        Experience
      </h2>

      <div className="relative border-l border-slate-800 pl-4">
        <div className="absolute -left-[5px] top-0 h-2 w-2 rounded-full bg-primary" />
        {experience.map((job, index) => (
          <motion.article
            key={job.company + job.role}
            className="mb-8 last:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: index * 0.05 }}
          >
            <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-sm font-semibold text-slate-100">
                {job.role}
              </h3>
              <p className="text-xs text-slate-400">{job.period}</p>
            </div>
            <p className="text-xs font-medium text-slate-300">
              {job.company} • {job.location}
            </p>
            <ul className="mt-2 space-y-1.5 text-xs text-slate-300">
              {job.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-1 h-1 w-1 rounded-full bg-primary" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
