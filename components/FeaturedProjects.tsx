"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Globe, Wrench } from "lucide-react";

const projects = [
  {
    slug: "glide-education",
    title: "Glide Education",
    subtitle: "Consultancy and visa services platform",
    overview:
      "A consultancy website designed to feel more credible, easier to navigate, and more trustworthy for prospective students and clients.",
    image: "/projects/glide.png",
    accentImage: "/projects/glide-services.png",
    liveUrl: "https://www.glideedu.com.au/",
    liveLabel: "glideedu.com.au",
    stack: ["React", "Next.js", "Tailwind CSS", "MySQL"],
    role: "End-to-end website build and deployment",
    trustSignals: [
      "Live production site",
      "Client-facing service business",
      "Hosting and deployment managed",
    ],
    proofPoints: [
      "Planned the structure around trust, service clarity, and enquiry flow.",
      "Built the front-end experience with reusable sections and responsive layouts.",
      "Handled deployment setup, domain connection, and production updates.",
    ],
    skillsShown: [
      "Modern responsive UI design",
      "Content hierarchy for service-heavy businesses",
      "Front-end implementation with reusable structure",
      "Trust-building presentation for a real client brand",
    ],
    takeaway:
      "This project shows that I can translate business requirements into a polished website that feels credible, usable, and ready for real visitors.",
  },
  {
    slug: "prime-roof-care",
    title: "Prime Roof Care",
    subtitle: "Service business website for enquiries and trust",
    overview:
      "A service-business website focused on fast comprehension, local-business trust, and clear enquiry paths for potential customers.",
    image: "/projects/primeroof.png",
    accentImage: "/projects/prime-gallery.png",
    liveUrl: "https://www.primeroofcare.com.au/",
    liveLabel: "primeroofcare.com.au",
    stack: ["HTML", "CSS", "Tailwind CSS", "Responsive Design"],
    role: "Website build, launch support, and ongoing updates",
    trustSignals: [
      "Live production site",
      "Local service brand",
      "Content and hosting updates handled",
    ],
    proofPoints: [
      "Structured the site so visitors understand services quickly on mobile and desktop.",
      "Designed the pages around enquiries, trust, and practical business needs.",
      "Supported post-launch updates to keep the website current and usable.",
    ],
    skillsShown: [
      "Business-focused web page structure",
      "Responsive implementation across screen sizes",
      "Conversion-aware layout decisions",
      "Clean visual execution for a local service brand",
    ],
    takeaway:
      "This shows I can build practical websites that support real businesses, present services clearly, and help visitors move toward action.",
  },
];

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="section-shell mt-20 scroll-mt-52 px-6 py-16 sm:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#1f9d72]">
            Featured Client Work
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#1d2d25] sm:text-4xl">
            Live projects that prove delivery, polish, and business value
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#5e6f65] sm:text-[15px]">
            These projects are here because they show practical delivery, not
            just design taste. They demonstrate how I help real businesses
            present themselves clearly, improve trust, and launch work that is
            ready for production use.
          </p>
        </motion.div>

        <div className="mt-12 space-y-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className="card overflow-hidden"
            >
              <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <motion.div whileHover={{ scale: 1.01 }}>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="group block"
                      aria-label={`View details for ${project.title}`}
                    >
                    <div className="relative overflow-hidden rounded-[28px] border border-[#e7e6df] bg-[#f8f3eb] p-3 shadow-[0_16px_40px_rgba(118,103,79,0.08)] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_26px_50px_rgba(118,103,79,0.14)]">
                      <div className="absolute left-5 top-5 z-10 inline-flex items-center gap-2 rounded-full bg-white/92 px-3 py-1.5 text-xs font-medium text-[#274135] shadow-[0_10px_20px_rgba(118,103,79,0.1)]">
                        <Globe className="h-3.5 w-3.5 text-[#1f9d72]" />
                        <span>View Project Details</span>
                      </div>
                      <motion.div
                        className="absolute right-5 top-5 z-10 hidden rounded-full bg-[#1f9d72] p-2 text-white shadow-[0_10px_20px_rgba(31,157,114,0.2)] sm:block"
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </motion.div>
                      <div className="relative overflow-hidden rounded-[22px] border border-white bg-white">
                        <div className="relative aspect-[16/10]">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                          />
                        </div>
                      </div>
                      <motion.div
                        className="absolute bottom-5 right-5 hidden w-36 overflow-hidden rounded-[18px] border border-white bg-white shadow-[0_18px_34px_rgba(118,103,79,0.14)] lg:block"
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut", delay: index * 0.35 }}
                      >
                        <div className="relative aspect-[4/3]">
                          <Image
                            src={project.accentImage}
                            alt={`${project.title} detail`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </motion.div>
                    </div>
                    </Link>
                  </motion.div>
                </div>

                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h3 className="mt-3 text-2xl font-semibold text-[#1d2d25] sm:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-[#718278]">{project.subtitle}</p>
                  <p className="mt-4 text-sm leading-7 text-[#5e6f65] sm:text-[15px]">
                    {project.overview}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((item, itemIndex) => (
                      <motion.span
                        key={item}
                        className="badge"
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: itemIndex * 0.04 }}
                        whileHover={{ y: -2, scale: 1.03 }}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>

                  <div className="mt-5 rounded-[24px] border border-[#e3e8e1] bg-white/72 px-5 py-4">
                    <div className="flex items-center gap-2 text-[#d7854f]">
                      <Wrench className="h-4 w-4" />
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7b877f]">
                        What I handled
                      </p>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-[#32463a]">
                      {project.role}
                    </p>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.trustSignals.map((item, itemIndex) => (
                      <motion.span
                        key={item}
                        className="badge"
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: itemIndex * 0.04 }}
                        whileHover={{ y: -2, scale: 1.03 }}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <Link href={`/projects/${project.slug}`} className="btn-primary">
                      View Details
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline"
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Visit Live Project
                      <motion.span whileHover={{ x: 3 }} transition={{ duration: 0.18 }}>
                        <ArrowUpRight className="h-4 w-4" />
                      </motion.span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}


