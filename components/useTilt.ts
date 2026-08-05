"use client";

import { useEffect, useRef } from "react";

export function useTilt<T extends HTMLElement>(maxTilt = 6) {
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
      const px = (event.clientX - rect.left) / rect.width - 0.5;
      const py = (event.clientY - rect.top) / rect.height - 0.5;
      el.style.setProperty(
        "transform",
        `perspective(900px) rotateX(${(-py * maxTilt).toFixed(2)}deg) rotateY(${(px * maxTilt).toFixed(2)}deg) translateY(-4px)`,
      );
    };

    const handleLeave = () => {
      el.style.setProperty(
        "transform",
        "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px)",
      );
    };

    el.addEventListener("pointermove", handleMove);
    el.addEventListener("pointerleave", handleLeave);

    return () => {
      el.removeEventListener("pointermove", handleMove);
      el.removeEventListener("pointerleave", handleLeave);
    };
  }, [maxTilt]);

  return ref;
}
