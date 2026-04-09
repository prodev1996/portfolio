import Hero from "@/components/Hero";
import WhatIDo from "@/components/WhatIDo";
import Experience from "@/components/Experience";
import FeaturedProjects from "@/components/FeaturedProjects";
import TechStack from "@/components/TechStack";
import DataJourney from "@/components/DataJourney";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatIDo />
      <Experience />
      <FeaturedProjects />
      <TechStack />
      <DataJourney />
      <ContactSection />
      <Footer />
    </>
  );
}
