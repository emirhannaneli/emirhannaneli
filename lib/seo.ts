import type { Metadata, Viewport } from "next";
import { profile } from "./data";
import { hreflang, localeHref, locales, type LocaleCode } from "./i18n";
import { resolveContent } from "./content";

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#070a11" },
    { media: "(prefers-color-scheme: light)", color: "#eef1f8" },
  ],
};

export function localeMetadata(locale: LocaleCode): Metadata {
  const c = resolveContent(locale);
  const og = locales.find((l) => l.code === locale)!.og;
  return {
    metadataBase: new URL(profile.siteUrl),
    title: c.meta.title,
    description: c.meta.description,
    alternates: { canonical: localeHref(locale), languages: hreflang },
    openGraph: {
      type: "website",
      url: localeHref(locale),
      siteName: profile.name,
      title: c.meta.title,
      description: c.meta.description,
      locale: og,
      alternateLocale: locales.filter((l) => l.code !== locale).map((l) => l.og),
    },
    twitter: { card: "summary_large_image", title: c.meta.title, description: c.meta.description },
  };
}
