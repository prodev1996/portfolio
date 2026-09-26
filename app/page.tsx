import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Hero from "@/components/sections/Hero";
import SelectedWork from "@/components/SelectedWork";
import { Reveal } from "@/components/PortfolioMotion";
import ContactSection from "@/components/ContactSection";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";
export default function Home() {
  return (
    <>
      <Hero />
      <section id="projects" className="work-section section-shell">
        <SelectedWork
          projects={projects.map(({ slug, image, title }) => ({
            slug,
            image,
            title,
          }))}
        />
      </section>
      <section id="about" className="about-section section-shell">
        <Reveal className="about-title">
          <h2>
            A person behind
            <br />
            the pixels<span className="accent-punctuation">.</span>
          </h2>
        </Reveal>
        <div className="about-grid">
          <Reveal className="about-intro">
            <h3>Hi again, I’m Rajiv.</h3>
            <p>
              I’m a developer and application support professional in Adelaide.
              I like figuring out how things work, why they break, and how to
              make them easier for people to use.
            </p>
            <p>
              My work moves between websites, business applications, and SQL. I
              stay involved after launch, too.
            </p>
            <Link href="/resume" className="text-link">
              The full résumé <ArrowUpRight size={19} aria-hidden="true" />
            </Link>
          </Reveal>
          <Reveal className="about-details" delay={0.1}>
            <div id="skills" className="expertise-group">
              <h3>What I bring</h3>
              <div className="expertise-row">
                <span>Build</span>
                <p>React, Next.js, TypeScript, Django</p>
              </div>
              <div className="expertise-row">
                <span>Understand</span>
                <p>SQL, PostgreSQL, Python, data validation</p>
              </div>
              <div className="expertise-row">
                <span>Support</span>
                <p>Business systems, Microsoft 365, UAT, releases</p>
              </div>
            </div>
            <div id="experience" className="background-note">
              <h3>Recently</h3>
              <p>
                Enterprise compliance systems at SpaceTel IT, alongside
                independent website and application support work.
              </p>
            </div>
            <div id="credentials" className="background-note">
              <h3>Foundations</h3>
              <p>
                Master of Information Technology (Advanced), Torrens University
                Australia. Now building toward data engineering.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
      <ContactSection />
      <footer className="site-footer section-shell">
        <Link href="/#home" className="footer-name">
          Rajiv Bhandari<span aria-hidden="true">↗</span>
        </Link>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Rajiv Bhandari</span>
          <span>Adelaide, Australia</span>
          <a href={siteConfig.githubUrl} target="_blank" rel="noreferrer">
            GitHub <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          <a href={siteConfig.linkedinUrl} target="_blank" rel="noreferrer">
            LinkedIn <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
      </footer>
    </>
  );
}
