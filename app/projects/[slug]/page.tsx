import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Globe, Wrench } from "lucide-react";

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
    title: `${project.title} Project`,
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
    <section className="mx-auto w-full max-w-6xl px-4 pb-16 pt-4 sm:px-6 lg:px-8">
      <div className="grid gap-8">
        <div className="soft-panel rounded-[30px] px-6 py-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <Link href="/#projects" className="btn-outline">
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Link>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Visit Live Site
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#1f9d72]">
                Live Project Detail
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[#1d2d25] sm:text-5xl">
                {project.title}
              </h1>
              <p className="mt-3 text-base text-[#5a6b61]">{project.subtitle}</p>
              <p className="mt-6 max-w-3xl text-[15px] leading-8 text-[#52645a] sm:text-[17px]">
                {project.overview}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="badge">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="card">
              <div className="flex items-center gap-2 text-[#d7854f]">
                <Wrench className="h-4 w-4" />
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7b877f]">
                  My Role
                </p>
              </div>
              <p className="mt-3 text-lg font-semibold text-[#24362d]">{project.role}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.trustSignals.map((item) => (
                  <span key={item} className="badge">
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-6 rounded-[24px] border border-[#e4e7de] bg-white/72 px-4 py-4">
                <div className="flex items-center gap-2 text-[#1f9d72]">
                  <Globe className="h-4 w-4" />
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7b877f]">
                    Live URL
                  </p>
                </div>
                <p className="mt-3 break-all text-sm text-[#31463a]">{project.liveLabel}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {project.images.map((image) => (
            <div key={image.src} className="card overflow-hidden p-3">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[22px] border border-[#e7e6df] bg-white">
                <Image src={image.src} alt={image.alt} fill className="object-cover object-top" />
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <div className="card">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1f9d72]">
              The Challenge
            </p>
            <p className="mt-4 text-sm leading-7 text-[#4f6157]">{project.challenge}</p>
          </div>

          <div className="card">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1f9d72]">
              The Solution
            </p>
            <p className="mt-4 text-sm leading-7 text-[#4f6157]">{project.solution}</p>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="card">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7b877f]">
              What I handled
            </p>
            <ul className="mt-4 space-y-3">
              {project.proofPoints.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-7 text-[#33463b]">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#d7854f]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7b877f]">
              Why this matters
            </p>
            <p className="mt-4 text-sm leading-7 text-[#4f6157]">{project.outcome}</p>

            <div className="mt-6 rounded-[24px] bg-[#fffdf9] px-5 py-5">
              <p className="text-sm leading-7 text-[#32463a]">{project.takeaway}</p>
            </div>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="card">
            <div className="flex items-center gap-2 text-[#1f9d72]">
              <CheckCircle2 className="h-4 w-4" />
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7b877f]">
                Skills demonstrated
              </p>
            </div>
            <ul className="mt-4 space-y-3">
              {project.skillsShown.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-7 text-[#33463b]">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#1f9d72]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7b877f]">
              Why this supports my profile
            </p>
            <ul className="mt-4 space-y-3">
              {project.supportValue.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-7 text-[#33463b]">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#1f9d72]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
