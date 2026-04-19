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
      className="fixed left-0 top-0 z-[70] h-1 w-full origin-left bg-gradient-to-r from-[#7c6cf2] via-[#d9468f] to-[#e49a2f] shadow-[0_0_18px_rgba(217,70,143,0.38)]"
      style={{ scaleX }}
    />
  );
}
