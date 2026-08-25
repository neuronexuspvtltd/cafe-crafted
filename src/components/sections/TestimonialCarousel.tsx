import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '../../data/cafeData';
import { CoffeeRingPattern } from '../ui/CoffeeRingPattern';

export const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="relative py-24 md:py-36 bg-brand-ivory overflow-hidden">
      {/* Background Motif */}
      <CoffeeRingPattern className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" size={600} variant="green" opacity={0.03} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Large Decorative Quote Icon */}
        <div className="w-16 h-16 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center mx-auto mb-8 border border-brand-green/20">
          <Quote className="w-8 h-8 text-brand-green" />
        </div>

        {/* Carousel Content Container */}
        <div className="min-h-[220px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-6 text-brand-tan">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-tan stroke-none" />
                ))}
              </div>

              {/* Serif Quote */}
              <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl text-brand-espresso leading-snug font-normal max-w-3xl">
                "{current.quote}"
              </blockquote>

              {/* Author & Role */}
              <div className="mt-8">
                <h4 className="font-serif text-xl text-brand-green font-medium">
                  {current.author}
                </h4>
                <p className="text-xs uppercase tracking-[0.2em] font-medium text-brand-espresso/60 mt-0.5">
                  {current.role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Minimal Navigation Controls */}
        <div className="mt-12 flex items-center justify-center gap-6">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-brand-tan/30 text-brand-espresso hover:bg-brand-green hover:text-brand-ivory hover:border-brand-green transition-all duration-300 flex items-center justify-center focus:outline-none"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'w-8 bg-brand-green' : 'w-2 bg-brand-tan/30'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-brand-tan/30 text-brand-espresso hover:bg-brand-green hover:text-brand-ivory hover:border-brand-green transition-all duration-300 flex items-center justify-center focus:outline-none"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
