"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, FolderGit2 } from "lucide-react";

export default function ResumeProjects() {
  const projects = [
    {
      title: "Enterprise Compliance Assessment Platform",
      subtitle: "Multi-role compliance platform: admin, testing & release support",
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
    <section>
      <div className="flex items-center gap-3 mb-8">
        <FolderGit2 className="h-5 w-5 text-accent" />
        <h2 className="text-lg font-black tracking-[-0.03em] text-text">
          Key Projects
        </h2>
      </div>

      <div className="divide-y divide-border">
        {projects.map((project, index) => {
          const content = (
            <>
              <div className="mb-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                <div>
                  <h3 className="flex items-center gap-2 text-lg font-bold text-text">
                    {project.title}
                    {project.link && (
                      <ArrowUpRight className="h-3.5 w-3.5 text-text-faint" />
                    )}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-accent">{project.subtitle}</p>
                  <p className="mt-1 text-xs font-medium text-text-faint">{project.meta}</p>
                </div>
              </div>

              <ul className="space-y-2 text-sm leading-relaxed text-text-muted">
                {project.bullets.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </>
          );

          const cardClassName = "py-6 first:pt-0 last:pb-0";

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
                className={`${cardClassName} block outline-none focus-visible:ring-2 focus-visible:ring-accent`}
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
