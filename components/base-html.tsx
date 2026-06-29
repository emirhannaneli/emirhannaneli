import { localeHref, type LocaleCode } from "@/lib/i18n";
import { fontVars } from "@/lib/fonts";
import { ThemeProvider, THEME_SCRIPT } from "./theme-provider";
import { AnimPause } from "./anim-pause";
import { profile, socials, skillGroups } from "@/lib/data";
import { resolveContent } from "@/lib/content";

export function BaseHtml({ lang, children }: { lang: LocaleCode; children: React.ReactNode }) {
  const c = resolveContent(lang);
  const pageUrl = `${profile.siteUrl}${localeHref(lang)}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${profile.siteUrl}/#person`,
        name: profile.name,
        jobTitle: "Full-Stack Developer",
        worksFor: {
          "@type": "Organization",
          name: "Turdex",
          address: { "@type": "PostalAddress", addressLocality: "Moscow", addressCountry: "RU" },
        },
        url: profile.siteUrl,
        image: `${profile.siteUrl}${profile.avatar}`,
        email: profile.email,
        telephone: profile.phone,
        address: { "@type": "PostalAddress", addressCountry: profile.countryCode },
        sameAs: socials.filter((s) => s.id !== "site").map((s) => s.url),
        knowsAbout: skillGroups.flatMap((g) => [...g.items]),
        description: c.about.body,
      },
      {
        "@type": "WebSite",
        "@id": `${profile.siteUrl}/#website`,
        url: profile.siteUrl,
        name: profile.name,
        inLanguage: lang,
        publisher: { "@id": `${profile.siteUrl}/#person` },
      },
      {
        "@type": "ProfilePage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: c.meta.title,
        description: c.meta.description,
        inLanguage: lang,
        isPartOf: { "@id": `${profile.siteUrl}/#website` },
        about: { "@id": `${profile.siteUrl}/#person` },
        primaryImageOfPage: `${profile.siteUrl}${profile.avatar}`,
      },
    ],
  };
  return (
    <html lang={lang} data-theme="dark" suppressHydrationWarning className={`${fontVars} antialiased`}>
      <body>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
        <a href="#main" className="emn-skip">Skip to content</a>
        <AnimPause />
        <ThemeProvider>{children}</ThemeProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
