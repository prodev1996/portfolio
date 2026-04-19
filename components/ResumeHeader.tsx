"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaGlobe,
} from "react-icons/fa";
import { Download, ArrowLeft, Sparkles } from "lucide-react";

export default function ResumeHeader() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-[40px] border border-white/10 bg-[#120f1d]/82 p-6 shadow-[0_40px_140px_rgba(0,0,0,0.4)] backdrop-blur-3xl sm:p-10"
    >
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#7c6cf2]/16 blur-[100px]" />
      <div className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-[#d9468f]/12 blur-[100px]" />
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(228,154,47,0.06)_0%,transparent_60%)]" />

      <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="relative flex-1">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.25em] text-[#d8d1e6] shadow-[0_10px_40px_rgba(0,0,0,0.5)] backdrop-blur-2xl"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#d9468f]" />
            Professional Resume
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl font-extrabold tracking-[-0.04em] text-white sm:text-6xl md:text-7xl"
          >
            Rajiv <span className="bg-gradient-to-r from-[#7c6cf2] via-[#d9468f] to-[#e49a2f] bg-clip-text text-transparent">Bhandari</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-4 text-xl font-medium tracking-tight text-[#d8d1e6] sm:text-2xl"
          >
            Application Support Analyst • Data Analytics
          </motion.p>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-[#a1a1aa] sm:text-lg"
          >
            Technical professional with experience supporting Microsoft 365,
            business applications, access changes, workflow issues, and clear
            documentation. I also bring web delivery experience from live client
            projects, with a practical approach to support, reporting, and
            continuous improvement.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex flex-wrap gap-2"
          >
            {["Microsoft 365", "Business systems", "SQL + Power BI", "Live support"].map((item, i) => (
              <span key={item} className="cosmic-chip" style={{ animationDelay: `${i * 0.1}s` }}>
                {item}
              </span>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link href="/" className="btn-outline flex items-center gap-2 group">
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>

            <a
              href="/Rajiv_Bhandari_Resume.pdf"
              className="btn-primary flex items-center gap-2 group"
            >
              <Download className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
              Download PDF
            </a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="relative w-full max-w-sm rounded-[32px] border border-white/10 bg-black/40 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.5)] backdrop-blur-2xl lg:w-80 shrink-0"
        >
          <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none" />
          
          <div className="relative z-10 flex flex-col gap-5 text-sm font-medium text-[#c9c1d8]">
            <a href="mailto:bhandarirajiv25@gmail.com" className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-3 transition hover:bg-white/[0.06] hover:border-white/10">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f0abfc]/10 text-[#f0abfc] transition group-hover:scale-110 group-hover:bg-[#f0abfc]/20">
                <FaEnvelope size={16} />
              </div>
              <span className="truncate">bhandarirajiv25@gmail.com</span>
            </a>

            <div className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#7c6cf2]/10 text-[#7c6cf2]">
                <FaPhoneAlt size={16} />
              </div>
              <span>+61 413 230 855</span>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e49a2f]/10 text-[#e49a2f]">
                <FaMapMarkerAlt size={16} />
              </div>
              <span>Adelaide, South Australia</span>
            </div>

            <a href="https://www.linkedin.com/in/rajiv-bhandari25/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-3 transition hover:bg-white/[0.06] hover:border-white/10">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#35aeca]/10 text-[#35aeca] transition group-hover:scale-110 group-hover:bg-[#35aeca]/18">
                <FaLinkedin size={18} />
              </div>
              <span className="truncate">linkedin.com/in/rajiv-bhandari25</span>
            </a>

            <a href="https://www.rajivbhandari.com" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-3 transition hover:bg-white/[0.06] hover:border-white/10">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d9468f]/10 text-[#d9468f] transition group-hover:scale-110 group-hover:bg-[#d9468f]/18">
                <FaGlobe size={18} />
              </div>
              <span className="truncate">rajivbhandari.com</span>
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
