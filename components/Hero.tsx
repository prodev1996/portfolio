// components/Hero.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const ROLE_TITLES = [
  "ICT Support Specialist",
  "Full Stack Developer",
  "Systems & Web Engineer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedText, setTypedText] = useState("");

  // simple typewriter effect for ROLE_TITLES
  useEffect(() => {
    const current = ROLE_TITLES[roleIndex];

    if (typedText === current) {
      const hold = setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % ROLE_TITLES.length);
        setTypedText("");
      }, 1600);
      return () => clearTimeout(hold);
    }

    const timeout = setTimeout(() => {
      setTypedText(current.slice(0, typedText.length + 1));
    }, 70);

    return () => clearTimeout(timeout);
  }, [typedText, roleIndex]);

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-slate-800/60 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900"
    >
      {/* --- Background layers --- */}

      {/* Ambient colour glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-10 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -right-32 top-40 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      {/* soft vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_0%,rgba(0,0,0,0.85)_70%)] opacity-40" />

      {/* optional smokey texture (needs /public/smoke.png) */}
      <div className="pointer-events-none absolute inset-0 opacity-20 mix-blend-screen bg-[url('/smoke.png')] bg-cover bg-center animate-slow-pan" />

      {/* glow behind photo */}
      <div className="pointer-events-none absolute right-16 top-32 h-72 w-72 rounded-full bg-emerald-500/25 blur-3xl opacity-70 animate-pulse" />

      {/* floating particles */}
      <div className="pointer-events-none absolute inset-0">
        <span className="hero-particle hero-particle-1" style={{ top: "18%", left: "14%" }} />
        <span className="hero-particle hero-particle-2" style={{ top: "30%", left: "70%" }} />
        <span className="hero-particle hero-particle-3" style={{ top: "60%", left: "20%" }} />
        <span className="hero-particle hero-particle-4" style={{ top: "72%", left: "80%" }} />
        <span className="hero-particle hero-particle-5" style={{ top: "45%", left: "50%" }} />
      </div>

      {/* --- Main content --- */}
      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-12 px-6 pb-20 pt-24 lg:flex-row lg:items-start lg:pb-28 lg:pt-28">
        {/* LEFT: text */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* availability badge */}
          <motion.div
            className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300 ring-1 ring-emerald-500/30"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.9)]" />
            Open to ICT Support, Web Dev & Hybrid roles in Adelaide
          </motion.div>

          {/* main heading */}
          <motion.h1
            className="mt-6 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Rajiv Bhandari
          </motion.h1>

          <p className="mt-2 text-xs sm:text-sm font-medium uppercase tracking-[0.25em] text-emerald-300">
            ICT SUPPORT SPECIALIST & FULL STACK DEVELOPER
          </p>

          {/* typewriter line */}
          <div className="mt-4 flex items-baseline gap-2 text-sm sm:text-base">
            <span className="text-xs font-medium uppercase tracking-[0.24em] text-slate-500">
              Currently focusing on
            </span>
            <span className="typewriter-text font-semibold text-emerald-200">
              {typedText}
            </span>
            <span className="typewriter-cursor text-emerald-400">|</span>
          </div>

          <p className="mt-6 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
            I am an ICT professional based in Adelaide with hands-on experience in
            Windows systems, Microsoft 365, Active Directory, networking and service
            desk support. On the development side, I design and build modern web
            applications using React, Next.js, Node.js and MongoDB. I enjoy solving
            complex technical problems and helping people and businesses use
            technology with confidence.
          </p>

          <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
            I am especially interested in hybrid roles where I can combine support,
            systems administration and engineering to deliver reliable infrastructure,
            clean user experiences and clear technical communication.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/40 transition hover:-translate-y-0.5 hover:bg-emerald-400 hover:shadow-emerald-400/50"
            >
              Contact me
            </a>

            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-600 px-5 py-2.5 text-sm font-medium text-slate-100 transition hover:border-emerald-400 hover:text-emerald-200 hover:-translate-y-0.5"
            >
              View projects
              <ArrowRight size={14} />
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-1 text-xs text-slate-400">
            <span>Based in Adelaide, Australia</span>
            <span>Comfortable across ICT support, systems and web development</span>
          </div>
        </motion.div>

        {/* RIGHT: 3D card with photo */}
        <motion.div
          className="flex-1 max-w-sm"
          style={{ perspective: 1200 }}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          <motion.div
            whileHover={{ rotateX: -8, rotateY: 10, translateY: -10 }}
            transition={{ type: "spring", stiffness: 120, damping: 14 }}
            className="relative rounded-3xl border border-slate-800/80 bg-slate-900/70 p-5 shadow-[0_0_80px_rgba(15,23,42,0.9)] backdrop-blur-xl"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-900">
              <Image
                src="/profile-hero.png"
                alt="Rajiv Bhandari"
                fill
                className="object-cover object-center"
                sizes="(min-width: 1024px) 320px, 60vw"
              />
            </div>

            <div className="mt-4 space-y-1 text-xs text-slate-300">
              <div className="flex justify-between">
                <span className="text-slate-400">Location</span>
                <span>Adelaide, South Australia</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Core focus</span>
                <span>ICT Support, Systems & Web Development</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Tech stack</span>
                <span>React, Next.js, Node.js, MongoDB, MySQL</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Real projects</span>
                <span>Glide Education, Prime Roof Care & more</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
