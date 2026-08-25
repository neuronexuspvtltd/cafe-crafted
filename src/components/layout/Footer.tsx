import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, MapPin, Phone, Clock, ArrowUp, Heart } from 'lucide-react';
import { CAFE_INFO } from '../../data/cafeData';
import { CoffeeRingPattern } from '../ui/CoffeeRingPattern';
import logoImg from '../../assets/logo.png';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-brand-darkgreen text-brand-ivory pt-20 pb-12 overflow-hidden border-t border-brand-cream/10">
      {/* Background Coffee Ring Motif */}
      <CoffeeRingPattern className="-bottom-24 -left-24" size={540} variant="light" opacity={0.05} />
      <CoffeeRingPattern className="top-10 -right-20" size={420} variant="light" opacity={0.04} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-brand-cream/10">
          {/* Brand Intro Column (5 cols) */}
          <div className="md:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <a href="#home" className="flex items-center gap-3 group mb-4">
                <img
                  src={logoImg}
                  alt={CAFE_INFO.name}
                  className="w-12 h-12 rounded-full object-cover border border-brand-cream/30 shadow-md"
                />
                <span className="font-serif text-3xl tracking-wide text-brand-ivory font-normal">
                  Cafe Crafted
                </span>
              </a>

              <p className="font-serif italic text-xl text-brand-tan max-w-sm">
                "{CAFE_INFO.tagline}"
              </p>

              <p className="mt-4 text-xs sm:text-sm font-light text-brand-cream/70 leading-relaxed font-sans max-w-sm">
                A sanctuary for slow brewing, wood-fired sourdough, beautiful spaces, and memorable moments in Ichalkaranji.
              </p>
            </div>

            {/* Social Link */}
            <div className="pt-2">
              <a
                href={CAFE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-brand-cream/10 hover:bg-brand-cream hover:text-brand-darkgreen text-brand-ivory text-xs font-semibold uppercase tracking-wider transition-all border border-brand-cream/20"
              >
                <Instagram className="w-4 h-4 text-brand-tan" />
                Follow {CAFE_INFO.instagram}
              </a>
            </div>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="md:col-span-3">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-tan block mb-6">
              NAVIGATION
            </span>
            <ul className="space-y-3 font-sans text-sm font-light">
              <li>
                <a href="#home" className="text-brand-cream/80 hover:text-brand-ivory transition-colors">Home</a>
              </li>
              <li>
                <a href="#story" className="text-brand-cream/80 hover:text-brand-ivory transition-colors">Our Story</a>
              </li>
              <li>
                <a href="#menu" className="text-brand-cream/80 hover:text-brand-ivory transition-colors">Specialty Menu</a>
              </li>
              <li>
                <a href="#experience" className="text-brand-cream/80 hover:text-brand-ivory transition-colors">The Atmosphere</a>
              </li>
              <li>
                <a href="#instagram" className="text-brand-cream/80 hover:text-brand-ivory transition-colors">Gallery & Social</a>
              </li>
              <li>
                <a href="#visit" className="text-brand-cream/80 hover:text-brand-ivory transition-colors">Visit Cafe Crafted</a>
              </li>
            </ul>
          </div>

          {/* Location & Hours (4 cols) */}
          <div className="md:col-span-4 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-tan block mb-6">
              VISIT & HOURS
            </span>

            <div className="flex items-start gap-3 text-xs sm:text-sm font-light text-brand-cream/80">
              <MapPin className="w-4 h-4 text-brand-tan shrink-0 mt-1" />
              <span>{CAFE_INFO.address}</span>
            </div>

            <div className="flex items-center gap-3 text-xs sm:text-sm font-light text-brand-cream/80">
              <Clock className="w-4 h-4 text-brand-tan shrink-0" />
              <span>Mon – Sun: 10:00 AM – 11:00 PM</span>
            </div>

            <div className="flex items-center gap-3 text-xs sm:text-sm font-light text-brand-cream/80">
              <Phone className="w-4 h-4 text-brand-tan shrink-0" />
              <span>{CAFE_INFO.phone}</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-brand-cream/60 font-sans">
          <div>
            © {new Date().getFullYear()} Cafe Crafted. All rights reserved. Ichalkaranji, Maharashtra.
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-brand-tan hover:text-brand-ivory transition-colors uppercase tracking-widest text-[10px] font-semibold"
          >
            <span>Back To Top</span>
            <div className="w-7 h-7 rounded-full bg-brand-cream/10 flex items-center justify-center border border-brand-cream/20">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};
