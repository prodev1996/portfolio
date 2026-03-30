const education = [
  {
    qualification: "Professional Year Program (Information Technology)",
    institution: "Performance Education, Adelaide, South Australia",
    period: "Ongoing",
  },
  {
    qualification: "Master of Information Technology",
    institution: "Torrens University, Adelaide, South Australia",
    period: "Graduated: 2024",
  },
  {
    qualification: "Bachelor of Computer Science and Information Technology",
    institution: "Tribhuvan University, Kathmandu, Nepal",
    period: "Graduated: 2019",
  },
];

const certifications = [
  "Google IT Support",
  "Zendesk Customer Service",
  "Cyber Security Foundation",
  "South Australian Driving License",
  "Working With Children Check",
  "NDIS Worker Screening",
];

const attributes = [
  "Strong communication and customer support skills",
  "Excellent troubleshooting and problem-solving ability",
  "Reliable, adaptable, and detail-focused with a continuous learning mindset",
  "Team-oriented with a professional attitude and ability to work effectively under pressure",
];

export default function ResumeEducation() {
  return (
    <section className="card rounded-[32px]">
      <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1f9d72]">
        Education
      </h2>

      <div className="mt-5 space-y-5">
        {education.map((item) => (
          <div key={item.qualification}>
            <h3 className="text-base font-semibold text-[#1d2d25]">
              {item.qualification}
            </h3>
            <p className="mt-1 text-sm text-[#5e6f65]">{item.institution}</p>
            <p className="mt-1 text-xs text-[#d7854f]">{item.period}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 border-t border-[#e1e6df] pt-6">
        <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1f9d72]">
          Certifications & Licences
        </h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {certifications.map((item) => (
            <span
              key={item}
              className="rounded-full border border-[#dde5dd] bg-white px-3 py-1.5 text-xs text-[#415449]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-8 border-t border-[#e1e6df] pt-6">
        <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1f9d72]">
          Personal Attributes
        </h2>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-[#4e6056]">
          {attributes.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-[9px] h-1.5 w-1.5 rounded-full bg-[#1f9d72]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
