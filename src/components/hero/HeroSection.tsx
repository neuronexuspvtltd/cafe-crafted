import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import { ScrollIndicator } from './ScrollIndicator';
import { CoffeeRingPattern } from '../ui/CoffeeRingPattern';
import heroBgImg from '../../assets/hero-bg.jpg';

interface HeroSectionProps {
  onNavigateToMenu?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigateToMenu }) => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-brand-darkgreen text-brand-ivory pt-28 pb-10">
      {/* Background Photography — Actual Cafe Crafted Interior Photo */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          src={heroBgImg}
          alt="Cafe Crafted Interior Seating"
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1.0, opacity: 0.7 }}
          transition={{ duration: 2.0, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full object-cover object-center filter brightness-[0.98] contrast-[1.08] saturate-[1.1]"
        />

        {/* Lighter Brand Green Vignette & Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-darkgreen/85 via-brand-darkgreen/45 to-brand-darkgreen/20" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-brand-darkgreen/15 to-brand-darkgreen/60" />
      </div>

      {/* Subtle Grain Overlay */}
      <div className="absolute inset-0 bg-grain pointer-events-none z-10 opacity-20" />

      {/* Minimal Background Coffee Ring Texture */}
      <CoffeeRingPattern className="-top-20 -right-20 z-10" size={480} variant="light" opacity={0.06} />

      {/* Main Minimal Hero Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-auto text-center flex flex-col items-center">
        
        {/* Minimal Category Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 flex items-center gap-3"
        >
          <span className="h-px w-6 bg-brand-tan/80"></span>
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-brand-tan drop-shadow-sm">
            Artisanal Café • Ichalkaranji
          </span>
          <span className="h-px w-6 bg-brand-tan/80"></span>
        </motion.div>

        {/* High-Impact Minimal Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-5xl sm:text-7xl md:text-8xl tracking-tight leading-[1.05] font-normal text-brand-ivory drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]"
        >
          More Than Coffee.
          <br />
          <span className="italic font-light text-brand-tan font-serif drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">It's a Craft.</span>
        </motion.h1>

        {/* Clean Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 text-base sm:text-xl font-light text-brand-cream max-w-lg tracking-wide font-sans leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
        >
          Good food. Beautiful spaces. Crafted moments.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-10 flex flex-row items-center gap-4"
        >
          {onNavigateToMenu ? (
            <button
              onClick={onNavigateToMenu}
              className="px-8 py-3.5 rounded-full bg-brand-green hover:bg-brand-cream hover:text-brand-darkgreen text-brand-ivory text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 transform hover:-translate-y-0.5 shadow-xl flex items-center gap-2.5 group border border-brand-tan/40"
            >
              <span>Explore Menu</span>
              <ArrowRight className="w-3.5 h-3.5 text-brand-tan group-hover:text-brand-darkgreen group-hover:translate-x-1 transition-all" />
            </button>
          ) : (
            <a
              href="#menu"
              className="px-8 py-3.5 rounded-full bg-brand-green hover:bg-brand-cream hover:text-brand-darkgreen text-brand-ivory text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 transform hover:-translate-y-0.5 shadow-xl flex items-center gap-2.5 group border border-brand-tan/40"
            >
              <span>Explore Menu</span>
              <ArrowRight className="w-3.5 h-3.5 text-brand-tan group-hover:text-brand-darkgreen group-hover:translate-x-1 transition-all" />
            </a>
          )}

          <a
            href="#visit"
            className="px-7 py-3.5 rounded-full bg-brand-darkgreen/60 hover:bg-brand-cream/20 text-brand-ivory text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 border border-brand-cream/35 hover:border-brand-tan/60 backdrop-blur-md shadow-lg"
          >
            Visit Us
          </a>
        </motion.div>
      </div>

      {/* Sleek Minimal Bottom Bar */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-brand-cream/20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex items-center gap-2 text-xs font-light text-brand-cream drop-shadow-sm"
        >
          <MapPin className="w-3.5 h-3.5 text-brand-tan shrink-0" />
          <span>Opposite Saraswati Hospital, Kagwade Mala, Ichalkaranji</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <ScrollIndicator />
        </motion.div>
      </div>
    </section>
  );
};
