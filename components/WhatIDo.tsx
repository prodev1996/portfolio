"use client";

import { motion } from "framer-motion";
import { FaChartBar, FaCogs, FaLaptopCode } from "react-icons/fa";

const pillars = [
  {
    icon: <FaCogs />,
    title: "Application support and technical reliability",
    desc: "I can work close to users, systems, and day-to-day operations. That includes troubleshooting, communication, documentation, and keeping business tools usable.",
    bullets: ["User-facing support mindset", "Practical problem solving", "Microsoft 365 and business systems awareness"],
  },
  {
    icon: <FaLaptopCode />,
    title: "Full stack development that looks professional",
    desc: "My portfolio already demonstrates web development skill through client-facing projects built with modern front-end tools, clear structure, and polished presentation.",
    bullets: ["React and Next.js delivery", "Responsive UI and modern layouts", "Backend-ready thinking and real deployment workflow"],
  },
  {
    icon: <FaChartBar />,
    title: "A credible transition into data analytics",
    desc: "I am not pretending the data portfolio is finished yet. Instead, I am showing the right foundation: data experience, analytical tools, and a clear direction into analyst work.",
    bullets: ["SQL, Excel, and Power BI growth", "Previous structured data experience", "Analytics portfolio section ready to expand"],
  },
];

const hireReasons = [
  "You get someone who can both support systems and build.",
  "I communicate clearly with technical and non-technical people.",
  "My experience spans support, development, and structured data work.",
  "I am actively growing into analyst work without hiding where I am today.",
];

export default function WhatIDo() {
  return (
    <section
      id="what-i-do"
      className="section-shell mt-16 scroll-mt-40 px-6 py-16 sm:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#1f9d72]">
            Why Me
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#1d2d25] sm:text-4xl">
            A profile that is useful now and still growing in the right direction
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#5e6f65] sm:text-[15px]">
            This portfolio is designed to show hiring managers the full picture:
            strong web development skills, a dependable support mindset, and a
            genuine transition into data analyst work that is already underway.
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

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {hireReasons.map((reason, index) => (
            <motion.div
              key={reason}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="soft-panel rounded-[24px] px-5 py-5"
            >
              <p className="text-sm leading-6 text-[#33463b]">{reason}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


