import Link from "next/link";
import { ArrowDown } from "lucide-react";
import PortraitCard from "@/components/PortraitCard";
export default function Hero() {
  return (
    <section id="home" className="hero section-shell">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="hero-intro hero-enter">
            Software, data &amp; a human touch.
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
              I’m Rajiv. I build websites, untangle business systems, and turn
              data into something useful.
            </p>
            <Link className="round-link" href="#projects">
              <span>Explore my work</span>
              <span className="round-link-icon">
                <ArrowDown size={22} strokeWidth={1.6} aria-hidden="true" />
              </span>
            </Link>
          </div>
        </div>
        <PortraitCard />
      </div>
    </section>
  );
}
