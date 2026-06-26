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
      className="section-glow glass-card spotlight-ring rounded-[34px] p-5 sm:p-6"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d8a7e7]">
        Direct Message
      </p>
      <h3 className="mt-2 text-2xl font-black tracking-[-0.04em] text-white">
        Send a message
      </h3>
      <p className="mt-1.5 text-sm leading-6 text-[#c9c1d8]">
        Reach out for roles, projects, or introductions.
      </p>
      <p className="mt-1.5 text-xs leading-5 text-[#8f87a0]">
        If the form ever fails, you can always email me directly at{" "}
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="font-medium text-[#d8a7e7] underline-offset-4 hover:underline"
        >
          {CONTACT_EMAIL}
        </a>
        .
      </p>

      <div className="mt-4 grid gap-3.5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-1.5 block text-sm text-[#d8d1e6]">Name</label>
          <input
            id="contact-name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            autoComplete="name"
            className="w-full rounded-2xl border border-white/10 bg-white/[0.075] px-4 py-3 text-sm text-white outline-none transition placeholder:text-[#777184] focus:border-[#6f67df]/48 focus:bg-white/[0.11]"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="contact-email" className="mb-1.5 block text-sm text-[#d8d1e6]">Email</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="email"
            className="w-full rounded-2xl border border-white/10 bg-white/[0.075] px-4 py-3 text-sm text-white outline-none transition placeholder:text-[#777184] focus:border-[#6f67df]/48 focus:bg-white/[0.11]"
            placeholder="your@email.com"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="contact-message" className="mb-1.5 block text-sm text-[#d8d1e6]">Message</label>
          <textarea
            id="contact-message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            autoComplete="off"
            className="w-full rounded-2xl border border-white/10 bg-white/[0.075] px-4 py-3 text-sm text-white outline-none transition placeholder:text-[#777184] focus:border-[#6f67df]/48 focus:bg-white/[0.11]"
            placeholder="Tell me about the role, project, or opportunity"
          />
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={loading}
          className="btn-primary"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {feedback ? (
          <p role="status" aria-live="polite" className="text-sm text-[#d8d1e6]">{feedback}</p>
        ) : null}
      </div>
    </motion.form>
  );
}
