import React, { useState } from 'react';
import { BrandPreloader } from './components/ui/BrandPreloader';
import { Header } from './components/layout/Header';
import { HeroSection } from './components/hero/HeroSection';
import { BrandIntro } from './components/sections/BrandIntro';
import { SignatureMenu } from './components/sections/SignatureMenu';
import { MenuSection } from './components/sections/MenuSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { ExperienceFeatures } from './components/sections/ExperienceFeatures';
import { InstagramGrid } from './components/sections/InstagramGrid';
import { TestimonialCarousel } from './components/sections/TestimonialCarousel';
import { VisitSection } from './components/sections/VisitSection';
import { Footer } from './components/layout/Footer';

export function App() {
  const [isPreloaderDone, setIsPreloaderDone] = useState(false);

  return (
    <div className="min-h-screen bg-brand-ivory text-brand-espresso font-sans antialiased selection:bg-brand-green selection:text-white overflow-x-hidden">
      {/* Artisanal Loading Preloader */}
      <BrandPreloader onComplete={() => setIsPreloaderDone(true)} duration={2200} />

      {/* Header Bar */}
      <Header />

      {/* Main Content Sections */}
      <main>
        {/* Section 1: Hero */}
        <HeroSection />

        {/* Section 2: Brand Introduction */}
        <BrandIntro />

        {/* Section 3: Signature Menu Highlights */}
        <SignatureMenu />

        {/* Section 4: Categorized Interactive Menu */}
        <MenuSection />

        {/* Section 5: The Cafe Experience & Atmosphere */}
        <ExperienceSection />

        {/* Section 6: Experience Features & 4 Pillars */}
        <ExperienceFeatures />

        {/* Section 7: Instagram & Social Grid */}
        <InstagramGrid />

        {/* Section 8: Testimonials / Social Proof */}
        <TestimonialCarousel />

        {/* Section 9: Visit Us & Location Details */}
        <VisitSection />
      </main>

      {/* Section 10: Footer */}
      <Footer />
    </div>
  );
}

export default App;
