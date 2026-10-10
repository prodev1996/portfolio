import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Article } from "@/lib/writing";
import {
  articleCategories,
  formatArticleDate,
  isSafeLink,
} from "@/lib/writing-shared";
import ArticleBody from "./ArticleBody";
import CopyButton from "./CopyButton";

export default function ArticleView({
  article,
  preview = false,
}: {
  article: Article;
  preview?: boolean;
}) {
  const url = `https://www.rajivbhandari.com/writing/${article.slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt || article.publishedAt,
    author: {
      "@type": "Person",
      name: "Rajiv Bhandari",
      url: "https://www.rajivbhandari.com",
    },
    mainEntityOfPage: url,
    ...(article.cover
      ? { image: `https://www.rajivbhandari.com${article.cover}` }
      : {}),
  };
  return (
    <article className="article-page section-shell">
      {!preview && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
      )}
      <Link className="back-link" href="/writing">
        <ArrowLeft size={16} aria-hidden="true" />
        All writing
      </Link>
      {preview && (
        <div className="draft-notice">
          Draft preview · Visible only in local development.{" "}
          <Link href="/keystatic">
            Open editor <ArrowUpRight size={14} />
          </Link>
        </div>
      )}
      <header className="article-heading">
        <p className="eyebrow">{articleCategories[article.category]}</p>
        <h1>{article.title}</h1>
        <p className="article-deck">{article.description}</p>
        <div className="article-byline">
          <span>Rajiv Bhandari</span>
          <time dateTime={article.publishedAt}>
            {formatArticleDate(article.publishedAt)}
          </time>
          <span>{article.readingMinutes} min read</span>
          {article.updatedAt && article.updatedAt !== article.publishedAt && (
            <span>Updated {formatArticleDate(article.updatedAt)}</span>
          )}
        </div>
      </header>
      {article.cover && (
        <div className="article-cover">
          <Image
            src={article.cover}
            alt={article.coverAlt || ""}
            fill
            priority
            sizes="(max-width: 767px) 90vw, 1000px"
          />
        </div>
      )}
      <div className="article-layout">
        <aside className="article-aside">
          {article.headings.length > 1 && (
            <nav aria-label="In this article">
              <p>In this article</p>
              <ol>
                {article.headings.map((heading) => (
                  <li
                    key={heading.id}
                    className={
                      heading.level === 3 ? "is-subheading" : undefined
                    }
                  >
                    <a href={`#${heading.id}`}>{heading.title}</a>
                  </li>
                ))}
              </ol>
            </nav>
          )}
          <CopyButton />
        </aside>
        <div className="article-main">
          <ArticleBody node={article.node} />
          {article.sources.length > 0 && (
            <section
              className="article-sources"
              aria-label="Sources and further reading"
            >
              <h2>Sources &amp; further reading</h2>
              <ul>
                {article.sources
                  .filter((source) => isSafeLink(source.url))
                  .map((source, index) => (
                    <li key={`${source.url}-${index}`}>
                      <a href={source.url} target="_blank" rel="noreferrer">
                        {source.title}
                        <ArrowUpRight size={16} aria-hidden="true" />
                      </a>
                    </li>
                  ))}
              </ul>
            </section>
          )}
          <footer className="article-end">
            <div>
              <p>Written by</p>
              <Link href="/#about">
                Rajiv Bhandari <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
              <span>Software, data &amp; a human touch.</span>
            </div>
            <Link className="text-link" href="/writing">
              More writing <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </footer>
        </div>
      </div>
    </article>
  );
}
