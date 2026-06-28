import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Portfolio } from "@/components/portfolio";
import { resolveContent } from "@/lib/content";
import { hasLocale } from "@/lib/i18n";
import { localeMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return hasLocale(lang) ? localeMetadata(lang) : {};
}

export default async function LocalePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang) || lang === "en") notFound();
  return <Portfolio content={resolveContent(lang)} locale={lang} />;
}
