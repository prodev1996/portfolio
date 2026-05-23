"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useMotionValue, useMotionTemplate, type Variants } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Download,
  Mail,
  ShieldCheck,
  Sparkles,
  Workflow,
  Code2,
  Database,
  Award,
  GraduationCap,
  MapPin,
} from "lucide-react";
import {
  FaDatabase,
  FaLinkedin,
  FaMicrosoft,
  FaNetworkWired,
  FaNodeJs,
  FaPython,
  FaRegFileAlt,
  FaTools,
  FaWindows,
} from "react-icons/fa";

import ContactForm from "@/components/ContactForm";
import CursorStars from "@/components/CursorStars";
import { projects } from "@/data/projects";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const timeline = [
  {
    year: "May 2026 - Present",
    role: "Software Developer Intern",
    place: "SpaceTel IT · Adelaide, South Australia · On-site",
    summary: "Reviewing websites, user journeys, technical quality, and competitor positioning while preparing practical improvement reports for redesign and content planning.",
    points: [
      "Website review, UX analysis, navigation checks, and issue identification",
      "Lighthouse, PageSpeed Insights, crawler-style review, and manual testing",
      "Reports, presentation material, responsive layout notes, and content improvement planning",
    ],
  },
  {
    year: "2022 - Now",
    role: "Application Support & IT Support Consultant",
    place: "Sole trader / Contract · Remote",
    summary: "Provide Level 1/2 IT and application support for small-business clients across Microsoft 365, Windows environments, SharePoint, Outlook, Teams, and web-based systems.",
    points: [
      "Microsoft 365, SharePoint, Outlook, Teams, access, permissions, and user workflow support",
      "SQL/MySQL checks for data retrieval, validation, form submissions, and troubleshooting",
      "Website setup, hosting, DNS, SSL, domain configuration, deployment, and ongoing updates",
    ],
  },
  {
    year: "Dec 2020 - Mar 2022",
    role: "Application Support Developer",
    place: "Eydean Inc",
    summary: "Developed and supported web applications while working on application features, database integration, APIs, testing, bug fixing, and documentation.",
    points: ["React, Django, MySQL, APIs, and database-backed features", "Application testing, debugging, system improvement, and maintenance", "Team collaboration, Git/GitHub, and practical handover notes"],
  },
  {
    year: "Nov 2017 - Nov 2020",
    role: "Data Specialist",
    place: "CloudFactory",
    summary: "Performed data validation, data review, quality assurance, and accuracy checks across large volumes of structured digital data.",
    points: ["Data monitoring, validation, and quality checks", "Error identification, correction, and consistency review", "Detailed instructions, documentation, deadlines, and structured workflows"],
  },
];

const overviewProof = [
  {
    icon: ShieldCheck,
    label: "Support discipline",
    value: "Reliable base",
    note: "Level 1/2 support mindset with clear communication, structured troubleshooting, and careful follow-through.",
    playful: "Issues -> clarity",
    accent: "from-[#7c6cf2] to-[#d9468f]",
  },
  {
    icon: Database,
    label: "Systems support",
    value: "Database-aware",
    note: "Business applications support backed by SQL/MySQL checks, access support, and database-aware troubleshooting.",
    playful: "Queries -> checks",
    accent: "from-[#35aeca] to-[#7c6cf2]",
  },
  {
    icon: Workflow,
    label: "Process mindset",
    value: "Detail-first",
    note: "Data quality, website testing, reporting notes, documentation, and improvement planning.",
    playful: "Records -> quality",
    accent: "from-[#35aeca] to-[#7c6cf2]",
  },
  {
    icon: Code2,
    label: "Project readiness",
    value: "Guideline-ready",
    note: "Git/GitHub, HTML, CSS, JavaScript, testing habits, and the ability to learn technical standards quickly.",
    playful: "Tasks -> tracked",
    accent: "from-[#e49a2f] to-[#d9468f]",
  },
];

const technicalSkillGroups = [
  {
    icon: FaDatabase,
    title: "Business Applications",
    detail: "Business applications support, incident resolution, workflow troubleshooting, issue documentation, and user-focused operational support.",
    proof: "Grounded in practical day-to-day systems support.",
    accent: "from-[#7c6cf2] to-[#d9468f]",
  },
  {
    icon: FaWindows,
    title: "Microsoft 365 & Identity",
    detail: "Microsoft 365, SharePoint, Outlook, Teams, Active Directory, Azure AD, access support, permissions, and account handling.",
    proof: "Reliable support across common business systems and user environments.",
    accent: "from-[#35aeca] to-[#7c6cf2]",
  },
  {
    icon: FaNetworkWired,
    title: "SQL/MySQL & Reporting",
    detail: "SQL/MySQL, validation queries, form submission review, data checks, reporting support, records accuracy, and database-backed application exposure.",
    proof: "Practical SQL support skills with room to keep growing.",
    accent: "from-[#20a779] to-[#35aeca]",
  },
  {
    icon: FaDatabase,
    title: "Website QA & Systems Analysis",
    detail: "Website review, UX analysis, responsive testing, SEO basics, performance checks, process improvement, and user acceptance testing support.",
    proof: "Able to bridge users, workflows, and system change in a practical way.",
    accent: "from-[#e49a2f] to-[#d9468f]",
  },
  {
    icon: FaTools,
    title: "Technical Troubleshooting",
    detail: "Application, workflow, website, hosting, DNS, SSL, domain, API, database, and incident troubleshooting.",
    proof: "Turns technical issues into stable outcomes and clearer support notes.",
    accent: "from-[#d9468f] to-[#7c6cf2]",
  },
  {
    icon: FaPython,
    title: "Development & Scripting",
    detail: "HTML, CSS, JavaScript, React, Next.js, Django, Node.js, Python, APIs, and practical experience supporting web-based systems.",
    proof: "Adds hands-on technical context to application systems support work.",
    accent: "from-[#35aeca] to-[#20a779]",
  },
  {
    icon: FaRegFileAlt,
    title: "Delivery & Change",
    detail: "Reports, presentation material, documentation, Git/GitHub, issue tracking, deployment support, and stakeholder communication.",
    proof: "Useful in environments that need clear change handling and continuity.",
    accent: "from-[#7c6cf2] to-[#e49a2f]",
  },
  {
    icon: FaMicrosoft,
    title: "Customer Support Foundation",
    detail: "Zendesk customer service training, end-user communication, support professionalism, escalation awareness, and service mindset.",
    proof: "Relevant support foundation for migration and upgrade-focused teams.",
    accent: "from-[#20a779] to-[#e49a2f]",
  },
  {
    icon: FaNodeJs,
    title: "Project Readiness",
    detail: "Testing, documentation, change tracking, technical learning, and reliable contribution across application support and SQL-focused teams.",
    proof: "Built for systems, support, reporting, and SQL-aware environments.",
    accent: "from-[#e49a2f] to-[#7c6cf2]",
  },
];

const orbitNodes = [
  { label: "Support", detail: "L1/L2 troubleshooting", angle: 8, tilt: -38, tone: "from-[#20a779] to-[#e49a2f]" },
  { label: "M365", detail: "Teams, Outlook, admin", angle: 70, tilt: -42, tone: "from-[#e49a2f] to-[#d9468f]" },
  { label: "Apps", detail: "Business systems", angle: 132, tilt: -18, tone: "from-[#7c6cf2] to-[#35aeca]" },
  { label: "SQL", detail: "MySQL checks", angle: 196, tilt: 28, tone: "from-[#35aeca] to-[#20a779]" },
  { label: "SharePoint", detail: "Sites and workflows", angle: 260, tilt: -48, tone: "from-[#d9468f] to-[#7c6cf2]" },
  { label: "Windows", detail: "User environments", angle: 318, tilt: 34, tone: "from-[#35aeca] to-[#7c6cf2]" },
];

const education = [
  {
    school: "Torrens University Australia",
    credential: "Master of Information Technology (Advanced), Information Technology",
    period: "2022 - 2024",
  },
  {
    school: "Performance Education",
    credential: "Professional Year, Information Technology",
    period: "Aug 2025 - 2026",
  },
  {
    school: "Tribhuvan University",
    credential: "Bachelor's degree, Computer Science and Information Technology",
    period: "2015 - 2019",
  },
];

const certifications = [
  {
    name: "Zendesk Customer Service Professional Certificate",
    issuer: "LinkedIn",
    issued: "Issued Sep 2024",
    skills: "Customer support, service communication, support professionalism",
  },
  {
    name: "Google IT Support Specialization",
    issuer: "Coursera",
    issued: "Issued Nov 2020",
    skills: "Operating systems, troubleshooting, networking, IT support foundations",
  },
  {
    name: "Crash Course on Python",
    issuer: "Coursera",
    issued: "Issued Sep 2020",
    skills: "Python, debugging, troubleshooting, automation foundations",
  },
  {
    name: "Cyber Security Foundation",
    issuer: "Certiprof",
    issued: "Issued Dec 2020",
    skills: "Risk management, security awareness, technical foundations",
  },
];

// Interactive Bento Card with Spotlight
function BentoCard({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0a0812] shadow-2xl transition-all duration-500 hover:border-white/20 hover:shadow-[0_0_34px_rgba(124,108,242,0.12)] ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[32px] opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.06), transparent 80%)`,
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
      className="mt-8 w-full max-w-xl overflow-hidden rounded-3xl border border-white/10 bg-black/35 text-left shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
    >
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#d9468f]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#e49a2f]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#20a779]" />
        <span className="ml-2 text-[10px] font-bold uppercase tracking-[0.24em] text-[#8f87a0]">
          career-path.sh
        </span>
      </div>
      <div className="grid gap-1 px-4 py-3 font-mono text-[11px] text-[#d8d1e6] sm:text-xs">
        <p><span className="text-[#20a779]">&gt;</span> rajiv.path()</p>
        <p className="terminal-type text-transparent bg-clip-text bg-gradient-to-r from-[#7c6cf2] via-[#d9468f] to-[#e49a2f]">
          support -&gt; microsoft 365 -&gt; sql -&gt; web apps
        </p>
      </div>
    </motion.div>
  );
}

function DataOrbit() {
  return (
    <div
      className="data-orbit pointer-events-none absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 [--orbit-radius:5.9rem] sm:h-60 sm:w-60 sm:[--orbit-radius:7.4rem] lg:h-72 lg:w-72 lg:[--orbit-radius:8.7rem]"
      aria-hidden="true"
    >
      <div className="absolute inset-4 rounded-full border border-white/10 bg-[radial-gradient(circle,rgba(124,108,242,0.08),transparent_64%)] shadow-[0_0_64px_rgba(124,108,242,0.12)]" />
      <div className="absolute inset-8 rounded-full border border-dashed border-white/10" />
      <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#7c6cf2]/18 via-[#d9468f]/12 to-[#20a779]/14 blur-2xl sm:h-32 sm:w-32" />
      <div className="data-orbit-spin absolute inset-0">
        {orbitNodes.map((node) => (
          <div
            key={node.label}
            className="absolute left-1/2 top-1/2"
            style={{
              transform: `rotate(${node.angle}deg) translateX(var(--orbit-radius)) rotate(-${node.angle}deg)`,
            }}
          >
            <div className="group pointer-events-auto relative -translate-x-1/2 -translate-y-1/2">
              <span
                className={`inline-flex min-w-12 items-center justify-center rounded-full bg-gradient-to-r ${node.tone} px-2.5 py-1.5 text-[8px] font-black uppercase tracking-[0.14em] text-white shadow-[0_10px_24px_rgba(0,0,0,0.34)] ring-1 ring-white/15 transition duration-300 group-hover:scale-110 sm:min-w-16 sm:px-3 sm:py-2 sm:text-[10px]`}
                style={{
                  transform: `rotate(${node.tilt}deg)`,
                }}
              >
                {node.label}
              </span>
              <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/10 bg-black/80 px-3 py-1 text-[10px] font-semibold text-[#d8d1e6] opacity-0 shadow-xl backdrop-blur-xl transition group-hover:opacity-100">
                {node.detail}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute inset-x-8 bottom-8 hidden rounded-full border border-white/10 bg-black/50 px-3 py-1 text-[8px] font-black uppercase tracking-[0.18em] text-[#d8d1e6] shadow-[0_12px_28px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:block">
        Support + Developer
      </div>
    </div>
  );
}

export default function CosmicPortfolio() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const textScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <div className="bg-[#020108] selection:bg-[#d9468f]/25 selection:text-white">
      <CursorStars />

      {/* --- HERO SECTION --- */}
      <section
        ref={heroRef}
        id="home"
        className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-4 pb-14 pt-28 sm:pt-32"
      >
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0 z-0">
          <div className="absolute left-1/2 top-1/2 h-[60vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#7c6cf2]/16 via-[#d9468f]/8 to-[#e49a2f]/16 blur-[120px]" />
        </motion.div>

        {/* Giant Background Typography */}
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity, scale: textScale }}
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center mix-blend-screen"
        >
          <h1 className="text-[15vw] font-black leading-none tracking-tighter text-white/[0.03] select-none">
            ANALYST
          </h1>
        </motion.div>

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center"
          >
            <motion.div variants={fadeUp} className="relative mb-8 mt-4 flex h-44 w-44 items-center justify-center sm:h-56 sm:w-56 lg:h-64 lg:w-64">
              <DataOrbit />
              <div className="relative group">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#7c6cf2] to-[#d9468f] blur opacity-32 group-hover:opacity-58 transition duration-1000 group-hover:duration-200" />
                <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-white/20 bg-black sm:h-36 sm:w-36">
                  <Image src="/profile-hero.png" alt="Rajiv Bhandari" fill className="object-cover" />
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="mb-6 inline-flex max-w-[min(92vw,720px)] items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-center text-xs font-black uppercase tracking-[0.16em] text-[#d8d1e6] backdrop-blur-xl sm:tracking-[0.2em]">
              <span className="mr-2 h-2 w-2 rounded-full bg-[#20a779] shadow-[0_0_8px_rgba(32,167,121,0.58)] animate-pulse" />
              Adelaide based · Application Support & Developer · IT Support Professional
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-5xl font-black tracking-[-0.05em] text-white sm:text-7xl lg:text-[6rem] leading-[0.95]"
            >
              Application support <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c6cf2] via-[#d9468f] to-[#e49a2f]">
                for modern business systems.
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-2xl text-lg sm:text-xl font-medium leading-relaxed text-[#a1a1aa]"
            >
              I am an Adelaide-based Application Support & Developer and IT Support Professional with experience across SQL/MySQL, Microsoft 365, SharePoint, Windows environments, web applications, website testing, documentation, and user troubleshooting.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-6 flex flex-wrap items-center justify-center gap-2">
              {[
                "Application Support",
                "IT Support L1/L2",
                "Microsoft 365",
                "SQL/MySQL",
                "SharePoint",
                "Website QA",
                "Windows",
                "Web Applications",
              ].map((item) => (
                <span key={item} className="cosmic-chip">
                  {item}
                </span>
              ))}
            </motion.div>

            <TerminalBadge />

            <motion.div variants={fadeUp} className="mt-12 flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Link href="#projects" className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white px-8 py-4 font-bold text-black transition hover:scale-105 active:scale-95">
                <span className="relative z-10 flex items-center gap-2">
                  Explore Work
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-shimmer" />
              </Link>
              <Link href="/resume" className="group inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-4 font-bold text-white backdrop-blur-md transition hover:bg-white/10 hover:border-white/30 hover:scale-105 active:scale-95">
                <Download className="mr-2 h-4 w-4" />
                View Resume
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- BENTO GRID ABOUT & SKILLS --- */}
      <section id="about" className="relative z-20 mx-auto max-w-7xl px-4 py-8 lg:py-10 sm:px-6 lg:px-8 scroll-mt-28">
        <div className="mb-5 max-w-[1000px] mx-auto">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-[#d9468f]">Overview</p>
          <h2 className="mt-2 text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">Recruiter Snapshot</h2>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-4 md:grid-rows-2 max-w-[1000px] mx-auto">
          {/* Main About Tile */}
          <BentoCard className="md:col-span-2 md:row-span-1 p-5 lg:p-6" delay={0.1}>
            <div className="flex h-full flex-col justify-center">
              <Sparkles className="h-6 w-6 text-[#e49a2f] mb-3" />
              <div>
                <h3 className="text-xl font-black tracking-tight text-white mb-2">Application Support & Developer with IT support depth.</h3>
                <div className="space-y-2">
                  <p className="text-sm text-[#a1a1aa] leading-snug">
                    I support business applications, Microsoft 365, SharePoint, Windows environments, web-based systems, user access, workflows, and technical troubleshooting.
                  </p>
                  <p className="text-sm text-[#a1a1aa] leading-snug">
                    I am also completing a Software Developer Internship at SpaceTel IT, where I review websites, assess user experience, identify issues, test performance, compare competitors, and prepare improvement reports.
                  </p>
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Core Focus Tile */}
          <BentoCard className="md:col-span-2 md:row-span-1 p-5 lg:p-6 relative flex flex-col justify-center" delay={0.2}>
            <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#7c6cf2]/16 to-transparent opacity-45 blur-2xl pointer-events-none" />
            <h3 className="text-lg font-bold text-white mb-3">Best-fit roles</h3>
            <div className="space-y-3 relative z-10">
              {[
                { label: "Application Support / IT Support L1-L2", v: "100%" },
                { label: "Technical Support / Software Support", v: "92%" },
                { label: "Web Applications / Website QA", v: "78%" },
                { label: "Database / Application Support", v: "70%" }
              ].map((stat, i) => (
                <div key={stat.label}>
                  <div className="flex justify-between text-xs font-bold text-[#c9c1d8] mb-2 uppercase tracking-wider">
                    <span>{stat.label}</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-[#7c6cf2] to-[#d9468f]"
                      initial={{ width: 0 }}
                      whileInView={{ width: stat.v }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 + (i * 0.1) }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </BentoCard>

          {/* Proof Blocks - Bottom Row */}
          {overviewProof.map((group, index) => (
            <BentoCard key={group.label} className="overview-play-card md:col-span-1 md:row-span-1 p-3 lg:p-4 flex flex-col group/skill" delay={0.3 + (index * 0.1)}>
              <div className={`overview-card-scan absolute left-0 top-0 h-px w-full bg-gradient-to-r ${group.accent} opacity-0 transition group-hover/skill:opacity-100`} />
              <div className="pointer-events-none absolute right-3 top-3 flex gap-1 opacity-30 transition group-hover/skill:opacity-100">
                {[0, 1, 2].map((dot) => (
                  <span
                    key={dot}
                    className={`overview-spark-dot h-1 w-1 rounded-full bg-gradient-to-r ${group.accent}`}
                    style={{ animationDelay: `${dot * 120}ms` }}
                  />
                ))}
              </div>
              <div className={`flex h-7 w-7 items-center justify-center rounded-xl bg-gradient-to-br ${group.accent} text-white border border-white/10 mb-2 group-hover/skill:scale-110 transition-all duration-500`}>
                <group.icon className="h-3.5 w-3.5" />
              </div>
              <h3 className="text-sm font-bold text-white mb-0.5 group-hover/skill:text-[#d9468f] transition-colors">{group.label}</h3>
              <p className="text-[8px] font-black text-[#8f87a0] uppercase tracking-widest mb-2">{group.value}</p>
              <p className="text-[10px] text-[#a1a1aa] leading-snug flex-grow">{group.note}</p>
              <p className="mt-2 translate-y-1 text-[8px] font-black uppercase tracking-[0.16em] text-[#d8d1e6] opacity-0 transition duration-300 group-hover/skill:translate-y-0 group-hover/skill:opacity-100">
                {group.playful}
              </p>
            </BentoCard>
          ))}
        </div>
      </section>

      {/* --- TECHNICAL SKILLS MATRIX --- */}
      <section id="skills" className="relative z-20 mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 scroll-mt-28">
        <div className="mb-5 flex flex-col gap-2 text-center">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-[#35aeca]">
            Technical Toolkit
          </p>
          <h2 className="text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">
            Application support, SQL, Microsoft 365, SharePoint, Windows, and web systems.
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-6 text-[#a1a1aa]">
            A compact skill map grouped around employer-searchable areas:
            application support, IT support L1/L2, Microsoft 365, SQL/MySQL,
            SharePoint, website QA, documentation, and web application support.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0a0812] p-3 shadow-[0_28px_90px_rgba(0,0,0,0.34)] sm:p-4">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(124,108,242,0.13),transparent_30%),radial-gradient(circle_at_90%_20%,rgba(217,70,143,0.09),transparent_34%),radial-gradient(circle_at_52%_100%,rgba(53,174,202,0.08),transparent_34%)]" />
          <div className="relative grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {technicalSkillGroups.map((group, index) => (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: index * 0.035, ease: "easeOut" }}
                className="group relative min-h-[108px] overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.035] p-3 backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.055]"
              >
                <div className={`absolute -right-12 -top-12 h-28 w-28 rounded-full bg-gradient-to-br ${group.accent} opacity-12 blur-2xl transition duration-500 group-hover:opacity-24`} />
                <div className="skill-card-scan pointer-events-none absolute inset-x-0 top-0 h-px opacity-0 transition group-hover:opacity-100" />
                <div className="pointer-events-none absolute bottom-4 right-4 flex gap-1 opacity-30 transition group-hover:opacity-90">
                  {[0, 1, 2].map((dot) => (
                    <span
                      key={dot}
                      className={`skill-signal-dot h-1 w-1 rounded-full bg-gradient-to-r ${group.accent}`}
                      style={{ animationDelay: `${dot * 160}ms` }}
                    />
                  ))}
                </div>
                <div className="relative z-10 flex h-full flex-col">
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <span className={`skill-icon-bob flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br ${group.accent} text-white shadow-[0_12px_28px_rgba(0,0,0,0.22)]`}>
                      <group.icon className="h-4 w-4" />
                    </span>
                    <span className="rounded-full border border-white/10 bg-black/20 px-2 py-0.5 text-[8px] font-black uppercase tracking-[0.16em] text-[#9d94b3]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="text-sm font-black tracking-[-0.03em] text-white">
                    {group.title}
                  </h3>
                  <p className="mt-1 text-[11px] leading-4 text-[#a1a1aa]">
                    {group.detail}
                  </p>
                  <p className="mt-auto translate-y-1 pt-2 text-[8px] font-bold uppercase tracking-[0.14em] text-[#d8d1e6] opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    {group.proof}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* --- EDUCATION & CREDENTIALS --- */}
      <section id="credentials" className="relative z-20 mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 scroll-mt-28">
        <div className="mb-8 flex flex-col gap-2 text-center">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-[#20a779]">
            Education & Credentials
          </p>
          <h2 className="text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">
            Formal IT study plus support-ready certifications.
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-6 text-[#a1a1aa]">
            This section is here for recruiters who scan quickly for Australian
            education, support training, and technical foundations.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="rounded-[32px] border border-white/10 bg-[#0a0812] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.34)]">
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#20a779] to-[#35aeca] text-white">
                <GraduationCap className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#8f87a0]">
                  Education
                </p>
                <h3 className="text-xl font-black text-white">IT qualifications</h3>
              </div>
            </div>

            <div className="space-y-3">
              {education.map((item) => (
                <div key={item.school} className="rounded-[22px] border border-white/10 bg-white/[0.035] p-4">
                  <p className="text-base font-black text-white">{item.school}</p>
                  <p className="mt-1 text-sm leading-6 text-[#d8d1e6]">{item.credential}</p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-[#8f87a0]">{item.period}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-[#0a0812] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.34)]">
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7c6cf2] to-[#d9468f] text-white">
                <Award className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#8f87a0]">
                  Certifications
                </p>
                <h3 className="text-xl font-black text-white">Support and technical foundations</h3>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {certifications.map((item) => (
                <div key={item.name} className="rounded-[22px] border border-white/10 bg-white/[0.035] p-4">
                  <p className="text-sm font-black leading-5 text-white">{item.name}</p>
                  <p className="mt-2 text-xs font-semibold text-[#d8d1e6]">{item.issuer} · {item.issued}</p>
                  <p className="mt-3 text-[11px] leading-5 text-[#a1a1aa]">{item.skills}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- STICKY EXPERIENCE SECTION --- */}
      <section id="experience" className="relative z-10 w-full bg-[#05040a] border-y border-white/5 py-24 sm:py-32 scroll-mt-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            
            {/* Sticky Left Column */}
            <div className="lg:sticky lg:top-32 lg:col-span-5">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#7c6cf2]">Journey</p>
              <h2 className="mt-4 text-5xl font-black tracking-[-0.04em] text-white sm:text-6xl md:text-7xl">
                Experience
              </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#a1a1aa] max-w-md">
                Current internship, support consulting, application development, and data quality experience shaped around troubleshooting, documentation, testing, and user-focused systems work.
              </p>
            </div>

            {/* Scrolling Right Column */}
            <div className="lg:col-span-7 space-y-6">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0a0812] p-8 transition hover:bg-[#0f0b1a]"
                >
                  <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br from-[#7c6cf2] to-[#d9468f] opacity-0 blur-[60px] transition duration-700 group-hover:opacity-16" />
                  
                  <div className="relative z-10">
                    <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-[#d9468f] mb-4">
                      {item.year}
                    </span>
                    <h3 className="text-2xl font-black tracking-tight text-white mb-1 group-hover:text-[#7c6cf2] transition-colors">
                      {item.role}
                    </h3>
                    <p className="text-sm font-semibold text-[#a1a1aa] mb-6">{item.place}</p>
                    <p className="text-base text-[#d8d1e6] mb-6 leading-relaxed">{item.summary}</p>
                    
                    <ul className="space-y-3">
                      {item.points.map((point) => (
                        <li key={point} className="flex items-start gap-3 text-sm font-medium text-[#a1a1aa]">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#e49a2f] shadow-[0_0_8px_rgba(228,154,47,0.55)]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- SHOWCASE PROJECTS --- */}
      <section id="projects" className="relative z-20 py-12 sm:py-16 scroll-mt-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col items-center text-center">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#e49a2f]">Showcase</p>
            <h2 className="mt-2 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">Practical Delivery Projects</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#a1a1aa]">
              These projects show practical delivery: requirements, website
              development, hosting, DNS, SSL, deployment, content updates, and
              support after go-live.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className="group flex flex-col overflow-hidden rounded-[32px] border border-white/10 bg-[#0a0812] transition-all duration-500 hover:border-white/20 hover:shadow-[0_0_32px_rgba(124,108,242,0.08)]"
              >
                {/* Project Image */}
                <Link href={`/projects/${project.slug}`} className="relative aspect-[2/1] w-full overflow-hidden bg-black border-b border-white/5">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover object-top transition duration-1000 group-hover:scale-105 group-hover:opacity-80" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0812] via-black/20 to-transparent opacity-80" />
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-500 group-hover:opacity-100 backdrop-blur-sm bg-black/20">
                    <span className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-black shadow-2xl scale-90 group-hover:scale-100 transition-transform duration-500">
                      View Case Study <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 translate-y-3 rounded-2xl border border-white/10 bg-black/70 p-4 text-left opacity-0 shadow-[0_18px_50px_rgba(0,0,0,0.45)] backdrop-blur-2xl transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-[8px] font-black uppercase tracking-[0.24em] text-[#e49a2f]">
                      Mission card
                    </p>
                    <p className="mt-1 text-xs font-bold leading-snug text-white">
                      {project.businessGoal}
                    </p>
                    <div className="mt-3 grid gap-2 sm:grid-cols-2">
                      <div className="rounded-xl border border-white/10 bg-white/[0.05] p-2">
                        <p className="text-[8px] font-black uppercase tracking-[0.18em] text-[#7c6cf2]">
                          Proof
                        </p>
                        <p className="mt-1 text-[10px] font-semibold leading-snug text-[#d8d1e6]">
                          {project.measurableOutcome}
                        </p>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-white/[0.05] p-2">
                        <p className="text-[8px] font-black uppercase tracking-[0.18em] text-[#d9468f]">
                          Support
                        </p>
                        <p className="mt-1 text-[10px] font-semibold leading-snug text-[#d8d1e6]">
                          {project.supportProof[0]}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>

                {/* Project Info */}
                <div className="flex flex-1 flex-col p-5 lg:p-6 relative">
                  <div className="absolute top-0 right-6 -translate-y-1/2 flex gap-1.5">
                    {project.stack.slice(0,2).map(tech => (
                      <span key={tech} className="rounded-full border border-white/20 bg-black/80 backdrop-blur-md px-2.5 py-0.5 text-[8px] font-bold uppercase tracking-wider text-white shadow-xl">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-black tracking-tight text-white mb-2 mt-1">{project.title}</h3>
                  <p className="text-xs text-[#a1a1aa] mb-4 leading-relaxed flex-grow">{project.outcome}</p>
                  
                  <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3 mb-4">
                    <p className="text-[8px] font-black uppercase tracking-[0.2em] text-[#7c6cf2] mb-1">Value Delivered</p>
                    <p className="text-[11px] font-semibold text-white leading-snug">{project.supportProof[1]}</p>
                  </div>

                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-[#d9468f] transition-colors w-fit">
                    Visit Live Site <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="relative z-20 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[48px] border border-white/10 bg-[#0a0812] shadow-2xl relative">
          <div className="absolute top-0 right-0 h-[500px] w-[500px] bg-gradient-to-bl from-[#7c6cf2]/16 to-transparent blur-[100px] pointer-events-none" />
          
          <div className="grid gap-12 p-8 sm:p-16 lg:grid-cols-2 relative z-10">
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-black tracking-[-0.04em] text-white sm:text-6xl mb-6">Ready to support <br/><span className="text-[#d9468f]">your team.</span></h2>
              <p className="text-lg text-[#a1a1aa] mb-10 max-w-md">
                Open to Application Support, IT Support L1/L2, Technical Support, ICT Support, Web Applications Support, Web Development, and Database/Application Support opportunities.
              </p>

              <div className="mb-8 flex flex-wrap gap-2">
                <span className="cosmic-chip">
                  <MapPin className="mr-2 h-3.5 w-3.5" />
                  Adelaide, South Australia
                </span>
                <span className="cosmic-chip">On-site, hybrid, or remote</span>
                <span className="cosmic-chip">Available for junior/support roles</span>
              </div>
              
              <div className="flex flex-col gap-4 sm:flex-row">
                <a href="mailto:bhandarirajiv25@gmail.com" className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 font-bold text-black transition hover:scale-105">
                  <Mail className="mr-2 h-4 w-4" /> Email Me
                </a>
                <a href="https://www.linkedin.com/in/rajiv-bhandari25/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-4 font-bold text-white hover:bg-white/10 transition">
                  <FaLinkedin className="mr-2 h-4 w-4" /> LinkedIn
                </a>
              </div>
            </div>
            
            <div className="rounded-[32px] border border-white/5 bg-white/[0.02] p-8 backdrop-blur-md">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
