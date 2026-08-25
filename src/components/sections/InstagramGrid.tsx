import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Play, ExternalLink, Heart } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { INSTAGRAM_REELS, CAFE_INFO, InstagramReel } from '../../data/cafeData';
import { ReelModal } from '../ui/ReelModal';
import { CoffeeRingPattern } from '../ui/CoffeeRingPattern';

export const InstagramGrid: React.FC = () => {
  const [selectedReel, setSelectedReel] = useState<InstagramReel | null>(null);
  const [hoveredReelId, setHoveredReelId] = useState<string | null>(null);

  return (
    <section id="instagram" className="relative pt-16 pb-8 md:py-36 bg-brand-ivory overflow-hidden">
      {/* Background Coffee Ring Motif */}
      <CoffeeRingPattern className="-bottom-20 -right-20" size={540} variant="green" opacity={0.04} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="REELS & MOMENTS"
          title="Inside Cafe Crafted"
          subtitle="Watch slow coffee extraction, wood-fired sourdough pizza baking, and warm moments captured on our official Instagram reel feed."
        />

        {/* Profile Callout Header */}
        <div className="mt-8 mb-10 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-3xl bg-brand-cream/60 border border-brand-tan/15">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 p-0.5 shadow-md shrink-0">
              <div className="w-full h-full bg-brand-darkgreen rounded-full flex items-center justify-center text-brand-ivory">
                <Instagram className="w-6 h-6 text-brand-tan" />
              </div>
            </div>
            <div>
              <h4 className="font-serif text-xl text-brand-espresso font-medium flex items-center gap-2">
                {CAFE_INFO.instagram}
                <span className="px-2 py-0.5 rounded-full bg-brand-green/10 text-brand-green text-[10px] uppercase tracking-wider font-semibold">
                  Official
                </span>
              </h4>
              <p className="text-xs text-brand-espresso/70 font-light">
                Follow our official page for daily coffee pours & wood-fired pizza highlights
              </p>
            </div>
          </div>

          <a
            href={CAFE_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full bg-brand-green hover:bg-brand-darkgreen text-brand-ivory text-xs font-semibold uppercase tracking-wider transition-all shadow-sm flex items-center gap-2 shrink-0 border border-brand-tan/30"
          >
            <Instagram className="w-3.5 h-3.5 text-brand-tan" />
            <span>Follow Profile</span>
          </a>
        </div>

        {/* 
          Reels Layout: 
          - Mobile (< md): Horizontal swipe carousel with snap points & smooth scrolling
          - Desktop (>= md): 100% unchanged 3-column editorial grid
        */}
        <div className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none gap-4 md:gap-8 pb-4 md:pb-0 px-4 -mx-4 md:px-0 md:mx-0 md:grid-cols-2 lg:grid-cols-3 no-scrollbar scroll-smooth">
          {INSTAGRAM_REELS.map((reel) => {
            const isHovered = hoveredReelId === reel.id;

            return (
              <motion.div
                key={reel.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                onMouseEnter={() => setHoveredReelId(reel.id)}
                onMouseLeave={() => setHoveredReelId(null)}
                className="w-[260px] sm:w-[300px] md:w-auto shrink-0 snap-center md:snap-align-none group relative aspect-[9/16] rounded-3xl overflow-hidden shadow-card hover:shadow-editorial border border-brand-tan/20 bg-brand-darkgreen cursor-pointer"
              >
                {/* Reel Media (Thumbnail & Hover Video Stream) */}
                <a
                  href={CAFE_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full relative"
                >
                  <img
                    src={reel.thumbnail}
                    alt={reel.caption}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      isHovered ? 'scale-105 brightness-75' : 'scale-100 brightness-90'
                    }`}
                  />

                  {/* Optional Hover Video Stream */}
                  {isHovered && (
                    <video
                      src={reel.videoUrl}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover z-0"
                    />
                  )}

                  {/* Gradient Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-darkgreen via-brand-darkgreen/30 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="px-3 py-1 rounded-full bg-brand-darkgreen/80 text-brand-ivory text-[10px] font-semibold uppercase tracking-wider backdrop-blur-md border border-brand-cream/15 flex items-center gap-1.5 shadow-sm">
                      <Instagram className="w-3 h-3 text-brand-tan" />
                      Reel
                    </span>

                    <span className="px-2.5 py-1 rounded-full bg-black/40 text-brand-ivory text-[10px] font-mono tracking-wider backdrop-blur-md border border-white/10">
                      {reel.duration}
                    </span>
                  </div>

                  {/* Center Play Button Pulse Indicator */}
                  <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                    <div className="w-14 h-14 rounded-full bg-brand-green/80 text-brand-ivory flex items-center justify-center backdrop-blur-md border border-brand-tan/40 shadow-lg transform group-hover:scale-110 transition-all duration-300">
                      <Play className="w-6 h-6 text-brand-tan fill-brand-tan ml-1" />
                    </div>
                  </div>

                  {/* Bottom Caption & Instagram Action */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 z-10 flex flex-col justify-end">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-brand-tan mb-1 block">
                      #{reel.tag}
                    </span>
                    
                    <p className="text-xs text-brand-ivory font-light line-clamp-2 leading-relaxed">
                      {reel.caption}
                    </p>

                    <div className="mt-4 pt-3 border-t border-brand-cream/15 flex items-center justify-between text-xs text-brand-cream/80 font-medium">
                      <span className="flex items-center gap-1.5">
                        <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
                        {reel.likes}
                      </span>

                      <span className="flex items-center gap-1 text-brand-tan group-hover:underline">
                        <span>Watch Reel on Instagram</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Swipe Hint Indicator */}
        <div className="mt-3 text-center md:hidden">
          <span className="text-[11px] font-medium text-brand-espresso/60 uppercase tracking-widest flex items-center justify-center gap-1.5">
            <span>← Swipe horizontally to view all reels →</span>
          </span>
        </div>
      </div>

      {/* Reel Modal */}
      <ReelModal reel={selectedReel} onClose={() => setSelectedReel(null)} />
    </section>
  );
};
