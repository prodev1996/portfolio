"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgressRail() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 top-0 z-[70] h-1 w-full origin-left bg-gradient-to-r from-[#8b5cf6] via-[#ec4899] to-[#f59e0b] shadow-[0_0_24px_rgba(236,72,153,0.55)]"
      style={{ scaleX }}
    />
  );
}
