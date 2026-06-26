"use client";

import { motion } from "framer-motion";

const foundation = [
  "I am strengthening these areas because they directly support application support and reporting work.",
  "The focus is practical: Microsoft 365 administration, SQL reporting, and repeatable support workflows.",
  "This builds on the same direction rather than changing it.",
];

const upcomingProjects = [
  {
    title: "Microsoft 365 administration depth",
    desc: "Building more confidence with Intune, Azure, identity, and admin workflows used in modern workplace environments.",
  },
  {
    title: "PowerShell and repeatable support workflows",
    desc: "Practising scripts and repeatable fixes that can reduce manual work and make support steps easier to document.",
  },
  {
    title: "SQL and operational reporting",
    desc: "Improving SQL, Excel, and reporting skills to turn operational data into clearer summaries and next steps.",
  },
];

const reportingProof = [
  {
    title: "Reporting and data accuracy",
    desc: "Operational reporting, records, and data accuracy work using Excel and Microsoft 365 in a busy environment.",
    points: [
      "Supported reporting and record accuracy tasks",
      "Improved digital organisation to reduce manual errors",
      "Worked across admin, ICT, and data support tasks",
    ],
  },
  {
    title: "Sales Dashboard (Power BI)",
    desc: "Planned case study focused on KPIs, sales trends, category performance, and business-facing visuals.",
    points: [
      "KPI cards, trend lines, and summary visuals",
      "Revenue, profit, and top-product insights",
      "Will become the main reporting case study on the site",
    ],
  },
  {
    title: "SQL analysis project",
    desc: "Planned SQL case study focused on joins, grouping, and business questions around customers, products, and sales trends.",
    points: [
      "JOIN, GROUP BY, filtering, and aggregation",
      "Customer and sales analysis queries",
      "Shows practical analysis thinking, not just syntax",
    ],
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
              Building depth in administration, reporting, and automation
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[#5e6f65] sm:text-[15px]">
              These are the areas I am actively improving because they make me
              stronger in application support and reporting-focused work.
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

        <div className="mt-12">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#1f9d72]">
              Data & Reporting Projects
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#1d2d25] sm:text-3xl">
              Reporting work now, plus the data projects being built next
            </h3>
            <p className="mt-4 text-sm leading-7 text-[#5e6f65] sm:text-[15px]">
              I have already worked with records and reporting in operations.
              The Power BI and SQL projects are the next portfolio pieces I am
              building to show that direction more clearly.
            </p>
          </div>

          <div className="mt-8 grid gap-4 xl:grid-cols-3">
            {reportingProof.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.16 }}
                transition={{ delay: index * 0.06 }}
                className="card"
              >
                <h3 className="text-xl font-semibold text-[#1d2d25]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#5e6f65]">
                  {item.desc}
                </p>
                <ul className="mt-5 space-y-2 text-sm text-[#31463a]">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#1f9d72]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


