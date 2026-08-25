import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Instagram, Navigation, ExternalLink } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { CAFE_INFO } from '../../data/cafeData';
import { CoffeeRingPattern } from '../ui/CoffeeRingPattern';

export const VisitSection: React.FC = () => {
  return (
    <section id="visit" className="relative py-24 md:py-36 bg-brand-lightcream overflow-hidden">
      {/* Background Coffee Ring Motif */}
      <CoffeeRingPattern className="-bottom-20 -right-20" size={540} variant="green" opacity={0.04} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="FIND US IN ICHALKARANJI"
          title="Visit Cafe Crafted"
          subtitle="Your neighborhood destination for slow coffee, handcrafted pizzas, warm atmosphere, and memorable conversations."
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Information & Action Cards (Left 5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-6"
          >
            {/* Address Box */}
            <div className="bg-brand-cream/80 p-8 rounded-3xl border border-brand-tan/15 shadow-card hover:shadow-editorial transition-all">
              <div className="w-10 h-10 rounded-2xl bg-brand-green/10 text-brand-green flex items-center justify-center mb-4 border border-brand-green/20">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-tan block mb-1">
                LOCATION & ADDRESS
              </span>
              <h3 className="font-serif text-2xl text-brand-espresso font-normal leading-tight">
                {CAFE_INFO.landmark}
              </h3>
              <p className="mt-2 text-sm font-light text-brand-espresso/80 leading-relaxed font-sans">
                {CAFE_INFO.address}
              </p>
            </div>

            {/* Operating Hours Box */}
            <div className="bg-brand-cream/80 p-8 rounded-3xl border border-brand-tan/15 shadow-card hover:shadow-editorial transition-all">
              <div className="w-10 h-10 rounded-2xl bg-brand-green/10 text-brand-green flex items-center justify-center mb-4 border border-brand-green/20">
                <Clock className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-tan block mb-1">
                OPENING HOURS
              </span>
              <div className="space-y-2 mt-2">
                {CAFE_INFO.hours.map((h, i) => (
                  <div key={i} className="flex justify-between items-center text-sm font-sans">
                    <span className="text-brand-espresso/80 font-medium">{h.days}</span>
                    <span className="text-brand-green font-semibold">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={CAFE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-full bg-brand-green text-brand-ivory text-xs font-semibold uppercase tracking-[0.18em] hover:bg-brand-darkgreen transition-all shadow-md flex items-center justify-center gap-2 group"
              >
                <Navigation className="w-4 h-4 text-brand-tan group-hover:rotate-45 transition-transform" />
                Get Directions
              </a>

              <a
                href={`tel:${CAFE_INFO.phone}`}
                className="w-full py-4 px-6 rounded-full bg-brand-cream text-brand-espresso text-xs font-semibold uppercase tracking-[0.18em] hover:bg-brand-tan/20 transition-all border border-brand-tan/25 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-brand-tan" />
                Call Us Direct
              </a>
            </div>
          </motion.div>

          {/* Interactive Google Map Card (Right 7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 relative rounded-3xl overflow-hidden shadow-editorial border border-brand-tan/20 min-h-[380px] lg:min-h-[480px] bg-brand-cream"
          >
            {/* Map Placeholder Graphic / Interactive Embed */}
            <div className="absolute inset-0 bg-neutral-900 flex flex-col items-center justify-center p-6 text-center text-brand-ivory">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80"
                alt="Location Map Preview"
                className="absolute inset-0 w-full h-full object-cover filter brightness-[0.4] contrast-125"
              />
              <div className="relative z-10 max-w-md bg-brand-darkgreen/85 p-8 rounded-3xl backdrop-blur-md border border-brand-cream/20 shadow-2xl">
                <MapPin className="w-10 h-10 text-brand-tan mx-auto mb-3 animate-bounce" />
                <h3 className="font-serif text-2xl text-brand-ivory">Cafe Crafted Ichalkaranji</h3>
                <p className="text-xs text-brand-cream/80 font-sans mt-2">
                  Opposite Saraswati Hospital, Kagwade Mala, Ichalkaranji, Maharashtra 416115
                </p>
                <a
                  href={CAFE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-cream text-brand-darkgreen font-semibold text-xs uppercase tracking-widest hover:bg-brand-ivory transition-all shadow-lg"
                >
                  Open in Google Maps
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
