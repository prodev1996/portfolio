"use client";

import { motion } from "framer-motion";

const experience = [
  {
    company: "Freelance / Contract",
    role: "IT Application Support Consultant",
    location: "Adelaide, South Australia",
    period: "March 2022 - Present",
    bullets: [
      "Provided application support for small business clients across Microsoft 365 and Windows environments.",
      "Supported business applications including SharePoint, Outlook, Teams, and web-based systems.",
      "Managed onboarding and offboarding, permissions, and access control using Active Directory and Microsoft 365.",
      "Troubleshot application, workflow, and system issues to help maintain business continuity.",
      "Configured hosting, domain, DNS, and SSL environments for production websites.",
      "Collaborated with clients to understand business requirements and implement practical technical solutions.",
    ],
  },
  {
    company: "SA Mushrooms",
    role: "Administrative Assistant (ICT and Data Support)",
    location: "Waterloo Corner, South Australia",
    period: "December 2024 - May 2025",
    bullets: [
      "Supported records, reporting, and data accuracy tasks using Microsoft tools including Excel and Microsoft 365.",
      "Assisted staff with access issues, account queries, and day-to-day business system usage questions.",
      "Improved digital documentation workflows to reduce manual errors and save time.",
      "Supported user account access issues and escalated complex incidents as needed.",
      "Helped staff with internal business application access and system usage queries.",
    ],
  },
  {
    company: "Eyden Inc",
    role: "Full Stack Developer",
    location: "Kathmandu, Nepal",
    period: "December 2020 - March 2022",
    bullets: [
      "Developed and maintained web applications using full-stack technologies.",
      "Fixed bugs, enhanced features, and supported API and database-driven functionality.",
      "Assisted deployments and collaborated with stakeholders to deliver stable releases.",
    ],
  },
  {
    company: "CloudFactory",
    role: "Data Specialist",
    location: "Kathmandu, Nepal",
    period: "November 2017 - September 2020",
    bullets: [
      "Processed and validated high-volume data with strong accuracy and quality standards.",
      "Followed structured workflows while meeting productivity targets and deadlines.",
      "Maintained attention to detail, confidentiality, and compliance with client requirements.",
    ],
  },
];

export default function ResumeTimeline() {
  return (
    <section className="card rounded-[32px]" aria-labelledby="experience-heading">
      <h2
        id="experience-heading"
        className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#1f9d72]"
      >
        Work Experience
      </h2>

      <div className="relative border-l border-[#dfe5de] pl-5">
        <div className="absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full bg-[#1f9d72]" />
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
              <h3 className="text-sm font-semibold text-[#1d2d25]">
                {job.role}
              </h3>
              <p className="text-xs text-[#687970]">{job.period}</p>
            </div>
            <p className="text-xs font-medium text-[#42564a]">
              {job.company} • {job.location}
            </p>
            <ul className="mt-3 space-y-2 text-xs leading-6 text-[#4e6056]">
              {job.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-[#1f9d72]" />
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
