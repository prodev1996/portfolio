"use client";

import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { CheckCircle2 } from "lucide-react";

const targets = [
  "Application Support",
  "Business Systems",
  "Reporting / Data Support",
  "Hybrid technical roles",
];

const supportAreas = [
  "Microsoft 365 support, user access, and day-to-day issue handling",
  "SharePoint, Outlook, Teams, and business system support",
  "Website updates, launch support, and client-facing improvements",
  "Hybrid roles that mix user support, documentation, and practical delivery",
];

export default function ContactSection() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Open to application support, business systems, and reporting-focused roles"
      subtitle="Available for on-site and hybrid opportunities in Adelaide."
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
              Ready to contribute in support, systems, reporting, and practical delivery
            </h3>
            <p className="mt-3 max-w-xl text-sm leading-6 text-[#5e6f65]">
              I bring dependable support, clear communication, and practical
              delivery now, with a profile that fits well in application
              support, business systems, and reporting-aware environments.
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

            <div className="mt-6 rounded-[24px] border border-[#dfe7de] bg-white/66 px-5 py-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7b877f]">
                I can help with
              </p>
              <ul className="mt-4 space-y-3">
                {supportAreas.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-7 text-[#33463b]">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#1f9d72]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
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
