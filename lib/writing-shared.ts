export const articleCategories = {
  technology: "Technology",
  "build-notes": "Build notes",
  "practical-guides": "Practical guides",
} as const;

export type ArticleCategory = keyof typeof articleCategories;

export type ArticleSummary = {
  slug: string;
  title: string;
  description: string;
  category: ArticleCategory;
  publishedAt: string;
  updatedAt: string | null;
  cover: string | null;
  coverAlt: string;
  readingMinutes: number;
};

export function formatArticleDate(value: string) {
  return new Intl.DateTimeFormat("en-AU", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${value}T00:00:00Z`));
}

export function isSafeLink(url: string) {
  return /^(https?:\/\/|mailto:|\/(?!\/)|#)/i.test(url);
}
