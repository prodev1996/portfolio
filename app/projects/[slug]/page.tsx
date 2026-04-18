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
    <section className="relative isolate min-h-svh overflow-hidden px-5 pb-16 pt-24 sm:px-8 lg:px-10">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_28%_8%,rgba(139,92,246,0.22),transparent_32%),radial-gradient(circle_at_82%_22%,rgba(236,72,153,0.12),transparent_26%),linear-gradient(180deg,#090713_0%,#120f1d_48%,#080711_100%)]" />
      <div className="pointer-events-none absolute left-[-80px] top-40 h-72 w-72 rounded-full bg-[#8b5cf6]/18 blur-3xl" />
      <div className="pointer-events-none absolute bottom-28 right-[-80px] h-80 w-80 rounded-full bg-[#ec4899]/12 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <ProjectBackButton />

          <a href={project.liveUrl} className="btn-primary">
            Open Website
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#f0abfc]">
              Project
            </p>
            <h1 className="mt-4 text-4xl font-black leading-[0.95] tracking-[-0.07em] text-white sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#c9c1d8]">
              {project.outcome}
            </p>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-white/[0.045] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.3)] backdrop-blur-2xl">
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

        <div className="mt-8 overflow-hidden rounded-[36px] border border-white/10 bg-[#120f1d]/82 p-4 shadow-[0_38px_120px_rgba(0,0,0,0.36)] backdrop-blur-2xl">
          <div className="relative aspect-[16/9] min-h-[300px] overflow-hidden rounded-[28px] border border-white/10 bg-[#090712]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070610]/80 via-transparent to-transparent" />
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {[
            ["Goal", project.businessGoal],
            ["Result", project.measurableOutcome],
            ["Support", project.supportProof[1] ?? project.supportProof[0]],
          ].map(([label, value]) => (
            <article key={label} className="cosmic-card">
              <p className="text-xs font-black uppercase tracking-[0.26em] text-[#f0abfc]">
                {label}
              </p>
              <p className="mt-4 text-sm leading-7 text-[#d8d1e6]">{value}</p>
            </article>
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {project.images.map((image) => (
            <div
              key={image.src}
              className="overflow-hidden rounded-[34px] border border-white/10 bg-[#120f1d]/82 p-3 shadow-[0_30px_100px_rgba(0,0,0,0.34)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-[26px] border border-white/10 bg-[#090712]">
                <Image src={image.src} alt={image.alt} fill className="object-cover object-top" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
