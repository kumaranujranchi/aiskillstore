import { HeroSection } from '@/components/landing/HeroSection';
import { ParticleBackground } from '@/components/layout/ParticleBackground';
import { ProblemSection } from '@/components/landing/ProblemSection';
import { HowItWorksSection } from '@/components/landing/HowItWorksSection';
import { ArchitectureSection } from '@/components/landing/ArchitectureSection';
import { ThemesMarketplace } from '@/components/landing/ThemesMarketplace';
import { ShowcaseSection } from '@/components/landing/ShowcaseSection';
import { DeveloperSection } from '@/components/landing/DeveloperSection';
import { PricingSection } from '@/components/landing/PricingSection';

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white relative">
      <ParticleBackground />
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <ArchitectureSection />
      <ThemesMarketplace />
      <ShowcaseSection />
      <DeveloperSection />
      <PricingSection />
    </main>
  );
}
