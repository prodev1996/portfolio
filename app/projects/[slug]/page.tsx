import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

import ProjectBackButton from "@/components/ProjectBackButton";
import ProjectCtaLink from "@/components/ProjectCtaLink";
import { getProjectBySlug, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Rajiv Bhandari`,
    description: project.overview,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="relative isolate min-h-svh overflow-hidden bg-bg px-5 pb-14 pt-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <ProjectBackButton />

          {project.liveUrl ? (
            <ProjectCtaLink href={project.liveUrl} label="Open Website" />
          ) : project.githubUrl ? (
            <ProjectCtaLink href={project.githubUrl} label="View on GitHub" />
          ) : (
            <span className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-text-faint">
              Confidential · Internal System
            </span>
          )}
        </div>

        <div className="relative mt-10 grid gap-8 border-t border-border pt-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <span
            aria-hidden="true"
            className="font-heading pointer-events-none absolute -top-8 right-0 text-7xl font-bold text-accent/[0.14] sm:-top-10 sm:text-8xl"
          >
            {"{ }"}
          </span>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-accent">
              Project
            </p>
            <h1 className="font-heading mt-4 text-4xl font-bold leading-[0.95] tracking-[-0.03em] text-text sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-text-muted">
              {project.outcome}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.trustSignals.map((signal) => (
                <span key={signal} className="cosmic-chip">
                  {signal}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:border-l lg:border-border lg:pl-8">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-accent">
              My role
            </p>
            <p className="mt-3 text-lg font-black tracking-[-0.02em] text-text">
              {project.role}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span key={item} className="cosmic-chip">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {project.liveUrl || project.githubUrl ? (
          <a
            href={project.liveUrl || project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={
              project.liveUrl
                ? `Open live website for ${project.title}`
                : `View source for ${project.title} on GitHub`
            }
            data-cursor-label={project.liveUrl ? "Open" : "GitHub"}
            className="group mt-8 block overflow-hidden rounded-xl border border-border outline-none transition duration-300 hover:border-accent-border focus-visible:ring-2 focus-visible:ring-accent"
          >
            <div className="relative aspect-[16/9] min-h-[260px] overflow-hidden bg-bg-raised">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                sizes="(min-width: 1024px) 1200px, 100vw"
                className="object-cover object-top transition duration-700 group-hover:scale-105 group-hover:opacity-85"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-bg/0 opacity-0 transition duration-300 group-hover:bg-bg/40 group-hover:opacity-100">
                <span className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-black text-bg">
                  {project.liveUrl ? "Open live website" : "View source on GitHub"}
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          </a>
        ) : (
          <div className="mt-8 overflow-hidden rounded-xl border border-border">
            <div className="relative aspect-[16/9] min-h-[260px] overflow-hidden bg-bg-raised">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                sizes="(min-width: 1024px) 1200px, 100vw"
                className="object-cover object-top"
              />
              <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-md border border-border bg-bg px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-text-muted">
                Confidential internal system, no public link available
              </div>
            </div>
          </div>
        )}

        <div className="mt-10 grid gap-8 divide-y divide-border border-t border-border pt-8 sm:divide-y-0 sm:divide-x lg:grid-cols-3">
          {[
            ["Goal", project.businessGoal],
            ["Result", project.measurableOutcome],
            ["Support", project.supportProof[1] ?? project.supportProof[0]],
          ].map(([label, value]) => (
            <article key={label} className="pt-8 first:pt-0 sm:pt-0 sm:px-8 sm:first:pl-0">
              <p className="text-xs font-black uppercase tracking-[0.26em] text-accent">
                {label}
              </p>
              <p className="mt-4 text-sm leading-7 text-text-muted">{value}</p>
            </article>
          ))}
        </div>

        {project.images.length > 0 && (
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {project.images.map((image) => (
              <a
                key={image.src}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open live website for ${project.title}`}
                className="group overflow-hidden rounded-xl border border-border outline-none transition duration-300 hover:border-accent-border focus-visible:ring-2 focus-visible:ring-accent"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-bg-raised">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover object-top transition duration-700 group-hover:scale-[1.02] group-hover:opacity-85"
                  />
                  <div className="absolute right-4 top-4 flex translate-y-1 items-center gap-1.5 rounded-md border border-border bg-bg px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-text opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    Open
                    <ArrowUpRight className="h-3 w-3" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
