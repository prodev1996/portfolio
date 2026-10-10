import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  articleCategories,
  formatArticleDate,
  type ArticleSummary,
} from "@/lib/writing-shared";

export default function ArticleRow({
  article,
  headingLevel = 2,
}: {
  article: ArticleSummary;
  headingLevel?: 2 | 3;
}) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  return (
    <article className="writing-row">
      <Link href={`/writing/${article.slug}`}>
        <div className="writing-row-meta">
          <span>{articleCategories[article.category]}</span>
          <time dateTime={article.publishedAt}>
            {formatArticleDate(article.publishedAt)}
          </time>
        </div>
        <div className="writing-row-copy">
          <Heading>{article.title}</Heading>
          <p>{article.description}</p>
        </div>
        <span className="writing-row-end">
          <span>{article.readingMinutes} min read</span>
          <ArrowUpRight size={23} strokeWidth={1.5} aria-hidden="true" />
        </span>
      </Link>
    </article>
  );
}
