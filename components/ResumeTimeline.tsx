"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experience = [
  {
    company: "Freelance / Contract",
    role: "Application Systems & Database Support Consultant",
    location: "Australia",
    period: "March 2022 - Present",
    bullets: [
      "Supported business applications, Microsoft 365, web-based systems, and database-backed workflows across client environments, with a focus on reliability, user support, and incident resolution.",
      "Used SQL/MySQL for data retrieval, validation checks, reporting support, form review, and troubleshooting application and data-related issues.",
      "Investigated workflow, access, API/database integration, and application issues; identified root causes, documented fixes, and supported reliable change implementation.",
      "Used Git/GitHub for version control, release tracking, documentation, and support of ongoing system updates and improvements.",
      "Coordinated hosting, DNS, SSL, deployment, and service changes while maintaining support notes and vendor-facing troubleshooting when required.",
      "Worked directly with users and stakeholders to support process improvement, user acceptance testing, and clear communication across technical and non-technical teams.",
    ],
  },
  {
    company: "Eydean Inc",
    role: "Database & Application Support Developer",
    location: "Kathmandu, Nepal",
    period: "December 2020 - March 2022",
    bullets: [
      "Supported and improved database-driven business application features using JavaScript, React, Node.js, APIs, HTML/CSS, and MySQL-backed workflows.",
      "Handled CRUD workflows, form validation, reporting-related data checks, API/database functionality, and integration troubleshooting to support stable day-to-day application use.",
      "Investigated application defects, tested fixes, supported user acceptance testing, and collaborated with stakeholders to deliver stable releases.",
      "Used Git and GitHub in structured workflows and maintained technical notes to support handover, future troubleshooting, and change support.",
    ],
  },
  {
    company: "CloudFactory",
    role: "Data Specialist",
    location: "Kathmandu, Nepal",
    period: "November 2017 - September 2020",
    bullets: [
      "Processed and validated high-volume client data while meeting strict accuracy, productivity, and confidentiality requirements.",
      "Followed structured workflows and quality standards to maintain reporting-ready data and consistent output.",
      "Identified anomalies, corrected issues where appropriate, and escalated unclear cases through the proper channels.",
      "Built attention to detail and process discipline directly relevant to reporting support, data migration checks, and system-related data work.",
    ],
  },
];

export default function ResumeTimeline() {
  return (
    <section className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[#120f1d]/82 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.3)] backdrop-blur-3xl sm:p-8" aria-labelledby="experience-heading">
      <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-[#7c6cf2]/8 blur-[100px] pointer-events-none" />
      
      <div className="flex items-center gap-4 mb-8">
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

      <div className="relative border-l-2 border-white/5 pl-6 sm:pl-8 ml-3 sm:ml-4">
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
                {job.company} <span className="mx-2 text-white/20">|</span> <span className="text-[#7c6cf2]">{job.location}</span>
              </p>
              <ul className="space-y-3 text-sm leading-relaxed text-[#c9c1d8]">
                {job.bullets.map((b, i) => (
                  <motion.li 
                    key={i} 
                    className="flex gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index * 0.1) + (i * 0.05) }}
                  >
                    <span className="mt-[8px] flex h-1.5 w-1.5 shrink-0 rounded-full bg-[#f0abfc] shadow-[0_0_10px_rgba(240,171,252,0.8)]" />
                    <span>{b}</span>
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
