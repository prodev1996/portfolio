"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Globe } from "lucide-react";

const projects = [
  {
    title: "Glide Education",
    overview:
      "A consultancy website designed to feel more credible, more modern, and easier for visitors to understand quickly.",
    image: "/projects/glide.png",
    accentImage: "/projects/glide-services.png",
    liveUrl: "https://www.glideedu.com.au/",
    liveLabel: "glideedu.com.au",
    stack: ["React", "Next.js", "Tailwind CSS", "MySQL"],
    skillsShown: [
      "Modern responsive UI design",
      "Content hierarchy and service presentation",
      "Front-end implementation with reusable structure",
      "Client-facing visual polish and trust-building",
    ],
    takeaway:
      "This project is a strong example of front-end presentation, layout thinking, and building a user experience that looks professional enough for real business use.",
  },
  {
    title: "Prime Roof Care",
    overview:
      "A service-business website focused on fast comprehension, local-business trust, and clear conversion paths for potential customers.",
    image: "/projects/primeroof.png",
    accentImage: "/projects/prime-gallery.png",
    liveUrl: "https://www.primeroofcare.com.au/",
    liveLabel: "primeroofcare.com.au",
    stack: ["HTML", "CSS", "Tailwind CSS", "Responsive Design"],
    skillsShown: [
      "Business-focused web page structure",
      "Responsive implementation across screen sizes",
      "Lead-generation aware layout decisions",
      "Clean visual execution for a service brand",
    ],
    takeaway:
      "This shows that I can create practical, polished websites that help real businesses present themselves professionally and guide visitors toward action.",
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
            Featured Development Work
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#1d2d25] sm:text-4xl">
            Web development projects that already prove delivery, polish, and real client value
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#5e6f65] sm:text-[15px]">
            Since my analytics portfolio is still being built, this section leads
            with the work that is ready today: web projects that demonstrate
            design sense, implementation skill, responsiveness, and practical
            thinking for real business needs.
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
              <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                    aria-label={`Open ${project.title}`}
                    whileHover={{ scale: 1.01 }}
                  >
                    <div className="relative overflow-hidden rounded-[28px] border border-[#e7e6df] bg-[#f8f3eb] p-3 shadow-[0_16px_40px_rgba(118,103,79,0.08)] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_26px_50px_rgba(118,103,79,0.14)]">
                      <div className="absolute left-5 top-5 z-10 inline-flex items-center gap-2 rounded-full bg-white/92 px-3 py-1.5 text-xs font-medium text-[#274135] shadow-[0_10px_20px_rgba(118,103,79,0.1)]">
                        <Globe className="h-3.5 w-3.5 text-[#1f9d72]" />
                        <span>Open Live Site</span>
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
                        className="absolute bottom-5 right-5 hidden w-44 overflow-hidden rounded-[18px] border border-white bg-white shadow-[0_18px_34px_rgba(118,103,79,0.14)] md:block"
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
                  </motion.a>
                </div>

                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d7854f]">
                    Case Study 0{index + 1}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-[#1d2d25] sm:text-3xl">
                    {project.title}
                  </h3>
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

                  <div className="mt-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7b877f]">
                      Skills demonstrated
                    </p>
                    <ul className="mt-3 space-y-3">
                      {project.skillsShown.map((item, itemIndex) => (
                        <motion.li
                          key={item}
                          className="flex gap-3 text-sm leading-7 text-[#33463b]"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: itemIndex * 0.05 }}
                        >
                          <span className="mt-2 h-2 w-2 rounded-full bg-[#1f9d72]" />
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <motion.div
                    className="mt-6 rounded-[24px] bg-[#fffdf9] px-5 py-5"
                    whileHover={{ y: -3 }}
                  >
                    <p className="text-sm leading-7 text-[#32463a]">{project.takeaway}</p>
                  </motion.div>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Visit Live Project
                      <motion.span whileHover={{ x: 3 }} transition={{ duration: 0.18 }}>
                        <ArrowUpRight className="h-4 w-4" />
                      </motion.span>
                    </motion.a>
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline"
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Globe className="h-4 w-4" />
                      {project.liveLabel}
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


