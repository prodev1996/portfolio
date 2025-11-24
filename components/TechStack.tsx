"use client";

import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      delay: 0.05 * i,
      ease: "easeOut",
    },
  }),
};

type SkillGroup = {
  label: string;
  items: string[];
};

const webDev: SkillGroup = {
  label: "Web development",
  items: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "REST APIs",
  ],
};

const infraSupport: SkillGroup = {
  label: "Infrastructure & support",
  items: [
    "Windows 10 / 11",
    "Windows Server (basics)",
    "Active Directory",
    "Azure AD",
    "Microsoft 365 (Exchange, Teams, SharePoint, OneDrive)",
    "DNS / DHCP",
    "VPN & remote access",
    "Networking (LAN, Wi-Fi, VLANs)",
    "Endpoint setup & hardening",
    "Remote support tools",
  ],
};

const toolsProcess: SkillGroup = {
  label: "Tools & ways of working",
  items: [
    "Git & GitHub",
    "VS Code",
    "Postman",
    "Ticketing & monitoring tools",
    "Jira / Confluence / Notion (basics)",
    "Technical documentation & user guides",
    "End-user training & workshops",
    "Incident & problem management",
  ],
};

function SkillPill({ label }: { label: string }) {
  return (
    <motion.span
      whileHover={{ y: -2, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="inline-flex items-center rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1 text-xs text-slate-100 shadow-sm"
    >
      {label}
    </motion.span>
  );
}

export default function TechStack() {
  const groups: SkillGroup[] = [webDev, infraSupport, toolsProcess];

  return (
    <section id="skills" className="border-t border-slate-800/60 bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-16 lg:gap-10 lg:py-20">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300">
            Skills
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Tech stack I work with
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            I am comfortable moving between{" "}
            <span className="text-emerald-300">
              hands-on ICT support, systems work and modern web development
            </span>
            . This is a snapshot of the technologies and practices I use most
            often to deliver reliable, user-friendly solutions.
          </p>
        </motion.div>

        {/* Skill groups */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {groups.map((group, index) => (
            <motion.div
              key={group.label}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-5 shadow-[0_0_40px_rgba(15,23,42,0.85)]"
            >
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                {group.label}
              </h3>

              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <SkillPill key={item} label={item} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
