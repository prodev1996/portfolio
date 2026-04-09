"use client";

import { motion } from "framer-motion";

const experience = [
  {
    period: "Mar 2022 - Present",
    track: "Support & Systems",
    role: "IT Application Support Consultant",
    company: "Freelance / Contract",
    location: "Adelaide, Australia",
    summary:
      "Supporting Microsoft 365, business applications, and user workflows for small-business clients with a focus on issue analysis, reliability, troubleshooting, and practical delivery.",
    points: [
      "Provided application support across Microsoft 365 and Windows environments, helping users resolve day-to-day system and workflow issues.",
      "Supported SharePoint, Outlook, Teams, and web-based systems used in business operations.",
      "Managed onboarding, permissions, access control, and account changes across Microsoft 365 and related tools.",
      "Delivered and continue to maintain 2 live client websites, including hosting, DNS, SSL, and production updates.",
    ],
  },
  {
    period: "Dec 2024 - May 2025",
    track: "Operations + Reporting",
    role: "Administrative Assistant (ICT and Data Support)",
    company: "SA Mushrooms",
    location: "Waterloo Corner, South Australia",
    summary:
      "Blended reporting, administration, and technical support responsibilities in a fast-moving business environment where accuracy, communication, and structured follow-through mattered.",
    points: [
      "Supported records, reporting, and data accuracy tasks using Excel and Microsoft 365 tools.",
      "Helped staff with device, login, shared-drive, and day-to-day business system issues.",
      "Improved documentation flow and reduced manual errors through better digital organisation.",
      "Assisted with access issues, system usage questions, and escalation of more complex incidents.",
    ],
  },
  {
    period: "Dec 2020 - Mar 2022",
    track: "Web Development",
    role: "Full Stack Developer",
    company: "Eydean",
    location: "Kathmandu, Nepal",
    summary:
      "Built and maintained web applications with a strong balance of implementation, collaboration, and user-facing product thinking.",
    points: [
      "Developed web applications using modern full-stack technologies and API-driven workflows.",
      "Implemented REST APIs, authentication, and role-based access control.",
      "Worked with designers and stakeholders to deliver stable features on schedule.",
      "Improved front-end performance and overall usability across web products.",
    ],
  },
  {
    period: "Nov 2017 - Sep 2020",
    track: "Data Quality",
    role: "Data Specialist",
    company: "CloudFactory",
    location: "Kathmandu, Nepal",
    summary:
      "Built discipline in structured data work through high-volume processing, validation, and quality-focused execution.",
    points: [
      "Processed and validated large datasets with strong attention to quality standards.",
      "Worked within structured workflows while meeting productivity targets and deadlines.",
      "Maintained accuracy, confidentiality, and consistency across client requirements.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-shell mt-20 scroll-mt-52 px-6 py-16 sm:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#1f9d72]">
            Experience
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#1d2d25] sm:text-4xl">
            Experience that connects support, business systems, and operational work
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#5e6f65] sm:text-[15px]">
            This background is strongest when it is read as one story, not
            separate jobs. I have supported users, worked with business systems,
            built web products, and operated in structured environments, which
            makes me well suited to roles that need technical range,
            dependability, issue analysis, and clear communication.
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="soft-panel rounded-[28px] px-6 py-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d7854f]">
              What this experience shows
            </p>
            <p className="mt-3 text-sm leading-7 text-[#4e6056]">
              I can contribute in roles where business application support,
              digital delivery, and continuous improvement overlap. The best fit
              is in application support, business systems, and reporting-aware
              technical roles where a practical, user-aware mindset is valuable.
            </p>
          </div>

          <div className="card">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d7854f]">
              Strongest themes
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "Application Support",
                "Business Systems",
                "Microsoft 365",
                "Reporting",
                "Problem Solving",
                "Reporting & Documentation",
                "Stakeholder Communication",
              ].map((item) => (
                <span key={item} className="badge">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 space-y-6">
          {experience.map((item, i) => (
            <motion.div
              key={`${item.role}-${item.company}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05 }}
              className="card grid gap-5 lg:grid-cols-[190px_1fr]"
            >
              <div className="space-y-3">
                <p className="inline-flex rounded-full bg-[#e1f3eb] px-3 py-1 text-sm font-medium text-[#1f9d72]">
                  {item.period}
                </p>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a877e]">
                  {item.track}
                </p>
              </div>

              <div>
                <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-[#1d2d25]">
                      {item.role}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-[#42564a]">
                      {item.company} • {item.location}
                    </p>
                  </div>
                </div>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-[#5e6f65]">
                  {item.summary}
                </p>

                <ul className="mt-4 space-y-3">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-sm leading-7 text-[#33463b]"
                    >
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#1f9d72]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


