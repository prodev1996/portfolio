"use client";

import { useEffect, useRef, useState } from "react";

const INTERACTIVE_SELECTOR =
  "a, button, [role='button'], input, textarea, select, .cosmic-chip";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pointerFine = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (pointerFine && !reducedMotion) {
      setEnabled(true);
      document.documentElement.classList.add("custom-cursor-active");
    }

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let hovering = false;
    let labelText = "";
    let rafId = 0;

    const handleMove = (event: PointerEvent) => {
      if (event.pointerType && event.pointerType !== "mouse") return;
      mouseX = event.clientX;
      mouseY = event.clientY;
      dotRef.current?.style.setProperty(
        "transform",
        `translate(${mouseX}px, ${mouseY}px)`,
      );
    };

    const handleOver = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;
      const labelTarget = target?.closest?.("[data-cursor-label]") as HTMLElement | null;
      hovering = Boolean(target?.closest?.(INTERACTIVE_SELECTOR));
      labelText = labelTarget?.getAttribute("data-cursor-label") ?? "";

      ringRef.current?.style.setProperty(
        "background-color",
        hovering && !labelText ? "rgba(240, 180, 41, 0.12)" : "transparent",
      );
      ringRef.current?.style.setProperty(
        "border-color",
        hovering ? "rgba(240, 180, 41, 0.75)" : "rgba(163, 163, 163, 0.55)",
      );
      ringRef.current?.style.setProperty("opacity", labelText ? "0" : "1");

      if (labelRef.current) {
        labelRef.current.textContent = labelText;
        labelRef.current.style.setProperty("opacity", labelText ? "1" : "0");
      }
    };

    const tick = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      const scale = hovering ? 1.7 : 1;
      ringRef.current?.style.setProperty(
        "transform",
        `translate(${ringX}px, ${ringY}px) scale(${scale})`,
      );
      labelRef.current?.style.setProperty(
        "transform",
        `translate(${ringX}px, ${ringY}px)`,
      );
      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    window.addEventListener("pointerover", handleOver, { passive: true });
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerover", handleOver);
      cancelAnimationFrame(rafId);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div ref={dotRef} className="custom-cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="custom-cursor-ring" aria-hidden="true" />
      <div ref={labelRef} className="custom-cursor-label" aria-hidden="true" />
    </>
  );
}
