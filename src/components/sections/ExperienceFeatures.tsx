import React from 'react';
import { motion } from 'framer-motion';
import { UtensilsCrossed, Sparkles, Users, Coffee } from 'lucide-react';
import { EXPERIENCE_FEATURES } from '../../data/cafeData';
import { SectionHeading } from '../ui/SectionHeading';

const iconMap = {
  utensils: UtensilsCrossed,
  sparkles: Sparkles,
  users: Users,
  coffee: Coffee,
};

export const ExperienceFeatures: React.FC = () => {
  return (
    <section className="relative py-24 md:py-32 bg-brand-ivory overflow-hidden border-t border-b border-brand-tan/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="THE ESSENCE"
          title="What makes Cafe Crafted unique"
          subtitle="Four core principles guiding our kitchen, atmosphere, and hospitality."
        />

        {/* Minimal Feature Cards Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {EXPERIENCE_FEATURES.map((feature, idx) => {
            const IconComponent = iconMap[feature.iconName] || Coffee;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group p-8 rounded-3xl bg-brand-cream/40 border border-brand-tan/15 hover:border-brand-green/30 hover:bg-brand-cream/80 transition-all duration-300 shadow-card flex flex-col justify-between"
              >
                <div>
                  {/* Icon Badge */}
                  <div className="w-12 h-12 rounded-2xl bg-brand-green/10 text-brand-green flex items-center justify-center mb-6 group-hover:bg-brand-green group-hover:text-brand-ivory transition-all duration-300 shadow-sm border border-brand-green/20">
                    <IconComponent className="w-6 h-6 stroke-[1.5]" />
                  </div>

                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-tan block mb-1">
                    {feature.subtitle}
                  </span>

                  <h3 className="font-serif text-2xl text-brand-espresso font-normal group-hover:text-brand-green transition-colors">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm font-light text-brand-espresso/70 leading-relaxed font-sans">
                    {feature.description}
                  </p>
                </div>

                {/* Subtle bottom line */}
                <div className="mt-6 pt-4 border-t border-brand-tan/10 flex items-center justify-between text-xs text-brand-tan font-medium">
                  <span>0{idx + 1}</span>
                  <span className="h-px w-8 bg-brand-tan/30 group-hover:w-14 transition-all" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
