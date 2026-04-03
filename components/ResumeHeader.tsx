import Link from "next/link";
import {
  FaEnvelope,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaGlobe,
} from "react-icons/fa";

export default function ResumeHeader() {
  return (
    <section className="card rounded-[32px]">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#1f9d72]">
            Resume Overview
          </p>

          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[#1d2d25] sm:text-4xl">
            Rajiv Bhandari
          </h1>

          <p className="mt-3 text-lg text-[#405247]">
            IT Application Support Analyst • Microsoft 365 • Business Systems
          </p>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-[#5e6f65] sm:text-[15px]">
            IT Application Support professional with experience supporting
            Microsoft 365 and enterprise business applications across Windows
            environments. Skilled in SharePoint administration, user access
            management, troubleshooting application issues, workflow support,
            and collaborating with users to improve operational processes.
            Holds a Master of Information Technology and brings a strong
            continuous-improvement mindset to reliable business system support.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/" className="btn-outline">
              Back to Home
            </Link>

            <Link href="/#projects" className="btn-outline">
              View Projects
            </Link>

            <Link href="/#contact" className="btn-primary">
              Contact Me
            </Link>
          </div>
        </div>

        <div className="soft-panel rounded-[28px] p-5 text-sm text-[#405247]">
          <div className="space-y-3">
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-[#1f9d72]" />
              <span>bhandarirajiv25@gmail.com</span>
            </p>

            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#1f9d72]" />
              <span>+61 413 230 855</span>
            </p>

            <p className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-[#1f9d72]" />
              <span>Adelaide, South Australia</span>
            </p>

            <p className="flex items-center gap-3">
              <FaLinkedin className="text-[#1f9d72]" />
              <a
                href="https://www.linkedin.com/in/rajiv-bhandari25/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-[#1d2d25]"
              >
                linkedin.com/in/rajiv-bhandari25
              </a>
            </p>

            <p className="flex items-center gap-3">
              <FaGlobe className="text-[#1f9d72]" />
              <a
                href="https://www.rajivbhandari.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-[#1d2d25]"
              >
                rajivbhandari.com
              </a>
            </p>
          </div>

          <a
            href="/Rajiv_Bhandari_Resume.pdf"
            className="btn-primary mt-5"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
