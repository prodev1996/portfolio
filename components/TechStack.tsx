"use client";

import Section from "@/components/Section";
import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Application Support & Microsoft 365",
    items: [
      "Microsoft 365",
      "Business Applications",
      "SharePoint",
      "Exchange Online",
      "Teams",
      "Account Access & Permissions",
      "Issue Triage",
      "Documentation",
    ],
  },
  {
    title: "Systems & Identity",
    items: [
      "Windows 10/11",
      "Windows Server",
      "Active Directory",
      "Azure AD",
      "Identity Support",
      "User Onboarding",
      "Issue Diagnosis",
      "Workflow Support",
      "Remote Support",
    ],
  },
  {
    title: "Reporting & Automation",
    items: [
      "Excel Reporting",
      "SQL",
      "Structured Data",
      "PowerShell",
      "Process Improvement",
      "Documentation",
    ],
  },
  {
    title: "Web Delivery",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Responsive UI",
      "REST APIs",
      "Hosting & DNS",
      "Production Deployments",
    ],
  },
];

export default function TechStack() {
  return (
    <Section
      id="tech-stack"
      eyebrow="Core Skills"
      title="Tools I use across support, systems, reporting, and web work"
      subtitle="Grouped by how I would use them in an application support or reporting-focused role."
      className="section-shell bg-[linear-gradient(180deg,_rgba(255,255,255,0.28),_rgba(255,255,255,0.02))]"
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
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
