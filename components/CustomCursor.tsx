"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";

const INTERACTIVE_SELECTOR =
  "a, button, [role='button'], input, textarea, select, .cosmic-chip";

function subscribeToCursorCapability(callback: () => void) {
  const pointerQuery = window.matchMedia("(pointer: fine)");
  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  pointerQuery.addEventListener("change", callback);
  motionQuery.addEventListener("change", callback);
  return () => {
    pointerQuery.removeEventListener("change", callback);
    motionQuery.removeEventListener("change", callback);
  };
}

function getCursorCapabilitySnapshot() {
  return (
    window.matchMedia("(pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function getCursorCapabilityServerSnapshot() {
  return false;
}

export default function CustomCursor() {
  const enabled = useSyncExternalStore(
    subscribeToCursorCapability,
    getCursorCapabilitySnapshot,
    getCursorCapabilityServerSnapshot,
  );
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add("custom-cursor-active");
    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, [enabled]);

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
        hovering && !labelText ? "var(--color-accent-soft)" : "transparent",
      );
      ringRef.current?.style.setProperty(
        "border-color",
        hovering
          ? "color-mix(in srgb, var(--color-accent) 75%, transparent)"
          : "color-mix(in srgb, var(--color-text-muted) 55%, transparent)",
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
