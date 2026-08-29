"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  type Variants,
} from "framer-motion";
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
import SkillSnake from "@/components/SkillSnake";
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
    accent: "from-[#6f67df] to-[#c55b9e]",
  },
  {
    icon: ServerCog,
    label: "Microsoft 365 & identity",
    title: "Comfortable across Microsoft 365, SharePoint, and Teams.",
    copy:
      "User access, permissions, SharePoint administration, Outlook, Teams, and day-to-day business application support.",
    accent: "from-[#2ca2ba] to-[#6f67df]",
  },
  {
    icon: Database,
    label: "Data & reporting",
    title: "SQL validation, data accuracy, and reporting support.",
    copy:
      "SQL/MySQL queries for record validation, data issue investigation, and troubleshooting reporting inconsistencies in database-backed applications.",
    accent: "from-[#1e9b73] to-[#2ca2ba]",
  },
  {
    icon: Code2,
    label: "Release & change",
    title: "UAT coordination, release management, and documentation.",
    copy:
      "Release notes review, pre-production validation, regression testing, change documentation, and user guides for technical and non-technical audiences.",
    accent: "from-[#d48d37] to-[#c55b9e]",
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
  accent: string;
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
    accent: "from-[#6f67df] to-[#c55b9e]",
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
    accent: "from-[#6f67df] to-[#2ca2ba]",
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
    accent: "from-[#1e9b73] to-[#2ca2ba]",
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
    accent: "from-[#d48d37] to-[#c55b9e]",
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

const orbitNodes = [
  { label: "Support", angle: 12, tilt: -18, tone: "from-[#1e9b73] to-[#d48d37]" },
  { label: "M365", angle: 74, tilt: 18, tone: "from-[#d48d37] to-[#c55b9e]" },
  { label: "Apps", angle: 140, tilt: -14, tone: "from-[#6f67df] to-[#2ca2ba]" },
  { label: "SQL", angle: 214, tilt: 18, tone: "from-[#2ca2ba] to-[#1e9b73]" },
  { label: "QA", angle: 282, tilt: -18, tone: "from-[#c55b9e] to-[#6f67df]" },
  { label: "Python", angle: 338, tilt: 14, tone: "from-[#2ca2ba] to-[#6f67df]" },
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
        className="mt-3 text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl"
      >
        {title}
      </h2>
      <p
        data-reveal
        className="mt-3 text-sm leading-7 text-[#a8a5b3] sm:text-[15px]"
      >
        {description}
      </p>
    </div>
  );
}

function BentoCard({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden rounded-[30px] border border-white/10 bg-[#0a0910]/92 shadow-[0_26px_80px_rgba(0,0,0,0.34)] backdrop-blur-2xl ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[30px] opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`radial-gradient(520px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.06), transparent 75%)`,
        }}
      />
      {children}
    </motion.div>
  );
}

function TerminalBadge() {
  return (
    <motion.div
      variants={fadeUp}
      className="mt-6 w-full max-w-xl overflow-hidden rounded-[24px] border border-white/10 bg-black/35 shadow-[0_20px_60px_rgba(0,0,0,0.3)] backdrop-blur-2xl"
    >
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#c55b9e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#d48d37]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#1e9b73]" />
        <span className="ml-2 text-[10px] font-black uppercase tracking-[0.24em] text-[#8f87a0]">
          positioning.log
        </span>
      </div>
      <div className="space-y-1 px-4 py-3 font-mono text-[11px] text-[#d8d1e6] sm:text-xs">
        <p>
          <span className="text-[#1e9b73]">&gt;</span> focus.current
        </p>
        <p className="terminal-type bg-gradient-to-r from-[#6f67df] via-[#c55b9e] to-[#d48d37] bg-clip-text text-transparent">
          application systems -&gt; SQL support -&gt; data engineering path
        </p>
      </div>
    </motion.div>
  );
}

function DataOrbit() {
  return (
    <div
      className="data-orbit pointer-events-none absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 [--orbit-radius:6rem] sm:h-64 sm:w-64 sm:[--orbit-radius:7.8rem]"
      aria-hidden="true"
    >
      <div className="absolute inset-2 rounded-full border border-white/10 bg-[radial-gradient(circle,rgba(111,103,223,0.08),transparent_60%)]" />
      <div className="absolute inset-7 rounded-full border border-dashed border-white/10" />
      <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#6f67df]/16 via-[#c55b9e]/10 to-[#1e9b73]/14 blur-2xl sm:h-36 sm:w-36" />
      <div className="data-orbit-spin absolute inset-0">
        {orbitNodes.map((node) => (
          <div
            key={node.label}
            className="absolute left-1/2 top-1/2"
            style={{
              transform: `rotate(${node.angle}deg) translateX(var(--orbit-radius)) rotate(-${node.angle}deg)`,
            }}
          >
            <span
              className={`inline-flex -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r ${node.tone} px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.18em] text-white shadow-[0_10px_28px_rgba(0,0,0,0.32)] ring-1 ring-white/15 sm:text-[10px]`}
              style={{
                transform: `rotate(${node.tilt}deg)`,
              }}
            >
              {node.label}
            </span>
          </div>
        ))}
      </div>
    </div>
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
            data-skill-chip
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-[13px] font-bold text-[#d8d1e6] shadow-[0_10px_28px_rgba(0,0,0,0.2)] backdrop-blur-xl"
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[#6f67df] to-[#c55b9e]" />
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
  const tiltRef = useTilt<HTMLElement>(5);

  return (
    <motion.article
      ref={tiltRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
      className="group overflow-hidden rounded-[28px] border border-white/10 bg-[#090810]/92 shadow-[0_24px_70px_rgba(0,0,0,0.3)] transition-[transform,border-color] duration-200 ease-out will-change-transform hover:border-white/20 [transform-style:preserve-3d]"
    >
      <Link
        href={`/projects/${project.slug}`}
        className="relative block aspect-[4/3] overflow-hidden border-b border-white/10"
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover object-top transition duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090810] via-[#090810]/25 to-transparent" />
        <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/45 px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.18em] text-white backdrop-blur-xl">
          {project.liveUrl
            ? "Live delivery"
            : project.githubUrl
              ? "Open source"
              : "Confidential"}
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#f1dcc1]">
            {project.liveLabel}
          </p>
          <h3 className="mt-1.5 text-lg font-black leading-tight tracking-[-0.03em] text-white">
            {project.title}
          </h3>
          <p className="mt-1 text-xs leading-5 text-[#d8d1e6]">
            {project.subtitle}
          </p>
        </div>
      </Link>

      <div className="p-5">
        <div className="flex flex-wrap gap-1.5">
          {project.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-[10px] font-semibold text-[#d8d1e6]"
            >
              {tech}
            </span>
          ))}
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="mt-4 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.12em] text-[#c55b9e] transition group-hover:text-[#d8a7e7]"
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
    <div className="relative overflow-hidden bg-[#04030a] selection:bg-[#c55b9e]/25 selection:text-white">
      <div className="premium-grid pointer-events-none absolute inset-0 opacity-45" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[52rem] bg-[radial-gradient(circle_at_top,rgba(111,103,223,0.18),transparent_42%),radial-gradient(circle_at_72%_18%,rgba(197,91,158,0.14),transparent_24%),radial-gradient(circle_at_24%_32%,rgba(30,155,115,0.08),transparent_24%)]" />

      <section
        id="home"
        className="relative flex min-h-[100svh] items-center px-4 pb-10 pt-24 sm:px-6 sm:pb-12 sm:pt-28 lg:items-start lg:px-8 lg:pb-6 lg:pt-20"
      >
        <AnimatedGradientCanvas className="opacity-90 blur-[60px]" />

        <div className="pointer-events-none absolute inset-x-0 top-[18%] hidden text-center lg:block">
          <p className="text-[12vw] font-black uppercase tracking-[-0.08em] text-white/[0.035]">
            SYSTEMS
          </p>
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-7 lg:grid-cols-[1.18fr_0.82fr] lg:items-start xl:gap-8">
          <div className="max-w-3xl lg:max-w-[44rem]">
            <HeroHeadline
              lines={[
                { text: "Hello, welcome to my profile." },
                { text: "I am Rajiv.", gradient: true },
              ]}
            />

            <p className="mt-4 max-w-2xl text-base leading-7 text-[#b4b0bf] sm:text-[17px]">
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

          <ParallaxLayer speed={-0.08} className="relative lg:pt-1">
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#090810]/92 p-5 shadow-[0_34px_120px_rgba(0,0,0,0.42)] backdrop-blur-3xl sm:p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(111,103,223,0.14),transparent_34%),radial-gradient(circle_at_78%_18%,rgba(197,91,158,0.12),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_40%)]" />
              <div className="relative z-10">
                <div className="relative flex h-[18rem] items-center justify-center sm:h-[20rem] lg:h-[18.5rem] xl:h-[19.5rem]">
                  <DataOrbit />
                  <div className="relative z-10 rounded-[32px] border border-white/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-1.5 shadow-[0_22px_60px_rgba(0,0,0,0.4)]">
                    <div className="relative overflow-hidden rounded-[26px] bg-[#06060c]">
                      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-black/12" />
                      <div className="relative h-36 w-36 sm:h-44 sm:w-44">
                        <Image
                          src="/profile-hero.png"
                          alt="Rajiv Bhandari"
                          fill
                          sizes="(min-width: 640px) 176px, 144px"
                          priority
                          className="object-cover object-[center_16%]"
                        />
                      </div>
                      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/50" />
                      <div className="pointer-events-none absolute inset-x-4 bottom-0 h-px bg-white/18" />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </ParallaxLayer>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-4 hidden justify-center lg:flex">
          <div className="flex flex-col items-center gap-2 text-[#5c5666]">
            <span className="text-[9px] font-black uppercase tracking-[0.3em]">Scroll</span>
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="h-6 w-px bg-gradient-to-b from-[#8f87a0] to-transparent"
            />
          </div>
        </div>
      </section>

      <section
        id="about"
        className="relative z-20 mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 scroll-mt-28"
      >
        <SectionIntro
          label="Snapshot"
          title="A recruiter-friendly read of where I fit best."
          description="Master of IT graduate with hands-on experience across application support, SQL-backed data analysis, and software delivery. Currently completing a Professional Year Program and actively seeking IT support, data analyst, or junior software developer roles across Australia, with data engineering as the longer-term goal."
        />

        <div className="mt-8 grid gap-3 lg:grid-cols-3">
          {recruiterSignals.map((signal) => (
            <div
              key={signal.title}
              className="rounded-[24px] border border-white/10 bg-white/[0.035] p-4 shadow-[0_18px_48px_rgba(0,0,0,0.22)] backdrop-blur-xl"
            >
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#8f87a0]">
                {signal.title}
              </p>
              <p className="mt-2 text-sm font-black leading-5 text-white">
                {signal.value}
              </p>
              <p className="mt-2 text-[12px] leading-5 text-[#a8a5b3]">
                {signal.note}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-12">
          <BentoCard className="lg:col-span-6 p-6 sm:p-7" delay={0.05}>
            <div className="relative z-10 flex h-full flex-col">
              <p className="section-label">What I do now</p>
              <h3 className="mt-3 text-2xl font-black tracking-[-0.04em] text-white">
                Application systems support backed by practical delivery context.
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#b4b0bf]">
                I support business applications, user workflows, Microsoft 365,
                Windows environments, and web-based systems. I also bring
                hands-on context from websites, APIs, hosting, deployment,
                troubleshooting, and data-aware issue investigation.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Business applications support",
                  "Microsoft 365 and identity",
                  "SQL/MySQL checks and validation",
                  "Documentation and change support",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[20px] border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-[#d8d1e6]"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <TerminalBadge />
            </div>
          </BentoCard>

          <BentoCard className="lg:col-span-3 p-6" delay={0.12}>
            <div className="relative z-10">
              <p className="section-label">Best-fit roles</p>
              <div className="mt-4 space-y-3">
                {[
                  "IT Application Support Specialist",
                  "Support Technician / Service Desk",
                  "Data Analyst",
                  "Software Developer (Junior)",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[18px] border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-white"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </BentoCard>

          <BentoCard className="lg:col-span-3 p-6" delay={0.18}>
            <div className="relative z-10">
              <p className="section-label">What teams get</p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-[#b4b0bf]">
                {[
                  "A Master of IT graduate with hands-on application support, SQL-based data analysis, and practical software delivery experience.",
                  "Someone who troubleshoots systems and data issues methodically, and verifies outcomes before calling something done.",
                  "Clear communication with everyone from end users to project stakeholders, backed by thorough documentation at every step.",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#1e9b73]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </BentoCard>

          {overviewCards.map((card, index) => (
            <BentoCard
              key={card.label}
              className="lg:col-span-3 p-5"
              delay={0.24 + index * 0.06}
            >
              <div className="relative z-10">
                <span
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${card.accent} text-white shadow-[0_14px_34px_rgba(0,0,0,0.24)]`}
                >
                  <card.icon className="h-5 w-5" />
                </span>
                <p className="mt-4 text-[10px] font-black uppercase tracking-[0.24em] text-[#8f87a0]">
                  {card.label}
                </p>
                <h3 className="mt-2 text-lg font-black leading-6 text-white">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#a8a5b3]">
                  {card.copy}
                </p>
              </div>
            </BentoCard>
          ))}
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
          <SkillSnake containerSelector="#skills" />
        </div>

        <div className="mt-8 rounded-[34px] border border-white/10 bg-[#090810]/90 p-4 shadow-[0_30px_100px_rgba(0,0,0,0.36)] backdrop-blur-2xl sm:p-5">
          <div className="grid gap-3 md:grid-cols-2">
            {skillDomains.map((domain, index) => (
              <motion.article
                key={domain.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: index * 0.04, ease: "easeOut" }}
                className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.035] p-5 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
              >
                <div
                  className={`absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br ${domain.accent} opacity-14 blur-2xl transition duration-300 group-hover:opacity-22`}
                />
                <div className="relative z-10">
                  <span
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br ${domain.accent} text-white shadow-[0_12px_24px_rgba(0,0,0,0.2)]`}
                  >
                    <domain.icon className="h-4 w-4" />
                  </span>
                  <h3 className="mt-4 text-lg font-black text-white">
                    {domain.title}
                  </h3>
                  <p className="mt-1 text-sm text-[#a8a5b3]">{domain.blurb}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {domain.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-[11px] font-semibold text-[#d8d1e6]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
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

        <div className="mt-8 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[32px] border border-white/10 bg-[#090810]/92 p-6 shadow-[0_28px_90px_rgba(0,0,0,0.34)]">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1e9b73] to-[#2ca2ba] text-white">
                <GraduationCap className="h-5 w-5" />
              </span>
              <div>
                <p className="section-label">Education</p>
                <h3 className="mt-2 text-2xl font-black text-white">
                  IT qualifications
                </h3>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {education.map((item) => (
                <div
                  key={item.school}
                  className={`rounded-[22px] border p-4 ${item.current ? "border-[#1e9b73]/30 bg-[#1e9b73]/[0.06]" : "border-white/10 bg-white/[0.035]"}`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-base font-black text-white">{item.school}</p>
                    {item.current && (
                      <span className="shrink-0 rounded-full border border-[#1e9b73]/40 bg-[#1e9b73]/15 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-[0.18em] text-[#1e9b73]">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm leading-6 text-[#d8d1e6]">
                    {item.credential}
                  </p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-[#8f87a0]">
                    {item.period}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-[#090810]/92 p-6 shadow-[0_28px_90px_rgba(0,0,0,0.34)]">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6f67df] to-[#c55b9e] text-white">
                <Award className="h-5 w-5" />
              </span>
              <div>
                <p className="section-label">Certifications</p>
                <h3 className="mt-2 text-2xl font-black text-white">
                  Support and technical readiness
                </h3>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {certifications.map((item) => (
                <div
                  key={item.name}
                  className="rounded-[22px] border border-white/10 bg-white/[0.035] p-4"
                >
                  <p className="text-sm font-black leading-5 text-white">
                    {item.name}
                  </p>
                  <p className="mt-2 text-xs font-semibold text-[#d8d1e6]">
                    {item.issuer} | {item.issued}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-[24px] border border-white/10 bg-white/[0.03] p-4">
              <p className="section-label">Current emphasis</p>
              <p className="mt-2 text-sm leading-7 text-[#b4b0bf]">
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
        className="relative z-10 border-y border-white/5 bg-[#05040a] py-14 sm:py-16 scroll-mt-28"
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
              <div className="relative space-y-5 pl-0 sm:pl-8">
                <div className="absolute left-[0.95rem] top-3 hidden h-[calc(100%-1.5rem)] w-px bg-gradient-to-b from-white/20 via-white/8 to-transparent sm:block" />
                {timeline.map((item, index) => (
                  <motion.article
                    key={`${item.role}-${item.year}`}
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-90px" }}
                    transition={{ duration: 0.55, delay: index * 0.05, ease: "easeOut" }}
                    className="relative rounded-[30px] border border-white/10 bg-[#0a0910]/92 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.3)]"
                  >
                    <div className="absolute left-4 top-8 hidden h-3 w-3 rounded-full border border-[#04030a] bg-[#2ca2ba] shadow-[0_0_18px_rgba(44,162,186,0.55)] sm:block" />
                    <div className="sm:pl-8">
                      <span className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-[#c55b9e]">
                        {item.year}
                      </span>
                      <h3 className="mt-4 text-2xl font-black tracking-[-0.04em] text-white">
                        {item.role}
                      </h3>
                      <p className="mt-2 text-sm font-semibold text-[#9c98a8]">
                        {item.place}
                      </p>
                      <p className="mt-4 text-sm leading-7 text-[#d8d1e6]">
                        {item.summary}
                      </p>
                      <ul className="mt-5 space-y-3">
                        {item.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-3 text-sm leading-6 text-[#a8a5b3]"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d48d37]" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.article>
                ))}
              </div>

              <div className="mt-6 sm:pl-8">
                <Link
                  href="/resume"
                  className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.14em] text-[#c55b9e] transition hover:text-[#d8a7e7]"
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
        className="relative z-20 mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8"
      >
        <div className="overflow-hidden rounded-[40px] border border-white/10 bg-[#090810]/92 shadow-[0_34px_120px_rgba(0,0,0,0.4)] backdrop-blur-3xl">
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.92fr_1.08fr] lg:p-10">
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#6f67df]/18 blur-[90px]" />
              <div className="relative z-10">
                <p className="section-label">Contact</p>
                <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
                  Ready to support, analyse, and build. Data engineering is next.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-[#b4b0bf]">
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
                    className="flex items-center gap-3 rounded-[22px] border border-white/10 bg-white/[0.035] px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.06]"
                  >
                    <Mail className="h-4 w-4 text-[#c55b9e]" />
                    bhandarirajiv25@gmail.com
                  </a>
                  <a
                    href="https://www.linkedin.com/in/rajiv-bhandari25/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-[22px] border border-white/10 bg-white/[0.035] px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.06]"
                  >
                    <FaLinkedin className="h-4 w-4 text-[#2ca2ba]" />
                    linkedin.com/in/rajiv-bhandari25
                  </a>
                  <a
                    href="https://github.com/prodev1996"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-[22px] border border-white/10 bg-white/[0.035] px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.06]"
                  >
                    <FaGithub className="h-4 w-4 text-[#d8d1e6]" />
                    github.com/prodev1996
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-black/18 p-1">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
