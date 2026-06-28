"use client";
import Link from "next/link";
import { locales, localeHref, type LocaleCode } from "@/lib/i18n";

export function LocaleSwitcher({ current }: { current: LocaleCode }) {
  return (
    <nav aria-label="Language" className="flex items-center gap-1">
      {locales.map((l) => {
        const active = l.code === current;
        return (
          <Link
            key={l.code}
            href={localeHref(l.code)}
            hrefLang={l.code}
            aria-current={active ? "true" : undefined}
            className="rounded-[10px] border border-[var(--border)] px-[10px] py-[7px] font-mono text-[12px] font-semibold transition-colors"
            style={{ background: active ? "var(--accent-soft)" : "var(--chip)", color: active ? "var(--accent)" : "var(--dim)" }}
          >
            {l.short}
          </Link>
        );
      })}
    </nav>
  );
}
