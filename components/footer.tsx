import type { SiteContent } from "@/lib/content";
import { profile } from "@/lib/data";

export function Footer({ content }: { content: SiteContent }) {
  return (
    <footer className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-3 px-[clamp(20px,5vw,48px)] pb-[clamp(40px,6vw,72px)] font-mono text-[13px]" style={{ color: "var(--faint)" }}>
      <span>© 2026 {profile.name}</span>
      <span>{content.footer.note}</span>
    </footer>
  );
}
