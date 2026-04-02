"use client";

import { motion } from "framer-motion";

const foundation = [
  "I am building on the same strengths that already matter in support work: structure, documentation, analysis, and follow-through.",
  "The focus areas right now are Microsoft cloud tools, automation, and stronger reporting skills.",
  "I want my next layer of growth to make me more useful in support and hybrid technical environments.",
];

const upcomingProjects = [
  {
    title: "Microsoft 365 and admin depth",
    desc: "Continuing to strengthen Intune, Azure, identity, and admin workflows so I can contribute more confidently in modern workplace environments.",
  },
  {
    title: "Automation and scripting",
    desc: "Building more PowerShell and scripting confidence to reduce repetitive work, improve support workflows, and document repeatable fixes.",
  },
  {
    title: "Reporting and analysis",
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
              Growth Areas
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#1d2d25] sm:text-4xl">
              The next layer is deeper systems, automation, and reporting
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[#5e6f65] sm:text-[15px]">
              I want this section to stay honest and useful. Instead of leading
              with future ambitions, it shows the areas I am actively building
              right now to become stronger in support, systems, and
              cross-functional technical roles.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="badge">Intune</span>
              <span className="badge">Azure</span>
              <span className="badge">PowerShell</span>
              <span className="badge">SQL & Reporting</span>
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
                    Active Focus 0{index + 1}
                  </p>
                  <span className="rounded-full bg-[#dff2ea] px-3 py-1 text-xs font-medium text-[#1f9d72]">
                    In Progress
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


