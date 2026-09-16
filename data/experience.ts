export type Domain = "support" | "data" | "dev";

export type ExperienceEntry = {
  company: string;
  role: string;
  location: string;
  period: string;
  domains: Domain[];
  bullets: string[];
};

// Single source of truth for work history — shown in full on both the
// homepage timeline and the résumé, filterable by domain.
export const experience: ExperienceEntry[] = [
  {
    company: "SpaceTel IT",
    role: "Software Developer Intern",
    location: "Adelaide, SA",
    period: "May 2026 – Aug 2026",
    domains: ["dev", "support"],
    bullets: [
      "Supported the administration and testing of a multi-role enterprise compliance platform, translating business requirements into system configurations.",
      "Configured workflows, system access roles, and permission hierarchies across end-user categories.",
      "Managed full defect lifecycles and coordinated pre-release UAT regression testing prior to production deployment.",
    ],
  },
  {
    company: "Adorable Home Care & Northern Disability",
    role: "Disability Support Worker (Part-time)",
    location: "Adelaide, SA",
    period: "2024 – Present",
    domains: ["support"],
    bullets: [
      "Work within regulated care environments across two providers, maintaining accurate digital case notes, incident records and shift handovers in line with privacy legislation, organisational policy and care quality requirements.",
      "Developed first-hand understanding of the systems, compliance documentation and quality standards that underpin safe care delivery.",
    ],
  },
  {
    company: "Sole Trader / Contract",
    role: "Application Support & IT Support Consultant",
    location: "Remote / Australia",
    period: "2022 – Present",
    domains: ["support", "data"],
    bullets: [
      "Administer business applications across Microsoft 365, SharePoint, Teams, and custom web platforms.",
      "Write procedural user guides, release documentation, and change notes for non-technical stakeholders.",
      "Execute T-SQL and MySQL queries for data retrieval, validation, and reporting accuracy checks.",
    ],
  },
  {
    company: "Eydean Inc",
    role: "Application Support Developer",
    location: "Kathmandu, Nepal",
    period: "Dec 2020 – Mar 2022",
    domains: ["support", "dev"],
    bullets: [
      "Supported production React/Node web applications, managing defect resolution, API integration testing, and query optimization.",
    ],
  },
  {
    company: "CloudFactory",
    role: "Data Specialist",
    location: "Kathmandu, Nepal",
    period: "Nov 2017 – Nov 2020",
    domains: ["data"],
    bullets: [
      "Performed data validation, data review, quality assurance and accuracy checks across large volumes of structured digital data.",
      "Identified data errors, corrected inconsistencies and ensured outputs met required quality standards and project guidelines.",
      "Worked with web-based platforms and internal tools to process, verify and maintain accurate information.",
      "Collaborated with team members and supervisors to meet deadlines, improve data quality and support project delivery.",
      "Developed strong attention to detail, analytical thinking, problem-solving and documentation skills.",
    ],
  },
];
