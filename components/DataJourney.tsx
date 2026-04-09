"use client";

import { motion } from "framer-motion";

const foundation = [
  "These are the areas I am actively strengthening because they directly support application support and business systems work.",
  "The focus is practical: Microsoft 365 administration depth, SQL and reporting, and more repeatable support workflows.",
  "This is about expanding capability, not changing the core direction of the portfolio.",
];

const upcomingProjects = [
  {
    title: "Microsoft 365 administration depth",
    desc: "Strengthening Intune, Azure, identity, and admin workflows so I can contribute more confidently in modern workplace environments.",
  },
  {
    title: "PowerShell and repeatable support workflows",
    desc: "Building more PowerShell and scripting confidence to reduce repetitive work, improve support workflows, and document repeatable fixes.",
  },
  {
    title: "SQL and operational reporting",
    desc: "Improving SQL, Excel, and reporting skills so I can turn operational data into clearer summaries, patterns, and practical next steps.",
  },
];

export default function DataJourney() {
  return (
    <section
      id="data-journey"
      className="section-shell mt-20 scroll-mt-52 px-6 py-16 sm:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#1f9d72]">
              Current Focus
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#1d2d25] sm:text-4xl">
              Expanding capability in administration, reporting, and automation
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[#5e6f65] sm:text-[15px]">
              This section is here to show the capability I am actively
              expanding right now, with a focus on the areas that strengthen
              support, business systems, and reporting-focused work.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="badge">Intune</span>
              <span className="badge">Azure</span>
              <span className="badge">PowerShell</span>
              <span className="badge">SQL & Reporting</span>
              <span className="badge">Process Improvement</span>
            </div>

            <div className="mt-8 card">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d7854f]">
                What this means
              </p>
              <ul className="mt-4 space-y-3">
                {foundation.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-7 text-[#33463b]">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#1f9d72]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <div className="grid gap-4">
            {upcomingProjects.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.16 }}
                transition={{ delay: index * 0.07 }}
                className="card"
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#7b877f]">
                    Focus Area 0{index + 1}
                  </p>
                  <span className="rounded-full bg-[#dff2ea] px-3 py-1 text-xs font-medium text-[#1f9d72]">
                    Active
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-[#1d2d25]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#5e6f65]">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


