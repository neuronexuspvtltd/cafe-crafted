import React, { useState } from 'react';
import { Menu, Coffee } from 'lucide-react';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { MobileNav } from './MobileNav';
import { CAFE_INFO } from '../../data/cafeData';
import logoImg from '../../assets/logo.png';

export const Header: React.FC = () => {
  const { isScrolled } = useScrollPosition();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Our Story', href: '#story' },
    { name: 'Menu', href: '#menu' },
    { name: 'Experience', href: '#experience' },
    { name: 'Gallery', href: '#instagram' },
    { name: 'Visit Us', href: '#visit' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out ${
          isScrolled
            ? 'glass-header py-3.5 shadow-card border-b border-brand-tan/15'
            : 'bg-gradient-to-b from-[#181210]/90 via-[#181210]/40 to-transparent py-5 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Name */}
          <a href="#home" className="flex items-center gap-3 group focus:outline-none rounded-lg p-1">
            <div className="relative overflow-hidden rounded-full p-0.5 border border-amber-300/40 transition-transform duration-300 group-hover:scale-105 shadow-md">
              <img
                src={logoImg}
                alt={CAFE_INFO.name}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span
                className={`font-serif text-xl sm:text-2xl font-normal tracking-wide transition-colors ${
                  isScrolled ? 'text-brand-green' : 'text-[#FCFAF4]'
                }`}
              >
                Cafe Crafted
              </span>
              <span className={`text-[10px] uppercase tracking-[0.2em] font-medium -mt-1 ${
                isScrolled ? 'text-brand-espresso/60' : 'text-amber-200/80'
              }`}>
                Ichalkaranji
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium tracking-wider uppercase transition-all duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-300 after:transition-all hover:after:w-full ${
                  isScrolled
                    ? 'text-brand-espresso/90 hover:text-brand-green'
                    : 'text-stone-200 hover:text-amber-300'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#menu"
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 shadow-sm ${
                isScrolled
                  ? 'bg-brand-green text-brand-ivory hover:bg-brand-darkgreen hover:shadow-md'
                  : 'bg-white/10 backdrop-blur-md text-[#FCFAF4] hover:bg-white/20 border border-white/30 hover:border-amber-300/60 shadow-lg'
              }`}
            >
              <Coffee className="w-3.5 h-3.5 text-amber-300" />
              View Menu
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileOpen(true)}
            className={`md:hidden p-2 rounded-full transition-colors focus:outline-none ${
              isScrolled
                ? 'text-brand-espresso hover:bg-brand-cream'
                : 'text-brand-ivory hover:bg-white/10'
            }`}
            aria-label="Open navigation menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileNav
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
};
