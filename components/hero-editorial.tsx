import type { SiteContent } from "@/lib/content";
import { marquee, profile } from "@/lib/data";
import { icons } from "@/lib/icons";
import { Reveal } from "./reveal";
import { HeroAurora } from "./hero-aurora";

export function HeroEditorial({ content }: { content: SiteContent }) {
  const { hero } = content;
  return (
    <header id="top" className="relative -mt-[78px] w-full overflow-hidden pt-[clamp(128px,15vw,200px)] pb-[clamp(40px,6vw,72px)]">
      <HeroAurora />
      <div className="relative mx-auto max-w-[1120px] px-[clamp(20px,5vw,48px)]">
      <Reveal>
        <div className="mb-[18px] flex items-center gap-[14px] font-mono text-[12.5px] uppercase tracking-[.06em]" style={{ color: "var(--faint)" }}>
          <span className="h-px w-[34px]" style={{ background: "var(--border-2)" }} />{hero.kicker}
        </div>
      </Reveal>
      <Reveal delay={60}>
        <h1 className="emn-hero-edit m-0 mb-[26px] font-display font-extrabold leading-[.9] tracking-[-.04em]" style={{ fontSize: "clamp(56px,11vw,150px)" }}>
          <span className="emn-sr-only">{profile.name} — Backend Developer</span>
          <span aria-hidden>Backend<br /><span style={{ color: "transparent", WebkitTextStroke: "1.5px var(--text)" }}>Developer</span></span>
        </h1>
      </Reveal>
      <div className="emn-grid2 grid items-end gap-9" style={{ gridTemplateColumns: "1.1fr 1fr" }}>
        <Reveal delay={120}>
          <p className="m-0 max-w-[32em] text-[clamp(16px,2vw,20px)] leading-[1.55]" style={{ color: "var(--dim)" }}>{hero.tagline}</p>
        </Reveal>
        <Reveal delay={160}>
          <div className="flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-[13px] px-[22px] py-[14px] text-[15px] font-semibold text-white no-underline transition-transform hover:-translate-y-[2px]" style={{ background: "var(--accent)", boxShadow: "0 12px 30px -12px var(--accent), inset 0 1px 0 rgba(255,255,255,.35)" }}>{hero.ctaPrimary}</a>
            <a href={profile.cvPath} download className="emn-panel-2 inline-flex items-center gap-[9px] rounded-[13px] border-[var(--border-2)] px-5 py-[14px] text-[15px] font-semibold no-underline" style={{ color: "var(--text)" }}>
              {icons.download}{hero.ctaSecondary}<span className="emn-sr-only">(PDF)</span>
            </a>
          </div>
        </Reveal>
      </div>
      <Reveal delay={220}>
        <div className="mt-[44px] overflow-hidden border-y py-4" style={{ borderColor: "var(--border)", WebkitMaskImage: "linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)", maskImage: "linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)" }}>
          <div className="emn-marquee-track flex w-max gap-[38px] font-mono text-[15px] hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]" style={{ animation: "emnMarquee 28s linear infinite", color: "var(--dim)" }} tabIndex={0} aria-label={marquee.join(", ")}>
            {[0, 1].map((copy) => (
              <span key={copy} aria-hidden={copy === 1} className="flex items-center gap-[38px]">
                {marquee.map((m) => (
                  <span key={m} className="inline-flex items-center gap-[38px]">{m}<span style={{ color: "var(--accent)" }}>/</span></span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
      </div>
    </header>
  );
}
