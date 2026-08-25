import React from 'react';
import { motion } from 'framer-motion';
import { CoffeeRingPattern } from '../ui/CoffeeRingPattern';
import logoImg from '../../assets/logo.png';

export const BrandIntro: React.FC = () => {
  return (
    <section id="story" className="relative py-24 md:py-36 bg-brand-ivory overflow-hidden">
      {/* Background Coffee Ring motif */}
      <CoffeeRingPattern className="top-1/2 -left-36 -translate-y-1/2" size={560} variant="green" opacity={0.05} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Eyebrow Label */}
        <div className="flex items-center gap-3 mb-8">
          <span className="h-px w-8 bg-brand-tan"></span>
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-brand-tan">
            OUR PHILOSOPHY
          </span>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Vertical Label + Large Headline (Left 7 cols) */}
          <div className="lg:col-span-7 flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
            {/* Vertical Label */}
            <div className="hidden sm:flex flex-col items-center gap-4 pt-3 shrink-0">
              <span className="text-[11px] uppercase tracking-[0.4em] font-semibold text-brand-espresso/40 origin-left -rotate-90 translate-y-12">
                THE CRAFT
              </span>
              <div className="w-px h-20 bg-brand-tan/40 mt-16" />
            </div>

            {/* Main Statement */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-1"
            >
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-brand-espresso leading-[1.12] font-normal">
                Crafted with intention.
                <br />
                <span className="italic text-brand-green font-light">Served with warmth.</span>
              </h2>

              {/* Decorative handwritten accent */}
              <p className="font-accent text-3xl text-brand-tan mt-6 transform -rotate-1">
                "Where slow brewing meets cozy conversations."
              </p>
            </motion.div>
          </div>

          {/* Right Description & Visual Highlights (Right 5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 text-brand-espresso/80 font-sans text-base sm:text-lg font-light leading-relaxed border-l border-brand-tan/20 pl-6 sm:pl-8 lg:pl-10"
          >
            <p>
              At <strong className="font-medium text-brand-espresso">Cafe Crafted</strong>, we believe every table tells a story. We don't just pull espresso shots or slice sourdough — we treat every ingredient and moment as an extension of our artisanal identity.
            </p>

            <p>
              From 48-hour fermented sourdough pizzas baked in high wood-fired heat to single-origin arabicas steeped to perfection, our menu is designed to nourish both body and soul.
            </p>

            {/* Micro Badge Card */}
            <div className="pt-4 flex items-center gap-4 bg-brand-cream/60 p-4 rounded-2xl border border-brand-tan/15 shadow-sm">
              <img src={logoImg} alt="Cafe Crafted Emblem" className="w-12 h-12 rounded-full object-cover shrink-0 border border-brand-green/20" />
              <div>
                <h4 className="font-serif text-lg font-medium text-brand-green">Artisanal Standard</h4>
                <p className="text-xs text-brand-espresso/70 font-sans">Crafted in Ichalkaranji with premium ingredients and slow passion.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
