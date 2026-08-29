"use client";

import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const CONTACT_EMAIL = "bhandarirajiv25@gmail.com";
const EMAILJS_PUBLIC_KEY = "OLTsoARhv6m_4OIgP";
const EMAILJS_SERVICE_ID = "service_4mxxm3l";
const EMAILJS_TEMPLATE_ID = "template_j7r3aiv";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    emailjs.init({
      publicKey: EMAILJS_PUBLIC_KEY,
    });
  }, []);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setFeedback("");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          time: new Date().toLocaleString(),
          message: formData.message,
        },
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );

      setFeedback("Your message has been sent successfully.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS send failed:", error);
      setFeedback(
        `The form could not send right now. Please email me directly at ${CONTACT_EMAIL}.`
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="rounded-xl border border-border p-6 sm:p-8"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
        Direct Message
      </p>
      <h3 className="mt-2 text-2xl font-black tracking-[-0.03em] text-text">
        Send a message
      </h3>
      <p className="mt-1.5 text-sm leading-6 text-text-muted">
        Reach out for roles, projects, or introductions.
      </p>
      <p className="mt-1.5 text-xs leading-5 text-text-faint">
        If the form ever fails, you can always email me directly at{" "}
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="font-medium text-accent underline-offset-4 hover:underline"
        >
          {CONTACT_EMAIL}
        </a>
        .
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-1.5 block text-sm text-text-muted">Name</label>
          <input
            id="contact-name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            autoComplete="name"
            className="w-full border-b border-border bg-transparent px-1 py-2 text-sm text-text outline-none transition placeholder:text-text-faint focus:border-accent"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="contact-email" className="mb-1.5 block text-sm text-text-muted">Email</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="email"
            className="w-full border-b border-border bg-transparent px-1 py-2 text-sm text-text outline-none transition placeholder:text-text-faint focus:border-accent"
            placeholder="your@email.com"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="contact-message" className="mb-1.5 block text-sm text-text-muted">Message</label>
          <textarea
            id="contact-message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            autoComplete="off"
            className="w-full border-b border-border bg-transparent px-1 py-2 text-sm text-text outline-none transition placeholder:text-text-faint focus:border-accent"
            placeholder="Tell me about the role, project, or opportunity"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={loading}
          className="btn-primary"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {feedback ? (
          <p role="status" aria-live="polite" className="text-sm text-text-muted">{feedback}</p>
        ) : null}
      </div>
    </motion.form>
  );
}
