"use client";
import { useEffect } from "react";

/** Moves a soft glass highlight to follow the pointer across any `.emn-panel` card. */
export function CardGlow() {
  useEffect(() => {
    const mq = window.matchMedia;
    if (mq("(pointer: coarse)").matches || mq("(prefers-reduced-motion: reduce)").matches) return;
    const onMove = (e: PointerEvent) => {
      const card = (e.target as HTMLElement | null)?.closest<HTMLElement>(".emn-panel");
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--gx", `${((e.clientX - r.left) / r.width) * 100}%`);
      card.style.setProperty("--gy", `${((e.clientY - r.top) / r.height) * 100}%`);
    };
    document.addEventListener("pointermove", onMove, { passive: true });
    return () => document.removeEventListener("pointermove", onMove);
  }, []);
  return null;
}
