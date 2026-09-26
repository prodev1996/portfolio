"use client";
import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (loading) return;
    if (!formData.name.trim() || !formData.message.trim()) {
      setFeedback("Please include your name and a message.");
      return;
    }
    setLoading(true);
    setFeedback("");
    try {
      const { default: emailjs } = await import("@emailjs/browser");
      await emailjs.send(
        "service_4mxxm3l",
        "template_j7r3aiv",
        {
          name: formData.name.trim(),
          email: formData.email.trim(),
          time: new Date().toLocaleString(),
          message: formData.message.trim(),
        },
        { publicKey: "OLTsoARhv6m_4OIgP" },
      );
      setFeedback("Message sent. Thanks for getting in touch.");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setFeedback(
        "Your message could not be sent. Please email " +
          siteConfig.email +
          " instead.",
      );
    } finally {
      setLoading(false);
    }
  }
  return (
    <form className="contact-form" onSubmit={handleSubmit} aria-busy={loading}>
      <div className="form-fields">
        <div>
          <label htmlFor="contact-name">Name</label>
          <input
            id="contact-name"
            name="name"
            autoComplete="name"
            required
            maxLength={120}
            value={formData.name}
            onChange={(event) =>
              setFormData({ ...formData, name: event.target.value })
            }
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="contact-email">Email</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            value={formData.email}
            onChange={(event) =>
              setFormData({ ...formData, email: event.target.value })
            }
            placeholder="you@example.com"
          />
        </div>
        <div className="form-message">
          <label htmlFor="contact-message">Message</label>
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            required
            maxLength={5000}
            value={formData.message}
            onChange={(event) =>
              setFormData({ ...formData, message: event.target.value })
            }
            placeholder="Tell me about the role, project, or idea."
          />
        </div>
      </div>
      <div className="form-actions">
        <button className="btn-primary" type="submit" disabled={loading}>
          {loading ? "Sending…" : "Send message"}
          <ArrowUpRight size={17} aria-hidden="true" />
        </button>
        <p role="status" aria-live="polite">
          {feedback}
        </p>
      </div>
    </form>
  );
}
