import "../globals.css";
import { notFound } from "next/navigation";
import { BaseHtml } from "@/components/base-html";
import { hasLocale, nonDefaultLocales } from "@/lib/i18n";

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
