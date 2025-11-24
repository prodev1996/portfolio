import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  title: string;
  eyebrow?: string;
  children: ReactNode;
}

export default function Section({ id, title, eyebrow, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 py-16">
      <div className="mx-auto max-w-6xl px-4">
        {eyebrow && (
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {eyebrow}
          </p>
        )}
        <h2 className="mb-6 text-2xl font-semibold text-slate-50 md:text-3xl">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
