import React from 'react';
import { ArrowUp, Instagram, MapPin, Phone, Heart } from 'lucide-react';
import { CAFE_INFO } from '../../data/cafeData';
import logoImg from '../../assets/logo.png';

interface FooterProps {
  onNavigateToHome?: () => void;
  onNavigateToMenu?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateToHome, onNavigateToMenu }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-darkgreen text-brand-ivory pt-20 pb-10 border-t border-brand-tan/15 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-brand-cream/10">
          {/* Brand Info & Motto (4 cols) */}
          <div className="md:col-span-4 flex flex-col items-start space-y-4">
            <button
              onClick={onNavigateToHome || scrollToTop}
              className="flex items-center gap-3 group text-left cursor-pointer"
            >
              <img
                src={logoImg}
                alt={CAFE_INFO.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-brand-tan/80 shadow-md group-hover:scale-105 transition-transform"
              />
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-normal text-brand-ivory tracking-wide leading-none">
                  {CAFE_INFO.name}
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-brand-tan font-medium mt-1">
                  Ichalkaranji
                </span>
              </div>
            </button>
            <p className="text-sm font-light text-brand-cream/80 max-w-sm font-sans leading-relaxed">
              "{CAFE_INFO.tagline}"
              <br />
              {CAFE_INFO.subTagline}
            </p>

            {/* Instagram Social Pill */}
            <a
              href={CAFE_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-cream/10 hover:bg-brand-cream/20 text-brand-tan text-xs font-semibold uppercase tracking-wider transition-colors border border-brand-cream/15 mt-2"
            >
              <Instagram className="w-4 h-4 text-brand-tan" />
              <span>Follow {CAFE_INFO.instagram}</span>
            </a>
          </div>

          {/* Quick Navigation Links (4 cols) */}
          <div className="md:col-span-4 flex flex-col space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-brand-tan font-semibold block mb-2">
              QUICK NAVIGATION
            </span>
            <ul className="space-y-2.5 text-sm font-light text-brand-cream/90">
              <li>
                <button
                  onClick={onNavigateToHome || scrollToTop}
                  className="hover:text-brand-tan transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <a href="#story" className="hover:text-brand-tan transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <button
                  onClick={onNavigateToMenu || scrollToTop}
                  className="hover:text-brand-tan transition-colors text-brand-tan font-normal cursor-pointer"
                >
                  The Full Menu & Categories →
                </button>
              </li>
              <li>
                <a href="#experience" className="hover:text-brand-tan transition-colors">
                  The Experience & Atmosphere
                </a>
              </li>
              <li>
                <a href="#instagram" className="hover:text-brand-tan transition-colors">
                  Instagram Reels
                </a>
              </li>
              <li>
                <a href="#visit" className="hover:text-brand-tan transition-colors">
                  Visit & Location
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Operating Hours (4 cols) */}
          <div className="md:col-span-4 flex flex-col space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-brand-tan font-semibold block mb-2">
              LOCATION & HOURS
            </span>

            <div className="flex items-start gap-2.5 text-sm font-light text-brand-cream/90 leading-relaxed">
              <MapPin className="w-4 h-4 text-brand-tan shrink-0 mt-1" />
              <span>{CAFE_INFO.address}</span>
            </div>

            <div className="flex items-center gap-2.5 text-sm font-light text-brand-cream/90 pt-1">
              <Phone className="w-4 h-4 text-brand-tan shrink-0" />
              <a href={`tel:${CAFE_INFO.phone}`} className="hover:text-brand-tan transition-colors">
                {CAFE_INFO.phone}
              </a>
            </div>

            <div className="pt-3 border-t border-brand-cream/10 mt-2">
              <span className="text-xs uppercase text-brand-tan font-medium block mb-1">
                Café Hours
              </span>
              <span className="text-xs font-light text-brand-cream/80 block">
                Monday – Sunday: 10:00 AM – 11:00 PM
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Rights & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-brand-cream/60">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} {CAFE_INFO.name}. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1 text-[11px]">
              Crafted with <Heart className="w-3 h-3 text-red-400 fill-red-400" /> in Ichalkaranji
            </span>

            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-full bg-brand-cream/10 hover:bg-brand-cream/20 text-brand-tan flex items-center justify-center transition-colors border border-brand-cream/15 cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
