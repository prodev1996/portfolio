export type EducationEntry = {
  school: string;
  credential: string;
  period: string;
  current: boolean;
};

export const education: EducationEntry[] = [
  {
    school: "Performance Education",
    credential: "Professional Year Program, Information Technology",
    period: "2025 – 2026",
    current: true,
  },
  {
    school: "Torrens University Australia",
    credential: "Master of Information Technology (Advanced)",
    period: "2022 – 2024",
    current: false,
  },
  {
    school: "Tribhuvan University",
    credential: "Bachelor of Computer Science and Information Technology",
    period: "2015 – 2019",
    current: false,
  },
];

