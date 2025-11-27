// components/Section.tsx
"use client";

import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  className?: string;
  children: ReactNode;
};

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Section({
  id,
  eyebrow,
  title,
  className = "",
  children,
}: SectionProps) {
  return (
    <section id={id} className={className}>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        {(eyebrow || title) && (
          <header className="mb-6 space-y-1">
            {eyebrow && (
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-2xl font-semibold text-slate-50 lg:text-3xl">
                {title}
              </h2>
            )}
          </header>
        )}
        {children}
      </motion.div>
    </section>
  );
}
