import type { MetadataRoute } from "next";

import { projects } from "@/data/projects";
import { getPublishedArticles } from "@/lib/writing";

const siteUrl = "https://www.rajivbhandari.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/resume`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${siteUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const articles = await getPublishedArticles();
  return [
    ...staticRoutes,
    ...projectRoutes,
    { url: `${siteUrl}/writing`, changeFrequency: "weekly", priority: 0.8 },
    ...articles.map((article) => ({
      url: `${siteUrl}/writing/${article.slug}`,
      lastModified: new Date(
        `${article.updatedAt || article.publishedAt}T00:00:00Z`,
      ),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
