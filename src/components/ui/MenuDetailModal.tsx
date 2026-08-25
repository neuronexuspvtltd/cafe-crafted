import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Phone, MapPin } from 'lucide-react';
import { MenuItem, CAFE_INFO } from '../../data/cafeData';

interface MenuDetailModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

export const MenuDetailModal: React.FC<MenuDetailModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-brand-darkgreen/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-2xl bg-brand-ivory rounded-3xl overflow-hidden shadow-2xl border border-brand-tan/20 max-h-[90vh] flex flex-col md:flex-row"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/40 text-white hover:bg-black/70 flex items-center justify-center transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Image Side */}
          <div className="md:w-1/2 relative aspect-square md:aspect-auto">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:hidden" />
          </div>

          {/* Details Side */}
          <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-tan">
                  {item.category}
                </span>
                {item.isVeg && (
                  <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-semibold">
                    VEG
                  </span>
                )}
                {item.isChefSpecial && (
                  <span className="px-2 py-0.5 rounded bg-brand-green text-brand-ivory text-[10px] font-semibold flex items-center gap-1">
                    <Sparkles className="w-2.5 h-2.5 text-brand-tan" />
                    Chef's Pick
                  </span>
                )}
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-brand-espresso font-normal leading-tight">
                {item.name}
              </h3>

              <div className="mt-3 font-serif text-3xl text-brand-green font-medium">
                {item.price}
              </div>

              <p className="mt-4 text-sm text-brand-espresso/80 font-light leading-relaxed">
                {item.description}
              </p>

              {item.tags && item.tags.length > 0 && (
                <div className="mt-6">
                  <span className="text-xs font-semibold uppercase text-brand-espresso/50 block mb-2">
                    Key Elements & Flavor Profile
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-brand-cream text-brand-espresso font-medium border border-brand-tan/15"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Action Bar */}
            <div className="mt-8 pt-6 border-t border-brand-tan/15 flex flex-col gap-3">
              <span className="text-xs text-brand-espresso/60 text-center font-light">
                Freshly prepared upon order at Cafe Crafted Ichalkaranji.
              </span>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href="#visit"
                  onClick={onClose}
                  className="w-full text-center py-3 px-4 rounded-full bg-brand-green text-brand-ivory text-xs font-semibold uppercase tracking-wider hover:bg-brand-darkgreen transition-all flex items-center justify-center gap-1.5"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  Visit Us
                </a>

                <a
                  href={`tel:${CAFE_INFO.phone}`}
                  className="w-full text-center py-3 px-4 rounded-full bg-brand-cream text-brand-espresso text-xs font-semibold uppercase tracking-wider hover:bg-brand-tan/20 transition-all flex items-center justify-center gap-1.5 border border-brand-tan/20"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-tan" />
                  Call Order
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
