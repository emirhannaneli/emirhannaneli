import type { SiteContent } from "@/lib/content";
import { experience } from "@/lib/data";
import { Reveal } from "./reveal";

export function Experience({ content }: { content: SiteContent }) {
  return (
    <section id="experience" aria-labelledby="experience-h" className="mx-auto max-w-[1120px] px-[clamp(20px,5vw,48px)] py-[clamp(48px,7vw,90px)]">
      <Reveal>
        <div className="mb-10 flex items-center gap-[14px] font-mono text-[13px]" style={{ color: "var(--faint)" }}>
          <span aria-hidden style={{ color: "var(--accent)" }}>04</span>
          <span aria-hidden className="h-px w-[30px]" style={{ background: "var(--border-2)" }} />
          <h2 id="experience-h" className="m-0 text-[13px] font-medium" style={{ color: "var(--faint)" }}>{content.experience.heading}</h2>
        </div>
      </Reveal>
      <div className="flex flex-col gap-4">
        {experience.map((e) => {
          const item = content.experience.items[e.id];
          return (
            <Reveal key={e.id}>
              <div className="emn-panel emn-grid2 grid gap-[clamp(16px,3vw,40px)] rounded-[22px] p-[26px]" style={{ gridTemplateColumns: "170px 1fr" }}>
                <div>
                  <div className="mb-3 inline-flex items-center rounded-[8px] px-[11px] py-[5px] font-mono text-[11px] font-semibold" style={{ background: "var(--accent-soft)", color: "var(--accent)" }}>{item.tag}</div>
                  <div className="font-mono text-[13px]" style={{ color: "var(--dim)" }}>{item.period}</div>
                </div>
                <div>
                  <h3 className="m-0 mb-1 font-display text-[19px] font-bold">{item.role}</h3>
                  <div className="mb-3 text-[13.5px]" style={{ color: "var(--accent)" }}>{item.org}</div>
                  <p className="m-0 text-[14.5px] leading-[1.6]" style={{ color: "var(--dim)", textWrap: "pretty" }}>{item.desc}</p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
