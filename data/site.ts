export type NavSection = {
  name: string;
  href: string;
};

// "Home" has no visible nav link (the logo already goes home) but its
// bounds are still needed for scroll-spy so nothing else falsely
// highlights while the hero is still in view.
export const navSections: NavSection[] = [
  { name: "Home", href: "#home" },
  { name: "Snapshot", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Credentials", href: "#credentials" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const navLinks = navSections.filter((section) => section.name !== "Home");

export const siteConfig = {
  name: "Rajiv Bhandari",
  role: "Application Support | Data | Software",
  location: "Adelaide, SA",
  email: "bhandarirajiv25@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/rajiv-bhandari25/",
  githubUrl: "https://github.com/prodev1996",
  resumePdfUrl: "/Rajiv_Bhandari_Database_Resume_.pdf",
};
