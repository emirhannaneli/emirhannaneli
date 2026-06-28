"use client";
import { useEffect } from "react";

export function AnimPause() {
  useEffect(() => {
    const onVis = () => document.documentElement.classList.toggle("emn-anim-paused", document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);
  return null;
}
