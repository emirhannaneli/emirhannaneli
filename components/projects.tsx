import type { SiteContent } from "@/lib/content";
import { projects } from "@/lib/data";
import { icons } from "@/lib/icons";
import { Reveal } from "./reveal";

export function Projects({ content }: { content: SiteContent }) {
  const tr = (token: string) => content.glossary?.[token as keyof typeof content.glossary] ?? token;
  return (
    <section id="projects" aria-labelledby="projects-h" className="mx-auto max-w-[1120px] px-[clamp(20px,5vw,48px)] py-[clamp(48px,7vw,90px)]">
      <Reveal>
        <div className="mb-[14px] flex items-center gap-[14px] font-mono text-[13px]" style={{ color: "var(--faint)" }}>
          <span aria-hidden style={{ color: "var(--accent)" }}>03</span>
          <span aria-hidden className="h-px w-[30px]" style={{ background: "var(--border-2)" }} />
          <h2 id="projects-h" className="m-0 text-[13px] font-medium" style={{ color: "var(--faint)" }}>{content.projects.heading}</h2>
        </div>
      </Reveal>
      <Reveal><p className="m-0 mb-9 max-w-[40em] text-[clamp(15px,1.8vw,17px)]" style={{ color: "var(--dim)" }}>{content.projects.sub}</p></Reveal>
      <div className="grid gap-[18px]" style={{ gridTemplateColumns: "repeat(auto-fill,minmax(330px,1fr))" }}>
        {projects.map((p) => (
          <Reveal key={p.id}>
            <a href={p.link} target="_blank" rel="noopener noreferrer" className="emn-panel flex h-full flex-col rounded-[22px] p-[26px] no-underline transition-[transform,border-color] duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[6px] hover:border-[var(--border-2)]" style={{ color: "var(--text)" }}>
              <div className="mb-[18px] flex items-center justify-between">
                <span className="inline-flex items-center gap-2 font-mono text-[12px]" style={{ color: "var(--dim)" }}>
                  <span className="h-[9px] w-[9px] rounded-full" style={{ background: p.dotColor }} />{p.lang}
                </span>
                <span className="inline-flex items-center gap-[13px] font-mono text-[12px]" style={{ color: "var(--faint)" }}>
                  <span className="inline-flex items-center gap-[5px]">{icons.star}{p.stars}</span><span>{p.year}</span>
                </span>
              </div>
              <h3 className="m-0 mb-[10px] font-display text-[21px] font-bold tracking-[-.01em]">{p.title}</h3>
              <p className="m-0 mb-5 flex-1 text-[14px] leading-[1.55]" style={{ color: "var(--dim)", textWrap: "pretty" }}>{content.projects.descriptions[p.id]}</p>
              <div className="mb-[18px] flex flex-wrap gap-[7px]">
                {p.tags.map((t) => (<span key={t} className="emn-chip emn-tag">{tr(t)}</span>))}
              </div>
              <span className="inline-flex items-center gap-[7px] text-[13.5px] font-semibold" style={{ color: "var(--accent)" }}>{content.projects.viewLabel}{icons.arrow}</span>
              <span className="emn-sr-only">(opens in new tab)</span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
