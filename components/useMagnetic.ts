"use client";

import { useEffect, useRef } from "react";

export function useMagnetic<T extends HTMLElement>(strength = 0.35) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const pointerFine = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (!pointerFine || reducedMotion) return;

    const handleMove = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (event.clientX - rect.left - rect.width / 2) * strength;
      const y = (event.clientY - rect.top - rect.height / 2) * strength;
      el.style.setProperty("transform", `translate(${x}px, ${y}px)`);
    };

    const handleLeave = () => {
      el.style.setProperty("transform", "translate(0px, 0px)");
    };

    el.addEventListener("pointermove", handleMove);
    el.addEventListener("pointerleave", handleLeave);

    return () => {
      el.removeEventListener("pointermove", handleMove);
      el.removeEventListener("pointerleave", handleLeave);
    };
  }, [strength]);

  return ref;
}
