"use client";
import { useState } from "react";
import { ArrowUpRight, Check, Copy, Plus } from "lucide-react";
import dynamic from "next/dynamic";
import { Reveal } from "./PortfolioMotion";
import { siteConfig } from "@/data/site";
const ContactForm = dynamic(() => import("./ContactForm"), {
  loading: () => <p role="status">Loading message form…</p>,
});
export default function ContactSection() {
  const [copyStatus, setCopyStatus] = useState("");
  const [formOpen, setFormOpen] = useState(false);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopyStatus("Email copied");
    } catch {
      setCopyStatus("Copy unavailable. Use the email link to get in touch.");
    }
  }
  return (
    <section id="contact" className="contact-section section-shell">
      <Reveal>
        <p className="eyebrow">Something in mind?</p>
        <a className="contact-title" href={"mailto:" + siteConfig.email}>
          <h2>
            Let’s make
            <br />
            it happen<span>.</span>
          </h2>
          <ArrowUpRight aria-hidden="true" strokeWidth={1} />
        </a>
      </Reveal>
      <div className="contact-details">
        <p>
          A role, a project, or a good technical problem.
          <br />
          I’d love to hear about it.
        </p>
        <div className="email-row">
          <a href={"mailto:" + siteConfig.email}>{siteConfig.email}</a>
          <button
            type="button"
            className="copy-button"
            onClick={copyEmail}
            aria-label="Copy email address"
          >
            {copyStatus === "Email copied" ? (
              <Check size={18} />
            ) : (
              <Copy size={18} />
            )}
          </button>
          <span className="copy-status" role="status">
            {copyStatus}
          </span>
        </div>
      </div>
      <button
        className="form-toggle"
        type="button"
        onClick={() => setFormOpen(!formOpen)}
        aria-expanded={formOpen}
        aria-controls="contact-form-panel"
      >
        Prefer to leave a message here?
        <Plus
          className={formOpen ? "is-open" : ""}
          size={22}
          aria-hidden="true"
        />
      </button>
      <div id="contact-form-panel" hidden={!formOpen}>
        {formOpen && <ContactForm />}
      </div>
    </section>
  );
}
