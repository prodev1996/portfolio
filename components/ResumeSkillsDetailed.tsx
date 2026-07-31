"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Sparkles, Terminal, Code2, Database, ShieldCheck, Workflow, FileText } from "lucide-react";

const skillBlocks = [
  {
    title: "Application & Business Systems Support",
    icon: ShieldCheck,
    color: "from-[#7c6cf2] to-[#d9468f]",
    shadowColor: "rgba(124,108,242,0.24)",
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
    color: "from-[#e49a2f] to-[#d9468f]",
    shadowColor: "rgba(228,154,47,0.24)",
    proficiency: 80,
    items: [
      "SQL / MySQL",
      "T-SQL fundamentals",
      "Data validation",
      "ETL & staging concepts",
      "Source-to-target reconciliation",
      "Reporting support",
    ],
  },
  {
    title: "Web & Application Development",
    icon: Code2,
    color: "from-[#e05268] to-[#e49a2f]",
    shadowColor: "rgba(244,63,94,0.3)",
    proficiency: 78,
    items: [
      "React / Next.js",
      "Node.js",
      "REST APIs",
      "MySQL",
      "HTML/CSS",
      "DNS/SSL/hosting",
    ],
  },
  {
    title: "Microsoft 365 & Identity",
    icon: Database,
    color: "from-[#20a779] to-[#3b82f6]",
    shadowColor: "rgba(32,167,121,0.24)",
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
    color: "from-[#c65bd7] to-[#7c6cf2]",
    shadowColor: "rgba(217,70,239,0.3)",
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
    color: "from-[#35aeca] to-[#7c6cf2]",
    shadowColor: "rgba(53,174,202,0.24)",
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
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      className="group relative flex flex-col overflow-hidden rounded-[32px] border border-white/5 bg-[#0a0812] p-6 shadow-xl transition-all duration-500 hover:scale-[1.02] hover:border-white/10 hover:shadow-2xl sm:p-8"
      style={{
        boxShadow: `0 20px 40px -20px ${block.shadowColor}`,
      }}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[32px] opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.06),
              transparent 80%
            )
          `,
        }}
      />
      
      <div className={`absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br ${block.color} opacity-10 blur-[50px] transition duration-700 group-hover:opacity-30 group-hover:blur-[60px]`} />

      <div className="relative z-10 flex items-center gap-4 mb-6">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-black/50 shadow-inner backdrop-blur-md transition-transform duration-500 group-hover:scale-110 group-hover:border-white/20">
          <block.icon className="h-6 w-6 text-white" />
        </div>
        <div className="w-full">
          <h3 className="text-lg font-black tracking-tight text-white transition-colors duration-300 group-hover:text-[#f0abfc]">
            {block.title}
          </h3>
          <div className="mt-2 flex items-center justify-between gap-3">
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.05] shadow-inner">
              <motion.div 
                className={`h-full rounded-full bg-gradient-to-r ${block.color}`}
                initial={{ width: 0 }}
                whileInView={{ width: `${block.proficiency}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
              />
            </div>
            <span className="text-[10px] font-bold text-[#8f87a0]">{block.proficiency}%</span>
          </div>
        </div>
      </div>
      
      <div className="relative z-10 mt-auto flex flex-wrap gap-2">
        {block.items.map((item, i) => (
          <motion.span
            key={item}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 + (index * 0.1) + (i * 0.05), type: "spring", stiffness: 200 }}
            className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-semibold text-[#c9c1d8] backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.08] hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]"
          >
            {item}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function ResumeSkillsDetailed() {
  return (
    <section className="relative overflow-hidden rounded-[40px] border border-white/10 bg-[#120f1d]/82 p-6 shadow-[0_40px_140px_rgba(0,0,0,0.4)] backdrop-blur-3xl sm:p-10">
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#d9468f]/8 blur-[120px] pointer-events-none" />
      <div className="absolute left-0 bottom-0 h-96 w-96 rounded-full bg-[#7c6cf2]/8 blur-[120px] pointer-events-none" />

      <div className="relative z-10 flex items-center gap-4 mb-10">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d9468f]/24 bg-[#d9468f]/10 text-[#d9468f] shadow-[0_0_24px_rgba(217,70,143,0.16)]">
          <Sparkles size={26} />
        </div>
        <div>
          <h2 className="text-2xl font-black tracking-[-0.04em] text-white sm:text-3xl">
            Core Competencies
          </h2>
          <p className="mt-1 text-sm font-medium text-[#8f87a0]">
            Hybrid capability across application support, SQL/MySQL & data analysis, software development, Microsoft 365, and structured delivery.
          </p>
        </div>
      </div>

      <div className="relative z-10 grid gap-6 sm:grid-cols-2">
        {skillBlocks.map((block, index) => (
          <SkillCard key={block.title} block={block} index={index} />
        ))}
      </div>
    </section>
  );
}
