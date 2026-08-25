import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Sparkles, MapPin, Phone } from 'lucide-react';
import { MenuSection } from '../components/sections/MenuSection';
import { CoffeeRingPattern } from '../components/ui/CoffeeRingPattern';
import { CAFE_INFO } from '../data/cafeData';

interface MenuPageProps {
  onNavigateToHome: () => void;
}

export const MenuPage: React.FC<MenuPageProps> = ({ onNavigateToHome }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="pt-20 bg-brand-ivory min-h-screen">
      {/* Menu Hero Header Banner */}
      <section className="relative py-16 md:py-24 bg-brand-darkgreen text-brand-ivory overflow-hidden border-b border-brand-tan/20">
        <CoffeeRingPattern className="-top-20 -right-20" size={500} variant="light" opacity={0.06} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb Back Link */}
          <button
            onClick={onNavigateToHome}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-brand-tan hover:text-brand-ivory transition-colors mb-6 group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-brand-tan group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </button>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-cream/10 border border-brand-cream/20 text-brand-tan text-xs font-semibold uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Full Category Selection
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl text-brand-ivory font-normal tracking-tight leading-tight">
              The Artisanal Menu
            </h1>

            <p className="mt-4 text-base sm:text-lg font-light text-brand-cream/80 leading-relaxed font-sans max-w-2xl">
              Explore our complete selection of slow-steeped single origin arabicas, wood-fired sourdough pizzas, creamy truffle pastas, fresh botanical coolers, and decadent desserts.
            </p>
          </div>
        </div>
      </section>

      {/* Full Interactive Menu Section */}
      <MenuSection />

      {/* Bottom Visit & Call Banner */}
      <section className="py-12 bg-brand-lightcream border-t border-brand-tan/15">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <h3 className="font-serif text-2xl text-brand-espresso">Ready to experience Cafe Crafted in person?</h3>
          <p className="text-sm text-brand-espresso/70 mt-1 max-w-md font-light">
            Visit us opposite Saraswati Hospital, Kagwade Mala, Ichalkaranji. Table reservations & takeaway welcome.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onNavigateToHome}
              className="px-6 py-3 rounded-full bg-brand-cream text-brand-espresso text-xs font-semibold uppercase tracking-wider hover:bg-brand-tan/20 transition-all border border-brand-tan/20"
            >
              Return to Home Page
            </button>

            <a
              href={`tel:${CAFE_INFO.phone}`}
              className="px-6 py-3 rounded-full bg-brand-green text-brand-ivory text-xs font-semibold uppercase tracking-wider hover:bg-brand-darkgreen transition-all shadow-md flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-brand-tan" />
              Call Order Direct
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
