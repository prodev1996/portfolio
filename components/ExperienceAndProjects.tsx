"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  summary: string;
  highlights: string[];
};

type Project = {
  id: string;
  title: string;
  role: string;
  companyTag?: string;
  description: string;
  tech: string[];
  impact: string;
  liveUrl: string;
  image: string;
};

const experiences: Experience[] = [
  {
    company: "Freelance & Small Business Clients",
    role: "IT Support & Freelance Developer",
    location: "Adelaide, Australia",
    period: "Mar 2022 – Present",
    summary:
      "Combining hands-on IT support with full stack development for local businesses and clients.",
    highlights: [
      "Delivered IT support and light system administration, including user support, troubleshooting, software setup and Microsoft 365.",
      "Designed, developed and deployed production websites including Glide Education & Visa Services.",
      "Owned end-to-end deployment: domains, DNS, hosting, cloud deployment and basic database administration.",
      "Implemented security, backup and performance improvements for client projects.",
      "Built practical experience with Active Directory, networking fundamentals and Windows/Linux servers through client work and home labs.",
    ],
  },
  {
    company: "SA Mushroom",
    role: "Administrative Assistant (ICT)",
    location: "Adelaide, Australia",
    period: "Dec 2024 – May 2025",
    summary:
      "Supported day-to-day business operations with a strong focus on data accuracy, documentation and reporting.",
    highlights: [
      "Used Microsoft 365 (Excel, Word, Outlook, Teams) for scheduling, record-keeping and internal communication.",
      "Streamlined digital record-keeping and inventory tracking, reducing manual errors and duplicated entries.",
      "Prepared and updated documentation that helped staff find information faster and reduced rework.",
      "Contributed to IT security practices by enforcing access controls and documenting solutions for common issues.",
      "Created simple user guides and training material to help staff adopt new tools confidently.",
    ],
  },
  {
    company: "Eyden",
    role: "Full Stack Developer",
    location: "Kathmandu, Nepal (Remote)",
    period: "Dec 2020 – Mar 2022",
    summary:
      "Worked on MERN stack applications, supporting both feature delivery and internal tooling.",
    highlights: [
      "Developed and maintained web applications using MongoDB, Express.js, React.js and Node.js.",
      "Provided technical support for internal applications, troubleshooting bugs and performance issues.",
      "Assisted with AWS deployments to keep applications highly available and scalable.",
      "Collaborated with stakeholders to gather requirements and deliver solutions aligned with business goals.",
    ],
  },
  {
    company: "Cloud Factory",
    role: "Data Specialist",
    location: "Kathmandu, Nepal",
    period: "Nov 2017 – Sep 2020",
    summary:
      "Hands-on work with large datasets in a fast-paced environment, balancing speed with data quality.",
    highlights: [
      "Processed and validated large volumes of client data while maintaining very high accuracy levels.",
      "Worked in team-based environments to consistently meet daily and weekly project targets.",
      "Helped identify process issues early by communicating clearly with leads and engineers.",
      "Automated parts of repetitive data-cleaning workflows, reducing manual effort and turnaround time.",
    ],
  },
];

const projects: Project[] = [
  {
    id: "glide",
    title: "Glide Education & Visa Services",
    role: "Full Stack Developer",
    companyTag: "Real client project",
    description:
      "Full-scale consultancy website for an education and visa services agency, with course search, detailed visa pages and enquiry flows.",
    tech: ["React.js", "Node.js", "MongoDB", "Tailwind CSS", "Vercel"],
    impact:
      "Gave the business a modern, trustworthy online presence and a clear funnel for enquiries, helping students understand options and book consultations.",
    liveUrl: "https://www.glideedu.com.au",
    image: "/projects/glide.png",
  },
  {
    id: "primeroof",
    title: "Prime Roof Care",
    role: "Full Stack Developer",
    companyTag: "Small business website",
    description:
      "Service website and lightweight management system for a roof restoration business, focused on showcasing services, before/after work and gathering leads.",
    tech: ["Django", "HTML/CSS", "SQLite"],
    impact:
      "Replaced a basic online presence with a responsive site and better performance, making it easier for customers to request quotes and trust the brand.",
    liveUrl: "https://www.primeroofcare.com.au",
    image: "/projects/primeroof.png",
  },
];

export default function ExperienceAndProjects() {
  return (
    <section
      id="experience"
      className="relative scroll-mt-28 border-t border-slate-800/60 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950/95 py-16 sm:py-24"
    >
      {/* background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/5 h-64 w-64 rounded-full bg-emerald-500/15 blur-3xl" />
        <div className="absolute -bottom-40 right-1/4 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
        {/* EXPERIENCE BLOCK */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative rounded-3xl border border-slate-800/80 bg-slate-950/80 p-5 shadow-[0_22px_60px_rgba(15,23,42,0.95)] sm:p-6"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-400">
                Professional Experience
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
                Roles that built my IT & dev skills
              </h2>
              <p className="mt-3 max-w-2xl text-sm text-slate-400 sm:text-[15px]">
                These roles shaped how I troubleshoot, communicate with
                non-technical people and deliver work reliably – from support
                tickets to full stack features.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800/80 bg-slate-950/70 px-4 py-3 text-xs text-slate-300">
              <p className="font-medium text-slate-100">
                What this means for your team
              </p>
              <p className="mt-1 text-[11px] text-slate-400">
                I can jump into your environment, understand how things are set
                up and start helping users and shipping improvements without a
                long ramp-up.
              </p>
            </div>
          </div>

          <div className="relative mt-6 space-y-6">
            {/* vertical line */}
            <span className="pointer-events-none absolute left-[10px] top-0 h-full w-px bg-gradient-to-b from-emerald-400/60 via-slate-700 to-slate-700/20" />

            {experiences.map((exp, index) => (
              <motion.article
                key={exp.company + exp.role + exp.period}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                className="relative pl-9"
              >
                {/* dot */}
                <span className="absolute left-0 top-1 flex h-3 w-3 items-center justify-center">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_6px_rgba(16,185,129,0.25)]" />
                </span>

                <div className="rounded-2xl border border-slate-800/80 bg-slate-900/60 px-3.5 py-3">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                    <h3 className="text-[13px] font-semibold text-slate-50 sm:text-sm">
                      {exp.role}
                    </h3>
                    <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-emerald-300">
                      {exp.period}
                    </span>
                  </div>
                  <p className="mt-0.5 text-[12px] text-slate-400">
                    {exp.company} • {exp.location}
                  </p>
                  <p className="mt-2 text-[13px] text-slate-300">
                    {exp.summary}
                  </p>
                  <ul className="mt-2 space-y-1.5 text-[12px] text-slate-300">
                    {exp.highlights.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-[6px] h-1 w-1 rounded-full bg-slate-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* PROJECTS BLOCK – equal size cards, click opens live site */}
        <motion.div
          id="projects"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="relative flex flex-col gap-6"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-400">
                Featured Projects
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
                Real work I can walk you through
              </h2>
              <p className="mt-3 max-w-2xl text-sm text-slate-400 sm:text-[15px]">
                These projects are live and used by real clients. Clicking any
                card opens the live site in a new tab, like a mini portfolio
                gallery.
              </p>
            </div>

            <span className="inline-flex items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-200">
              Open to ICT Support / Web Dev roles
            </span>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.a
                key={project.id}
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.07,
                  ease: "easeOut",
                }}
                className="group relative overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-950/90 text-left shadow-[0_22px_60px_rgba(15,23,42,0.95)] transition-transform hover:-translate-y-1 hover:border-emerald-400/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70"
              >
                {/* Screenshot – SAME SIZE for all cards */}
                <div className="relative overflow-hidden">
                  <div className="relative w-full overflow-hidden aspect-[16/9]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Gradient overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent" />

                  {project.companyTag && (
                    <span className="absolute left-4 top-4 rounded-full border border-emerald-400/70 bg-emerald-500/90 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-950 shadow-[0_18px_40px_rgba(16,185,129,0.8)]">
                      {project.companyTag}
                    </span>
                  )}

                  <span className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/90 text-slate-300 opacity-80 shadow-[0_16px_40px_rgba(15,23,42,0.9)] transition-all group-hover:border-emerald-400/70 group-hover:text-emerald-200 group-hover:opacity-100">
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>

                  <div className="absolute inset-x-4 bottom-4 space-y-1.5">
                    <h3 className="text-sm font-semibold text-slate-50 sm:text-base">
                      {project.title}
                    </h3>
                    <p className="text-[12px] text-slate-300">
                      {project.role}
                    </p>
                    <p className="line-clamp-2 text-[12px] text-slate-200/90">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Tech row */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800/80 bg-slate-950/95 px-4 py-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-slate-700/80 bg-slate-900/80 px-2 py-0.5 text-[10px] text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <span className="text-[11px] text-emerald-300">
                    Opens live site ↗
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
