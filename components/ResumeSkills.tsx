const skillBlocks = [
  {
    title: "IT Support & Troubleshooting",
    items: [
      "Level 1/2 support",
      "Incident handling",
      "User assistance",
      "Remote support",
      "Troubleshooting",
      "Knowledge articles",
    ],
  },
  {
    title: "Windows, Microsoft 365 & Identity",
    items: [
      "Windows 10/11",
      "Windows Server",
      "Exchange Online",
      "Outlook",
      "Teams",
      "SharePoint administration",
      "Active Directory",
      "Azure AD",
      "Basic Intune / Endpoint Manager",
    ],
  },
  {
    title: "Networking & Device Support",
    items: [
      "TCP/IP",
      "LAN / WAN basics",
      "DNS / DHCP",
      "VPN support",
      "Printer and network issues",
      "Device setup",
      "Software installation",
      "Updates and issue diagnosis",
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
    ],
  },
  {
    title: "Documentation & Communication",
    items: [
      "Ticket management",
      "Clear end-user explanations",
      "Process documentation",
      "Workflow support",
    ],
  },
];

export default function ResumeSkills() {
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
