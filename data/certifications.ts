export type CertificationEntry = {
  name: string;
  issuer: string;
  issued: string;
};

export const certifications: CertificationEntry[] = [
  {
    name: "Zendesk Customer Service Professional Certificate",
    issuer: "LinkedIn",
    issued: "Sep 2024",
  },
  {
    name: "Google IT Support Specialization",
    issuer: "Coursera",
    issued: "Nov 2020",
  },
  {
    name: "Crash Course on Python",
    issuer: "Coursera",
    issued: "Sep 2020",
  },
  {
    name: "Cyber Security Foundation",
    issuer: "Certiprof",
    issued: "Dec 2020",
  },
];
