const skillBlocks = [
  {
    title: "IT Support & Troubleshooting",
    items: [
      "Level 1/2 support",
      "Incident handling",
      "User assistance",
      "Remote support",
      "Troubleshooting",
      "Issue diagnosis & resolution",
      "Knowledge articles",
    ],
  },
  {
    title: "Windows & IT Systems",
    items: [
      "Windows 10/11",
      "Windows Server",
      "System maintenance",
      "System configuration",
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
      "Basic Intune / Endpoint Manager",
    ],
  },
  {
    title: "Networking Fundamentals",
    items: [
      "TCP/IP",
      "LAN / WAN basics",
      "DNS / DHCP",
      "VPN support",
      "Network troubleshooting",
    ],
  },
  {
    title: "Hardware & Software Support",
    items: [
      "Device setup",
      "Software installation",
      "Updates",
      "Printer and network issues",
      "Issue diagnosis & resolution",
    ],
  },
  {
    title: "Programming & Web Development",
    items: [
      "JavaScript",
      "React",
      "Node.js",
      "MySQL",
      "HTML/CSS",
      "REST APIs",
      "Responsive UI",
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
      <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1f9d72]">
        Core Skills
      </h2>

      <div className="mt-5 space-y-5">
        {skillBlocks.map((block) => (
          <div key={block.title}>
            <h3 className="text-sm font-semibold text-[#1d2d25]">
              {block.title}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {block.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#dde5dd] bg-white px-3 py-1.5 text-xs text-[#415449]"
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
