// components/Hero.tsx
"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useState, MouseEvent } from "react";

const ROLE_TITLES = [
  "ICT Support Specialist",
  "Full Stack Developer",
  "Systems & Web Engineer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedText, setTypedText] = useState("");

  // ---- typewriter for role line ----
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

  // ---- mouse-follow smoke motion ----
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // smooth spring so it eases toward cursor instead of snapping
  const smoothX = useSpring(mouseX, { stiffness: 40, damping: 18, mass: 0.5 });
  const smoothY = useSpring(mouseY, { stiffness: 40, damping: 18, mass: 0.5 });

  // convert mouse delta to small pixel offsets
  const translateX = useTransform(smoothX, (v) => v * 0.03); // max ~10–15px
  const translateY = useTransform(smoothY, (v) => v * 0.03);

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-slate-800/60 bg-[#020617]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Mouse-follow smoke background */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-[0.22] mix-blend-screen"
        style={{ x: translateX, y: translateY }}
      >
        <Image
          src="/smoke.png"
          alt="Smoke background"
          fill
          className="object-cover object-center"
          priority
        />
      </motion.div>

      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-10 h-80 w-80 rounded-full bg-emerald-500/18 blur-3xl" />
        <div className="absolute -right-32 top-40 h-72 w-72 rounded-full bg-cyan-500/14 blur-3xl" />
      </div>

      {/* Soft vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.12)_0,_rgba(15,23,42,0.98)_55%)]" />

      {/* Optional tiny particles if you already have CSS for .hero-particle* */}
      <div className="pointer-events-none absolute inset-0">
        <span
          className="hero-particle hero-particle-1"
          style={{ top: "18%", left: "14%" }}
        />
        <span
          className="hero-particle hero-particle-2"
          style={{ top: "30%", left: "70%" }}
        />
        <span
          className="hero-particle hero-particle-3"
          style={{ top: "60%", left: "22%" }}
        />
        <span
          className="hero-particle hero-particle-4"
          style={{ top: "74%", left: "78%" }}
        />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 pb-20 pt-20 sm:px-6 lg:flex-row lg:items-stretch lg:gap-12 lg:pb-24 lg:pt-24">
        {/* LEFT – text + CTAs */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Availability chip */}
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium text-emerald-200 shadow-[0_18px_40px_rgba(16,185,129,0.35)]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.45 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to ICT Support / Web Dev roles in Adelaide &amp; hybrid
          </motion.div>

          {/* Name + title */}
          <div className="mt-6 space-y-3">
            <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
              Rajiv Bhandari
            </h1>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-300 sm:text-xs">
              ICT Support Specialist &amp; Full Stack Developer
            </p>

            {/* Typewriter line */}
            <div className="mt-3 inline-flex items-baseline gap-2 rounded-full bg-slate-900/70 px-4 py-2 text-xs text-slate-200 ring-1 ring-slate-700/70">
              <span className="text-slate-400">Currently focusing on</span>
              <span className="font-semibold text-emerald-200">
                {typedText}
              </span>
              <span className="text-emerald-400">|</span>
            </div>
          </div>

          {/* Summary */}
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-[15px]">
            I&apos;m an ICT professional based in Adelaide with hands-on
            experience across Windows systems, Microsoft 365, Active Directory,
            networking and service desk support. On the development side, I
            build modern web applications using React, Next.js, Django and
            Node.js.
          </p>

          <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-[15px]">
            I&apos;m especially interested in hybrid roles where I can combine
            support, systems administration and engineering to deliver reliable
            infrastructure, clean user experiences and clear communication with
            non-technical users.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_18px_40px_rgba(16,185,129,0.55)] transition-transform hover:-translate-y-0.5 hover:bg-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/80"
            >
              Contact me
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </a>

            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full border border-slate-600 bg-slate-900/80 px-5 py-2.5 text-sm font-medium text-slate-100 shadow-[0_16px_32px_rgba(15,23,42,0.6)] transition-transform hover:-translate-y-0.5 hover:border-emerald-400 hover:text-emerald-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/80"
            >
              View projects
            </a>
          </div>

          {/* Small confidence line */}
          <div className="mt-5 flex flex-wrap gap-3 text-[11px] text-slate-400">
            <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/90 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Based in Adelaide, Australia
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/90 px-3 py-1">
              Comfortable across ICT support, systems &amp; web development
            </span>
          </div>
        </motion.div>

        {/* RIGHT – profile card */}
        <motion.div
          className="flex-1 min-w-[260px]"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="relative mx-auto max-w-sm">
            {/* glow behind photo */}
            <div className="pointer-events-none absolute inset-x-6 top-10 h-64 rounded-[32px] bg-emerald-500/18 blur-3xl" />

            {/* Photo card */}
            <div className="relative overflow-hidden rounded-[26px] border border-slate-700/80 bg-slate-900/80 shadow-[0_22px_60px_rgba(15,23,42,0.95)] backdrop-blur">
              <div className="relative h-64 w-full overflow-hidden border-b border-slate-800/80 bg-slate-950">
                <Image
                  src="/profile-hero.png"
                  alt="Rajiv Bhandari"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>

              <div className="space-y-3 px-5 pb-5 pt-4 text-[13px] text-slate-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                      Location
                    </p>
                    <p className="mt-1 text-sm font-medium text-slate-50">
                      Adelaide, South Australia
                    </p>
                  </div>
                  <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-200 ring-1 ring-emerald-400/40">
                    Available for full-time &amp; hybrid
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 rounded-2xl bg-slate-900/80 px-3 py-3 text-[12px]">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                      Current focus
                    </p>
                    <p className="mt-1 text-slate-100">
                      ICT support, systems &amp; modern web apps
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                      Strengths
                    </p>
                    <p className="mt-1 text-slate-100">
                      Troubleshooting, clear communication, ownership
                    </p>
                  </div>
                </div>

                <div className="space-y-1.5 text-[12px]">
                  <div className="flex justify-between gap-3">
                    <span className="text-slate-400">Support stack</span>
                    <span className="text-right">
                      Windows, Microsoft 365, AD, basic networking
                    </span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-slate-400">Dev stack</span>
                    <span className="text-right">
                      React, Next.js, Django, Node.js, SQL / MongoDB
                    </span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-slate-400">Real projects</span>
                    <span className="text-right">
                      Glide Education &amp; Prime Roof Care
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
