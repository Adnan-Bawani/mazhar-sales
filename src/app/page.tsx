import HeroSection from "@/components/sections/HeroSection";
import ApplianceShowcase from "@/components/sections/ApplianceShowcase";
import TimelineSection from "@/components/sections/TimelineSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import LocationSection from "@/components/sections/LocationSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-background">
      <HeroSection />
      <TimelineSection />
      <ApplianceShowcase />
      <TestimonialsSection />
      <LocationSection />
      <ContactSection />
    </main>
  );
}
