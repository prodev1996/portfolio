"use client";

import { motion } from "framer-motion";
import { DownloadCloud, Mail, MapPin, Linkedin } from "lucide-react";

export default function ResumeHeader() {
  return (
    <motion.header
      className="border-b border-slate-800 pb-6 md:pb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-50 md:text-4xl">
            Rajiv Bhandari
          </h1>
          <p className="mt-1 text-sm font-medium text-primary">
            ICT Support Specialist & Full Stack Developer
          </p>
          <p className="mt-3 max-w-2xl text-sm text-slate-300">
            ICT Support Specialist experienced in Windows systems, Microsoft
            365, Active Directory, networking, and end-user support. Strong
            background in web development with React and Node.js, plus hands-on
            experience deploying real client projects. Passionate about solving
            problems, improving reliability, and helping people use technology
            confidently.
          </p>
        </div>

        <div className="space-y-2 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-slate-400" />
            <span>Adelaide, South Australia • Open to full-time & contract</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={14} className="text-slate-400" />
            <a
              href="mailto:bhandarirajiv25@gmail.com"
              className="text-primary hover:underline"
            >
              bhandarirajiv25@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Linkedin size={14} className="text-slate-400" />
            <a
              href="https://www.linkedin.com/in/rajiv-bhandari25/"
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline"
            >
              linkedin.com/in/rajiv-bhandari25
            </a>
          </div>

          <div className="pt-2">
            <a
              href="/Rajiv_Bhandari_Resume.pdf" // put your PDF in /public with this name
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-3 py-1.5 text-xs font-medium text-slate-100 hover:border-primary hover:text-primary"
            >
              <DownloadCloud size={14} />
              <span>Download PDF resume</span>
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
