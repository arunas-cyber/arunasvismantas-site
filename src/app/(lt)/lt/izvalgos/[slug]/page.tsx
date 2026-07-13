import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArticleView } from "@/components/ArticleView";
import { articleByRouteKey, articlesForLocale } from "@/content/articles";
import { routeByPath } from "@/lib/routes";
import { pageMetadata } from "@/lib/meta";

export function generateStaticParams() {
  return articlesForLocale("lt").map(({ route }) => ({
    slug: route.path.split("/").pop()!,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const route = routeByPath(`/lt/izvalgos/${slug}`);
  if (!route) return {};
  return pageMetadata(route.key);
}

export default async function InsightPageLt({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const route = routeByPath(`/lt/izvalgos/${slug}`);
  const article = route ? articleByRouteKey(route.key) : undefined;
  if (!route || !article || route.status !== "live") notFound();
  return <ArticleView article={article} route={route} />;
}
