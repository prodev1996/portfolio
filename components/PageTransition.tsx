"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();

  return (
    <>
      <motion.div
        key={`wipe-${pathname}`}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[100] h-[3px] w-full origin-left bg-accent"
        initial={reducedMotion ? { scaleX: 0, opacity: 0 } : { scaleX: 0, opacity: 1 }}
        animate={reducedMotion ? { scaleX: 0, opacity: 0 } : { scaleX: 1, opacity: [1, 1, 0] }}
        transition={{ duration: reducedMotion ? 0 : 0.6, ease: "easeInOut", times: reducedMotion ? undefined : [0, 0.7, 1] }}
      />
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          initial={reducedMotion ? undefined : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reducedMotion ? undefined : { opacity: 0, y: -14 }}
          transition={{ duration: reducedMotion ? 0 : 0.4, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
