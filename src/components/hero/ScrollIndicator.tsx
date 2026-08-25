import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const ScrollIndicator: React.FC = () => {
  return (
    <a
      href="#story"
      className="group flex flex-col items-center gap-2 cursor-pointer focus:outline-none"
      aria-label="Scroll down to story"
    >
      <span className="text-[11px] uppercase tracking-[0.25em] font-medium text-brand-cream/80 group-hover:text-brand-tan transition-colors">
        Scroll To Explore
      </span>
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="w-7 h-10 rounded-full border border-brand-cream/30 flex items-center justify-center p-1 group-hover:border-brand-tan/60 transition-colors"
      >
        <ChevronDown className="w-4 h-4 text-brand-cream/80 group-hover:text-brand-tan transition-colors" />
      </motion.div>
    </a>
  );
};
