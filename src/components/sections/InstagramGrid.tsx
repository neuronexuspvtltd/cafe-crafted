import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Heart, Play, Eye, ExternalLink, Film } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { INSTAGRAM_REELS, CAFE_INFO } from '../../data/cafeData';

export const InstagramGrid: React.FC = () => {
  const [hoveredReelId, setHoveredReelId] = useState<string | null>(null);

  return (
    <section id="instagram" className="relative py-12 md:py-16 bg-brand-lightcream overflow-hidden border-t border-brand-tan/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="INSTAGRAM REELS"
          title="Seen at @cafe_.crafted"
          subtitle="Explore our top viral reels, artisanal brewing moments, wood-fired sourdough pizzas, and daily café vibes."
        />

        {/* Profile Card Header */}
        <div className="mt-8 max-w-3xl mx-auto bg-brand-cream/90 p-4 sm:p-5 rounded-2xl border border-brand-tan/20 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="relative w-12 h-12 rounded-full overflow-hidden p-0.5 border border-brand-green/30 shrink-0">
              <img src="/logo.png" alt={CAFE_INFO.name} className="w-full h-full object-cover rounded-full" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-lg font-medium text-brand-espresso">{CAFE_INFO.instagram}</span>
                <span className="px-2 py-0.5 rounded bg-brand-green/10 text-brand-green text-[10px] font-semibold flex items-center gap-1">
                  <Film className="w-3 h-3" />
                  Official Instagram
                </span>
              </div>
              <p className="text-xs text-brand-espresso/70 font-sans font-light">Ichalkaranji • Handcrafted Food, Coffee & Atmosphere</p>
            </div>
          </div>

          <a
            href={CAFE_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-brand-green text-brand-ivory text-xs font-semibold uppercase tracking-wider hover:bg-brand-darkgreen transition-all shadow-sm flex items-center gap-2 shrink-0 border border-brand-tan/30"
          >
            <Instagram className="w-4 h-4 text-brand-tan" />
            Follow Profile
          </a>
        </div>

        {/* 9:16 Vertical Cards - Direct Links to Instagram Reels */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INSTAGRAM_REELS.map((reel, idx) => (
            <motion.a
              key={reel.id}
              href={CAFE_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              onMouseEnter={() => setHoveredReelId(reel.id)}
              onMouseLeave={() => setHoveredReelId(null)}
              className="group relative aspect-[9/15] rounded-2xl overflow-hidden shadow-editorial border border-brand-tan/20 cursor-pointer bg-black block"
            >
              {/* Video Stream Preview */}
              {hoveredReelId === reel.id ? (
                <video
                  src={reel.videoUrl}
                  poster={reel.thumbnail}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <img
                  src={reel.thumbnail}
                  alt={reel.caption}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.92]"
                />
              )}

              {/* Top Badge */}
              <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-20 pointer-events-none">
                <span className="px-3 py-1 rounded-full bg-brand-darkgreen/90 text-brand-ivory text-[10px] font-semibold tracking-wider uppercase backdrop-blur-md border border-brand-tan/30 flex items-center gap-1.5 shadow-md">
                  <Instagram className="w-3.5 h-3.5 text-brand-tan" />
                  REEL
                </span>

                <span className="px-2.5 py-1 rounded-full bg-black/60 text-white text-[10px] font-medium backdrop-blur-md">
                  {reel.duration}
                </span>
              </div>

              {/* Play / Open Overlay Hint */}
              <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                <div className="w-14 h-14 rounded-full bg-brand-green/90 text-brand-ivory flex items-center justify-center shadow-xl backdrop-blur-md transform group-hover:scale-110 transition-all duration-300 border border-brand-tan/30">
                  <Play className="w-6 h-6 fill-brand-ivory text-brand-ivory ml-0.5" />
                </div>
              </div>

              {/* Bottom Info Overlay with Hover Action Hint */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-darkgreen/95 via-brand-darkgreen/45 to-transparent p-5 flex flex-col justify-between text-brand-ivory z-10">
                <div className="pt-6" />

                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-tan block mb-1">
                    #{reel.tag}
                  </span>

                  <p className="text-xs font-light text-brand-cream/90 line-clamp-2 leading-relaxed font-sans">
                    {reel.caption}
                  </p>

                  <div className="mt-3 pt-3 border-t border-brand-cream/15 flex items-center justify-between text-xs text-brand-tan font-medium">
                    <span className="flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5 fill-brand-tan text-brand-tan" />
                      {reel.likes}
                    </span>

                    <span className="flex items-center gap-1.5 text-brand-ivory group-hover:text-brand-tan transition-colors font-semibold">
                      <span>Watch Reel on Instagram</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-10 text-center">
          <a
            href={CAFE_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-brand-green text-brand-ivory text-xs font-semibold uppercase tracking-[0.18em] hover:bg-brand-darkgreen transition-all shadow-md border border-brand-tan/30 group"
          >
            <Instagram className="w-4 h-4 text-brand-tan group-hover:rotate-12 transition-transform" />
            <span>Open {CAFE_INFO.instagram} on Instagram</span>
            <ExternalLink className="w-3.5 h-3.5 text-brand-tan" />
          </a>
        </div>
      </div>
    </section>
  );
};
