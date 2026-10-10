import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { articleSummary, getPublishedArticles } from "@/lib/writing";
import ArticleRow from "./ArticleRow";

export default async function WritingPreview() {
  const articles = (await getPublishedArticles()).slice(0, 2);
  return (
    <section
      className="writing-preview section-shell"
      aria-labelledby="writing-heading"
    >
      <div className="writing-preview-heading">
        <div>
          <p className="eyebrow">From the notebook</p>
          <h2 id="writing-heading">
            A little more to share<span className="accent-punctuation">.</span>
          </h2>
        </div>
        <Link href="/writing" className="text-link">
          All writing <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </div>
      {articles.length ? (
        articles.map((article) => (
          <ArticleRow
            key={article.slug}
            article={articleSummary(article)}
            headingLevel={3}
          />
        ))
      ) : (
        <p className="writing-coming-soon">
          Notes on technology, software, and data. First articles coming soon.
        </p>
      )}
    </section>
  );
}
