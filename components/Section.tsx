"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  children: ReactNode;
};

export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  className = "",
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-52 py-16 sm:py-20 ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.16 }}
        transition={{ duration: 0.55 }}
        className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
      >
        {(eyebrow || title || subtitle) && (
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              {eyebrow ? (
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#1f9d72]">
                  {eyebrow}
                </p>
              ) : null}
              {title ? (
                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[#1f2f28] sm:text-4xl">
                  {title}
                </h2>
              ) : null}
              {subtitle ? (
                <p className="mt-4 text-sm leading-7 text-[#5e6f65] sm:text-[15px]">
                  {subtitle}
                </p>
              ) : null}
            </div>
          </div>
        )}

        {children}
      </motion.div>
    </section>
  );
}
