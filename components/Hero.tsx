"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useMemo, useState, MouseEvent } from "react";

const ROLE_TITLES = [
  "ICT Support Specialist",
  "Full Stack Developer",
  "Systems & Web Engineer",
];

function scrollToSection(sectionId: string) {
  if (typeof window === "undefined") return;

  const el = document.getElementById(sectionId);
  const header = document.querySelector("header");
  const headerHeight = header?.getBoundingClientRect().height ?? 80;

  if (!el) {
    if (sectionId === "top") window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const rect = el.getBoundingClientRect();
  const top = window.scrollY + rect.top - headerHeight;
  window.scrollTo({ top, behavior: "smooth" });
  window.history.pushState(null, "", `#${sectionId}`);
}

function TerminalLine({ text }: { text: string }) {
  const [out, setOut] = useState("");

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      i += 1;
      setOut(text.slice(0, i));
      if (i >= text.length) clearInterval(t);
    }, 22);
    return () => clearInterval(t);
  }, [text]);

  return (
    <div className="inline-flex items-center gap-2 rounded-2xl border border-slate-800/70 bg-slate-950/50 px-4 py-2 font-mono text-xs text-slate-200 backdrop-blur">
      <span className="text-emerald-300">~/</span>
      <span className="text-slate-300">{out}</span>
      <span className="ml-1 inline-block h-3 w-2 animate-pulse rounded-sm bg-emerald-400/80" />
    </div>
  );
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedText, setTypedText] = useState("");

  // --- role typewriter ---
  useEffect(() => {
    const current = ROLE_TITLES[roleIndex];

    if (typedText === current) {
      const hold = setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % ROLE_TITLES.length);
        setTypedText("");
      }, 1200);
      return () => clearTimeout(hold);
    }

    const timeout = setTimeout(() => {
      setTypedText(current.slice(0, typedText.length + 1));
    }, 55);

    return () => clearTimeout(timeout);
  }, [typedText, roleIndex]);

  // --- mouse parallax ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 35, damping: 18, mass: 0.5 });
  const smoothY = useSpring(mouseY, { stiffness: 35, damping: 18, mass: 0.5 });
  const tx = useTransform(smoothX, (v) => v * 0.02);
  const ty = useTransform(smoothY, (v) => v * 0.02);

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const proof = useMemo(
    () => [
      { k: "Based in", v: "Adelaide, AU" },
      { k: "Support", v: "M365 • AD • Windows • Networking" },
      { k: "Dev", v: "React • Next • Django • Node" },
    ],
    [],
  );

  return (
    <section
      id="top"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[100svh] overflow-hidden border-b border-slate-800/60 bg-[#020617]"
    >
      {/* Animated glow background */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -left-40 top-0 h-[520px] w-[520px] rounded-full bg-emerald-500/18 blur-3xl"
          animate={{ y: [0, 28, 0], x: [0, 18, 0], opacity: [0.35, 0.6, 0.35] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-44 top-24 h-[520px] w-[520px] rounded-full bg-cyan-500/14 blur-3xl"
          animate={{ y: [0, -22, 0], x: [0, -18, 0], opacity: [0.25, 0.55, 0.25] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Smoke parallax (optional) */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-screen"
        style={{ x: tx, y: ty }}
        aria-hidden="true"
      >
        <Image src="/smoke.png" alt="" fill className="object-cover object-center" priority />
      </motion.div>

      {/* vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.14)_0,_rgba(2,6,23,0.98)_58%)]" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 pb-16 pt-24 sm:px-6 lg:grid-cols-2 lg:pb-24 lg:pt-28">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <TerminalLine text="dev-rajiv⚡️" />

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
            Hi, I am <span className="text-emerald-200">Rajiv Bhandari</span>
          </h1>

          <p className="mt-2 text-lg text-slate-300">
            Welcome to my happy place 🙂
          </p>

          {/* Typewriter role */}
          <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-slate-900/55 px-4 py-2 text-xs text-slate-200 ring-1 ring-slate-700/70">
            <span className="text-slate-400">Currently:</span>
            <span className="font-semibold text-emerald-200">{typedText}</span>
            <span className="text-emerald-400">|</span>
            <span className="text-slate-300">Adelaide</span>
          </div>

          <p className="mt-6 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-[15px]">
            I support users and environments across Windows, Microsoft 365, Active Directory,
            troubleshooting, and networking — and I also build modern web apps using React, Next.js,
            Django and Node.js.
          </p>

          {/* proof pills */}
          <div className="mt-6 flex flex-wrap gap-2">
            {proof.map((p) => (
              <span
                key={p.k}
                className="inline-flex items-center gap-2 rounded-full border border-slate-800/70 bg-slate-900/40 px-3 py-1 text-[11px] text-slate-200"
              >
                <span className="text-slate-400">{p.k}:</span>
                <span className="text-slate-100">{p.v}</span>
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => scrollToSection("projects")}
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_18px_40px_rgba(16,185,129,0.55)] transition-transform hover:-translate-y-0.5 hover:bg-emerald-400"
            >
              Let&apos;s get started!!!
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center justify-center rounded-full border border-slate-700/70 bg-slate-900/45 px-6 py-3 text-sm font-semibold text-slate-100 transition-transform hover:-translate-y-0.5 hover:border-emerald-400/70 hover:text-emerald-200"
            >
              Contact
            </button>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
          className="relative"
        >
          <motion.div
            className="pointer-events-none absolute -inset-8 rounded-[40px] bg-emerald-500/10 blur-3xl"
            animate={{ opacity: [0.25, 0.45, 0.25] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="relative overflow-hidden rounded-[28px] border border-slate-800/70 bg-slate-900/45 shadow-[0_30px_80px_rgba(0,0,0,0.6)] backdrop-blur"
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <div className="h-1 w-full bg-gradient-to-r from-emerald-400/70 via-cyan-400/50 to-indigo-400/50" />

            <div className="relative h-[380px] w-full bg-slate-950">
              <Image
                src="/profile-hero.png"
                alt="Rajiv Bhandari"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />
            </div>

            <div className="p-6">
              <div className="text-xs uppercase tracking-[0.22em] text-slate-400">
                Quick intro
              </div>
              <div className="mt-2 text-lg font-semibold text-slate-50">
                ICT Support • Systems • Web Apps
              </div>
              <div className="mt-2 text-sm text-slate-300">
                I love clean UI, reliable systems, and solving real user problems.
              </div>

              <button
                type="button"
                onClick={() => scrollToSection("experience")}
                className="mt-5 inline-flex w-full items-center justify-center rounded-2xl border border-slate-800/70 bg-slate-900/40 px-4 py-3 text-sm font-semibold text-slate-100 transition-colors hover:border-emerald-400/70 hover:text-emerald-200"
              >
                View experience <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator (Miraj vibe) */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2">
        <motion.div
          className="flex items-center gap-2 rounded-full border border-slate-800/70 bg-slate-900/40 px-4 py-2 text-[11px] text-slate-300 backdrop-blur"
          animate={{ y: [0, 6, 0], opacity: [0.65, 1, 0.65] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          sXroll ▼
        </motion.div>
      </div>
    </section>
  );
}
