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
      className="section-glow glass-card spotlight-ring rounded-[30px] p-5 sm:p-6"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1f9d72]">
        Direct Message
      </p>
      <h3 className="mt-2 text-[1.25rem] font-semibold text-[#1d2d25]">Send a message</h3>
      <p className="mt-1.5 text-sm leading-6 text-[#5e6f65]">
        Reach out for roles, projects, or introductions.
      </p>
      <p className="mt-1.5 text-xs leading-5 text-[#738179]">
        If the form ever fails, you can always email me directly at{" "}
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="font-medium text-[#1f9d72] underline-offset-4 hover:underline"
        >
          {CONTACT_EMAIL}
        </a>
        .
      </p>

      <div className="mt-4 grid gap-3.5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm text-[#44584d]">Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full rounded-2xl border border-[#dfe5de] bg-[rgba(255,255,255,0.82)] px-4 py-3 text-sm text-[#1d2d25] outline-none transition focus:border-[#1f9d72] focus:bg-white"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm text-[#44584d]">Email</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-2xl border border-[#dfe5de] bg-[rgba(255,255,255,0.82)] px-4 py-3 text-sm text-[#1d2d25] outline-none transition focus:border-[#1f9d72] focus:bg-white"
            placeholder="your@email.com"
          />
        </div>

        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-sm text-[#44584d]">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={3}
            className="w-full rounded-2xl border border-[#dfe5de] bg-[rgba(255,255,255,0.82)] px-4 py-3 text-sm text-[#1d2d25] outline-none transition focus:border-[#1f9d72] focus:bg-white"
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
          <p className="text-sm text-[#44584d]">{feedback}</p>
        ) : null}
      </div>
    </motion.form>
  );
}
