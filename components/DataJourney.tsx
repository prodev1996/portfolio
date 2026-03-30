"use client";

import { motion } from "framer-motion";

const foundation = [
  "Past experience in structured data work gives this transition credibility.",
  "SQL, Excel, and Power BI are the current focus areas I am building on consistently.",
  "I want to move toward analyst roles that combine technical understanding with business usefulness.",
];

const upcomingProjects = [
  {
    title: "SQL analysis case study",
    desc: "A portfolio project that will show data cleaning, exploration, and insight extraction using SQL queries and structured reporting.",
  },
  {
    title: "Excel reporting workflow",
    desc: "A project focused on transforming raw information into business-friendly summaries, trends, and practical recommendations.",
  },
  {
    title: "Power BI dashboard",
    desc: "An interactive reporting example that will demonstrate visual storytelling, metrics, and decision-focused dashboard design.",
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
              Data Analyst Transition
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#1d2d25] sm:text-4xl">
              The next chapter is analytics, and I want to show that honestly
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[#5e6f65] sm:text-[15px]">
              I am actively transitioning into data analyst roles. That means I
              should be transparent: the analyst project portfolio is still in
              progress. But the direction is real, the foundation is real, and
              this site is built to make that progression easy to understand.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="badge">SQL</span>
              <span className="badge">Excel</span>
              <span className="badge">Power BI</span>
              <span className="badge">Reporting Mindset</span>
            </div>

            <div className="mt-8 card">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d7854f]">
                Current positioning
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
                    Planned Portfolio Piece 0{index + 1}
                  </p>
                  <span className="rounded-full bg-[#dff2ea] px-3 py-1 text-xs font-medium text-[#1f9d72]">
                    Coming Soon
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


