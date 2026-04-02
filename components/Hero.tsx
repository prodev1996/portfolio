"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  ChartNoAxesColumn,
  Code2,
  Download,
  MapPin,
  Mail,
  ShieldCheck,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const roleBadges = [
  "Microsoft 365",
  "Windows Support",
  "Active Directory",
  "SharePoint",
  "React / Next.js",
  "Troubleshooting",
];

const strengths = [
  {
    title: "Support",
    desc: "Microsoft 365, business systems, user support, and troubleshooting",
    icon: ShieldCheck,
  },
  {
    title: "Web Delivery",
    desc: "Client-facing websites, content updates, and polished front-end builds",
    icon: Code2,
  },
  {
    title: "Ownership",
    desc: "Clear communication, documentation, and dependable follow-through",
    icon: BarChart3,
  },
];

const quickWins = [
  "Hands-on support across Microsoft 365, access issues, and day-to-day business tools",
  "Real client websites already live, maintained, and easy to walk through",
  "Comfortable switching between user problems, technical fixes, and delivery work",
];

const heroFacts = [
  {
    value: "Adelaide based",
    label: "Open to on-site, hybrid, and support-led roles",
    icon: MapPin,
  },
  {
    value: "Microsoft 365 support",
    label: "Access, workflow, and day-to-day issue handling",
    icon: ShieldCheck,
  },
  {
    value: "2 live client sites",
    label: "Already designed, launched, and maintained",
    icon: CheckCircle2,
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative scroll-mt-52 overflow-hidden px-6 pb-14 pt-10 sm:px-8 sm:pt-12 lg:px-10"
    >
      <div className="pointer-events-none absolute inset-0 hero-smoke" />
      <motion.div
        className="pointer-events-none absolute left-1/2 top-8 h-72 w-[44rem] -translate-x-1/2 rounded-full bg-white/60 blur-3xl"
        animate={{ scale: [1, 1.05, 1], opacity: [0.55, 0.72, 0.55] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-[1.12fr_0.88fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="soft-panel mb-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-[#365246]"
            >
              <BriefcaseBusiness className="h-3.5 w-3.5 text-[#1f9d72]" />
              <span>
                Open to ICT support, service desk, application support, and hybrid technical roles
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.04 }}
              className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#1f9d72]"
            >
              ICT Support • Microsoft 365 • Web Delivery
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="max-w-3xl text-[2.45rem] font-semibold leading-[1.08] tracking-tight text-[#1d2d25] sm:text-[3rem] lg:text-[3.35rem]"
            >
              ICT support, Microsoft 365 know-how, and polished web delivery for real businesses.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.14 }}
              className="mt-5 max-w-2xl text-[15px] leading-8 text-[#52645a] sm:text-[17px]"
            >
              Based in Adelaide, I bring hands-on experience across Microsoft
              365, day-to-day business systems, troubleshooting, access and
              support workflows, plus the ability to design, build, and maintain
              polished websites for real clients. The strongest fit is in roles
              where support, communication, ownership, and practical technical
              delivery all matter.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="mt-7 flex flex-wrap gap-4"
            >
              <motion.a href="#projects" className="btn-primary" whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>
                View Projects
                <motion.span whileHover={{ x: 3 }} transition={{ duration: 0.18 }}>
                  <ArrowRight className="h-4 w-4" />
                </motion.span>
              </motion.a>

              <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>
                <Link href="/resume" className="btn-outline">
                  <Download className="h-4 w-4" />
                  Resume
                </Link>
              </motion.div>

              <motion.a href="#contact" className="btn-outline" whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>
                <Mail className="h-4 w-4" />
                Contact
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.24 }}
              className="mt-8 grid gap-3 sm:grid-cols-3"
            >
              {heroFacts.map((fact, index) => (
                <motion.div
                  key={fact.value}
                  className="rounded-[24px] border border-[#dfe7de] bg-white/72 px-4 py-4 shadow-[0_12px_28px_rgba(118,103,79,0.08)] backdrop-blur-sm"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.26 + index * 0.06 }}
                  whileHover={{ y: -3 }}
                >
                  <div className="flex items-center gap-2 text-[#1f9d72]">
                    <fact.icon className="h-4 w-4" />
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6c7d73]">
                      Highlight
                    </p>
                  </div>
                  <p className="mt-3 text-[15px] font-semibold text-[#1d2d25]">
                    {fact.value}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-[#55675d]">
                    {fact.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.32 }}
              className="mt-6 flex flex-wrap gap-3"
            >
              {roleBadges.map((badge, index) => (
                <motion.span
                  key={badge}
                  className="badge"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.34 + index * 0.04 }}
                  whileHover={{ y: -2, scale: 1.03 }}
                >
                  {badge}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.38 }}
              className="mt-8 flex items-center gap-5 text-xl text-[#5c6d63]"
            >
              <motion.a
                href="https://github.com/prodev1996"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-[#1d2d25]"
                aria-label="GitHub"
                whileHover={{ y: -3, scale: 1.12 }}
              >
                <FaGithub />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/rajiv-bhandari25/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-[#1f9d72]"
                aria-label="LinkedIn"
                whileHover={{ y: -3, scale: 1.12 }}
              >
                <FaLinkedin />
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              className="section-glow glass-card spotlight-ring relative w-full max-w-[360px] overflow-hidden rounded-[30px] p-3.5"
              animate={{ y: [0, -5, 0], rotate: [0, -0.22, 0.22, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute right-5 top-5 z-10 rounded-full border border-white/75 bg-white/86 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#355246] shadow-[0_10px_24px_rgba(118,103,79,0.12)]">
                Available in Adelaide
              </div>
              <div className="relative overflow-hidden rounded-[24px] border border-[#e4e6df] bg-[#f3ebe0]">
                <motion.div className="relative aspect-[4/2.5]" whileHover={{ scale: 1.015 }}>
                  <Image
                    src="/profile-hero.png"
                    alt="Rajiv Bhandari"
                    fill
                    priority
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#fffaf2] via-[#fffaf2]/55 to-transparent" />
                </motion.div>
              </div>

              <div className="grid gap-3 px-2 pb-1 pt-3.5">
                <div>
                  <p className="text-[1.55rem] font-semibold text-[#1d2d25]">Rajiv Bhandari</p>
                  <p className="mt-1 text-sm text-[#5a6d63]">Adelaide, Australia</p>
                  <p className="mt-2.5 text-[14px] leading-6 text-[#4f6258]">
                    ICT support, dependable web delivery, and calm ownership across technical work.
                  </p>
                </div>

                <div className="grid gap-2.5">
                  {strengths.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.32 + index * 0.08 }}
                      whileHover={{ y: -4, scale: 1.01 }}
                      className="rounded-2xl border border-[#e4e7de] bg-white/74 px-3.5 py-2.5"
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 rounded-full bg-[#e8f6ef] p-1.5 text-[#1f9d72]">
                          <item.icon className="h-3.5 w-3.5" />
                        </div>
                        <div>
                          <p className="text-[11px] uppercase tracking-[0.22em] text-[#7a8a80]">
                            {item.title}
                          </p>
                          <p className="mt-0.5 text-[14px] leading-6 text-[#31463a]">{item.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.34 }}
          className="mt-10 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]"
        >
          <div className="card">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#1f9d72]">
              Immediate Fit
            </p>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {quickWins.map((item, index) => (
                <motion.div
                  key={item}
                  className="rounded-2xl bg-[#fffdf9] px-4 py-4"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.06 }}
                  whileHover={{ y: -4 }}
                >
                  <p className="text-sm leading-6 text-[#33463b]">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="soft-panel rounded-[28px] p-6"
            whileHover={{ y: -4 }}
          >
            <div className="flex items-center gap-3">
              <ChartNoAxesColumn className="h-5 w-5 text-[#d7854f] pulse-soft rounded-full" />
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6b776f]">
                Also Growing
              </p>
            </div>
            <p className="mt-4 text-base font-semibold text-[#1d2d25]">
              Building deeper systems, automation, and reporting skills alongside support work.
            </p>
            <p className="mt-3 text-sm leading-7 text-[#5c6d63]">
              I am continuing to build in areas like Intune, Azure, PowerShell,
              SQL, and reporting, but this site leads with the work I can
              already prove today: support-minded delivery and real production
              websites.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}


