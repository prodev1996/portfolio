import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How this portfolio handles contact details and site analytics.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <article className="privacy-page section-shell">
      <Link className="back-link" href="/">
        <ArrowLeft size={17} aria-hidden="true" /> Back to portfolio
      </Link>
      <header>
        <p className="eyebrow">Privacy</p>
        <h1>
          A short, plain-language note
          <span className="accent-punctuation">.</span>
        </h1>
        <p>Last updated 2 November 2026.</p>
      </header>
      <div className="privacy-content">
        <section>
          <h2>Contact messages</h2>
          <p>
            If you use the contact form, it collects the name, email address,
            and message you provide. That information is delivered through
            EmailJS and used only to read and reply to your enquiry.
          </p>
        </section>
        <section>
          <h2>Site analytics</h2>
          <p>
            This site uses Vercel Web Analytics to understand general site
            usage and improve the experience. It is not used to build an
            advertising profile, and your information is not sold.
          </p>
        </section>
        <section>
          <h2>Questions or deletion requests</h2>
          <p>
            To ask about a contact message or request its deletion, email{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
          </p>
        </section>
      </div>
    </article>
  );
}
