export default function ResumeProjects() {
  const projects = [
    {
      title: "Image Steggy (Image Steganography Tool)",
      meta: "Torrens University Australia, Adelaide • 2023 - 2024",
      bullets: [
        "Built a web-based tool to hide secret text inside images using steganography concepts.",
        "Used HTML, CSS, JavaScript, and Git-based version control during development.",
        "Developed encoding and decoding functions, tested with sample images, and documented results.",
      ],
    },
    {
      title: "Glide Education – Consultancy and Visa Services Platform",
      meta: "Technologies: React, Next.js, MySQL, Node.js, Tailwind, Vercel",
      bullets: [
        "Solely developed and deployed a production website with responsive UI and service pages.",
        "Built secure enquiry and contact forms with validation and email notifications.",
        "Managed hosting setup including domain, DNS, SSL, and deployment updates for stability.",
      ],
    },
    {
      title: "Prime Roof Care – Service Management Website",
      meta: "Technologies: HTML, CSS, Tailwind",
      bullets: [
        "Built a mobile-friendly service website to support customer enquiries and lead generation.",
        "Designed responsive pages using HTML, CSS, and Tailwind for smooth performance.",
        "Managed basic hosting updates and content changes after deployment.",
      ],
    },
  ];

  return (
    <section className="card rounded-[32px]">
      <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1f9d72]">
        Projects
      </h2>

      <div className="mt-5 space-y-5">
        {projects.map((project) => (
          <div key={project.title}>
            <h3 className="text-base font-semibold text-[#1d2d25]">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-[#5e6f65]">{project.meta}</p>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-[#4e6056]">
              {project.bullets.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-[9px] h-1.5 w-1.5 rounded-full bg-[#1f9d72]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
