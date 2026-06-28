import type { MetadataRoute } from "next";
import { profile } from "@/lib/data";
import { locales, localeHref } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(locales.map((l) => [l.code, `${profile.siteUrl}${localeHref(l.code)}`]));
  return locales.map((l) => ({
    url: `${profile.siteUrl}${localeHref(l.code)}`,
    lastModified: new Date("2026-06-28"),
    changeFrequency: "monthly",
    priority: l.code === "en" ? 1 : 0.8,
    alternates: { languages },
  }));
}
