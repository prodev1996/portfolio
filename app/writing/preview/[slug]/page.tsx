import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocalDrafts } from "@/lib/writing";
import ArticleView from "@/components/writing/ArticleView";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Draft preview",
  robots: { index: false, follow: false },
};

export default async function DraftPreview({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  if (process.env.NODE_ENV !== "development") notFound();
  const { slug } = await params;
  const article = (await getLocalDrafts()).find((draft) => draft.slug === slug);
  if (!article) notFound();
  return <ArticleView article={article} preview />;
}
