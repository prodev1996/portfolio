"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, FolderGit2 } from "lucide-react";

export default function ResumeProjects() {
  const projects = [
    {
      title: "SQL Data Validation & Migration Practice Project",
      subtitle: "Practice project for SQL, staging, and reconciliation",
      meta: "SQL Server / MySQL / Excel / Git",
      bullets: [
        "Worked through import, staging, duplicate checks, NULL checks, record counts, and source-to-target comparison tasks in a structured practice setup.",
        "Focused on validation logic, reconciliation habits, and documentation of assumptions, test steps, and results.",
        "Used the project to build confidence in SQL support thinking, data quality checks, and migration-related validation workflows.",
      ],
      link: null,
    },
    {
      title: "Image Steggy",
      subtitle: "Image Steganography Tool",
      meta: "Torrens University Australia | 2023 - 2024",
      bullets: [
        "Built a web-based tool to hide secret text inside images using steganography concepts.",
        "Used HTML, CSS, JavaScript, and Git-based version control during development.",
        "Developed encoding and decoding functions, tested with sample images, and documented results clearly.",
      ],
      link: null,
    },
    {
      title: "Glide Education",
      subtitle: "Consultancy and Visa Services Platform",
      meta: "React, Next.js, MySQL, Node.js, Tailwind, Vercel",
      bullets: [
        "Developed and deployed a production website with responsive UI and structured service pages.",
        "Built secure enquiry and contact forms with validation and email notifications.",
        "Managed domain, DNS, SSL, and deployment updates after launch.",
      ],
      link: "https://www.glideedu.com.au/",
    },
    {
      title: "Prime Roof Care",
      subtitle: "Service Management Website",
      meta: "HTML, CSS, Tailwind",
      bullets: [
        "Built a mobile-friendly service website to support customer enquiries and lead generation.",
        "Designed responsive pages using HTML, CSS, and Tailwind for smooth performance.",
        "Managed hosting updates and content changes after deployment to keep the site current and usable.",
      ],
      link: "https://www.primeroofcare.com.au/",
    },
  ];

  return (
    <section className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[#120f1d]/82 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.3)] backdrop-blur-3xl sm:p-8">
      <div className="absolute right-10 bottom-0 h-64 w-64 rounded-full bg-[#e49a2f]/8 blur-[100px] pointer-events-none" />

      <div className="flex items-center gap-4 mb-8">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-[#e49a2f]">
          <FolderGit2 size={22} />
        </div>
        <h2 className="text-lg font-black tracking-[-0.04em] text-white">
          Key Projects
        </h2>
      </div>

      <div className="grid gap-6">
        {projects.map((project, index) => {
          const content = (
            <>
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-[#e49a2f] to-[#d9468f] opacity-0 blur-xl transition duration-500 group-hover:opacity-8" />

              <div className="relative z-10 mb-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                <div>
                  <h3 className="flex items-center gap-2 text-lg font-bold text-white transition group-hover:text-[#e49a2f]">
                    {project.title}
                    {project.link && (
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/50 transition group-hover:border-[#e49a2f]/35 group-hover:text-white">
                        <ArrowUpRight size={13} />
                      </span>
                    )}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-[#f0abfc]">{project.subtitle}</p>
                  <p className="mt-1 text-xs font-medium text-[#8f87a0]">{project.meta}</p>
                </div>
              </div>

              <ul className="relative z-10 space-y-2 text-sm leading-relaxed text-[#c9c1d8]">
                {project.bullets.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-[8px] flex h-1.5 w-1.5 shrink-0 rounded-full bg-[#e49a2f] shadow-[0_0_8px_rgba(228,154,47,0.55)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </>
          );

          const cardClassName =
            "group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-5 transition duration-300 hover:border-white/10 hover:bg-white/[0.04]";

          if (project.link) {
            return (
              <motion.a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open live website for ${project.title}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`${cardClassName} block outline-none hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-[#d9468f]`}
              >
                {content}
              </motion.a>
            );
          }

          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cardClassName}
            >
              {content}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
