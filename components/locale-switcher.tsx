"use client";
import { LuChevronDown } from "react-icons/lu";
import { locales, localeHref, type LocaleCode } from "@/lib/i18n";

export function LocaleSwitcher({ current }: { current: LocaleCode }) {
  return (
    <div className="relative">
      <select
        aria-label="Select language"
        value={current}
        onChange={(e) => window.location.assign(localeHref(e.target.value as LocaleCode))}
        className="h-[38px] cursor-pointer appearance-none rounded-[11px] border border-[var(--border)] bg-[var(--chip)] pl-3 pr-8 font-mono text-[12px] font-semibold text-[var(--text)] transition-colors hover:border-[var(--border-2)]"
      >
        {locales.map((l) => (
          <option key={l.code} value={l.code}>
            {l.label}
          </option>
        ))}
      </select>
      <LuChevronDown
        size={14}
        aria-hidden
        className="pointer-events-none absolute right-[9px] top-1/2 -translate-y-1/2"
        style={{ color: "var(--dim)" }}
      />
    </div>
  );
}
