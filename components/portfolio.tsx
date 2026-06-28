import type { SiteContent } from "@/lib/content";
import type { LocaleCode } from "@/lib/i18n";
import { AmbientBg } from "./ambient-bg";
import { Nav } from "./nav";
import { HeroEditorial } from "./hero-editorial";
import { About } from "./about";
import { Skills } from "./skills";
import { Projects } from "./projects";
import { Experience } from "./experience";
import { Contact } from "./contact";
import { Footer } from "./footer";

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
          <Projects content={content} />
          <Experience content={content} />
          <Contact content={content} />
        </main>
        <Footer content={content} />
      </div>
    </div>
  );
}
