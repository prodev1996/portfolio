import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

import ProjectBackButton from "@/components/ProjectBackButton";
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
    <section className="relative isolate min-h-svh overflow-hidden px-5 pb-14 pt-24 sm:px-8 lg:px-10">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_28%_8%,rgba(139,92,246,0.22),transparent_32%),radial-gradient(circle_at_82%_22%,rgba(236,72,153,0.12),transparent_26%),linear-gradient(180deg,#090713_0%,#120f1d_48%,#080711_100%)]" />
      <div className="pointer-events-none absolute left-[-80px] top-40 h-72 w-72 rounded-full bg-[#8b5cf6]/18 blur-3xl" />
      <div className="pointer-events-none absolute bottom-28 right-[-80px] h-80 w-80 rounded-full bg-[#ec4899]/12 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <ProjectBackButton />

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Open Website
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-7 grid gap-5 rounded-[36px] border border-white/10 bg-[#120f1d]/72 p-5 shadow-[0_34px_120px_rgba(0,0,0,0.34)] backdrop-blur-2xl lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:p-7">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#d8a7e7]">
              Project
            </p>
            <h1 className="mt-4 text-4xl font-black leading-[0.95] tracking-[-0.07em] text-white sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#c9c1d8]">
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

          <div className="rounded-[28px] border border-white/10 bg-white/[0.045] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.26)] backdrop-blur-2xl">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#a78bfa]">
              My role
            </p>
            <p className="mt-3 text-lg font-black tracking-[-0.04em] text-white">
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

        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open live website for ${project.title}`}
          className="group mt-6 block overflow-hidden rounded-[34px] border border-white/10 bg-[#120f1d]/82 p-3 shadow-[0_34px_110px_rgba(0,0,0,0.34)] outline-none backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:border-white/20 focus-visible:ring-2 focus-visible:ring-[#c55b9e] sm:p-4"
        >
          <div className="relative aspect-[16/9] min-h-[260px] overflow-hidden rounded-[26px] border border-white/10 bg-[#090712]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              sizes="(min-width: 1024px) 1200px, 100vw"
              className="object-cover object-top transition duration-700 group-hover:scale-[1.02] group-hover:opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070610]/80 via-transparent to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 backdrop-blur-0 transition duration-300 group-hover:bg-black/20 group-hover:opacity-100 group-hover:backdrop-blur-sm">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-black text-black shadow-2xl">
                Open live website
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          </div>
        </a>

        <div className="mt-5 grid gap-4 lg:grid-cols-3">
          {[
            ["Goal", project.businessGoal],
            ["Result", project.measurableOutcome],
            ["Support", project.supportProof[1] ?? project.supportProof[0]],
          ].map(([label, value]) => (
            <article key={label} className="cosmic-card">
              <p className="text-xs font-black uppercase tracking-[0.26em] text-[#d8a7e7]">
                {label}
              </p>
              <p className="mt-4 text-sm leading-7 text-[#d8d1e6]">{value}</p>
            </article>
          ))}
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          {project.images.map((image) => (
            <a
              key={image.src}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open live website for ${project.title}`}
              className="group overflow-hidden rounded-[34px] border border-white/10 bg-[#120f1d]/82 p-3 shadow-[0_30px_100px_rgba(0,0,0,0.34)] outline-none transition duration-300 hover:-translate-y-1 hover:border-white/20 focus-visible:ring-2 focus-visible:ring-[#c55b9e]"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-[26px] border border-white/10 bg-[#090712]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-top transition duration-700 group-hover:scale-[1.02] group-hover:opacity-85"
                />
                <div className="absolute right-4 top-4 flex translate-y-1 items-center gap-1.5 rounded-full border border-white/10 bg-black/70 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-white opacity-0 shadow-xl backdrop-blur-xl transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  Open
                  <ArrowUpRight className="h-3 w-3" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
