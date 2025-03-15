import ConsulationSection from "@/components/Home/ConsulationSection";
import FeaturesSection from "@/components/Home/FeaturesSection";
import HeroSection from "@/components/Home/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col  ">
      <HeroSection />
      <ConsulationSection />
      <FeaturesSection />
    </main>
  );
}
