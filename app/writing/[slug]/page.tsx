import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArticle, getPublishedArticles } from "@/lib/writing";
import ArticleView from "@/components/writing/ArticleView";

export async function generateStaticParams() {
  return (await getPublishedArticles()).map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const article = await getArticle((await params).slug);
  if (!article) notFound();
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/writing/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.description,
      url: `/writing/${article.slug}`,
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt || article.publishedAt,
      authors: ["Rajiv Bhandari"],
      images: article.cover
        ? [{ url: article.cover, alt: article.coverAlt }]
        : [{ url: "/opengraph-image", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [article.cover || "/opengraph-image"],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const article = await getArticle((await params).slug);
  if (!article) notFound();
  return <ArticleView article={article} />;
}
