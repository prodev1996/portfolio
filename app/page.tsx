// app/page.tsx
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ExperienceAndProjects from "@/components/ExperienceAndProjects";
import TechStack from "@/components/TechStack";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <main className="pt-8 lg:pt-10">
      <Hero />
      <AboutSection />
      <TechStack />
      <ExperienceAndProjects />
      <ContactSection />
    </main>
  );
}
