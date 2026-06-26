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
    slug: "glide-education",
    title: "Glide Education",
    subtitle: "Consultancy and visa services platform",
    overview:
      "A consultancy website built to make services easier to understand and enquiries easier to start.",
    image: "/projects/glide.png",
    accentImage: "/projects/glide-services.png",
    images: [
      { src: "/projects/glide.png", alt: "Glide Education homepage" },
      {
        src: "/projects/glide-services.png",
        alt: "Glide Education service detail section",
      },
    ],
    liveUrl: "https://www.glideedu.com.au/",
    liveLabel: "glideedu.com.au",
    stack: ["React", "Next.js", "Tailwind CSS", "MySQL"],
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
      "The business needed a website that would immediately feel professional and trustworthy to visitors who were comparing providers and trying to understand services quickly.",
    solution:
      "I structured the site around clear service presentation, stronger visual hierarchy, and a cleaner enquiry path so the business could explain its offer with less friction.",
    outcome:
      "The result was a live production website with clearer services, a simpler enquiry path, and a more professional first impression.",
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
      {
        src: "/projects/prime-gallery.png",
        alt: "Prime Roof Care gallery and service detail view",
      },
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
      "The business needed a cleaner online presence that would explain services quickly, feel trustworthy for local customers, and support enquiries without overwhelming visitors.",
    solution:
      "I built the site around fast comprehension, practical service sections, and responsive layouts that keep the business easy to understand across devices.",
    outcome:
      "The finished website gives the business a more professional online presence and a clearer path for visitors to move from browsing into enquiry.",
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
