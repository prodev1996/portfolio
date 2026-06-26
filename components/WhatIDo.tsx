"use client";

import { motion } from "framer-motion";
import { FaChartBar, FaCogs, FaLaptopCode } from "react-icons/fa";

const pillars = [
  {
    icon: <FaCogs />,
    title: "Application Support",
    desc: "I work with users, business systems, and day-to-day operations to resolve issues and keep tools usable.",
    bullets: ["Business applications and Microsoft 365 support", "Issue triage, access support, and troubleshooting", "Clear communication with dependable follow-through"],
  },
  {
    icon: <FaChartBar />,
    title: "Reporting & Process Improvement",
    desc: "I have worked with records, reporting, and documentation, and I am building further into SQL and Power BI.",
    bullets: ["Excel reporting and data accuracy support", "SQL, reporting, and PowerShell practice", "Process improvement through clearer documentation"],
  },
  {
    icon: <FaLaptopCode />,
    title: "Web Delivery",
    desc: "My web projects show that I can take a real request, build it, launch it, and support it after go-live.",
    bullets: ["Live client projects in production", "Deployment, DNS, SSL, and ongoing updates", "Requirements turned into practical digital solutions"],
  },
];

export default function WhatIDo() {
  return (
    <section
      id="what-i-do"
      className="section-shell mt-16 scroll-mt-52 px-6 py-16 sm:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#1f9d72]">
            What I Bring
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#1d2d25] sm:text-4xl">
            Support first, reporting next, with real delivery work behind it
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#5e6f65] sm:text-[15px]">
            I keep the focus simple: help users, understand systems, document
            clearly, and use reporting to make day-to-day work easier.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 xl:grid-cols-3">
          {pillars.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#dff2ea] text-lg text-[#1f9d72]">
                {item.icon}
              </div>

              <h3 className="mt-5 text-xl font-semibold text-[#1e2f26]">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#5e6f65]">
                {item.desc}
              </p>

              <ul className="mt-5 space-y-2 text-sm text-[#31463a]">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#1f9d72]" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}


