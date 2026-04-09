"use client";

import { motion } from "framer-motion";
import { BarChart3, Database, FileSpreadsheet } from "lucide-react";

const proofAreas = [
  {
    title: "Reporting and data accuracy",
    desc: "At SA Mushrooms, I supported reporting, records, and data accuracy work using Excel and Microsoft 365 in a fast-moving operational environment.",
    points: [
      "Supported reporting and record accuracy tasks",
      "Reduced manual errors through better digital organisation",
      "Worked in a role that mixed admin, ICT, and data support",
    ],
    icon: FileSpreadsheet,
  },
  {
    title: "Sales Dashboard (Power BI)",
    desc: "Planned case study for a Power BI dashboard focused on KPIs, sales trends, category performance, and business-facing visuals.",
    points: [
      "KPIs, trend lines, and summary visuals",
      "Revenue, profit, and top-product insights",
      "Will become the main reporting case study on the site",
    ],
    icon: Database,
  },
  {
    title: "SQL analysis project",
    desc: "Planned SQL case study focused on joins, grouping, and business questions such as customer, product, and sales analysis.",
    points: [
      "JOIN, GROUP BY, filtering, and aggregation",
      "Customer and sales analysis queries",
      "Will show practical data analysis thinking, not just syntax",
    ],
    icon: BarChart3,
  },
];

export default function ReportingProof() {
  return (
    <section
      id="reporting-proof"
      className="section-shell mt-20 scroll-mt-52 px-6 py-16 sm:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#1f9d72]">
            Data & Reporting Projects
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#1d2d25] sm:text-4xl">
            Current proof now, plus the data case studies being built next
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#5e6f65] sm:text-[15px]">
            This section shows the reporting work already present in my
            experience, while also making space for the two data portfolio
            projects that will strengthen the transition into analytics:
            a Power BI sales dashboard and an SQL analysis case study.
          </p>
        </div>

        <div className="mt-10 grid gap-6 xl:grid-cols-3">
          {proofAreas.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="card"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#dff2ea] text-[#1f9d72]">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-[#1d2d25]">
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
    </section>
  );
}
