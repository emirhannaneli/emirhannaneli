"use client";
import { createContext, useCallback, useContext, useSyncExternalStore } from "react";

type Theme = "dark" | "light";

/** Inline, pre-hydration script: adds `js` and applies the stored theme before paint (no flash). */
export const THEME_SCRIPT = `(function(){var d=document.documentElement;d.classList.add('js');try{var t=localStorage.getItem('emn_theme');if(t==='light'||t==='dark'){d.setAttribute('data-theme',t);}}catch(e){}})();`;

const listeners = new Set<() => void>();

function getSnapshot(): Theme {
  return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
}
function getServerSnapshot(): Theme {
  return "dark";
}
function subscribe(cb: () => void): () => void {
  listeners.add(cb);
  return () => {
    listeners.delete(cb);
  };
}
function applyTheme(next: Theme): void {
  try {
    localStorage.setItem("emn_theme", next);
  } catch {}
  document.documentElement.setAttribute("data-theme", next);
  listeners.forEach((l) => l());
}

const ThemeCtx = createContext<{ theme: Theme; toggle: () => void } | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const toggle = useCallback(() => applyTheme(theme === "dark" ? "light" : "dark"), [theme]);
  return <ThemeCtx.Provider value={{ theme, toggle }}>{children}</ThemeCtx.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeCtx);
  return ctx ?? { theme: "dark" as Theme, toggle: () => {} };
}
