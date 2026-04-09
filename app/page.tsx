import Hero from "@/components/Hero";
import TargetRoles from "@/components/TargetRoles";
import WhatIDo from "@/components/WhatIDo";
import Experience from "@/components/Experience";
import ReportingProof from "@/components/ReportingProof";
import FeaturedProjects from "@/components/FeaturedProjects";
import TechStack from "@/components/TechStack";
import DataJourney from "@/components/DataJourney";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <TargetRoles />
      <WhatIDo />
      <Experience />
      <ReportingProof />
      <FeaturedProjects />
      <TechStack />
      <DataJourney />
      <ContactSection />
      <Footer />
    </>
  );
}
