"use client";

import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Github,
  Copy,
  Check,
} from "lucide-react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [copied, setCopied] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const EMAIL = "bhandarirajiv25@gmail.com";

  // Initialise EmailJS once with your PUBLIC key
  useEffect(() => {
    emailjs.init("OLTsoARhv6m_4OIgP"); // your public key
  }, []);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setFeedback("");

    try {
      const result = await emailjs.send(
        "service_4mxxm3l", // service ID
        "template_j7r3aiv", // template ID
        {
          name: formData.name,
          email: formData.email,
          time: new Date().toLocaleString(),
          message: formData.message,
        }
      );

      console.log("EmailJS result:", result);
      setFeedback("Your message has been sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      console.error("EmailJS error:", error);
      setFeedback(
        `Failed to send email. ${
          error?.text ? `(${error.text})` : "Please try again."
        }`
      );
    } finally {
      setLoading(false);
    }
  }

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      // ignore clipboard errors
    }
  };

  return (
    <section
      id="contact"
      className="border-t border-slate-800 bg-slate-950/95 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.28em] text-emerald-400">
            CONTACT
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Let&apos;s talk about ICT support &amp; web development.
          </h2>
          <p className="mt-3 text-sm text-slate-400 sm:text-[15px]">
            I am based in Adelaide and open to ICT Support Level 1/2,
            hybrid roles and web projects. If you need someone who can move
            between service desk, systems and modern web apps, send me a short
            message and I will get back to you.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          {/* LEFT: info / email / socials */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-800/80 bg-slate-950/90 p-5 shadow-[0_24px_60px_rgba(15,23,42,0.95)]">
              <h3 className="text-sm font-semibold text-slate-100">
                How I usually work
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-slate-400">
                I&apos;ve worked across Microsoft 365, Windows, Active Directory,
                networking, ticketing tools and modern web stacks using
                React / Next.js / Django. I am comfortable jumping into
                existing environments as well as building new UI or features.
              </p>
              <p className="mt-2 text-[13px] leading-relaxed text-slate-400">
                Tell me a bit about your environment, the role, or the project
                and I will let you know how I can help.
              </p>
            </div>

            <div className="grid gap-4 text-sm text-slate-200 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-800/80 bg-slate-950/90 p-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  <MapPin className="h-3.5 w-3.5 text-emerald-400" />
                  Location
                </div>
                <p className="mt-2 text-sm text-slate-100">
                  Adelaide, South Australia
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  Open to hybrid &amp; remote roles across Australia.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800/80 bg-slate-950/90 p-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  <Mail className="h-3.5 w-3.5 text-emerald-400" />
                  Direct contact
                </div>

                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-sm text-emerald-300 hover:text-emerald-200 transition-colors"
                  >
                    {EMAIL}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1 rounded-full border border-slate-700/80 bg-slate-900/80 px-2.5 py-1 text-[11px] font-medium text-slate-200 transition-colors hover:border-emerald-400/70 hover:text-emerald-100"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3 w-3" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3" />
                        Copy
                      </>
                    )}
                  </button>
                </div>

                <p className="mt-2 flex items-center gap-1 text-xs text-slate-400">
                  <Phone className="h-3 w-3 text-slate-500" />
                  Happy to arrange a call after an initial email.
                </p>
              </div>
            </div>

            {/* Socials */}
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
              <span className="text-xs uppercase tracking-[0.18em] text-slate-500">
                Profiles
              </span>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-700/80 bg-slate-950/90 px-3 py-1.5 text-xs font-medium text-slate-100 transition-colors hover:border-emerald-400/70 hover:text-emerald-100"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-700/80 bg-slate-950/90 px-3 py-1.5 text-xs font-medium text-slate-100 transition-colors hover:border-emerald-400/70 hover:text-emerald-100"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </div>

          {/* RIGHT: form (EmailJS) */}
          <div className="relative">
            <div className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-emerald-500/10 blur-3xl" />

            <motion.form
              onSubmit={handleSubmit}
              className="space-y-4 rounded-3xl border border-slate-800/80 bg-slate-950/95 p-5 shadow-[0_26px_70px_rgba(15,23,42,0.98)] sm:p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm font-semibold text-slate-100">
                Send me a message
              </h3>
              <p className="mt-1 text-xs text-slate-400">
                Share a quick summary of your role, environment, or project and
                I will reply as soon as I can.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-xs font-medium text-slate-300">
                    Name
                  </label>
                  <input
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none focus:border-emerald-400/80 focus:ring-1 focus:ring-emerald-500/60"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-xs font-medium text-slate-300">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none focus:border-emerald-400/80 focus:ring-1 focus:ring-emerald-500/60"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-xs font-medium text-slate-300">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none focus:border-emerald-400/80 focus:ring-1 focus:ring-emerald-500/60"
                  placeholder="Write your message..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-950 shadow-[0_18px_40px_rgba(16,185,129,0.6)] transition-transform hover:-translate-y-0.5 hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message <Send size={14} />
                  </>
                )}
              </button>

              {feedback && (
                <p className="pt-2 text-center text-xs text-slate-300">
                  {feedback}
                </p>
              )}
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
