import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../../assets/logo.png';
import { CAFE_INFO } from '../../data/cafeData';

interface BrandPreloaderProps {
  onComplete?: () => void;
  duration?: number;
}

export const BrandPreloader: React.FC<BrandPreloaderProps> = ({
  onComplete,
  duration = 2000,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      if (onComplete) onComplete();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 bg-brand-darkgreen text-brand-ivory flex flex-col items-center justify-center p-6 select-none overflow-hidden"
        >
          {/* Ambient Grain & Green Radial Lighting */}
          <div className="absolute inset-0 bg-grain pointer-events-none opacity-30" />
          <div className="absolute w-[450px] h-[450px] bg-brand-green/25 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative flex flex-col items-center max-w-sm text-center">
            {/* Logo Badge Container with Rotating Gold & Green Ring */}
            <div className="relative w-32 h-32 sm:w-36 sm:h-36 flex items-center justify-center mb-8">
              {/* Rotating outer dash ring */}
              <motion.svg
                className="absolute inset-0 w-full h-full text-brand-tan"
                viewBox="0 0 100 100"
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              >
                <circle
                  cx="50"
                  cy="50"
                  r="46"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeDasharray="6 8 18 4"
                  opacity="0.8"
                />
              </motion.svg>

              {/* Pulsing inner glow ring */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: [0.85, 1.08, 1], opacity: [0.4, 0.8, 0.5] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-2 rounded-full border border-brand-cream/30"
              />

              {/* Official Logo Badge Image */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden p-0.5 border-2 border-brand-tan/80 shadow-[0_0_35px_rgba(0,86,61,0.6)] bg-brand-green"
              >
                <img
                  src={logoImg}
                  alt={CAFE_INFO.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </motion.div>
            </div>

            {/* Brand Title */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-serif text-3xl sm:text-4xl text-brand-ivory font-normal tracking-wide"
            >
              {CAFE_INFO.name}
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="font-serif italic text-base sm:text-lg text-brand-tan mt-2 font-light"
            >
              "{CAFE_INFO.tagline}"
            </motion.p>

            {/* Progress Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="w-40 h-0.5 bg-brand-cream/15 rounded-full overflow-hidden mt-8"
            >
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '0%' }}
                transition={{ duration: 1.8, ease: 'easeInOut' }}
                className="w-full h-full bg-brand-tan rounded-full"
              />
            </motion.div>

            {/* Loading text */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.4, 0.9, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="text-[10px] font-semibold uppercase tracking-[0.3em] text-brand-cream/70 mt-3"
            >
              Crafting your experience
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
