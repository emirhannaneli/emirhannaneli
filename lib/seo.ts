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

const KEYWORDS = [
  profile.name, "Emirhan", "Naneli",
  "Full-Stack Developer", "Full Stack Developer", "Full-Stack Geliştirici",
  "Backend Developer", "Backend Geliştirici", "Software Engineer", "Yazılım Geliştirici",
  "Java", "Kotlin", "Spring Boot", "Spring Cloud", "Microservices", "Mikroservis",
  "REST API", "GraphQL", "PostgreSQL", "Elasticsearch", "MongoDB", "Redis", "Apache Kafka", "RabbitMQ",
  "TypeScript", "React", "Next.js", "React Native", "Python", "LangChain",
  "Docker", "Kubernetes", "API", "Türkiye", "Remote",
];

export function localeMetadata(locale: LocaleCode): Metadata {
  const c = resolveContent(locale);
  const og = locales.find((l) => l.code === locale)!.og;
  return {
    metadataBase: new URL(profile.siteUrl),
    title: c.meta.title,
    description: c.meta.description,
    applicationName: profile.name,
    authors: [{ name: profile.name, url: profile.siteUrl }],
    creator: profile.name,
    publisher: profile.name,
    keywords: KEYWORDS,
    category: "technology",
    alternates: { canonical: localeHref(locale), languages: hreflang },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
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
    formatDetection: { telephone: false, email: false, address: false },
    appleWebApp: { capable: true, title: profile.name, statusBarStyle: "black-translucent" },
  };
}
