"use client";

import { motion } from "framer-motion";
import { Sparkles, Terminal, Code2, Database, ShieldCheck, Workflow, FileText } from "lucide-react";

const skillBlocks = [
  {
    title: "Application & Business Systems Support",
    icon: ShieldCheck,
    proficiency: 90,
    items: [
      "Workflow configuration",
      "System access management",
      "Incident & defect resolution",
      "Change support",
      "User assistance",
      "Documentation",
    ],
  },
  {
    title: "SQL, Data & Reporting",
    icon: Workflow,
    proficiency: 80,
    items: [
      "SQL / MySQL",
      "T-SQL fundamentals",
      "Data validation",
      "Query optimization",
      "ETL & staging concepts",
      "Source-to-target reconciliation",
      "Reporting support",
    ],
  },
  {
    title: "Web & Application Development",
    icon: Code2,
    proficiency: 78,
    items: [
      "React / Next.js",
      "Node.js",
      "REST APIs & integration testing",
      "MySQL",
      "HTML/CSS",
      "DNS/SSL/hosting",
    ],
  },
  {
    title: "Microsoft 365 & Identity",
    icon: Database,
    proficiency: 82,
    items: [
      "Microsoft 365",
      "SharePoint",
      "Outlook",
      "Teams",
      "Active Directory",
      "Azure AD",
    ],
  },
  {
    title: "Delivery & Coordination",
    icon: FileText,
    proficiency: 80,
    items: [
      "Release notes & summaries",
      "Stakeholder communication",
      "Requirements gathering",
      "Git/GitHub",
      "User documentation",
      "Deployment support",
    ],
  },
  {
    title: "Compliance & Regulated Care Support",
    icon: Terminal,
    proficiency: 78,
    items: [
      "Compliance platform admin",
      "UAT coordination",
      "Evidence & audit trails",
      "Care documentation",
    ],
  },
];

function SkillCard({ block, index }: { block: typeof skillBlocks[0], index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="rounded-xl border border-border p-6 sm:p-7"
    >
      <div className="flex items-center gap-4 mb-6">
        <block.icon className="h-5 w-5 shrink-0 text-accent" />
        <div className="w-full">
          <h3 className="text-lg font-black tracking-tight text-text">
            {block.title}
          </h3>
          <div className="mt-2 flex items-center justify-between gap-3">
            <div className="h-1 w-full overflow-hidden rounded-full bg-white/[0.06]">
              <motion.div
                className="h-full rounded-full bg-accent"
                initial={{ width: 0 }}
                whileInView={{ width: `${block.proficiency}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
              />
            </div>
            <span className="text-[10px] font-bold text-text-faint">{block.proficiency}%</span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {block.items.map((item) => (
          <span
            key={item}
            className="rounded-md border border-border px-3.5 py-1.5 text-xs font-semibold text-text-muted"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function ResumeSkillsDetailed() {
  return (
    <section>
      <div className="flex items-center gap-4 mb-10">
        <Sparkles className="h-5 w-5 shrink-0 text-accent" />
        <div>
          <h2 className="text-2xl font-black tracking-[-0.03em] text-text sm:text-3xl">
            Core Competencies
          </h2>
          <p className="mt-1 text-sm font-medium text-text-muted">
            Hybrid capability across application support, SQL/MySQL & data analysis, software development, Microsoft 365, and structured delivery.
          </p>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {skillBlocks.map((block, index) => (
          <SkillCard key={block.title} block={block} index={index} />
        ))}
      </div>
    </section>
  );
}
