"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-slate-800/60 bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-950"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-20 pt-28 lg:flex-row lg:items-center lg:gap-16 lg:pt-32">
        {/* LEFT – INTRO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          {/* badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-xs font-medium text-emerald-300">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Open to ICT Support, Web Dev & Hybrid roles in Adelaide
          </div>

          {/* name + title */}
          <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
            Rajiv Bhandari
          </h1>
          <p className="mt-3 text-sm font-medium uppercase tracking-[0.2em] text-emerald-300">
            ICT Support Specialist &amp; Full Stack Developer
          </p>

          {/* summary */}
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
            I am an ICT professional based in Adelaide with hands-on experience
            in Windows systems, Microsoft 365, Active Directory, networking and
            service desk support. On the development side, I design and build
            modern web applications using React, Next.js, Node.js and MongoDB.
            I enjoy solving complex technical problems and helping people and
            businesses use technology with confidence.
          </p>

          {/* CTA buttons */}
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-2 text-sm font-medium text-slate-950 shadow-sm transition hover:bg-emerald-400"
            >
              Contact me
            </Link>
            <Link
              href="#projects"
              className="inline-flex items-center justify-center rounded-full border border-slate-700/80 px-5 py-2 text-sm font-medium text-slate-100 hover:border-slate-500 hover:bg-slate-900/60"
            >
              View projects
            </Link>
          </div>

          {/* small meta line */}
          <p className="mt-4 text-xs text-slate-400">
            Based in Adelaide, Australia · Comfortable across ICT support,
            system administration and modern web development.
          </p>
        </motion.div>

        {/* RIGHT – QUICK SNAPSHOT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex-1"
        >
          <div className="rounded-3xl border border-slate-800/80 bg-slate-900/60 p-6 shadow-[0_0_80px_rgba(16,185,129,0.12)] backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Quick snapshot
            </p>

            <dl className="mt-4 space-y-3 text-sm text-slate-200">
              <div className="flex justify-between gap-6">
                <dt className="text-slate-400">Location</dt>
                <dd>Adelaide, South Australia</dd>
              </div>
              <div className="flex justify-between gap-6">
                <dt className="text-slate-400">Core focus</dt>
                <dd>ICT Support, Systems &amp; Web Development</dd>
              </div>
              <div className="flex justify-between gap-6">
                <dt className="text-slate-400">Tech stack</dt>
                <dd className="text-right">
                  React, Next.js, Node.js, MongoDB, MySQL
                </dd>
              </div>
              <div className="flex justify-between gap-6">
                <dt className="text-slate-400">Real projects</dt>
                <dd className="text-right">
                  Glide Education, Prime Roof Care and more
                </dd>
              </div>
            </dl>

            <p className="mt-5 rounded-2xl bg-slate-900/80 p-4 text-xs leading-relaxed text-slate-300">
              Highly interested in hybrid roles that combine hands-on ICT
              support, system administration and modern web development to
              deliver reliable systems and excellent user experiences for teams
              and clients.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
