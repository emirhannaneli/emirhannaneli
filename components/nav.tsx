import Image from "next/image";
import type { SiteContent } from "@/lib/content";
import type { LocaleCode } from "@/lib/i18n";
import { nav, profile } from "@/lib/data";
import { ThemeToggle } from "./theme-toggle";
import { LocaleSwitcher } from "./locale-switcher";

export function Nav({ content, locale }: { content: SiteContent; locale: LocaleCode }) {
  return (
    <div className="sticky top-[18px] z-50 flex justify-center px-5">
      <svg aria-hidden width="0" height="0" className="absolute">
        <filter id="emn-liquid" x="-20%" y="-20%" width="140%" height="140%" colorInterpolationFilters="sRGB">
          <feTurbulence type="turbulence" baseFrequency="0.018 0.022" numOctaves={3} seed={2} result="turb" />
          <feDisplacementMap in="SourceGraphic" in2="turb" scale={26} xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>
      <nav aria-label="Primary" className="emn-nav relative flex w-full max-w-[1120px] items-center justify-between gap-5 rounded-[18px] py-[11px] pl-5 pr-[14px]">
        <a href="#top" className="flex items-center gap-[10px] no-underline" style={{ color: "var(--text)" }}>
          <Image src="/avatar.png" alt={profile.name} width={34} height={34} priority unoptimized className="rounded-[10px] bg-white object-cover ring-1 ring-[var(--border-2)]" />
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
