"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projectPresentation } from "@/data/project-presentation";
const featured = [
  "glide-education",
  "sql-retail-analytics",
  "prime-roof-care",
  "fixorahub",
];
const filters = ["All work", "Websites", "Data", "Software"] as const;
type ProjectSummary = { slug: string; title: string; image: string };
export default function SelectedWork({
  projects,
}: {
  projects: ProjectSummary[];
}) {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All work");
  const visible = featured.flatMap((slug) => {
    const project = projects.find((p) => p.slug === slug);
    return project &&
      (filter === "All work" || projectPresentation[slug].category === filter)
      ? [project]
      : [];
  });
  const additional = projects.filter(
    (p) =>
      !featured.includes(p.slug) &&
      (filter === "All work" ||
        projectPresentation[p.slug].category === filter),
  );
  const displayed =
    filter === "All work" ? visible : [...visible, ...additional];
  return (
    <>
      <div className="work-header">
        <div className="work-heading">
          <h2>
            Selected work<span className="accent-punctuation">.</span>
          </h2>
          <p>Websites, software, and a closer look at the data.</p>
        </div>
        <div className="work-filters" role="group" aria-label="Filter projects">
          {filters.map((name) => (
            <button
              key={name}
              type="button"
              aria-pressed={filter === name}
              onClick={() => setFilter(name)}
            >
              {name}
              <span aria-hidden="true">
                {name === "All work"
                  ? projects.length
                  : projects.filter(
                      (p) => projectPresentation[p.slug].category === name,
                    ).length}
              </span>
            </button>
          ))}
        </div>
      </div>
      <p className="sr-only" role="status">
        {visible.length + additional.length} projects shown
        {filter !== "All work" ? " in " + filter : ""}.
      </p>
      <div className="project-grid" key={filter}>
        {displayed.map((project) => {
          const presentation = projectPresentation[project.slug];
          return (
            <article key={project.slug} className="project-card work-enter">
              <Link
                href={"/projects/" + project.slug}
                className="project-link"
                aria-label={"View " + presentation.title + " project"}
              >
                <div className={"project-art " + presentation.className}>
                  <div className="project-image-wrap">
                    <Image
                      src={project.image}
                      alt={
                        project.slug === "sql-retail-analytics"
                          ? "SQL analysis showing rolling revenue by Australian state on synthetic data"
                          : project.slug === "enterprise-compliance-platform"
                            ? "Illustration of an enterprise compliance workflow"
                            : project.slug === "sales-dashboard"
                              ? "Sales dashboard exploring synthetic retail and B2B transactions"
                              : project.title + " website preview"
                      }
                      fill
                      sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1550px) 44vw, 680px"
                      className="project-image"
                    />
                  </div>
                </div>
                <div className="project-copy">
                  <span className="project-kind">{presentation.kind}</span>
                  <div className="project-title">
                    <h3>{presentation.title}</h3>
                    <ArrowUpRight
                      size={25}
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </div>
                  <p>{presentation.description}</p>
                </div>
              </Link>
            </article>
          );
        })}
      </div>
      {filter === "All work" && additional.length > 0 && (
        <div className="additional-work">
          <p>Also worth a look</p>
          {additional.map((project) => (
            <Link key={project.slug} href={"/projects/" + project.slug}>
              <span>{projectPresentation[project.slug].title}</span>
              <span className="additional-kind">
                {projectPresentation[project.slug].kind}
              </span>
              <ArrowUpRight size={23} aria-hidden="true" />
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
