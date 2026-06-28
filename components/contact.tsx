import type { SiteContent } from "@/lib/content";
import { profile, socials, type SocialId } from "@/lib/data";
import { icons } from "@/lib/icons";
import { Reveal } from "./reveal";

const SOCIAL_LABEL: Record<SocialId, string> = {
  github: "GitHub", linkedin: "LinkedIn", stackoverflow: "Stack Overflow", instagram: "Instagram", site: "emirman.dev",
};

export function Contact({ content }: { content: SiteContent }) {
  const { contact } = content;
  return (
    <section id="contact" aria-labelledby="contact-h" className="mx-auto max-w-[1120px] px-[clamp(20px,5vw,48px)] pt-[clamp(48px,7vw,90px)] pb-[clamp(56px,8vw,110px)]">
      <Reveal>
        <div className="emn-panel-2 relative overflow-hidden rounded-[30px] p-[clamp(34px,5vw,64px)]">
          <div aria-hidden className="pointer-events-none absolute -top-1/3 right-[-15%] h-[150%] w-[60%]" style={{ background: "radial-gradient(circle, var(--accent-soft), transparent 70%)", filter: "blur(50px)" }} />
          <div className="relative">
            <div className="mb-[18px] font-mono text-[13px] tracking-[.04em]" style={{ color: "var(--accent)" }}>05 — {contact.kicker}</div>
            <h2 id="contact-h" className="m-0 mb-4 max-w-[14em] font-display text-[clamp(34px,5.5vw,62px)] font-extrabold leading-[1.02] tracking-[-.025em]">{contact.heading}</h2>
            <p className="m-0 mb-9 max-w-[34em] text-[clamp(15px,1.9vw,18px)]" style={{ color: "var(--dim)" }}>{contact.sub}</p>
            <div className="mb-[38px] flex flex-wrap gap-[14px]">
              <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-[11px] rounded-[14px] px-[22px] py-[15px] text-[15px] font-semibold text-white no-underline transition-transform hover:-translate-y-[2px]" style={{ background: "var(--accent)", boxShadow: "0 14px 32px -14px var(--accent), inset 0 1px 0 rgba(255,255,255,.35)" }}>{icons.mail}{profile.email}</a>
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-[11px] rounded-[14px] border border-[var(--border-2)] px-[22px] py-[15px] text-[15px] font-semibold no-underline" style={{ background: "var(--chip)", color: "var(--text)" }}><span style={{ color: "var(--accent)" }}>{icons.phone}</span>{profile.phone}</a>
            </div>
            <div className="flex flex-wrap gap-[10px]">
              {socials.filter((s) => s.id !== "site").map((s) => (
                <a key={s.id} href={s.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-[9px] rounded-[12px] border border-[var(--border)] px-4 py-[11px] text-[13.5px] font-medium no-underline transition-transform hover:-translate-y-[2px]" style={{ background: "var(--chip)", color: "var(--text)" }}>
                  <span className="grid place-items-center">{icons[s.icon]}</span>{SOCIAL_LABEL[s.id]}
                  <span className="emn-sr-only">(opens in new tab)</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
