import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getProjectBySlug, projects } from "@/data/projects";
import { projectPresentation } from "@/data/project-presentation";
import { Reveal } from "@/components/PortfolioMotion";

type ProjectPageProps = { params: Promise<{ slug: string }> };
export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}
export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  return project
    ? {
        title: project.title,
        description: project.overview,
        alternates: { canonical: "/projects/" + slug },
        openGraph: {
          title: project.title,
          description: project.overview,
          url: "/projects/" + slug,
          images: [{ url: project.image, alt: project.title }],
        },
      }
    : { title: "Project not found" };
}
export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  const presentation = projectPresentation[slug];
  const nextProject =
    projects[
      (projects.findIndex((p) => p.slug === slug) + 1) % projects.length
    ];
  const externalUrl = project.liveUrl || project.githubUrl;
  return (
    <article className="case-page section-shell">
      <Link href="/#projects" className="back-link">
        <ArrowLeft size={17} aria-hidden="true" /> All work
      </Link>
      <Reveal className="case-heading">
        <p className="eyebrow">{presentation.kind}</p>
        <h1>
          {presentation.title}
          <span className="accent-punctuation">.</span>
        </h1>
        <p>{presentation.description}</p>
      </Reveal>
      <dl className="case-facts">
        <div>
          <dt>My role</dt>
          <dd>{project.role}</dd>
        </div>
        <div>
          <dt>Built with</dt>
          <dd>{project.stack.join(", ")}</dd>
        </div>
        <div>
          <dt>{externalUrl ? "Take a look" : "Project access"}</dt>
          <dd>
            {externalUrl ? (
              <a
                href={externalUrl}
                target="_blank"
                rel="noreferrer"
                className="text-link"
              >
                {project.liveUrl ? "Visit website" : "View source"}
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            ) : (
              "Confidential internal platform"
            )}
          </dd>
        </div>
      </dl>
      <div className="case-image">
        <Image
          src={project.image}
          alt={
            project.slug === "enterprise-compliance-platform"
              ? "Illustration of the enterprise compliance workflow, not a product screenshot"
              : project.title + " project preview"
          }
          fill
          priority
          sizes="(max-width: 767px) 90vw, 1200px"
        />
      </div>
      <section className="case-story">
        <h2>The challenge</h2>
        <p>{project.challenge}</p>
      </section>
      <section className="case-story">
        <h2>What I did</h2>
        <div>
          <p>{project.solution}</p>
          <ul>
            {project.proofPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className="case-story">
        <h2>The result</h2>
        <p>{project.measurableOutcome}</p>
      </section>
      {project.images
        .filter((image) => image.src !== project.image)
        .map((image) => (
          <div className="case-image" key={image.src}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 767px) 90vw, 1200px"
            />
          </div>
        ))}
      <Link href={"/projects/" + nextProject.slug} className="case-next">
        <div>
          <p>Next project</p>
          <h2>{projectPresentation[nextProject.slug].title}</h2>
        </div>
        <ArrowUpRight size={48} strokeWidth={1.2} aria-hidden="true" />
      </Link>
    </article>
  );
}
