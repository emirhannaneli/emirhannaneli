import type { LocaleCode } from "@/lib/i18n";
import { fontVars } from "@/lib/fonts";
import { ThemeProvider, THEME_SCRIPT } from "./theme-provider";
import { AnimPause } from "./anim-pause";
import { profile, socials } from "@/lib/data";
import { resolveContent } from "@/lib/content";

export function BaseHtml({ lang, children }: { lang: LocaleCode; children: React.ReactNode }) {
  const c = resolveContent(lang);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: "Backend Developer",
    url: profile.siteUrl,
    image: `${profile.siteUrl}${profile.avatar}`,
    email: profile.email,
    sameAs: socials.filter((s) => s.id !== "site").map((s) => s.url),
    description: c.about.body,
    inLanguage: lang,
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
