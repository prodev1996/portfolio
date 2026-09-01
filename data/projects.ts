export type ProjectImage = {
  src: string;
  alt: string;
};

export type PortfolioProject = {
  slug: string;
  title: string;
  subtitle: string;
  impact: string;
  overview: string;
  image: string;
  accentImage: string;
  images: ProjectImage[];
  liveUrl: string;
  githubUrl?: string;
  liveLabel: string;
  stack: string[];
  businessGoal: string;
  role: string;
  measurableOutcome: string;
  trustSignals: string[];
  proofPoints: string[];
  skillsShown: string[];
  supportProof: string[];
  takeaway: string;
  challenge: string;
  solution: string;
  outcome: string;
  supportValue: string[];
};

export const projects: PortfolioProject[] = [
  {
    slug: "enterprise-compliance-platform",
    title: "Enterprise Compliance Assessment Platform",
    subtitle: "Multi-role compliance assessment and QMS support",
    impact: "Cut release risk by owning the full defect lifecycle and coordinating UAT before every production deployment.",
    overview:
      "Administration, testing, and release management of a role-based enterprise compliance platform, configuring workflows, managing access controls, coordinating UAT, and managing the full defect lifecycle.",
    image: "/projects/compliance-platform-cover.svg",
    accentImage: "/projects/compliance-platform-cover.svg",
    images: [],
    liveUrl: "",
    liveLabel: "SpaceTel IT, Adelaide",
    stack: ["React", "Spring Boot", "PostgreSQL", "Selenium", "JUnit"],
    businessGoal:
      "Support the ongoing administration and quality assurance of a multi-role compliance platform used across Admin, Auditor, and Client roles.",
    role: "Software Developer Intern: configuration, testing, release management, and defect lifecycle",
    measurableOutcome:
      "Managed end-to-end defect lifecycle, coordinated pre-production UAT, and produced release summaries and test reports for stakeholder approval.",
    trustSignals: [
      "Live enterprise compliance platform",
      "Multi-role system administration",
      "Release and defect management",
    ],
    proofPoints: [
      "Configured workflows, system access, form setup, and evidence-handling processes across multiple user roles.",
      "Reviewed release notes and coordinated testing with key users prior to each production deployment.",
      "Managed the full defect lifecycle including logging, reproduction steps, developer liaison, and retest before release.",
    ],
    skillsShown: [
      "Enterprise application administration",
      "Compliance workflow configuration",
      "UAT coordination and release management",
      "Defect lifecycle management",
    ],
    supportProof: [
      "Collaborated with business users and stakeholders to translate requirements into functional system configurations.",
      "Produced user documentation and supported end-user adoption across multiple business roles.",
      "Tailored communication for both technical and non-technical audiences throughout the project lifecycle.",
    ],
    takeaway:
      "This role reflects systems-level ownership, quality assurance discipline, and clear stakeholder communication in a production environment.",
    challenge:
      "A compliance platform with multiple user roles required careful configuration, thorough testing before each release, and structured defect management.",
    solution:
      "I worked closely with business users to understand requirements, configured the system accordingly, and managed a structured UAT and defect process to validate every change before sign-off.",
    outcome:
      "Delivered reliable release cycles with documented test reports, structured defect logs, and user documentation across multiple production deployments.",
    supportValue: [
      "Demonstrates real enterprise application support ownership beyond helpdesk-level work.",
      "Shows structured QA and release management discipline in a live compliance environment.",
      "Directly applicable to application support, business systems analyst, and QMS platform roles.",
    ],
  },
  {
    slug: "glide-education",
    title: "Glide Education",
    subtitle: "Consultancy and visa services platform",
    impact: "Shipped a live client site end-to-end and kept it running with ongoing production support.",
    overview:
      "A consultancy website built to make services easier to understand and enquiries easier to start.",
    image: "/projects/glide.png",
    accentImage: "/projects/glide-services.png",
    images: [
      { src: "/projects/glide.png", alt: "Glide Education homepage" },
      { src: "/projects/glide-services.png", alt: "Glide Education service detail section" },
    ],
    liveUrl: "https://www.glideedu.com.au/",
    liveLabel: "glideedu.com.au",
    stack: ["React", "Next.js", "Node.js", "Tailwind CSS", "MySQL"],
    businessGoal:
      "Create a clearer website so prospective students and clients could understand services and enquire with more confidence.",
    role: "End-to-end website build and deployment",
    measurableOutcome:
      "Live production site launched and maintained with enquiry flow, deployment setup, and ongoing production updates handled.",
    trustSignals: [
      "Live production site",
      "Client-facing service business",
      "Hosting and deployment managed",
    ],
    proofPoints: [
      "Planned the structure around trust, service clarity, and enquiry flow.",
      "Built the front-end experience with reusable sections and responsive layouts.",
      "Handled deployment setup, domain connection, production updates, and post-launch support.",
    ],
    skillsShown: [
      "Modern responsive UI design",
      "Content hierarchy for service-heavy businesses",
      "Front-end implementation with reusable structure",
      "Trust-building presentation for a real client brand",
    ],
    supportProof: [
      "Turned client requirements into a practical business website.",
      "Handled deployment, DNS, SSL, and post-launch support.",
      "Managed live-site updates and production issues beyond the initial build.",
    ],
    takeaway:
      "This project reflects the kind of work I enjoy: understanding the business need, building the solution, and supporting it after launch.",
    challenge:
      "The business needed a website that would immediately feel professional and trustworthy to visitors comparing providers.",
    solution:
      "I structured the site around clear service presentation, stronger visual hierarchy, and a cleaner enquiry path.",
    outcome:
      "A live production website with clearer services, a simpler enquiry path, and a more professional first impression.",
    supportValue: [
      "Connects business needs with a practical digital solution.",
      "Covers ownership beyond design, including deployment, troubleshooting, and production updates.",
      "Fits analyst-style roles that need user-facing communication and technical follow-through.",
    ],
  },
  {
    slug: "prime-roof-care",
    title: "Prime Roof Care",
    subtitle: "Service business website for enquiries and trust",
    impact: "Gave a local business a clearer enquiry path, launched and supported past go-live.",
    overview:
      "A service-business website built around clear services, local trust, and simple enquiry paths.",
    image: "/projects/primeroof.png",
    accentImage: "/projects/prime-gallery.png",
    images: [
      { src: "/projects/primeroof.png", alt: "Prime Roof Care homepage" },
      { src: "/projects/prime-gallery.png", alt: "Prime Roof Care gallery and service detail view" },
    ],
    liveUrl: "https://www.primeroofcare.com.au/",
    liveLabel: "primeroofcare.com.au",
    stack: ["HTML", "CSS", "Tailwind CSS", "Responsive Design"],
    businessGoal:
      "Give a local service business a clearer online presence that explains services quickly, builds trust, and supports customer enquiries.",
    role: "Website build, launch support, and ongoing updates",
    measurableOutcome:
      "Live service site launched with ongoing content and hosting updates supported after go-live.",
    trustSignals: [
      "Live production site",
      "Local service brand",
      "Content and hosting updates handled",
    ],
    proofPoints: [
      "Structured the site so visitors understand services quickly on mobile and desktop.",
      "Designed the pages around enquiries, trust, and practical business needs.",
      "Supported post-launch updates to keep the website current, usable, and easier to maintain.",
    ],
    skillsShown: [
      "Business-focused web page structure",
      "Responsive implementation across screen sizes",
      "Conversion-aware layout decisions",
      "Clean visual execution for a local service brand",
    ],
    supportProof: [
      "Kept supporting the site well after it shipped, instead of walking away once it launched.",
      "Covered content changes, hosting, and live updates.",
      "Required practical problem solving in production-facing work.",
    ],
    takeaway:
      "This project reflects real client work: build the site, support it, and keep the content clear after launch.",
    challenge:
      "The business needed a cleaner online presence that would explain services quickly and support enquiries.",
    solution:
      "I built the site around fast comprehension, practical service sections, and responsive layouts.",
    outcome:
      "A more professional online presence with a clearer path for visitors to move from browsing into enquiry.",
    supportValue: [
      "Connects real client delivery with practical business outcomes.",
      "Includes responsiveness, content clarity, and post-launch support.",
      "Fits hybrid roles where web updates, communication, and analyst-style ownership overlap.",
    ],
  },
  {
    slug: "sql-retail-analytics",
    title: "SQL Retail Analytics",
    subtitle: "SQL-first retail analysis: cohorts, churn risk, and window functions",
    impact: "Automated churn-risk and cohort queries, each verified by a data-integrity test suite.",
    overview:
      "A SQL-first analysis of a synthetic retail dataset, 600 customers and roughly 3,200 orders spanning early 2023 to mid-2025, using CTEs, window functions, and cohort analysis.",
    image: "/projects/sql-retail-analytics-cover.svg",
    accentImage: "/projects/sql-retail-analytics-cover.svg",
    images: [],
    liveUrl: "",
    githubUrl: "https://github.com/prodev1996/sql-retail-analytics",
    liveLabel: "github.com/prodev1996/sql-retail-analytics",
    stack: ["SQL", "Python", "Jupyter Notebook", "pytest"],
    businessGoal:
      "Prove out real analyst SQL on a dataset realistic enough to have something genuine to say about customer behaviour.",
    role: "Solo build: schema design, synthetic data generation, SQL analysis, and testing",
    measurableOutcome:
      "Five standalone SQL queries answering specific business questions, each backed by an executed, documented notebook and a data-integrity pytest suite.",
    trustSignals: [
      "Normalized relational schema",
      "Window functions & cohort analysis",
      "Data-integrity test suite",
    ],
    proofPoints: [
      "Designed a normalized schema (customers, orders, order_items, products, categories) and a deterministic synthetic data generator with built-in seasonality, loyalty variance, and a churn tail.",
      "Wrote five independent SQL queries covering revenue trend with month-over-month growth (LAG()), customer lifetime value (DENSE_RANK()), product ranking within category (RANK() PARTITION BY), signup-cohort retention, and a gap-ratio churn-risk model.",
      "Built a pytest suite checking referential integrity, value ranges, and that every analysis query actually executes and returns rows.",
    ],
    skillsShown: [
      "Advanced SQL (CTEs, window functions)",
      "Relational schema design",
      "Cohort & churn analysis",
      "Data-integrity testing",
    ],
    supportProof: [
      "Wrote up findings for each query directly in the notebook, with committed outputs so the analysis is readable on GitHub without running anything.",
      "Used a gap-ratio churn rule (a customer's current order gap versus their own historical average) instead of a flat days-since-last-order cutoff, for a more personalised at-risk list.",
      "Documented setup, data generation, and how to reproduce every result from scratch.",
    ],
    takeaway:
      "This project is the clearest evidence of where I'm heading: real SQL analysis on the way to data engineering.",
    challenge:
      "It's easy to demonstrate basic SQL with a SELECT and a GROUP BY. It's harder to show the kind of analysis an actual analyst does, ranking, cohorts, and behaviour-based risk models, on data realistic enough for the findings to mean something.",
    solution:
      "I built a normalized schema and a synthetic data generator with real seasonality and churn patterns, then wrote five independent SQL queries using CTEs and window functions, each validated by a pytest data-integrity suite.",
    outcome:
      "A working, tested analysis with documented findings: revenue seasonality, a long-tail customer value distribution, category-leading products, and a personalised churn-risk model, all runnable and readable directly on GitHub.",
    supportValue: [
      "Directly demonstrates the SQL depth that data analyst and data engineering roles look for.",
      "Shows testing discipline carried over into data work, on top of application code.",
      "The strongest single piece of evidence for the data engineering trajectory.",
    ],
  },
  {
    slug: "sales-dashboard",
    title: "Northstar Sales Dashboard",
    subtitle: "Interactive sales analytics dashboard, Streamlit + Plotly",
    impact: "Turned raw sales data into a filterable, decision-ready dashboard with live KPI tracking.",
    overview:
      "A Streamlit sales dashboard with generated sample data, interactive filters, KPI cards, and revenue, regional, product, and channel breakdowns.",
    image: "/projects/sales-dashboard-cover.svg",
    accentImage: "/projects/sales-dashboard-cover.svg",
    images: [],
    liveUrl: "",
    githubUrl: "https://github.com/prodev1996/sales-dashboard",
    liveLabel: "github.com/prodev1996/sales-dashboard",
    stack: ["Python", "Streamlit", "Pandas", "Plotly"],
    businessGoal:
      "Practice turning raw sales data into a dashboard someone could actually use to make decisions.",
    role: "Solo build: data generation, analysis logic, and dashboard UI",
    measurableOutcome:
      "A working interactive dashboard with KPI cards for revenue, orders, profit, and average order value, filterable by date range, region, segment, and channel.",
    trustSignals: [
      "Interactive Streamlit app",
      "Filterable by date, region, segment, channel",
      "Pandas + Plotly analysis",
    ],
    proofPoints: [
      "Built a deterministic sample sales dataset generator so the dashboard has realistic data to work with out of the box.",
      "Implemented KPI cards for revenue, orders, profit, and average order value, alongside revenue trend, regional performance, top products, and channel mix visuals.",
      "Added a performance summary table for quickly slicing results by region and customer segment.",
    ],
    skillsShown: [
      "Data visualization (Plotly)",
      "Interactive filtering & state",
      "Pandas data manipulation",
      "Dashboard/UI design for analytics",
    ],
    supportProof: [
      "Structured the project cleanly: app, sample-data generator, and requirements kept separate for easy setup.",
      "Documented setup for both standard virtual environments and workspace-local installs, for machines where venv creation is restricted.",
    ],
    takeaway:
      "This is the kind of dashboard work that sits right at the intersection of my SQL and data background and the reporting support roles I'm aiming at.",
    challenge:
      "Sales data is only useful if the person looking at it can slice it the way they actually think about the business, by region, channel, and time period, without digging through raw spreadsheets.",
    solution:
      "I built interactive filters into the dashboard so revenue, orders, and profit all update live, backed by a generated dataset with realistic seasonality and variance.",
    outcome:
      "A working dashboard covering the KPIs, trends, and breakdowns a sales or ops team would actually want to check regularly.",
    supportValue: [
      "Demonstrates practical data analysis and visualization skill.",
      "Shows comfort translating raw data into decision-ready views.",
      "Directly applicable to data analyst and reporting support roles.",
    ],
  },
  {
    slug: "fixorahub",
    title: "FixoraHub",
    subtitle: "AI-assisted tech-help platform, full-stack build",
    impact: "Built a content platform that degrades gracefully and stays online even when the AI or API is down.",
    overview:
      "A tech-help platform for practical troubleshooting guides, built end-to-end: Next.js frontend, Django REST backend, and an AI-assisted fix path for common tech problems.",
    image: "/projects/fixorahub-cover.svg",
    accentImage: "/projects/fixorahub-cover.svg",
    images: [],
    liveUrl: "",
    githubUrl: "https://github.com/prodev1996/fixorahub",
    liveLabel: "github.com/prodev1996/fixorahub",
    stack: ["Next.js", "TypeScript", "Django REST Framework", "Tailwind CSS", "PostgreSQL"],
    businessGoal:
      "Build a genuinely useful self-serve troubleshooting resource, starting with the Microsoft 365, Windows, and small-business IT problems people actually search for.",
    role: "Solo full-stack build: frontend, backend, content system, and AI integration",
    measurableOutcome:
      "A working MVP with a Django-backed content system, an AI Fix Assistant endpoint, and SSG guide pages that revalidate on a schedule and fall back to seed data if the API is offline.",
    trustSignals: [
      "Full-stack Next.js + Django build",
      "AI-assisted troubleshooting",
      "Admin CMS for content",
    ],
    proofPoints: [
      "Built a Django REST Framework backend with an admin CMS for articles, categories, and guides, including draft preview links and bulk publish and unpublish workflows.",
      "Wired an AI Fix Assistant endpoint with an OpenAI-ready service and a local fallback, so the feature degrades gracefully without a key configured.",
      "Set up static, incrementally revalidated guide pages that refresh every 5 minutes and fall back to local seed data if the API is unavailable, keeping the site resilient.",
    ],
    skillsShown: [
      "Full-stack architecture (Next.js + Django REST)",
      "Content modeling & admin tooling",
      "API integration with graceful fallbacks",
      "SSG/ISR content strategy",
    ],
    supportProof: [
      "Designed the data model end-to-end: articles, categories, AI fix requests, product recommendations, contact leads, newsletter, and article feedback.",
      "Built contact, newsletter, and feedback API endpoints alongside the content system.",
      "Wrote setup and local-development documentation covering both the frontend and backend.",
    ],
    takeaway:
      "This project is where the software development side of my background actually lives: an end-to-end build across frontend, backend, and content architecture.",
    challenge:
      "A useful troubleshooting site needs to work even when its AI features or backend are unavailable, and needs a content workflow that doesn't require touching code to publish a guide.",
    solution:
      "I built the content system in Django with a proper admin workflow (validation, draft previews, bulk actions), and made the frontend degrade gracefully: static pages with scheduled revalidation and a local seed-data fallback if the API goes down.",
    outcome:
      "A working MVP with the core content pipeline, AI-assisted fix suggestions, and lead-capture endpoints in place, structured to grow into a genuine content and tools resource.",
    supportValue: [
      "Shows full-stack ownership beyond a single framework.",
      "Demonstrates resilient system design: fallbacks and graceful degradation.",
      "Directly relevant to software developer and application support roles that touch both frontend and backend.",
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
