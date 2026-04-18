const skillBlocks = [
  {
    title: "Application Support & Troubleshooting",
    items: [
      "Application support",
      "Incident handling",
      "User assistance",
      "Remote support",
      "Troubleshooting",
      "Issue diagnosis & resolution",
      "Knowledge articles",
    ],
  },
  {
    title: "Business Systems & Operations",
    items: [
      "Windows 10/11",
      "Windows Server",
      "System maintenance",
      "System configuration",
      "Workflow support",
    ],
  },
  {
    title: "Microsoft 365 & Identity",
    items: [
      "Microsoft 365 configuration",
      "Exchange Online",
      "Outlook",
      "Teams",
      "SharePoint administration",
      "Document libraries",
      "Workflow support",
      "Active Directory",
      "Azure AD",
      "Access management",
      "Basic Intune / Endpoint Manager",
    ],
  },
  {
    title: "Reporting, Analysis & Improvement",
    items: [
      "Excel reporting",
      "SQL fundamentals",
      "Structured data handling",
      "Process documentation",
      "Continuous improvement",
    ],
  },
  {
    title: "Web Development & Delivery",
    items: [
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "MySQL",
      "HTML/CSS",
      "REST APIs",
      "Responsive UI",
      "Deployment support",
    ],
  },
  {
    title: "Documentation & Communication",
    items: [
      "Ticket management",
      "Process documentation",
      "Workflow support",
      "Clear end-user explanations",
      "Stakeholder communication",
    ],
  },
];

export default function ResumeSkillsDetailed() {
  return (
    <section className="card rounded-[32px]">
      <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f0abfc]">
        Core Skills
      </h2>

      <div className="mt-5 space-y-5">
        {skillBlocks.map((block) => (
          <div key={block.title}>
            <h3 className="text-sm font-semibold text-white">
              {block.title}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {block.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.055] px-3 py-1.5 text-xs text-[#d8d1e6]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
