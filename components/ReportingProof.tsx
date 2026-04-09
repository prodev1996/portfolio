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
    title: "SQL and operational analysis",
    desc: "I am building SQL and reporting capability around practical operational questions so the transition into reporting-focused roles has visible proof behind it.",
    points: [
      "SQL fundamentals and structured data work",
      "Reporting-focused learning tied to business use cases",
      "Operational analysis as a clear next capability layer",
    ],
    icon: Database,
  },
  {
    title: "Documentation and process improvement",
    desc: "Across support and delivery work, I keep coming back to the same value: clearer processes, better documentation, and more repeatable ways of working.",
    points: [
      "Turn recurring issues into clearer support notes",
      "Support smoother onboarding, access, and workflow changes",
      "Connect support work with continuous improvement",
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
            Reporting & Data Work
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#1d2d25] sm:text-4xl">
            Support experience that also points toward reporting and process improvement
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#5e6f65] sm:text-[15px]">
            Reporting is not just a future idea on this site. It already shows
            up through data accuracy work, documentation, operational support,
            and the tools I am actively building around SQL, Excel, and repeatable workflows.
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
