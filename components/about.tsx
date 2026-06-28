import type { SiteContent } from "@/lib/content";
import { stats } from "@/lib/data";
import { Reveal } from "./reveal";

export function About({ content }: { content: SiteContent }) {
  return (
    <section id="about" aria-labelledby="about-h" className="mx-auto max-w-[1120px] px-[clamp(20px,5vw,48px)] py-[clamp(48px,7vw,90px)]">
      <Reveal>
        <div className="mb-[34px] flex items-center gap-[14px] font-mono text-[13px]" style={{ color: "var(--faint)" }}>
          <span aria-hidden style={{ color: "var(--accent)" }}>01</span>
          <span aria-hidden className="h-px w-[30px]" style={{ background: "var(--border-2)" }} />
          <h2 id="about-h" className="m-0 text-[13px] font-medium" style={{ color: "var(--faint)" }}>{content.about.heading}</h2>
        </div>
      </Reveal>
      <div className="emn-grid2 grid items-center gap-[clamp(28px,5vw,56px)]" style={{ gridTemplateColumns: "1.4fr 1fr" }}>
        <Reveal>
          <p className="m-0 font-display text-[clamp(22px,3vw,32px)] font-medium leading-[1.4] tracking-[-.01em]" style={{ textWrap: "pretty" }}>{content.about.body}</p>
        </Reveal>
        <Reveal delay={120}>
          <div className="grid grid-cols-2 gap-[14px]">
            {stats.map((s) => (
              <div key={s.id} className="emn-panel p-[22px]">
                <div className="font-display text-[clamp(28px,3.6vw,40px)] font-extrabold leading-none">{s.value}</div>
                <div className="mt-2 text-[12.5px]" style={{ color: "var(--dim)" }}>{content.statLabels[s.id]}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
