"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, FolderGit2 } from "lucide-react";

export default function ResumeProjects() {
  const projects = [
    {
      title: "Enterprise Compliance Assessment Platform",
      subtitle: "Multi-role compliance platform — admin, testing & release support",
      meta: "React · Spring Boot · PostgreSQL · Selenium · JUnit | SpaceTel IT",
      bullets: [
        "Supported the administration, testing and release management of a role-based enterprise compliance platform covering multi-stage assessment workflows, evidence submission, audit trails and policy controls.",
        "Managed system configuration, access controls, defect lifecycle and release documentation across Admin, Auditor and Client roles.",
        "Coordinated UAT with key users prior to each production deployment; produced release summaries and test reports for stakeholder approval.",
      ],
      link: null,
    },
    {
      title: "Glide Education & Visa Services",
      subtitle: "Production client website with enquiry workflows",
      meta: "Next.js · React · Tailwind CSS · MySQL · Vercel",
      bullets: [
        "Built and continue to maintain a production website with enquiry workflows, form validation, automated email notifications and a MySQL data layer.",
        "Handled DNS, SSL, Vercel deployment and ongoing client liaison to refine the experience based on real feedback.",
      ],
      link: "https://www.glideedu.com.au/",
    },
    {
      title: "Prime Roof Care",
      subtitle: "Service business website for enquiries and trust",
      meta: "HTML · CSS · Tailwind CSS · Responsive Design",
      bullets: [
        "Built a mobile-friendly service website structured around enquiries, trust, and practical business needs.",
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
