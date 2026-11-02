import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Hero from "@/components/sections/Hero";
import SelectedWork from "@/components/SelectedWork";
import { Reveal } from "@/components/PortfolioMotion";
import ContactSection from "@/components/ContactSection";
import WritingPreview from "@/components/writing/WritingPreview";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";
export default function Home() {
  return (
    <>
      <Hero />
      <section className="proof-strip section-shell" aria-label="Core strengths">
        <div>
          <span>01 / Application support</span>
          <strong>Own the issue through release.</strong>
          <p>UAT, access, workflows, defects, and clear documentation.</p>
        </div>
        <div>
          <span>02 / Data confidence</span>
          <strong>Use SQL to find what is true.</strong>
          <p>Validation, analysis, reporting, and tested data pipelines.</p>
        </div>
        <div>
          <span>03 / Practical delivery</span>
          <strong>Build, launch, and stay involved.</strong>
          <p>Two live client sites plus full-stack and dashboard builds.</p>
        </div>
      </section>
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
              I’m an application support and business systems professional in
              Adelaide. I like figuring out how things work, why they break,
              and how to make them easier for people to use.
            </p>
            <p>
              My strongest fit is application support, with SQL and data as a
              differentiator. Software and web delivery show that I can follow
              a problem all the way from diagnosis to a working solution.
            </p>
            <Link href="/resume" className="text-link">
              The full résumé <ArrowUpRight size={19} aria-hidden="true" />
            </Link>
          </Reveal>
          <Reveal className="about-details" delay={0.1}>
            <div id="skills" className="expertise-group">
              <h3>What I bring</h3>
              <div className="expertise-row">
                <span>Support</span>
                <p>Business systems, Microsoft 365, UAT, releases</p>
              </div>
              <div className="expertise-row">
                <span>Analyse</span>
                <p>SQL, PostgreSQL, Python, data validation</p>
              </div>
              <div className="expertise-row">
                <span>Build</span>
                <p>React, Next.js, TypeScript, Django</p>
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
                Australia, backed by production support, QA, and data-quality
                experience.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
      <WritingPreview />
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
          <Link href="/privacy">Privacy</Link>
        </div>
      </footer>
    </>
  );
}
