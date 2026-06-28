import "../globals.css";
import { notFound } from "next/navigation";
import { BaseHtml } from "@/components/base-html";
import { hasLocale, nonDefaultLocales } from "@/lib/i18n";
import { viewport as vp } from "@/lib/seo";

export const viewport = vp;

export const dynamicParams = false;
export function generateStaticParams() {
  return nonDefaultLocales.map((l) => ({ lang: l.code }));
}

export default async function LangRootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang) || lang === "en") notFound();
  return <BaseHtml lang={lang}>{children}</BaseHtml>;
}
