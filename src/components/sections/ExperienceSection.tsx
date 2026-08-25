import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { CoffeeRingPattern } from '../ui/CoffeeRingPattern';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 md:py-36 bg-brand-darkgreen text-brand-ivory overflow-hidden">
      {/* Subtle Grain & Coffee Ring Overlay */}
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-20" />
      <CoffeeRingPattern className="-top-24 -right-24" size={600} variant="light" opacity={0.06} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="ATMOSPHERE & DESIGN"
          title="Come for the coffee. Stay for the atmosphere."
          subtitle="Designed like a contemporary architectural journal — warm ambient lighting, handcrafted wooden accents, soft acoustics, and spaces made for lingering."
          theme="dark"
        />

        {/* Asymmetrical Lifestyle Magazine Photo Collage */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Main Large Interior View (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-7 relative group overflow-hidden rounded-3xl min-h-[420px] sm:min-h-[520px] shadow-editorial"
          >
            <img
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=85"
              alt="Cafe Crafted Interior Architecture"
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-darkgreen/90 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-brand-darkgreen/60 backdrop-blur-md border border-brand-cream/15">
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-brand-tan block mb-1">
                MAIN DINING HALL
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-brand-ivory font-normal">
                Thoughtfully Designed Sanctuary
              </h3>
              <p className="mt-1 text-xs sm:text-sm font-light text-brand-cream/80 font-sans">
                Warm timber finishes, comfortable seating, and ambient lighting crafted for long conversations.
              </p>
            </div>
          </motion.div>

          {/* Right Column Stacked Shots (5 cols) */}
          <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6">
            {/* Shot 2: Espresso Drip Close-up */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative group overflow-hidden rounded-3xl h-[240px] sm:h-[250px] shadow-editorial"
            >
              <img
                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80"
                alt="Artisanal Espresso Extraction"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-darkgreen/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-brand-tan">
                  BARISTA STAND
                </span>
                <h4 className="font-serif text-lg text-brand-ivory font-normal">
                  Single Origin Precision
                </h4>
              </div>
            </motion.div>

            {/* Shot 3: Plating & Food Close-up */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative group overflow-hidden rounded-3xl h-[240px] sm:h-[250px] shadow-editorial"
            >
              <img
                src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=800&q=80"
                alt="Artisanal Sourdough Pizza"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-darkgreen/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-brand-tan">
                  CULINARY ARTISTRY
                </span>
                <h4 className="font-serif text-lg text-brand-ivory font-normal">
                  Wood-Fired Fermentations
                </h4>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Horizontal Grid: Social Moments & Architectural Details */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative group overflow-hidden rounded-3xl h-[220px] shadow-card"
          >
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80"
              alt="Social Connections"
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-darkgreen/80 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-brand-tan block">SOCIAL MOMENTS</span>
              <span className="font-serif text-lg text-brand-ivory">Shared Laughter & Stories</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative group overflow-hidden rounded-3xl h-[220px] shadow-card"
          >
            <img
              src="https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=800&q=80"
              alt="Cozy Evening Lighting"
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-darkgreen/80 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-brand-tan block">EVENING AMBIANCE</span>
              <span className="font-serif text-lg text-brand-ivory">Warm Acoustic Twilight</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="relative group overflow-hidden rounded-3xl h-[220px] shadow-card sm:col-span-2 md:col-span-1"
          >
            <img
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80"
              alt="Artisanal Beverages"
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-darkgreen/80 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-brand-tan block">TASTE & COLOR</span>
              <span className="font-serif text-lg text-brand-ivory">Fresh Botanical Infusions</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
