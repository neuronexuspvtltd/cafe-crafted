import React from 'react';
import { HeroSection } from '../components/hero/HeroSection';
import { BrandIntro } from '../components/sections/BrandIntro';
import { SignatureMenu } from '../components/sections/SignatureMenu';
import { ExperienceSection } from '../components/sections/ExperienceSection';
import { ExperienceFeatures } from '../components/sections/ExperienceFeatures';
import { InstagramGrid } from '../components/sections/InstagramGrid';
import { TestimonialCarousel } from '../components/sections/TestimonialCarousel';
import { VisitSection } from '../components/sections/VisitSection';

interface HomePageProps {
  onNavigateToMenu: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigateToMenu }) => {
  return (
    <>
      {/* Section 1: Cinematic Hero */}
      <HeroSection onNavigateToMenu={onNavigateToMenu} />

      {/* Section 2: Brand Introduction */}
      <BrandIntro />

      {/* Section 3: Signature Highlights Preview */}
      <SignatureMenu onNavigateToMenu={onNavigateToMenu} />

      {/* Section 4: The Cafe Experience & Atmosphere */}
      <ExperienceSection />

      {/* Section 5: Experience Features & 4 Pillars */}
      <ExperienceFeatures />

      {/* Section 6: Instagram & Social Grid */}
      <InstagramGrid />

      {/* Section 7: Testimonials / Social Proof */}
      <TestimonialCarousel />

      {/* Section 8: Visit Us & Location Details */}
      <VisitSection />
    </>
  );
};
