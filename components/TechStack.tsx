"use client";

import Section from "@/components/Section";
import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Front-end Development",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Responsive UI",
      "Tailwind CSS",
      "Component-driven builds",
    ],
  },
  {
    title: "Back-end & Data Foundations",
    items: [
      "Django",
      "REST APIs",
      "MySQL / SQLite",
      "SQL",
      "Structured Data",
      "Data Validation",
      "Dashboard Thinking",
    ],
  },
  {
    title: "Support & Business Systems",
    items: [
      "Microsoft 365",
      "Windows Support",
      "Active Directory",
      "Account Management",
      "Troubleshooting",
      "Documentation",
      "User Communication",
    ],
  },
  {
    title: "Professional Strengths",
    items: [
      "Problem Solving",
      "Client Communication",
      "Reliability",
      "Process Improvement",
      "Cross-functional Thinking",
      "Adaptability",
      "Fast Learning",
    ],
  },
];

export default function TechStack() {
  return (
    <Section
      id="tech-stack"
      eyebrow="Development Skills"
      title="The technical toolkit behind the portfolio"
      subtitle="I want this site to show more than interest. It should show capability. These are the tools and strengths that support my web development work today while also supporting my move toward analyst work."
      className="section-shell bg-[linear-gradient(180deg,_rgba(255,255,255,0.28),_rgba(255,255,255,0.02))]"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.16 }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
            className="card"
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#51635a]">
              {group.title}
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-[#31463a]">
              {group.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-[7px] h-2 w-2 rounded-full bg-[#1f9d72]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
