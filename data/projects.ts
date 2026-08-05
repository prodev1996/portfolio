export type ProjectImage = {
  src: string;
  alt: string;
};

export type PortfolioProject = {
  slug: string;
  title: string;
  subtitle: string;
  overview: string;
  image: string;
  accentImage: string;
  images: ProjectImage[];
  liveUrl: string;
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
      "Included support after launch, not just the initial delivery.",
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
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
