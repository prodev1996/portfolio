// components/ContactSection.tsx
"use client";

import Section from "./Section";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <Section
      id="contact"
      eyebrow="Let's talk"
      title="Contact"
      className="scroll-mt-24"
    >
      <div className="grid gap-8 md:grid-cols-[1.3fr,1fr]">
        {/* Left: form */}
        <ContactForm />

        {/* Right: contact details */}
        <div className="space-y-3 text-sm text-slate-300">
          <p className="text-slate-200">
            Prefer email or LinkedIn? You can also reach out directly:
          </p>
          <ul className="space-y-1 text-xs">
            <li>
              <span className="text-slate-400">Email:</span>{" "}
              <a
                href="mailto:bhandarirajiv25@gmail.com"
                className="text-emerald-300 hover:underline"
              >
                bhandarirajiv25@gmail.com
              </a>
            </li>
            <li>
              <span className="text-slate-400">Location:</span> Adelaide,
              Australia (open to hybrid &amp; remote)
            </li>
            <li>
              <span className="text-slate-400">LinkedIn:</span>{" "}
              <a
                href="https://www.linkedin.com/in/rajiv-bhandari25/"
                target="_blank"
                rel="noreferrer"
                className="text-emerald-300 hover:underline"
              >
                linkedin.com/in/rajiv-bhandari25
              </a>
            </li>
          </ul>
          <p className="pt-2 text-xs text-slate-400">
            I am an ICT Support Specialist &amp; Full Stack Developer based in
            Adelaide. Happy to help with Microsoft 365, Windows/AD environments,
            and modern web applications (React / Next.js / Django).
          </p>
        </div>
      </div>
    </Section>
  );
}
