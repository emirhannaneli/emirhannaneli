"use client";
import { useEffect, useRef, useState } from "react";
import { LuChevronDown, LuCheck } from "react-icons/lu";
import { locales, localeHref, type LocaleCode } from "@/lib/i18n";

export function LocaleSwitcher({ current }: { current: LocaleCode }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const currentLabel = locales.find((l) => l.code === current)?.label ?? current;

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const choose = (code: LocaleCode) => {
    if (code === current) {
      setOpen(false);
      return;
    }
    window.location.assign(localeHref(code));
  };

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Select language"
        onClick={() => setOpen((o) => !o)}
        className="flex h-[38px] items-center gap-1.5 rounded-[11px] border border-[var(--border)] bg-[var(--chip)] pl-3 pr-2 font-mono text-[12px] font-semibold text-[var(--text)] transition-colors hover:border-[var(--border-2)]"
      >
        {currentLabel}
        <LuChevronDown
          size={14}
          aria-hidden
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          style={{ color: "var(--dim)" }}
        />
      </button>
      {open && (
        <ul
          role="listbox"
          aria-label="Language"
          className="emn-panel-2 absolute right-0 top-[calc(100%+8px)] z-50 min-w-[150px] rounded-[12px] p-1.5"
        >
          {locales.map((l) => {
            const active = l.code === current;
            return (
              <li key={l.code} role="option" aria-selected={active}>
                <button
                  type="button"
                  onClick={() => choose(l.code)}
                  className="flex w-full items-center justify-between gap-3 rounded-[8px] px-3 py-2 text-left font-mono text-[12.5px] font-medium transition-colors hover:bg-[var(--chip)]"
                  style={{ color: active ? "var(--accent)" : "var(--text)" }}
                >
                  {l.label}
                  {active && <LuCheck size={14} aria-hidden />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
