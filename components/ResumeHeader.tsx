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
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#f0abfc]">
            Resume Overview
          </p>

          <h1 className="mt-3 text-3xl font-black tracking-[-0.05em] text-white sm:text-4xl">
            Rajiv Bhandari
          </h1>

          <p className="mt-3 text-lg text-[#d8d1e6]">
            Application Support Analyst • Data Analytics (SQL, Power BI)
          </p>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-[#bdb5cc] sm:text-[15px]">
            Technical professional with experience supporting Microsoft 365,
            business applications, access changes, workflow issues, and clear
            documentation. I also bring web delivery experience from live client
            projects, with a practical approach to support, reporting, and
            continuous improvement.
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

        <div className="soft-panel rounded-[28px] p-5 text-sm text-[#d8d1e6]">
          <div className="space-y-3">
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-[#f0abfc]" />
              <span>bhandarirajiv25@gmail.com</span>
            </p>

            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#f0abfc]" />
              <span>+61 413 230 855</span>
            </p>

            <p className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-[#f0abfc]" />
              <span>Adelaide, South Australia</span>
            </p>

            <p className="flex items-center gap-3">
              <FaLinkedin className="text-[#f0abfc]" />
              <a
                href="https://www.linkedin.com/in/rajiv-bhandari25/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                linkedin.com/in/rajiv-bhandari25
              </a>
            </p>

            <p className="flex items-center gap-3">
              <FaGlobe className="text-[#f0abfc]" />
              <a
                href="https://www.rajivbhandari.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                rajivbhandari.com
              </a>
            </p>
          </div>

          <a
            href="/Rajiv_Bhandari_Resume.pdf"
            className="btn-primary mt-5"
          >
            View Resume PDF
          </a>
        </div>
      </div>
    </section>
  );
}
