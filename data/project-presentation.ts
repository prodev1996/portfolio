export const projectPresentation: Record<
  string,
  {
    title: string;
    category: "Websites" | "Data" | "Software";
    description: string;
    className: string;
    kind: string;
  }
> = {
  "glide-education": {
    title: "Glide Education",
    category: "Websites",
    description:
      "A clearer path from exploring Australia to making an enquiry.",
    className: "glide",
    kind: "Client website",
  },
  "sql-retail-analytics": {
    title: "A closer look at retail",
    category: "Data",
    description:
      "Churn, retention, and revenue explored through PostgreSQL. Built on synthetic data.",
    className: "retail",
    kind: "SQL analysis",
  },
  "prime-roof-care": {
    title: "Prime Roof Care",
    category: "Websites",
    description:
      "A local business, a stronger web presence, and support beyond launch.",
    className: "prime",
    kind: "Client website",
  },
  fixorahub: {
    title: "FixoraHub",
    category: "Software",
    description:
      "Practical tech help with a resilient Next.js and Django foundation.",
    className: "fixora",
    kind: "Independent build",
  },
  "enterprise-compliance-platform": {
    title: "Enterprise compliance",
    category: "Software",
    description:
      "Application configuration, release testing, and UAT at SpaceTel IT.",
    className: "compliance",
    kind: "Enterprise application",
  },
  "sales-dashboard": {
    title: "Northstar sales dashboard",
    category: "Data",
    description:
      "An interactive view of retail and B2B sales, using synthetic transaction data.",
    className: "sales",
    kind: "Python dashboard",
  },
};
