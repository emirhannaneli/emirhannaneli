import type { SiteContent } from "@/lib/content";
import { skillGroups } from "@/lib/data";
import { icons } from "@/lib/icons";
import { Reveal } from "./reveal";

export function Skills({ content }: { content: SiteContent }) {
  const tr = (token: string) => content.glossary?.[token as keyof typeof content.glossary] ?? token;
  return (
    <section id="skills" aria-labelledby="skills-h" className="mx-auto max-w-[1120px] px-[clamp(20px,5vw,48px)] py-[clamp(48px,7vw,90px)]">
      <Reveal>
        <div className="mb-[14px] flex items-center gap-[14px] font-mono text-[13px]" style={{ color: "var(--faint)" }}>
          <span aria-hidden style={{ color: "var(--accent)" }}>02</span>
          <span aria-hidden className="h-px w-[30px]" style={{ background: "var(--border-2)" }} />
          <h2 id="skills-h" className="m-0 text-[13px] font-medium" style={{ color: "var(--faint)" }}>{content.skills.heading}</h2>
        </div>
      </Reveal>
      <Reveal><p className="m-0 mb-9 max-w-[40em] text-[clamp(15px,1.8vw,17px)]" style={{ color: "var(--dim)" }}>{content.skills.sub}</p></Reveal>
      <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(248px,1fr))" }}>
        {skillGroups.map((g) => (
          <Reveal key={g.id}>
            <div className="emn-panel h-full p-6">
              <div className="mb-[18px] flex items-center gap-[11px]">
                <span className="grid h-8 w-8 place-items-center rounded-[10px]" style={{ background: "var(--accent-soft)", color: "var(--accent)" }}>{icons[g.icon]}</span>
                <h3 className="m-0 font-display text-[16px] font-bold">{content.skills.groupTitles[g.id]}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item) => (<span key={item} className="emn-chip emn-skill-chip">{tr(item)}</span>))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
