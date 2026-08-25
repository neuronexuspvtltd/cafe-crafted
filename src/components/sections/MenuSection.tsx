import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Search, Utensils, Sparkles } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { MenuCard } from '../ui/MenuCard';
import { MenuDetailModal } from '../ui/MenuDetailModal';
import { ALL_MENU_ITEMS, MENU_CATEGORIES, MenuItem } from '../../data/cafeData';
import { CoffeeRingPattern } from '../ui/CoffeeRingPattern';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.02,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    transition: { duration: 0.18, ease: 'easeOut' },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, ease: 'easeOut' },
  },
};

export const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const filteredItems = useMemo(() => {
    return ALL_MENU_ITEMS.filter((item) => {
      const matchesCategory = activeCategory === 'ALL' || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="menu" className="relative py-24 md:py-36 bg-brand-ivory overflow-hidden">
      {/* Background Coffee Ring Motif */}
      <CoffeeRingPattern className="bottom-10 -left-20" size={540} variant="green" opacity={0.04} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="ARTISANAL SELECTION"
          title="The Crafted Menu"
          subtitle="Explore our full selection of slow-brewed coffees, handcrafted beverages, wood-fired sourdough pizzas, and gourmet fare."
        />

        {/* Search Bar */}
        <div className="mt-10 max-w-md mx-auto relative">
          <div className="relative flex items-center">
            <Search className="w-5 h-5 absolute left-4 text-brand-espresso/40 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search coffee, pizza, pasta, desserts..."
              className="w-full pl-12 pr-4 py-3.5 rounded-full bg-brand-cream/80 text-brand-espresso placeholder-brand-espresso/40 border border-brand-tan/20 focus:outline-none focus:ring-2 focus:ring-brand-green/40 text-sm font-sans transition-all shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 text-xs font-semibold uppercase text-brand-espresso/50 hover:text-brand-green"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Pills Navigation with Active Spring Indicator */}
        <div className="mt-10 flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-4 no-scrollbar">
          {MENU_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-300 focus:outline-none ${
                  isActive
                    ? 'text-brand-ivory bg-brand-green shadow-md'
                    : 'text-brand-espresso/80 bg-brand-cream/60 hover:bg-brand-cream hover:text-brand-green border border-brand-tan/15'
                }`}
              >
                <span className="relative z-10">{cat}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryPill"
                    className="absolute inset-0 bg-brand-green rounded-full shadow-md z-0"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Staggered Smooth Animated Menu Items Grid */}
        <div className="mt-12 min-h-[420px]">
          <AnimatePresence mode="wait">
            {filteredItems.length > 0 ? (
              <motion.div
                key={activeCategory + searchQuery}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredItems.map((item) => (
                  <motion.div key={item.id} variants={itemVariants}>
                    <MenuCard
                      item={item}
                      onSelect={(selected) => setSelectedItem(selected)}
                    />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-center py-16 bg-brand-cream/30 rounded-3xl border border-dashed border-brand-tan/30"
              >
                <Utensils className="w-10 h-10 text-brand-tan mx-auto mb-3 opacity-60" />
                <h3 className="font-serif text-2xl text-brand-espresso">No items found</h3>
                <p className="text-sm text-brand-espresso/60 mt-1">
                  Try searching for a different item or select another category.
                </p>
                <button
                  onClick={() => {
                    setActiveCategory('ALL');
                    setSearchQuery('');
                  }}
                  className="mt-4 px-5 py-2 rounded-full bg-brand-green text-brand-ivory text-xs uppercase tracking-wider font-medium"
                >
                  Reset Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer Note & Order Callout */}
        <div className="mt-16 text-center bg-brand-cream/50 p-8 rounded-3xl border border-brand-tan/15 max-w-2xl mx-auto flex flex-col items-center">
          <Sparkles className="w-6 h-6 text-brand-tan mb-2" />
          <h4 className="font-serif text-xl text-brand-espresso font-medium">Visiting Cafe Crafted in Ichalkaranji?</h4>
          <p className="text-xs sm:text-sm font-light text-brand-espresso/70 mt-1 max-w-lg">
            Our menu is freshly prepared every day with seasonal ingredients. Table reservations and takeaway orders are welcome.
          </p>
          <div className="mt-5 flex gap-4">
            <a
              href="#visit"
              className="px-6 py-2.5 rounded-full bg-brand-green text-brand-ivory text-xs font-semibold uppercase tracking-wider hover:bg-brand-darkgreen transition-all"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>

      {/* Item Detail Modal */}
      <MenuDetailModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </section>
  );
};
