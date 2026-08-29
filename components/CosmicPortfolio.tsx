"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  CheckCircle2,
  Code2,
  Database,
  Download,
  GraduationCap,
  Mail,
  MapPin,
  ServerCog,
  ShieldCheck,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import ContactForm from "@/components/ContactForm";
import AnimatedGradientCanvas from "@/components/AnimatedGradientCanvas";
import HeroHeadline from "@/components/HeroHeadline";
import ParallaxLayer from "@/components/ParallaxLayer";
import { useTilt } from "@/components/useTilt";
import { projects, type PortfolioProject } from "@/data/projects";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: "easeOut" },
  },
};

const timeline = [
  {
    year: "May 2026 – Present",
    role: "Software Developer Intern",
    place: "SpaceTel IT | Adelaide, SA | On-site",
    summary:
      "Support the administration and testing of a multi-role enterprise compliance platform, translating business requirements into functional system configurations and managing the full defect lifecycle.",
    points: [
      "Configure workflows, system access, and evidence-handling processes across multiple user roles; coordinate release testing with key users prior to production deployment.",
    ],
  },
  {
    year: "2024 – Present",
    role: "Disability Support Worker (Part-time)",
    place: "Adorable Home Care & Northern Disability | Adelaide, SA",
    summary:
      "Work within regulated care environments across two providers, maintaining accurate digital records, incident documentation, and shift handovers in line with privacy legislation and care quality standards.",
    points: [
      "Maintain accurate digital case notes, incident records, and shift handovers per organisational policy and privacy legislation.",
    ],
  },
  {
    year: "2022 – Present",
    role: "Application Support & IT Support Consultant",
    place: "Sole Trader / Contract | Australia / Remote",
    summary:
      "Administer and support business applications for clients across Microsoft 365, SharePoint, Teams, and web-based platforms, acting as the bridge between business need and technical solution.",
    points: [
      "Write and execute SQL/MySQL queries for data retrieval, validation, and reporting accuracy checks, building practical data analysis habits alongside application support.",
    ],
  },
  {
    year: "Dec 2020 – Mar 2022",
    role: "Application Support Developer",
    place: "Eydean Inc | Kathmandu, Nepal",
    summary:
      "Maintained and supported production web applications built with React, Django, Node.js, MySQL, and REST APIs, handling bug investigation, defect resolution, and post-change stability checks.",
    points: [
      "Supported database-backed application features including data validation, query troubleshooting, and API integration testing, building foundational SQL and data analysis skills.",
    ],
  },
  {
    year: "Nov 2017 – Nov 2020",
    role: "Data Specialist",
    place: "CloudFactory | Kathmandu, Nepal",
    summary:
      "Performed data validation, quality assurance, and accuracy checks across large volumes of structured digital data, developing strong analytical and problem-solving habits.",
    points: [
      "Identified data errors, corrected inconsistencies, and ensured outputs met required quality standards and project guidelines.",
    ],
  },
];

const recruiterSignals = [
  {
    title: "Role direction",
    value: "Application support, data & software",
    note: "Best suited to IT application support, support technician, data analyst, and junior software developer roles, with data engineering as the next step.",
  },
  {
    title: "Working style",
    value: "Structured, detail-first, ownership-driven",
    note: "I gather requirements carefully, troubleshoot systems methodically, validate data thoroughly, and explain things clearly to both technical and non-technical people.",
  },
  {
    title: "Background",
    value: "Master of IT + real delivery across support & data",
    note: "Torrens University Australia MIT, Professional Year Program (ongoing), enterprise application support at SpaceTel, and 4+ years across support, data, and software development.",
  },
];

const overviewCards = [
  {
    icon: ShieldCheck,
    label: "Enterprise applications",
    title: "Business application administration and configuration.",
    copy:
      "Workflow configuration, system access, role management, form setup, release testing, and defect lifecycle management.",
  },
  {
    icon: ServerCog,
    label: "Microsoft 365 & identity",
    title: "Comfortable across Microsoft 365, SharePoint, and Teams.",
    copy:
      "User access, permissions, SharePoint administration, Outlook, Teams, and day-to-day business application support.",
  },
  {
    icon: Database,
    label: "Data & reporting",
    title: "SQL validation, data accuracy, and reporting support.",
    copy:
      "SQL/MySQL queries for record validation, data issue investigation, and troubleshooting reporting inconsistencies in database-backed applications.",
  },
  {
    icon: Code2,
    label: "Release & change",
    title: "UAT coordination, release management, and documentation.",
    copy:
      "Release notes review, pre-production validation, regression testing, change documentation, and user guides for technical and non-technical audiences.",
  },
];

const topSkillsRowOne = [
  "SQL",
  "MySQL",
  "PostgreSQL",
  "Data Validation & Analysis",
  "Application Support",
  "Microsoft 365",
  "SharePoint",
  "Requirements Gathering",
];

const topSkillsRowTwo = [
  "React",
  "Next.js",
  "Node.js",
  "REST APIs",
  "Git / GitHub",
  "Troubleshooting",
  "Documentation",
  "Quality Assurance",
];

const skillDomains: {
  icon: LucideIcon;
  title: string;
  blurb: string;
  items: string[];
}[] = [
  {
    icon: ShieldCheck,
    title: "Application & Business Systems Support",
    blurb: "Core strength across business application support and troubleshooting.",
    items: [
      "Workflow configuration",
      "System access & role management",
      "Incident & defect resolution",
      "Root-cause troubleshooting",
      "Change support",
      "User assistance",
    ],
  },
  {
    icon: Database,
    title: "SQL, Data & Web Development",
    blurb: "SQL and data analysis, plus the technical delivery context behind it.",
    items: [
      "SQL / MySQL",
      "T-SQL & ETL concepts",
      "Data validation & analysis",
      "React / Next.js",
      "Node.js",
      "REST APIs",
    ],
  },
  {
    icon: Workflow,
    title: "Release, Testing & Documentation",
    blurb: "End-to-end release, change, and stakeholder communication.",
    items: [
      "UAT coordination",
      "Release notes review",
      "Regression testing",
      "Change documentation",
      "User guides",
      "Requirements gathering",
    ],
  },
  {
    icon: ServerCog,
    title: "Microsoft 365 & Identity",
    blurb: "Business application and identity administration.",
    items: [
      "Exchange Online",
      "SharePoint",
      "Teams",
      "Outlook",
      "Active Directory",
      "Azure AD",
    ],
  },
];

const education = [
  {
    school: "Performance Education",
    credential: "Professional Year Program, Information Technology",
    period: "2025 – 2026",
    current: true,
  },
  {
    school: "Torrens University Australia",
    credential: "Master of Information Technology (Advanced)",
    period: "2022 – 2024",
    current: false,
  },
  {
    school: "Tribhuvan University",
    credential: "Bachelor of Computer Science and Information Technology",
    period: "2015 – 2019",
    current: false,
  },
];

const certifications = [
  {
    name: "Zendesk Customer Service Professional Certificate",
    issuer: "LinkedIn",
    issued: "Sep 2024",
  },
  {
    name: "Google IT Support Specialization",
    issuer: "Coursera",
    issued: "Nov 2020",
  },
  {
    name: "Crash Course on Python",
    issuer: "Coursera",
    issued: "Sep 2020",
  },
  {
    name: "Cyber Security Foundation",
    issuer: "Certiprof",
    issued: "Dec 2020",
  },
];

function SectionIntro({
  label,
  title,
  description,
  align = "left",
}: {
  label: string;
  title: string;
  description: string;
  align?: "left" | "center";
}) {
  const alignment =
    align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl";
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const targets = el.querySelectorAll<HTMLElement>("[data-reveal]");
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      gsap.set(targets, { opacity: 1, y: 0 });
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, y: 26 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={alignment}>
      <p data-reveal className="section-label">{label}</p>
      <h2
        data-reveal
        className="font-heading mt-3 text-4xl font-bold tracking-[-0.02em] text-text sm:text-5xl lg:text-6xl"
      >
        {title}
      </h2>
      <p
        data-reveal
        className="mt-4 text-sm leading-7 text-text-muted sm:text-[15px]"
      >
        {description}
      </p>
    </div>
  );
}

function TerminalBadge() {
  return (
    <motion.div
      variants={fadeUp}
      className="mt-6 w-full max-w-xl overflow-hidden rounded-xl border border-border bg-bg-sunken"
    >
      <div className="flex items-center gap-2 border-b border-border px-4 py-2">
        <span className="h-2 w-2 rounded-full bg-accent" />
        <span className="ml-1 text-[10px] font-black uppercase tracking-[0.24em] text-text-faint">
          positioning.log
        </span>
      </div>
      <div className="space-y-1 px-4 py-3 font-mono text-[11px] text-text-muted sm:text-xs">
        <p>
          <span className="text-accent">&gt;</span> focus.current
        </p>
        <p className="terminal-type text-text">
          application systems -&gt; SQL support -&gt; data engineering path
        </p>
      </div>
    </motion.div>
  );
}

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: string[];
  reverse?: boolean;
}) {
  const track = [...items, ...items];

  return (
    <div className="marquee-mask overflow-hidden">
      <div className={`marquee-row gap-3 py-1 ${reverse ? "marquee-row-reverse" : ""}`}>
        {track.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="inline-flex shrink-0 items-center rounded-md border border-border px-4 py-2 text-[13px] font-bold text-text-muted"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: PortfolioProject;
  index: number;
}) {
  const tiltRef = useTilt<HTMLElement>(2);

  return (
    <motion.article
      ref={tiltRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
      className="group overflow-hidden rounded-xl border border-border bg-bg-raised transition-colors duration-200 ease-out will-change-transform hover:border-accent-border [transform-style:preserve-3d]"
    >
      <Link
        href={`/projects/${project.slug}`}
        className="relative block aspect-[4/3] overflow-hidden border-b border-border"
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover object-top transition duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-raised via-bg-raised/25 to-transparent" />
        <div className="absolute left-4 top-4 text-[9px] font-black uppercase tracking-[0.18em] text-text">
          {project.liveUrl
            ? "Live delivery"
            : project.githubUrl
              ? "Open source"
              : "Confidential"}
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-[9px] font-black uppercase tracking-[0.18em] text-accent">
            {project.liveLabel}
          </p>
          <h3 className="mt-1.5 text-lg font-black leading-tight tracking-[-0.03em] text-text">
            {project.title}
          </h3>
          <p className="mt-1 text-xs leading-5 text-text-muted">
            {project.subtitle}
          </p>
        </div>
      </Link>

      <div className="p-5">
        <div className="flex flex-wrap gap-1.5">
          {project.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border px-2.5 py-1 text-[10px] font-semibold text-text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="mt-4 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.12em] text-accent transition group-hover:text-accent-hover"
        >
          View Case Study
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </motion.article>
  );
}

export default function CosmicPortfolio() {
  return (
    <div className="relative overflow-hidden bg-bg">
      <div className="premium-grid pointer-events-none absolute inset-0 opacity-45" />

      <section
        id="home"
        className="relative flex min-h-[100svh] items-center px-4 pb-10 pt-24 sm:px-6 sm:pb-12 sm:pt-28 lg:items-start lg:px-8 lg:pb-6 lg:pt-20"
      >
        <AnimatedGradientCanvas className="opacity-70 blur-[70px]" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-start xl:gap-14">
          <div className="max-w-3xl lg:max-w-[44rem]">
            <HeroHeadline
              lines={[
                { text: "Hello, welcome to my profile." },
                { text: "I am Rajiv.", gradient: true },
              ]}
            />

            <p className="mt-4 max-w-2xl text-base leading-7 text-text-muted sm:text-[17px]">
              Master of IT graduate based in Adelaide. Over the last few years
              I&apos;ve supported business applications, written a fair amount
              of SQL to track down data issues, and built small pieces of
              software along the way. Right now I&apos;m leaning further into
              data analysis, with data engineering as the longer-term goal.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Application Support",
                "Support & Troubleshooting",
                "Data Analysis",
                "SQL / MySQL",
                "Software Development",
                "Professional Year 2025–26",
              ].map((item) => (
                <span key={item} className="cosmic-chip">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#projects" className="btn-primary group">
                Explore Case Studies
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/resume" className="btn-outline group">
                <Download className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                View Resume
              </Link>
            </div>

          </div>

          <ParallaxLayer speed={-0.08} className="relative lg:pt-2">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-2xl border border-border sm:max-w-sm lg:max-w-none">
              <Image
                src="/profile-hero.png"
                alt="Rajiv Bhandari"
                fill
                sizes="(min-width: 1024px) 32vw, 70vw"
                priority
                className="object-cover object-[center_14%]"
              />
            </div>
          </ParallaxLayer>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-4 hidden justify-center lg:flex">
          <div className="flex flex-col items-center gap-2 text-text-faint">
            <span className="text-[9px] font-black uppercase tracking-[0.3em]">Scroll</span>
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="h-6 w-px bg-gradient-to-b from-text-faint to-transparent"
            />
          </div>
        </div>
      </section>

      <section
        id="about"
        className="relative z-20 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 scroll-mt-28"
      >
        <SectionIntro
          label="Snapshot"
          title="A recruiter-friendly read of where I fit best."
          description="Master of IT graduate with hands-on experience across application support, SQL-backed data analysis, and software delivery. Currently completing a Professional Year Program and actively seeking IT support, data analyst, or junior software developer roles across Australia, with data engineering as the longer-term goal."
        />

        <div className="mt-10 grid gap-6 border-t border-border pt-6 sm:grid-cols-3">
          {recruiterSignals.map((signal) => (
            <div key={signal.title}>
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-text-faint">
                {signal.title}
              </p>
              <p className="mt-2 text-sm font-black leading-5 text-text">
                {signal.value}
              </p>
              <p className="mt-2 text-[12px] leading-5 text-text-muted">
                {signal.note}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <p className="section-label">What I do now</p>
            <h3 className="mt-3 font-heading text-2xl font-bold tracking-[-0.02em] text-text sm:text-3xl">
              Application systems support backed by practical delivery context.
            </h3>
            <p className="mt-4 max-w-xl text-sm leading-7 text-text-muted">
              I support business applications, user workflows, Microsoft 365,
              Windows environments, and web-based systems. I also bring
              hands-on context from websites, APIs, hosting, deployment,
              troubleshooting, and data-aware issue investigation.
            </p>
            <TerminalBadge />

            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              {overviewCards.map((card) => (
                <div key={card.label} className="border-t border-border pt-4">
                  <card.icon className="h-5 w-5 text-accent" />
                  <p className="mt-3 text-[10px] font-black uppercase tracking-[0.24em] text-text-faint">
                    {card.label}
                  </p>
                  <h4 className="mt-2 text-base font-bold text-text">
                    {card.title}
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-text-muted">
                    {card.copy}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-10 lg:border-l lg:border-border lg:pl-10">
            <div>
              <p className="section-label">Best-fit roles</p>
              <ul className="mt-4 space-y-3">
                {[
                  "IT Application Support Specialist",
                  "Support Technician / Service Desk",
                  "Data Analyst",
                  "Software Developer (Junior)",
                ].map((item) => (
                  <li
                    key={item}
                    className="border-b border-border pb-3 text-sm font-semibold text-text"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="section-label">What teams get</p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-text-muted">
                {[
                  "A Master of IT graduate with hands-on application support, SQL-based data analysis, and practical software delivery experience.",
                  "Someone who troubleshoots systems and data issues methodically, and verifies outcomes before calling something done.",
                  "Clear communication with everyone from end users to project stakeholders, backed by thorough documentation at every step.",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        id="skills"
        className="relative z-20 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 scroll-mt-28"
      >
        <SectionIntro
          label="Skills"
          title="The skills each role actually put to work."
          description="Pulled straight from the experience below. Instead of one long skill wall, this section is grouped into four employer-searchable domains: application support, SQL/data & web development, release & documentation, and Microsoft 365."
        />

        <div className="relative mt-7 space-y-2">
          <MarqueeRow items={topSkillsRowOne} />
          <MarqueeRow items={topSkillsRowTwo} reverse />
        </div>

        <div className="mt-12 grid gap-8 border-t border-border pt-8 md:grid-cols-2">
          {skillDomains.map((domain, index) => (
            <motion.article
              key={domain.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: index * 0.04, ease: "easeOut" }}
            >
              <domain.icon className="h-5 w-5 text-accent" />
              <h3 className="mt-3 text-lg font-bold text-text">
                {domain.title}
              </h3>
              <p className="mt-1 text-sm text-text-muted">{domain.blurb}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {domain.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-border px-3 py-1.5 text-[11px] font-semibold text-text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section
        id="credentials"
        className="relative z-20 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 scroll-mt-28"
      >
        <SectionIntro
          label="Credentials"
          title="Formal study plus support-focused foundations."
          description="This section gives hiring managers a fast check on education, certifications, and technical foundations without interrupting the main portfolio story."
        />

        <div className="mt-10 grid gap-10 border-t border-border pt-8 lg:grid-cols-2 lg:divide-x lg:divide-border">
          <div className="lg:pr-10">
            <div className="flex items-center gap-3">
              <GraduationCap className="h-5 w-5 text-accent" />
              <div>
                <p className="section-label">Education</p>
                <h3 className="mt-1 text-xl font-bold text-text">
                  IT qualifications
                </h3>
              </div>
            </div>

            <div className="mt-6 space-y-5">
              {education.map((item) => (
                <div key={item.school} className="border-b border-border pb-4">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-base font-black text-text">{item.school}</p>
                    {item.current && (
                      <span className="shrink-0 text-[10px] font-black uppercase tracking-[0.18em] text-accent">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm leading-6 text-text-muted">
                    {item.credential}
                  </p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-text-faint">
                    {item.period}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:pl-10">
            <div className="flex items-center gap-3">
              <Award className="h-5 w-5 text-accent" />
              <div>
                <p className="section-label">Certifications</p>
                <h3 className="mt-1 text-xl font-bold text-text">
                  Support and technical readiness
                </h3>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {certifications.map((item) => (
                <div key={item.name}>
                  <p className="text-sm font-black leading-5 text-text">
                    {item.name}
                  </p>
                  <p className="mt-2 text-xs font-semibold text-text-muted">
                    {item.issuer} | {item.issued}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t border-border pt-4">
              <p className="section-label">Current emphasis</p>
              <p className="mt-2 text-sm leading-7 text-text-muted">
                I am intentionally shaping my profile around application
                support, SQL and data analysis, and practical software
                delivery. Those are the foundations for a longer-term move
                into data engineering.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="relative z-10 border-y border-border bg-bg-sunken py-14 sm:py-16 scroll-mt-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:sticky lg:top-32 lg:col-span-4">
              <SectionIntro
                label="Experience"
                title="A practical track record across support, systems, delivery, and data accuracy."
                description="The experience is intentionally framed to show junior but credible progression: user support, systems support, technical delivery, and data discipline."
              />
            </div>

            <div className="lg:col-span-8">
              <div className="relative space-y-10 pl-6 sm:pl-8">
                <div className="absolute left-0 top-2 h-[calc(100%-1rem)] w-px bg-border" />
                {timeline.map((item, index) => (
                  <motion.article
                    key={`${item.role}-${item.year}`}
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-90px" }}
                    transition={{ duration: 0.55, delay: index * 0.05, ease: "easeOut" }}
                    className="relative"
                  >
                    <span className="font-heading block text-lg font-bold text-accent">
                      {item.year}
                    </span>
                    <h3 className="mt-2 text-2xl font-black tracking-[-0.03em] text-text">
                      {item.role}
                    </h3>
                    <p className="mt-2 text-sm font-semibold text-text-faint">
                      {item.place}
                    </p>
                    <p className="mt-4 text-sm leading-7 text-text-muted">
                      {item.summary}
                    </p>
                    <ul className="mt-5 space-y-3">
                      {item.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 text-sm leading-6 text-text-muted"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.article>
                ))}
              </div>

              <div className="mt-8 pl-6 sm:pl-8">
                <Link
                  href="/resume"
                  className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.14em] text-accent transition hover:text-accent-hover"
                >
                  See full experience & resume
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="relative z-20 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 scroll-mt-28"
      >
        <SectionIntro
          label="Projects"
          title="Real delivery work, not visual mockups."
          description="A quick look at each build. Click through for the full case study: business context, delivery decisions, and post-launch ownership."
          align="center"
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="relative z-20 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="grid gap-10 border-t border-border pt-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <div>
            <p className="section-label">Contact</p>
            <h2 className="mt-3 font-heading text-4xl font-bold tracking-[-0.02em] text-text sm:text-5xl">
              Ready to support, analyse, and build. Data engineering is next.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-text-muted">
              Open to IT application support, support technician, data
              analyst, and junior software developer roles. I am happy to
              discuss positions that value practical ownership, clear
              communication, and strong learning momentum.
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              <span className="cosmic-chip">
                <MapPin className="mr-2 h-3.5 w-3.5" />
                Available across Australia
              </span>
              <span className="cosmic-chip">On-site, hybrid, or remote depending on role</span>
              <span className="cosmic-chip">Junior and growth-track opportunities</span>
            </div>

            <div className="mt-8 space-y-3">
              <a
                href="mailto:bhandarirajiv25@gmail.com"
                className="flex items-center gap-3 rounded-lg border border-border px-4 py-3 text-sm font-semibold text-text transition hover:border-accent-border"
              >
                <Mail className="h-4 w-4 text-accent" />
                bhandarirajiv25@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/rajiv-bhandari25/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg border border-border px-4 py-3 text-sm font-semibold text-text transition hover:border-accent-border"
              >
                <FaLinkedin className="h-4 w-4 text-accent" />
                linkedin.com/in/rajiv-bhandari25
              </a>
              <a
                href="https://github.com/prodev1996"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg border border-border px-4 py-3 text-sm font-semibold text-text transition hover:border-accent-border"
              >
                <FaGithub className="h-4 w-4 text-accent" />
                github.com/prodev1996
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </div>
  );
}
