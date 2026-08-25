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
  duration = 1800,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Prevent mobile body scroll during preloader
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = '';
      if (onComplete) onComplete();
    }, duration);

    return () => {
      document.body.style.overflow = '';
      clearTimeout(timer);
    };
  }, [duration, onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] bg-brand-darkgreen text-brand-ivory flex flex-col items-center justify-center p-6 select-none overflow-hidden touch-none"
          style={{ willChange: 'opacity' }}
        >
          {/* Hardware-Accelerated Ambient Glow */}
          <div className="absolute w-[350px] h-[350px] bg-brand-green/30 blur-[90px] rounded-full pointer-events-none" />

          <div className="relative flex flex-col items-center max-w-sm text-center">
            {/* Logo Badge Container with Hardware-Accelerated CSS Ring Animations */}
            <div className="relative w-32 h-32 sm:w-36 sm:h-36 flex items-center justify-center mb-6">
              {/* Rotating outer dash ring (GPU-accelerated CSS spin) */}
              <svg
                className="absolute inset-0 w-full h-full text-brand-tan animate-spin-hardware"
                viewBox="0 0 100 100"
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
              </svg>

              {/* Inner glow ring (GPU-accelerated CSS pulse) */}
              <div className="absolute inset-2 rounded-full border border-brand-cream/30 animate-pulse-hardware" />

              {/* Official Logo Badge Image */}
              <div className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden p-0.5 border-2 border-brand-tan/80 shadow-[0_0_25px_rgba(0,86,61,0.5)] bg-brand-green">
                <img
                  src={logoImg}
                  alt={CAFE_INFO.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            {/* Brand Title */}
            <h1 className="font-serif text-3xl sm:text-4xl text-brand-ivory font-normal tracking-wide">
              {CAFE_INFO.name}
            </h1>

            {/* Tagline */}
            <p className="font-serif italic text-sm sm:text-base text-brand-tan mt-1.5 font-light">
              "{CAFE_INFO.tagline}"
            </p>

            {/* GPU-Accelerated Progress Bar */}
            <div className="w-36 h-0.5 bg-brand-cream/20 rounded-full overflow-hidden mt-6">
              <div className="w-full h-full bg-brand-tan rounded-full animate-progress-fill" />
            </div>

            {/* Loading Text */}
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-brand-cream/70 mt-3.5">
              Crafting your experience
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
