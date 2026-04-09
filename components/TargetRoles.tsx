"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";

const roles = [
  "Application Support Analyst",
  "Business Systems Support",
  "Microsoft 365 / Service Desk Support",
  "Reporting / Data Support Analyst",
  "Hybrid support + delivery roles",
];

export default function TargetRoles() {
  return (
    <section
      id="target-roles"
      className="section-shell -mt-2 scroll-mt-52 px-6 py-8 sm:px-8 sm:py-10 lg:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <div className="soft-panel rounded-[30px] px-6 py-6 sm:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#1f9d72]">
                Target Roles
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#1d2d25] sm:text-3xl">
                The clearest fit is application support and business systems work
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#5b6d63] sm:text-[15px]">
                The site still shows web delivery because it proves ownership,
                problem solving, and production support, but the primary career
                direction is application support, business systems, and
                reporting-aware technical work.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:max-w-xl">
              {roles.map((role, index) => (
                <motion.div
                  key={role}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-[22px] border border-[#dfe7de] bg-white/80 px-4 py-4"
                >
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-[#e8f6ef] p-2 text-[#1f9d72]">
                      <BriefcaseBusiness className="h-4 w-4" />
                    </div>
                    <p className="text-sm font-medium leading-6 text-[#2e4337]">
                      {role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
