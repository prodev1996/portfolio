import Link from "next/link";
import { ArrowDown } from "lucide-react";
import PortraitCard from "@/components/PortraitCard";
export default function Hero() {
  return (
    <section id="home" className="hero section-shell">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="hero-intro hero-enter">
            Application support, business systems &amp; data.
          </p>
          <h1>
            <span className="hero-line">
              <span>Curious mind.</span>
            </span>
            <span className="hero-line">
              <span>
                Practical builder<span className="hero-period">.</span>
              </span>
            </span>
          </h1>
          <div className="hero-bottom hero-enter">
            <p>
              I’m Rajiv, an Adelaide-based application support professional. I
              troubleshoot business systems, validate data with SQL, and build
              practical software when the work calls for it.
            </p>
            <div className="hero-actions">
              <Link className="round-link" href="#projects">
                <span>Explore my work</span>
                <span className="round-link-icon">
                  <ArrowDown size={22} strokeWidth={1.6} aria-hidden="true" />
                </span>
              </Link>
              <Link className="text-link" href="/resume">
                View my résumé
              </Link>
            </div>
          </div>
        </div>
        <PortraitCard />
      </div>
    </section>
  );
}
