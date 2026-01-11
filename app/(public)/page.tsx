'use client';

import { HeroSection } from '@/components/HeroSection';
import { StatsSection } from '@/components/StatsSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { ToolsSection } from '@/components/ToolsSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { CTASection } from '@/components/CTASection';

export default function Home() {
  return (
    <div className="min-h-screen relative bg-bg overflow-x-hidden">
      {/* Main content */}
      {/* Navbar is in layout */}
      
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <ToolsSection />
      <TestimonialsSection />
      <CTASection />
      {/* Footer is in layout */}
    </div>
  );
}
