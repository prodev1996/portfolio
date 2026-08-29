"use client";

import { ArrowUpRight } from "lucide-react";
import { useMagnetic } from "@/components/useMagnetic";

export default function ProjectCtaLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  const ref = useMagnetic<HTMLAnchorElement>(0.3);

  return (
    <a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-primary"
    >
      {label}
      <ArrowUpRight className="h-4 w-4" />
    </a>
  );
}
