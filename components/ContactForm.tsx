"use client";

import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Initialise EmailJS once with your PUBLIC key
  useEffect(() => {
    emailjs.init("OLTsoARhv6m_4OIgP"); // 🔑 your public key
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
        "service_4mxxm3l", // ✅ service ID
        "template_j7r3aiv", // ✅ template ID
        {
          name: formData.name,
          email: formData.email,
          time: new Date().toLocaleString(),
          message: formData.message,
        }
      );

      console.log("EmailJS result:", result); // debug in console

      // result.text is usually "OK"
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

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-5"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div>
        <label className="mb-1 block text-xs font-medium text-slate-300">
          Name
        </label>
        <input
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100"
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
          className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100"
          placeholder="you@example.com"
        />
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
          className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100"
          placeholder="Write your message..."
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-white disabled:opacity-60"
      >
        {loading ? "Sending..." : (
          <>
            Send Message <Send size={14} />
          </>
        )}
      </button>

      {feedback && (
        <p className="pt-2 text-center text-xs text-slate-300">{feedback}</p>
      )}
    </motion.form>
  );
}
