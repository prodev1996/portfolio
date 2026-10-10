"use client";
import { useState } from "react";
import { Search, X } from "lucide-react";
import ArticleRow from "./ArticleRow";
import {
  articleCategories,
  type ArticleCategory,
  type ArticleSummary,
} from "@/lib/writing-shared";

export default function ArticleIndex({
  articles,
}: {
  articles: ArticleSummary[];
}) {
  const [category, setCategory] = useState<ArticleCategory | "all">("all");
  const [query, setQuery] = useState("");
  const normalized = query.trim().toLowerCase();
  const filtered = articles.filter(
    (article) =>
      (category === "all" || article.category === category) &&
      `${article.title} ${article.description} ${articleCategories[article.category]}`
        .toLowerCase()
        .includes(normalized),
  );
  return (
    <>
      <div className="writing-tools">
        <div
          className="writing-filters"
          role="group"
          aria-label="Filter articles by category"
        >
          <button
            type="button"
            aria-pressed={category === "all"}
            onClick={() => setCategory("all")}
          >
            All articles <span>{articles.length}</span>
          </button>
          {Object.entries(articleCategories).map(([value, label]) => (
            <button
              type="button"
              key={value}
              aria-pressed={category === value}
              onClick={() => setCategory(value as ArticleCategory)}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="writing-search">
          <Search size={17} aria-hidden="true" />
          <label className="sr-only" htmlFor="article-search">
            Search articles
          </label>
          <input
            id="article-search"
            type="search"
            placeholder="Find an article"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          {query && (
            <button
              type="button"
              aria-label="Clear search"
              onClick={() => setQuery("")}
            >
              <X size={17} />
            </button>
          )}
        </div>
      </div>
      <p role="status" className="sr-only">
        {filtered.length} {filtered.length === 1 ? "article" : "articles"}{" "}
        found.
      </p>
      {filtered.length ? (
        <div className="writing-list">
          {filtered.map((article) => (
            <ArticleRow article={article} key={article.slug} />
          ))}
        </div>
      ) : (
        <div className="writing-empty">
          <h2>
            {articles.length
              ? "No articles match that."
              : "The first notes are on their way."}
          </h2>
          <p>
            {articles.length
              ? "Try a different topic or a shorter search."
              : "A space for useful ideas, things worth exploring, and lessons from building."}
          </p>
          {articles.length > 0 && (
            <button
              className="text-link"
              type="button"
              onClick={() => {
                setCategory("all");
                setQuery("");
              }}
            >
              Show all articles
            </button>
          )}
        </div>
      )}
    </>
  );
}
