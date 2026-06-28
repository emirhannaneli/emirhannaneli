import type { SiteContent } from "@/lib/content";
import type { LocaleCode } from "@/lib/i18n";
import { AmbientBg } from "./ambient-bg";
import { Nav } from "./nav";
import { HeroEditorial } from "./hero-editorial";
import { About } from "./about";
import { Skills } from "./skills";
// Section imports are added by later tasks:

export function Portfolio({ content, locale }: { content: SiteContent; locale: LocaleCode }) {
  return (
    <div className="relative min-h-screen">
      <AmbientBg />
      <div className="relative z-[2]">
        <Nav content={content} locale={locale} />
        <main id="main">
          <HeroEditorial content={content} />
          <About content={content} />
          <Skills content={content} />
          {/* ... sections added in Tasks 10–15 */}
        </main>
      </div>
    </div>
  );
}
