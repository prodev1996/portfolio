import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Rss } from "lucide-react";
import {
  articleSummary,
  getLocalDrafts,
  getPublishedArticles,
} from "@/lib/writing";
import ArticleIndex from "@/components/writing/ArticleIndex";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Notes by Rajiv Bhandari on software, data, and the technology behind the work. Practical guides, technology explained, and build notes.",
  alternates: {
    canonical: "/writing",
    types: { "application/rss+xml": "/writing/feed.xml" },
  },
  openGraph: {
    title: "Writing / Rajiv Bhandari",
    url: "/writing",
    description: "Software, data, and the technology behind the work.",
  },
};

export default async function WritingPage() {
  const [articles, drafts] = await Promise.all([
    getPublishedArticles(),
    getLocalDrafts(),
  ]);
  return (
    <div className="writing-page section-shell">
      <header className="writing-intro">
        <div>
          <p className="eyebrow">Writing</p>
          <h1>
            Notes from a<br />
            curious mind<span className="accent-punctuation">.</span>
          </h1>
        </div>
        <div className="writing-intro-note">
          <p>
            Software, data, and the technology behind the work. A place to
            explain, explore, and think things through.
          </p>
          <a href="/writing/feed.xml" className="text-link">
            <Rss size={16} aria-hidden="true" />
            Follow via RSS
          </a>
        </div>
      </header>
      {process.env.NODE_ENV === "development" && (
        <div className="draft-notice">
          <Link href="/keystatic">
            Open writing editor <ArrowUpRight size={15} />
          </Link>
          {drafts.map((draft) => (
            <Link key={draft.slug} href={`/writing/preview/${draft.slug}`}>
              Preview draft: {draft.title}
            </Link>
          ))}
        </div>
      )}
      <ArticleIndex articles={articles.map(articleSummary)} />
      <footer className="writing-footer">
        <span>Have a question or a different perspective?</span>
        <a className="text-link" href="mailto:bhandarirajiv25@gmail.com">
          Let’s talk <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </footer>
    </div>
  );
}
