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
  role: string;
  trustSignals: string[];
  proofPoints: string[];
  skillsShown: string[];
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
      "A consultancy website designed to feel more credible, easier to navigate, and more trustworthy for prospective students and clients.",
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
    role: "End-to-end website build and deployment",
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
    takeaway:
      "This project shows that I can translate business requirements into a polished digital solution that feels credible, usable, and ready for real visitors.",
    challenge:
      "The business needed a website that would immediately feel professional and trustworthy to visitors who were comparing providers and trying to understand services quickly.",
    solution:
      "I structured the site around clear service presentation, stronger visual hierarchy, and a cleaner enquiry path so the business could explain its offer with less friction.",
    outcome:
      "The result was a live production website that presents the business more credibly, gives visitors a clearer path through the content, and feels ready for real client use.",
    supportValue: [
      "Shows I can translate business needs into a practical digital solution.",
      "Demonstrates ownership beyond design, including deployment, troubleshooting, and production updates.",
      "Strengthens my fit for analyst-style roles that need user-facing communication and technical follow-through.",
    ],
  },
  {
    slug: "prime-roof-care",
    title: "Prime Roof Care",
    subtitle: "Service business website for enquiries and trust",
    overview:
      "A service-business website focused on fast comprehension, local-business trust, and clear enquiry paths for potential customers.",
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
    role: "Website build, launch support, and ongoing updates",
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
    takeaway:
      "This shows I can build practical websites that support real businesses, present services clearly, and help visitors move toward action.",
    challenge:
      "The business needed a cleaner online presence that would explain services quickly, feel trustworthy for local customers, and support enquiries without overwhelming visitors.",
    solution:
      "I built the site around fast comprehension, practical service sections, and responsive layouts that keep the business easy to understand across devices.",
    outcome:
      "The finished website gives the business a more professional online presence and a clearer path for visitors to move from browsing into enquiry.",
    supportValue: [
      "Shows I can support real client delivery with practical business outcomes.",
      "Demonstrates responsiveness, content clarity, and post-launch support.",
      "Fits hybrid roles where web updates, communication, and analyst-style ownership overlap.",
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
