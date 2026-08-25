import React from 'react';
import { Sparkles, Eye } from 'lucide-react';
import { MenuItem } from '../../data/cafeData';

interface MenuCardProps {
  item: MenuItem;
  onSelect?: (item: MenuItem) => void;
}

export const MenuCard: React.FC<MenuCardProps> = ({ item, onSelect }) => {
  return (
    <div
      onClick={() => onSelect && onSelect(item)}
      className="group relative bg-brand-cream/40 rounded-3xl overflow-hidden border border-brand-tan/15 hover:border-brand-green/40 transition-all duration-300 shadow-card hover:shadow-editorial cursor-pointer flex flex-col justify-between h-full transform hover:-translate-y-1.5"
    >
      {/* Food Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-cream">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
        />

        {/* Top Badges (Veg tag & Chef's Special) */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2 z-10">
          {item.isVeg && (
            <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-emerald-800 text-[10px] font-semibold tracking-wider uppercase flex items-center gap-1.5 shadow-sm border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              VEG
            </span>
          )}

          {item.isChefSpecial && (
            <span className="px-2.5 py-1 rounded-full bg-brand-green text-brand-ivory text-[10px] font-semibold tracking-wider uppercase flex items-center gap-1 shadow-sm">
              <Sparkles className="w-3 h-3 text-brand-tan" />
              Special
            </span>
          )}
        </div>

        {/* Hover Overlay Hint */}
        <div className="absolute inset-0 bg-brand-darkgreen/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px] flex items-center justify-center">
          <span className="px-4 py-2 rounded-full bg-brand-ivory text-brand-green text-xs font-semibold uppercase tracking-widest flex items-center gap-2 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
            <Eye className="w-3.5 h-3.5" />
            Quick View
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-tan block mb-1">
            {item.category}
          </span>
          <h3 className="font-serif text-xl sm:text-2xl text-brand-espresso font-normal group-hover:text-brand-green transition-colors leading-tight">
            {item.name}
          </h3>
          <p className="mt-2 text-xs sm:text-sm font-light text-brand-espresso/70 line-clamp-2 leading-relaxed font-sans">
            {item.description}
          </p>
        </div>

        {/* Optional Tags */}
        {item.tags && item.tags.length > 0 && (
          <div className="mt-4 pt-3 border-t border-brand-tan/10 flex flex-wrap gap-1.5">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] px-2 py-0.5 rounded-md bg-brand-cream text-brand-espresso/70 font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
