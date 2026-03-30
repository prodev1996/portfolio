"use client";

import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";

const targets = [
  "Application Support",
  "ICT Support / Service Desk",
  "Junior Developer",
  "Entry-level Data Analyst",
];

export default function ContactSection() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's start the conversation"
      subtitle="If there is a role where dependable support, practical development, and a clear growth mindset matter, I would be glad to connect."
      className="section-shell bg-[linear-gradient(180deg,_rgba(255,255,255,0.28),_rgba(255,255,255,0.02))] !pb-12 !pt-8 sm:!pb-16 sm:!pt-10"
    >
      <div className="grid gap-5 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
        <div className="grid gap-4">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="section-glow glass-card relative overflow-hidden rounded-[30px] p-6"
          >
            <div className="pointer-events-none absolute -right-12 top-0 h-28 w-28 rounded-full bg-[#dff4eb] blur-2xl" />
            <div className="pointer-events-none absolute -bottom-10 left-0 h-24 w-24 rounded-full bg-[#fde3d0] blur-2xl" />

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1f9d72]">
              Best Fit
            </p>
            <h3 className="mt-2 text-[1.45rem] font-semibold leading-tight text-[#1d2d25]">
              Ready to contribute in support, development, and transition-ready data work
            </h3>
            <p className="mt-3 max-w-xl text-sm leading-6 text-[#5e6f65]">
              I bring dependable support, clear communication, and practical
              technical delivery now, while continuing to grow into more
              data-focused work.
            </p>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <a
                href="mailto:bhandarirajiv25@gmail.com"
                className="btn-primary"
              >
                <FaEnvelope />
                Email Rajiv
              </a>
              <a
                href="https://www.linkedin.com/in/rajiv-bhandari25/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <FaLinkedin />
                LinkedIn Profile
              </a>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {targets.map((item) => (
                <span key={item} className="badge">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.03 }}
            className="card p-5"
          >
            <h3 className="text-base font-semibold text-[#1d2d25]">Quick contact details</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <motion.a
                href="mailto:bhandarirajiv25@gmail.com"
                whileHover={{ y: -2 }}
                className="flex items-center gap-3 rounded-2xl border border-[#e4e7de] bg-white/70 px-4 py-3 text-sm text-[#30453a] transition hover:border-[#1f9d72]/35"
              >
                <FaEnvelope className="text-[#1f9d72]" />
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-[#819087]">Email</p>
                  <p className="mt-1">bhandarirajiv25@gmail.com</p>
                </div>
              </motion.a>

              <div className="flex items-center gap-3 rounded-2xl border border-[#e4e7de] bg-white/70 px-4 py-3 text-sm text-[#30453a]">
                <FaMapMarkerAlt className="text-[#d7854f]" />
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-[#819087]">Location</p>
                  <p className="mt-1">Adelaide, Australia</p>
                </div>
              </div>

              <motion.a
                href="https://github.com/prodev1996"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                className="flex items-center gap-3 rounded-2xl border border-[#e4e7de] bg-white/70 px-4 py-3 text-sm text-[#30453a] transition hover:border-[#1d2d25]/20"
              >
                <FaGithub className="text-[#1d2d25]" />
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-[#819087]">GitHub</p>
                  <p className="mt-1">github.com/prodev1996</p>
                </div>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/rajiv-bhandari25/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                className="flex items-center gap-3 rounded-2xl border border-[#e4e7de] bg-white/70 px-4 py-3 text-sm text-[#30453a] transition hover:border-[#1f9d72]/35"
              >
                <FaLinkedin className="text-[#1f9d72]" />
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-[#819087]">LinkedIn</p>
                  <p className="mt-1">linkedin.com/in/rajiv-bhandari25</p>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>

        <ContactForm />
      </div>
    </Section>
  );
}
