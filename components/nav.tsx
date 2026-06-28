import type { SiteContent } from "@/lib/content";
import type { LocaleCode } from "@/lib/i18n";
import { nav, profile } from "@/lib/data";
import { ThemeToggle } from "./theme-toggle";
import { LocaleSwitcher } from "./locale-switcher";

export function Nav({ content, locale }: { content: SiteContent; locale: LocaleCode }) {
  return (
    <div className="sticky top-[18px] z-50 flex justify-center px-5">
      <nav className="emn-panel-2 flex w-full max-w-[1120px] items-center justify-between gap-5 rounded-[18px] py-[11px] pl-5 pr-[14px]">
        <a href="#top" className="flex items-center gap-[10px] no-underline" style={{ color: "var(--text)" }}>
          <span className="grid h-[30px] w-[30px] place-items-center rounded-[9px] font-display text-[15px] font-extrabold text-white" style={{ background: "linear-gradient(140deg,var(--accent),var(--accent-2))" }}>E</span>
          <span className="font-display text-[15px] font-bold tracking-tight">{profile.name}</span>
        </a>
        <div className="emn-nav-links flex items-center gap-1">
          {nav.map((item) => (
            <a key={item.id} href={item.href} className="rounded-[10px] px-[13px] py-2 text-[13.5px] font-medium no-underline transition-colors hover:bg-[var(--chip)] hover:text-[var(--text)]" style={{ color: "var(--dim)" }}>
              {content.nav[item.id]}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <LocaleSwitcher current={locale} />
          <ThemeToggle />
        </div>
      </nav>
    </div>
  );
}
