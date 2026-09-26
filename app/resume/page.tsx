import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Download } from "lucide-react";
import { experience } from "@/data/experience";
import { education } from "@/data/education";
import { certifications } from "@/data/certifications";
import { siteConfig } from "@/data/site";
import { projects } from "@/data/projects";
import { projectPresentation } from "@/data/project-presentation";

export const metadata: Metadata = {
  title: "Résumé",
  description:
    "Rajiv Bhandari’s experience in application support, data analysis, and software development.",
  alternates: { canonical: "/resume" },
};
const cleanDate = (date: string) => date.replace(/[–—]/g, "-");
export default function ResumePage() {
  return (
    <article className="resume-page section-shell">
      <Link className="back-link" href="/">
        <ArrowLeft size={17} aria-hidden="true" /> Back to portfolio
      </Link>
      <header className="resume-heading">
        <div>
          <p className="eyebrow">Résumé</p>
          <h1>
            Rajiv Bhandari<span className="accent-punctuation">.</span>
          </h1>
          <p>
            Application support, data &amp; software
            <br />
            Adelaide, South Australia
          </p>
        </div>
        <a href={siteConfig.resumePdfUrl} className="btn-primary" download>
          Download PDF <Download size={17} aria-hidden="true" />
        </a>
      </header>
      <div className="resume-content">
        <div>
          <section>
            <h2>Experience</h2>
            {experience.map((entry) => (
              <article className="resume-entry" key={entry.company}>
                <p className="resume-meta">
                  {cleanDate(entry.period)} / {entry.location}
                </p>
                <h3>{entry.role}</h3>
                <p>{entry.company}</p>
                <ul>
                  {entry.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </section>
          <section>
            <h2>Selected work</h2>
            {projects
              .filter((p) =>
                [
                  "glide-education",
                  "sql-retail-analytics",
                  "fixorahub",
                ].includes(p.slug),
              )
              .map((project) => (
                <article className="resume-entry" key={project.slug}>
                  <Link
                    href={"/projects/" + project.slug}
                    className="text-link"
                  >
                    {projectPresentation[project.slug].title}
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </Link>
                  <p>{projectPresentation[project.slug].description}</p>
                </article>
              ))}
          </section>
        </div>
        <aside>
          <section>
            <h2>Technical skills</h2>
            <div className="resume-entry">
              <h3>Applications &amp; support</h3>
              <p>
                Microsoft 365, SharePoint, Teams, Active Directory, system
                access, troubleshooting, release management, UAT, documentation
              </p>
            </div>
            <div className="resume-entry">
              <h3>Data &amp; analysis</h3>
              <p>
                SQL, MySQL, PostgreSQL, T-SQL, Python, Pandas, Streamlit, data
                validation
              </p>
            </div>
            <div className="resume-entry">
              <h3>Software development</h3>
              <p>React, Next.js, TypeScript, Node.js, Django, REST APIs, Git</p>
            </div>
          </section>
          <section>
            <h2>Education</h2>
            {education.map((entry) => (
              <div className="resume-entry" key={entry.school}>
                <p className="resume-meta">
                  {cleanDate(entry.period)}
                  {entry.current ? " / In progress" : ""}
                </p>
                <h3>{entry.credential}</h3>
                <p>{entry.school}</p>
              </div>
            ))}
          </section>
          <section>
            <h2>Certifications</h2>
            {certifications.map((entry) => (
              <div className="resume-entry" key={entry.name}>
                <h3>{entry.name}</h3>
                <p>
                  {entry.issuer} / {entry.issued}
                </p>
              </div>
            ))}
          </section>
        </aside>
      </div>
      <footer className="resume-contact">
        <a href={"mailto:" + siteConfig.email}>{siteConfig.email}</a>
        <a href={siteConfig.linkedinUrl} target="_blank" rel="noreferrer">
          LinkedIn ↗
        </a>
        <a href={siteConfig.githubUrl} target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
      </footer>
    </article>
  );
}
