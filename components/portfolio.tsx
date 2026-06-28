import type { SiteContent } from "@/lib/content";
import type { LocaleCode } from "@/lib/i18n";
import { AmbientBg } from "./ambient-bg";
// Section imports are added by later tasks:
// import { Nav } from "./nav"; import { HeroEditorial } from "./hero-editorial"; ...

export function Portfolio({ content, locale }: { content: SiteContent; locale: LocaleCode }) {
  return (
    <div className="relative min-h-screen">
      <AmbientBg />
      <div className="relative z-[2]">
        {/* <Nav content={content} locale={locale} /> */}
        <main id="main">
          {/* <HeroEditorial content={content} /> ... sections added in Tasks 10–15 */}
          <p style={{ padding: 40 }}>{content.meta.title} — {locale}</p>
        </main>
      </div>
    </div>
  );
}
