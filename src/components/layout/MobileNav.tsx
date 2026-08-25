import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Phone, Instagram, Coffee, ArrowRight } from 'lucide-react';
import { CAFE_INFO } from '../../data/cafeData';
import logoImg from '../../assets/logo.png';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { name: string; href: string }[];
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose, navLinks }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          {/* Floating Glass Sheet Menu */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-3 left-3 right-3 z-50 max-h-[92vh] bg-brand-darkgreen/95 text-brand-ivory backdrop-blur-2xl rounded-3xl border border-brand-tan/25 shadow-2xl p-6 overflow-y-auto flex flex-col justify-between"
          >
            {/* Header Bar */}
            <div className="flex items-center justify-between border-b border-brand-cream/15 pb-4">
              <div className="flex items-center gap-3">
                <img 
                  src={logoImg} 
                  alt={CAFE_INFO.name} 
                  className="w-9 h-9 rounded-full object-cover border border-brand-tan/40 shadow-sm" 
                />
                <div className="flex flex-col">
                  <span className="font-serif text-lg tracking-wide text-brand-ivory font-normal">
                    {CAFE_INFO.name}
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-brand-tan font-medium -mt-1">
                    Ichalkaranji
                  </span>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-brand-cream/10 text-brand-ivory hover:bg-brand-cream/20 flex items-center justify-center transition-colors focus:outline-none border border-brand-cream/15"
                aria-label="Close menu"
              >
                <X className="w-4 h-4 text-brand-tan" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="my-6 flex flex-col gap-3">
              <span className="text-[10px] uppercase tracking-[0.3em] text-brand-tan font-semibold block mb-1">
                MENU NAVIGATION
              </span>

              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={onClose}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.04 }}
                  className="group flex items-center justify-between py-2.5 px-4 rounded-2xl bg-brand-cream/5 hover:bg-brand-cream/15 transition-all text-brand-ivory"
                >
                  <span className="font-serif text-xl sm:text-2xl font-normal group-hover:text-brand-tan transition-colors">
                    {link.name}
                  </span>
                  <ArrowRight className="w-4 h-4 text-brand-tan opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </motion.a>
              ))}
            </nav>

            {/* Quick Info & Action Buttons */}
            <div className="border-t border-brand-cream/15 pt-5 space-y-4">
              <div className="flex items-center gap-2 text-xs font-light text-brand-cream/80">
                <MapPin className="w-3.5 h-3.5 text-brand-tan shrink-0" />
                <span>Opposite Saraswati Hospital, Ichalkaranji</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href="#menu"
                  onClick={onClose}
                  className="w-full text-center py-3 px-4 rounded-full bg-brand-green text-brand-ivory font-semibold text-xs uppercase tracking-wider hover:bg-brand-cream hover:text-brand-darkgreen transition-all shadow-md flex items-center justify-center gap-2 border border-brand-tan/30"
                >
                  <Coffee className="w-3.5 h-3.5 text-brand-tan" />
                  View Menu
                </a>

                <a
                  href={`tel:${CAFE_INFO.phone}`}
                  className="w-full text-center py-3 px-4 rounded-full bg-brand-cream/10 text-brand-ivory font-semibold text-xs uppercase tracking-wider hover:bg-brand-cream/20 transition-all flex items-center justify-center gap-2 border border-brand-cream/20"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-tan" />
                  Call Us
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
