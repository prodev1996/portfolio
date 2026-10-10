import "server-only";
import { cache } from "react";
import { createReader } from "@keystatic/core/reader";
import Markdoc, { type Node } from "@markdoc/markdoc";
import config from "@/keystatic.config";
import type { ArticleSummary } from "./writing-shared";

const reader = createReader(process.cwd(), config);

function plainText(node: Node): string {
  if (node.type === "text" || node.type === "code" || node.type === "fence")
    return String(node.attributes.content || "");
  return node.children.map(plainText).join(" ");
}

export function prepareArticle(node: Node) {
  const headings: { id: string; title: string; level: number }[] = [];
  const ids = new Map<string, number>();
  for (const child of node.walk()) {
    if (child.type !== "heading") continue;
    const title = plainText(child).trim();
    const base =
      title
        .toLowerCase()
        .normalize("NFKD")
        .replace(/[^\p{L}\p{N}\s-]/gu, "")
        .trim()
        .replace(/\s+/g, "-") || "section";
    const count = (ids.get(base) || 0) + 1;
    ids.set(base, count);
    const id = count === 1 ? base : `${base}-${count}`;
    child.attributes.id = id;
    // Article titles are the only h1, including content entered outside the editor.
    child.attributes.level = Math.max(
      2,
      Math.min(3, Number(child.attributes.level)),
    );
    headings.push({ id, title, level: child.attributes.level });
  }
  const text = plainText(node).trim();
  const readingMinutes = Math.max(
    1,
    Math.ceil(text.split(/\s+/).filter(Boolean).length / 220),
  );
  const errors = Markdoc.validate(node).filter(
    (error) => error.error.level === "critical",
  );
  if (errors.length) throw new Error("Article contains unsupported content.");
  return { headings, readingMinutes, node };
}

const readArticlesByStatus = cache(async (status: "draft" | "published") => {
  const entries = await reader.collections.articles.all();
  return Promise.all(
    entries
      .filter(({ entry }) => entry.status === status)
      .map(async ({ slug, entry }) => {
        const { node } = await entry.body();
        const prepared = prepareArticle(node);
        const summary: ArticleSummary = {
          slug,
          title: entry.title,
          description: entry.description,
          category: entry.category,
          publishedAt: entry.publishedAt,
          updatedAt: entry.updatedAt,
          cover: entry.cover,
          coverAlt: entry.coverAlt,
          readingMinutes: prepared.readingMinutes,
        };
        return {
          ...summary,
          status: entry.status,
          sources: entry.sources,
          ...prepared,
        };
      }),
  );
});

export const getPublishedArticles = cache(async () => {
  return (await readArticlesByStatus("published")).sort(
    (a, b) =>
      b.publishedAt.localeCompare(a.publishedAt) ||
      a.slug.localeCompare(b.slug),
  );
});

export const getArticle = cache(async (slug: string) => {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) return null;
  return (
    (await getPublishedArticles()).find((article) => article.slug === slug) ||
    null
  );
});

export const getLocalDrafts = cache(async () => {
  if (process.env.NODE_ENV !== "development") return [];
  return readArticlesByStatus("draft");
});

export function articleSummary(article: ArticleSummary): ArticleSummary {
  const {
    slug,
    title,
    description,
    category,
    publishedAt,
    updatedAt,
    cover,
    coverAlt,
    readingMinutes,
  } = article;
  return {
    slug,
    title,
    description,
    category,
    publishedAt,
    updatedAt,
    cover,
    coverAlt,
    readingMinutes,
  };
}

export type Article = NonNullable<Awaited<ReturnType<typeof getArticle>>>;
