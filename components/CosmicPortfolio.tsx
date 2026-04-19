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
} from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

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
    year: "2022 - Now",
    role: "IT Application Support Consultant",
    place: "Freelance / Contract",
    summary: "Supporting small business systems while owning website deployment and live updates.",
    points: ["Microsoft 365 support", "Access and workflow issues", "Live websites maintained"],
  },
  {
    year: "2024 - 2025",
    role: "Administrative Assistant",
    place: "SA Mushrooms",
    summary: "Supported records, reporting, documentation, and ICT/data tasks in an operational team.",
    points: ["ICT and data support", "Excel reporting", "Documentation improvement"],
  },
  {
    year: "2020 - 2022",
    role: "Full Stack Developer",
    place: "Eyden Inc",
    summary: "Built and maintained web applications, APIs, and database-backed features.",
    points: ["Web applications", "APIs", "Stakeholder delivery"],
  },
  {
    year: "2017 - 2020",
    role: "Data Specialist",
    place: "CloudFactory",
    summary: "Processed and validated high-volume data with strong accuracy and quality standards.",
    points: ["Data validation", "Quality standards", "Client requirements"],
  },
];

const skillGroups = [
  {
    icon: ShieldCheck,
    label: "Application Support",
    level: "Primary strength",
    color: "from-[#8b5cf6] to-[#ec4899]",
    note: "Resolving access issues, Microsoft 365 workflows, and daily system support.",
    items: ["Microsoft 365", "SharePoint", "Teams", "Exchange", "User Access", "Ticketing"],
  },
  {
    icon: Workflow,
    label: "Systems & Identity",
    level: "Working toolkit",
    color: "from-[#38bdf8] to-[#8b5cf6]",
    note: "Managing environments, device policies, identity, and hosting infrastructure.",
    items: ["Windows", "Active Directory", "Azure AD", "Intune", "DNS", "SSL"],
  },
  {
    icon: Database,
    label: "Reporting & Data",
    level: "Current direction",
    color: "from-[#10b981] to-[#38bdf8]",
    note: "Transforming raw records and issue logs into actionable business insights.",
    items: ["SQL", "Power BI", "Excel Reporting", "Data Validation", "Dashboards"],
  },
  {
    icon: Code2,
    label: "Web Delivery",
    level: "Proof of ownership",
    color: "from-[#f59e0b] to-[#ec4899]",
    note: "Building, maintaining, and deploying scalable client websites.",
    items: ["React", "Next.js", "Tailwind CSS", "Vercel", "API Integration"],
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
      className={`group relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0a0812] shadow-2xl transition-all duration-500 hover:border-white/20 hover:shadow-[0_0_40px_rgba(139,92,246,0.15)] ${className}`}
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
    <div className="bg-[#020108] selection:bg-[#ec4899]/30 selection:text-white">
      <CursorStars />

      {/* --- HERO SECTION --- */}
      <section
        ref={heroRef}
        id="home"
        className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-4"
      >
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0 z-0">
          <div className="absolute left-1/2 top-1/2 h-[60vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#8b5cf6]/20 via-[#ec4899]/10 to-[#f59e0b]/20 blur-[120px]" />
        </motion.div>

        {/* Giant Background Typography */}
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity, scale: textScale }}
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center mix-blend-screen"
        >
          <h1 className="text-[15vw] font-black leading-none tracking-tighter text-white/[0.03] select-none">
            ENGINEER
          </h1>
        </motion.div>

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center"
          >
            <motion.div variants={fadeUp} className="mb-8 relative group">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#ec4899] blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
              <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-white/20 bg-black sm:h-36 sm:w-36">
                <Image src="/profile-hero.png" alt="Rajiv Bhandari" fill className="object-cover" />
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-[#d8d1e6] backdrop-blur-xl">
              <span className="mr-2 h-2 w-2 rounded-full bg-[#10b981] shadow-[0_0_10px_rgba(16,185,129,0.8)] animate-pulse" />
              Available for new roles
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-5xl font-black tracking-[-0.05em] text-white sm:text-7xl lg:text-[6rem] leading-[0.95]"
            >
              Connecting people, <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] via-[#ec4899] to-[#f59e0b]">
                systems & data.
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-2xl text-lg sm:text-xl font-medium leading-relaxed text-[#a1a1aa]"
            >
              I am an Adelaide-based IT professional focused on application support, Microsoft 365, and transforming complex workflows into clear data reporting.
            </motion.p>

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
                Download Resume
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- BENTO GRID ABOUT & SKILLS --- */}
      <section id="about" className="relative z-20 mx-auto max-w-7xl px-4 py-10 lg:py-14 sm:px-6 lg:px-8 scroll-mt-28">
        <div className="mb-6 lg:mb-8 max-w-[1000px] mx-auto">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-[#ec4899]">Overview</p>
          <h2 className="mt-2 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">Expertise Dashboard</h2>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-4 md:grid-rows-2 max-w-[1000px] mx-auto">
          {/* Main About Tile */}
          <BentoCard className="md:col-span-2 md:row-span-1 p-5 lg:p-6" delay={0.1}>
            <div className="flex h-full flex-col justify-center">
              <Sparkles className="h-6 w-6 text-[#f59e0b] mb-3" />
              <div>
                <h3 className="text-xl font-black tracking-tight text-white mb-2">The bridge between technical & practical.</h3>
                <div className="space-y-2">
                  <p className="text-sm text-[#a1a1aa] leading-snug">
                    I don&apos;t just fix issues; I document them, analyze the data behind them using SQL and Power BI, and build robust workflows so the same problems don&apos;t happen twice.
                  </p>
                  <p className="text-sm text-[#a1a1aa] leading-snug">
                    Based in Adelaide, my background spans from managing complete Microsoft 365 environments and complex identity systems to developing scalable web applications. My focus is always on delivering clear, maintainable solutions that empower users and drive tangible business value.
                  </p>
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Core Focus Tile */}
          <BentoCard className="md:col-span-2 md:row-span-1 p-5 lg:p-6 relative flex flex-col justify-center" delay={0.2}>
            <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#8b5cf6]/20 to-transparent opacity-50 blur-2xl pointer-events-none" />
            <h3 className="text-lg font-bold text-white mb-3">Core Focus Areas</h3>
            <div className="space-y-3 relative z-10">
              {[
                { label: "Application Support", v: "100%" },
                { label: "M365 & Active Directory", v: "90%" },
                { label: "SQL & Power BI Reporting", v: "85%" },
                { label: "Web Development", v: "90%" }
              ].map((stat, i) => (
                <div key={stat.label}>
                  <div className="flex justify-between text-xs font-bold text-[#c9c1d8] mb-2 uppercase tracking-wider">
                    <span>{stat.label}</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-[#8b5cf6] to-[#ec4899]"
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

          {/* Skill Blocks - Bottom Row */}
          {skillGroups.map((group, index) => (
            <BentoCard key={group.label} className="md:col-span-1 md:row-span-1 p-4 lg:p-5 flex flex-col group/skill" delay={0.3 + (index * 0.1)}>
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/5 border border-white/10 mb-3 group-hover/skill:scale-110 group-hover/skill:bg-white/10 transition-all duration-500">
                <group.icon className="h-4 w-4 text-white" />
              </div>
              <h3 className="text-base font-bold text-white mb-0.5 group-hover/skill:text-[#ec4899] transition-colors">{group.label}</h3>
              <p className="text-[9px] font-black text-[#8f87a0] uppercase tracking-widest mb-2">{group.level}</p>
              <p className="text-[11px] text-[#a1a1aa] leading-tight mb-3 flex-grow">{group.note}</p>
              
              <div className="mt-auto flex flex-wrap gap-1">
                {group.items.map(item => (
                  <span key={item} className="rounded-md bg-white/[0.03] px-2 py-1 text-[9px] font-bold text-[#d8d1e6] border border-white/10 whitespace-nowrap transition-colors hover:bg-white/10 hover:text-white">
                    {item}
                  </span>
                ))}
              </div>
            </BentoCard>
          ))}
        </div>
      </section>

      {/* --- STICKY EXPERIENCE SECTION --- */}
      <section id="experience" className="relative z-10 w-full bg-[#05040a] border-y border-white/5 py-24 sm:py-32 scroll-mt-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            
            {/* Sticky Left Column */}
            <div className="lg:sticky lg:top-32 lg:col-span-5">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#8b5cf6]">Journey</p>
              <h2 className="mt-4 text-5xl font-black tracking-[-0.04em] text-white sm:text-6xl md:text-7xl">
                Experience
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-[#a1a1aa] max-w-md">
                A track record of stepping into complex environments, untangling systems, and delivering clear results.
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
                  <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br from-[#8b5cf6] to-[#ec4899] opacity-0 blur-[60px] transition duration-700 group-hover:opacity-20" />
                  
                  <div className="relative z-10">
                    <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-[#ec4899] mb-4">
                      {item.year}
                    </span>
                    <h3 className="text-2xl font-black tracking-tight text-white mb-1 group-hover:text-[#8b5cf6] transition-colors">
                      {item.role}
                    </h3>
                    <p className="text-sm font-semibold text-[#a1a1aa] mb-6">{item.place}</p>
                    <p className="text-base text-[#d8d1e6] mb-6 leading-relaxed">{item.summary}</p>
                    
                    <ul className="space-y-3">
                      {item.points.map((point) => (
                        <li key={point} className="flex items-start gap-3 text-sm font-medium text-[#a1a1aa]">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f59e0b] shadow-[0_0_10px_rgba(245,158,11,0.8)]" />
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
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#f59e0b]">Showcase</p>
            <h2 className="mt-2 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">Live Client Builds</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className="group flex flex-col overflow-hidden rounded-[32px] border border-white/10 bg-[#0a0812] transition-all duration-500 hover:border-white/20 hover:shadow-[0_0_40px_rgba(139,92,246,0.1)]"
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
                    <p className="text-[8px] font-black uppercase tracking-[0.2em] text-[#8b5cf6] mb-1">Value Delivered</p>
                    <p className="text-[11px] font-semibold text-white leading-snug">{project.supportProof[1]}</p>
                  </div>

                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-[#ec4899] transition-colors w-fit">
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
          <div className="absolute top-0 right-0 h-[500px] w-[500px] bg-gradient-to-bl from-[#8b5cf6]/20 to-transparent blur-[100px] pointer-events-none" />
          
          <div className="grid gap-12 p-8 sm:p-16 lg:grid-cols-2 relative z-10">
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-black tracking-[-0.04em] text-white sm:text-6xl mb-6">Let&apos;s build <br/><span className="text-[#ec4899]">together.</span></h2>
              <p className="text-lg text-[#a1a1aa] mb-10 max-w-md">
                Open to application support, business systems, and reporting-focused roles. Let&apos;s discuss how I can bring value to your team.
              </p>
              
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
