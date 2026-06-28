import { ogCard, OG_SIZE } from "@/lib/og-card";
import { hasLocale, defaultLocale } from "@/lib/i18n";

export const alt = "Emirhan Naneli — Backend Developer";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return ogCard(hasLocale(lang) ? lang : defaultLocale);
}
