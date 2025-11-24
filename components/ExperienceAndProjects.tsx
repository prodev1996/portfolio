// components/ExperienceAndProjects.tsx
"use client";

import { motion } from "framer-motion";

const experience = [
  {
    title: "ICT Support & Freelance Developer",
    company: "Self-employed · Adelaide, Australia",
    date: "Mar 2022 – Present",
    bullets: [
      "Provide day-to-day ICT support including troubleshooting Windows, Microsoft 365, printers, and basic networking issues.",
      "Deploy and maintain client websites (e.g. Glide Education, Prime Roof Care) including DNS, hosting, SSL, and backups.",
      "Configure accounts, mailboxes, and permissions within Microsoft 365 and related tools.",
      "Document solutions, create simple user guides, and train non-technical users.",
    ],
  },
  {
    title: "Administrative Assistant (ICT Focus)",
    company: "SA Mushroom · Adelaide, Australia",
    date: "Dec 2024 – May 2025",
    bullets: [
      "Maintained records, reports, and schedules using Excel, Word, and SharePoint.",
      "Supported staff with IT issues related to email, shared drives, and devices.",
      "Helped organise digital files and improve information flow between teams.",
      "Strengthened attention to detail and communication in a fast-paced environment.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Eydean · Kathmandu, Nepal",
    date: "Dec 2020 – Mar 2022",
    bullets: [
      "Developed web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
      "Implemented REST APIs, authentication, and role-based access control.",
      "Collaborated with designers and product owners to deliver features on schedule.",
      "Optimised front-end performance and improved UX for web applications.",
    ],
  },
  {
    title: "Data Specialist",
    company: "CloudFactory · Kathmandu, Nepal",
    date: "Nov 2017 – Sep 2020",
    bullets: [
      "Processed and validated large datasets following strict quality standards.",
      "Worked in distributed teams and met accuracy and productivity targets.",
      "Improved attention to detail and consistency through repetitive data tasks.",
    ],
  },
];

const projects = [
  {
    name: "Glide Education & Visa Services",
    subtitle: "Study abroad & migration consultancy website",
    summary:
      "Production website for an education and visa consultancy, helping students find courses, understand visa options, and book consultations.",
    tags: ["React", "Next.js", "Tailwind CSS", "Node.js (backend)", "MongoDB"],
    liveUrl: "https://www.glideedu.com.au/",
  },
  {
    name: "Prime Roof Care",
    subtitle: "Roof restoration & maintenance services website",
    summary:
      "Marketing and lead-generation site for a roofing services business in Australia, focusing on before/after work and capturing high-quality leads.",
    tags: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    liveUrl: "https://www.primeroofcare.com.au/",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export default function ExperienceAndProjects() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl scroll-mt-24 px-4 pb-24 pt-16"
    >
      {/* Experience header */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
          Career
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-slate-50">
          Experience &amp; Projects
        </h2>
      </motion.div>

      {/* Experience timeline */}
      <div className="relative border-l border-slate-800/80 pl-6">
        {experience.map((job, index) => (
          <motion.article
            key={job.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="mb-10"
          >
            <div className="absolute -left-[7px] mt-1 h-3 w-3 rounded-full border border-emerald-400 bg-slate-950" />
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:gap-4">
              <div>
                <h3 className="text-sm font-semibold text-slate-100">
                  {job.title}
                </h3>
                <p className="text-xs text-slate-400">{job.company}</p>
              </div>
              <p className="text-xs text-slate-400">{job.date}</p>
            </div>
            <ul className="mt-3 space-y-1.5 text-xs text-slate-300">
              {job.bullets.map((b) => (
                <li key={b} className="leading-relaxed">
                  • {b}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>

      {/* Projects */}
      <motion.div
        id="projects"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="mt-12 mb-6"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
          Work
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-slate-50">
          Featured projects
        </h2>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-[0_18px_40px_rgba(15,23,42,0.65)]"
          >
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                {project.subtitle}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-slate-50">
                {project.name}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                {project.summary}
              </p>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-800 px-2 py-0.5 text-[11px] text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-medium text-emerald-400 hover:text-emerald-300"
              >
                View live site →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
