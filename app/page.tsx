import Hero from "@/components/Hero";
import WhatIDo from "@/components/WhatIDo";
import FeaturedProjects from "@/components/FeaturedProjects";
import TechStack from "@/components/TechStack";
import DataJourney from "@/components/DataJourney";
import Experience from "@/components/Experience";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatIDo />
      <FeaturedProjects />
      <TechStack />
      <DataJourney />
      <Experience />
      <ContactSection />
      <Footer />
    </>
  );
}
