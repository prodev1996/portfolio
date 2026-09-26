"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import { MotionConfig } from "framer-motion";
export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lenis: Lenis | undefined;
    function sync() {
      lenis?.destroy();
      lenis = undefined;
      if (!preference.matches)
        lenis = new Lenis({
          autoRaf: true,
          duration: 0.85,
          smoothWheel: true,
          anchors: true,
        });
    }
    sync();
    preference.addEventListener("change", sync);
    return () => {
      preference.removeEventListener("change", sync);
      lenis?.destroy();
    };
  }, []);
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
