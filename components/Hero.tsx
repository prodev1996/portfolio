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
import { FaLinkedin } from "react-icons/fa";

const roleBadges = [
  "Microsoft 365",
  "Business Applications",
  "SQL",
  "Power BI",
  "SharePoint",
  "User Access",
  "Documentation",
];

const strengths = [
  {
    title: "Application Support",
    desc: "Business applications, Microsoft 365, access issues, and practical troubleshooting",
    icon: ShieldCheck,
  },
  {
    title: "Reporting & Improvement",
    desc: "Documentation, workflow support, reporting, and steady process improvement",
    icon: BarChart3,
  },
  {
    title: "Web Delivery",
    desc: "Client-facing websites, deployments, content updates, and polished front-end builds",
    icon: Code2,
  },
];

const quickWins = [
  "Supported Microsoft 365, user access, workflow issues, and day-to-day business applications",
  "Worked with reporting, data accuracy, and documentation in operational support roles",
  "Built and maintain 2 live client websites, including deployment and updates",
];

const targetRoles = [
  "Application Support Analyst",
  "Business Systems Support",
  "Microsoft 365 / Service Desk Support",
  "Reporting / Data Analyst",
];

const heroFacts = [
  {
    value: "Australia based",
    label: "Open to on-site and hybrid application support, systems, or reporting roles",
    icon: MapPin,
  },
  {
    value: "Business systems support",
    label: "Access, troubleshooting, workflow support, and user communication",
    icon: ShieldCheck,
  },
  {
    value: "2 live client sites",
    label: "Designed, launched, supported, and maintained end to end",
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
                Application support, reporting, and Microsoft 365
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.04 }}
              className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#1f9d72]"
            >
              Application Support Analyst | Data Analytics (SQL, Power BI)
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="max-w-3xl text-[2.45rem] font-semibold leading-[1.08] tracking-tight text-[#1d2d25] sm:text-[3rem] lg:text-[3.35rem]"
            >
              Supporting business systems and turning data into clearer insights.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.14 }}
              className="mt-5 max-w-2xl text-[15px] leading-8 text-[#52645a] sm:text-[17px]"
            >
              Based in Australia, I support Microsoft 365, user access,
              business applications, and day-to-day workflow issues. I am also
              building deeper reporting skills with SQL and Power BI, so the
              best fit is a role that connects application support,
              communication, and operational data.
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
                  View Resume
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
                Available in Australia
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
                  <p className="mt-1 text-sm text-[#5a6d63]">Australia</p>
                  <p className="mt-2.5 text-[14px] leading-6 text-[#4f6258]">
                    Application support first, building toward reporting and data analytics.
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
                Current Focus
              </p>
            </div>
            <p className="mt-4 text-base font-semibold text-[#1d2d25]">
              Building depth in reporting, automation, and Microsoft 365 administration.
            </p>
            <p className="mt-3 text-sm leading-7 text-[#5c6d63]">
              Current focus includes Intune, Azure, PowerShell, SQL, and
              operational reporting. The core profile stays the same:
              application support, structured problem solving, and clearer
              reporting.
            </p>

            <div className="mt-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#7a8a80]">
                Target Roles
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {targetRoles.map((role) => (
                  <span key={role} className="badge">
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}


