import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { MenuCard } from '../ui/MenuCard';
import { MenuDetailModal } from '../ui/MenuDetailModal';
import { SIGNATURE_ITEMS, MenuItem } from '../../data/cafeData';
import { CoffeeRingPattern } from '../ui/CoffeeRingPattern';

export const SignatureMenu: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  return (
    <section className="relative py-24 md:py-32 bg-brand-lightcream overflow-hidden">
      {/* Background Coffee Ring Motif */}
      <CoffeeRingPattern className="-top-20 -right-20" size={500} variant="green" opacity={0.04} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="OUR HIGHLIGHTS"
          title="A little taste of Cafe Crafted"
          subtitle="A handpicked collection of our most celebrated artisanal coffees, sourdough pizzas, and house specials."
        />

        {/* Editorial Signature Grid */}
        <div className="mt-14 sm:mt-18 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SIGNATURE_ITEMS.map((item) => (
            <MenuCard key={item.id} item={item} onSelect={(selected) => setSelectedItem(selected)} />
          ))}
        </div>

        {/* Bottom CTA to View Full Menu */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="#menu"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-brand-green text-brand-ivory text-sm font-semibold uppercase tracking-[0.18em] hover:bg-brand-darkgreen transition-all transform hover:-translate-y-0.5 shadow-md group"
          >
            <Sparkles className="w-4 h-4 text-brand-tan" />
            Explore Full Menu & Categories
            <ArrowRight className="w-4 h-4 text-brand-tan group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Item Modal */}
      <MenuDetailModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </section>
  );
};
