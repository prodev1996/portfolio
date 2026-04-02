"use client";

import Section from "@/components/Section";
import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "ICT Support",
    items: [
      "Microsoft 365",
      "Windows Support",
      "Active Directory",
      "Azure AD",
      "SharePoint",
      "Exchange Online",
      "Teams",
      "Account Access & Permissions",
      "Troubleshooting",
      "Documentation",
    ],
  },
  {
    title: "Systems & Device Support",
    items: [
      "Windows 10/11",
      "Windows Server",
      "Device Setup",
      "Software Installation",
      "Updates & Issue Diagnosis",
      "Printer & User Support",
      "Remote Support",
      "Workflow Support",
    ],
  },
  {
    title: "Networking & Platform",
    items: [
      "TCP/IP",
      "LAN / WAN Basics",
      "DNS / DHCP",
      "VPN Support",
      "Hosting & DNS",
      "SSL Setup",
      "Production Deployments",
      "Environment Updates",
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
    ],
  },
  {
    title: "Development & Data Foundations",
    items: [
      "Node.js",
      "Django",
      "REST APIs",
      "SQL",
      "MySQL",
      "Structured Data",
      "Testing & Iteration",
      "Cross-functional Support",
    ],
  },
  {
    title: "Working Style",
    items: [
      "Problem Solving",
      "User Communication",
      "Reliability",
      "Ticket Management",
      "Process Improvement",
      "Client Communication",
      "Adaptability",
      "Fast Learning",
    ],
  },
];

export default function TechStack() {
  return (
    <Section
      id="tech-stack"
      eyebrow="Core Skills"
      title="The toolkit behind support work and delivery"
      subtitle="I want this site to show more than interest. It should show capability across the tools, systems, and habits that help me support users, solve issues, and ship clean technical work."
      className="section-shell bg-[linear-gradient(180deg,_rgba(255,255,255,0.28),_rgba(255,255,255,0.02))]"
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
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
