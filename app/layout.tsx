// app/layout.tsx
import type { Metadata } from "next";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import ThemeProvider from "@/components/layout/ThemeProvider";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rajivbhandari.com"),
  title: {
    default: "Rajiv Bhandari | Application Support, Data & Software",
    template: "%s | Rajiv Bhandari",
  },
  description:
    "Portfolio of Rajiv Bhandari, based in Adelaide. Application support, SQL-based data analysis, and software development, building toward data engineering. Real client projects, open-source builds, resume, and contact details.",
  alternates: {
    canonical: "https://www.rajivbhandari.com",
  },
  openGraph: {
    title: "Rajiv Bhandari | Application Support, Data & Software",
    description:
      "Application support, SQL-based data analysis, and software development portfolio. Real client projects, open-source data and full-stack builds, and a resume, all in one place.",
    url: "https://www.rajivbhandari.com",
    siteName: "Rajiv Bhandari Portfolio",
    type: "profile",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Rajiv Bhandari portfolio website",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajiv Bhandari | Application Support, Data & Software",
    description:
      "Application support, SQL-based data analysis, and software development professional based in Adelaide, building toward data engineering.",
    images: ["/opengraph-image"],
  },
  keywords: [
    "Rajiv Bhandari",
    "IT Application Support",
    "Application Support Analyst",
    "Business Systems Analyst",
    "Application Systems Analyst",
    "Business Applications Support",
    "Data Analyst",
    "Data Analysis",
    "Data Engineering",
    "SQL Developer",
    "SQL",
    "SQL/MySQL",
    "SQL Server",
    "T-SQL",
    "PostgreSQL",
    "Window Functions",
    "Cohort Analysis",
    "Churn Analysis",
    "Data Quality",
    "Database Support",
    "Data Migration",
    "Python",
    "Pandas",
    "Streamlit",
    "Plotly",
    "Jupyter Notebook",
    "pytest",
    "React",
    "Next.js",
    "Django",
    "Django REST Framework",
    "Full Stack Developer",
    "Software Developer",
    "Junior Software Developer",
    "Microsoft 365",
    "SharePoint",
    "Active Directory",
    "Azure AD",
    "Reporting Support",
    "User Acceptance Testing",
    "QA & Testing",
    "Process Improvement",
    "Incident Resolution",
    "Stakeholder Engagement",
    "Technical Support",
    "Adelaide",
    "Australia",
  ],
  authors: [
    {
      name: "Rajiv Bhandari",
      url: "https://www.linkedin.com/in/rajiv-bhandari25/",
    },
  ],
  icons: {
    icon: [{ url: "/icon", type: "image/png" }],
    shortcut: "/icon",
    apple: "/icon",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${manrope.variable} ${bricolage.variable}`}
    >
      <body className="bg-bg text-text antialiased font-sans">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <ThemeProvider>
          <SmoothScrollProvider>
            <Navbar />
            <main id="main-content">{children}</main>
          </SmoothScrollProvider>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
