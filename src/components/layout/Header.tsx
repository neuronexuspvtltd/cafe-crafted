import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu as MenuIcon, Coffee } from 'lucide-react';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { MobileNav } from './MobileNav';
import { CAFE_INFO } from '../../data/cafeData';
import logoImg from '../../assets/logo.png';

interface HeaderProps {
  currentPage: 'home' | 'menu';
  onNavigateToHome: () => void;
  onNavigateToMenu: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigateToHome,
  onNavigateToMenu,
}) => {
  const { isScrolled } = useScrollPosition();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const homeNavLinks = [
    { name: 'Home', href: '#home', isMenuPage: false },
    { name: 'Our Story', href: '#story', isMenuPage: false },
    { name: 'Menu', href: '#menu', isMenuPage: true },
    { name: 'Experience', href: '#experience', isMenuPage: false },
    { name: 'Gallery', href: '#instagram', isMenuPage: false },
    { name: 'Visit Us', href: '#visit', isMenuPage: false },
  ];

  const handleLinkClick = (isMenuPage: boolean, href: string) => {
    setMobileNavOpen(false);
    if (isMenuPage) {
      onNavigateToMenu();
    } else {
      if (currentPage === 'menu') {
        onNavigateToHome();
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled || currentPage === 'menu'
            ? 'glass-header py-3 border-b border-brand-tan/20 shadow-sm text-brand-espresso'
            : 'bg-gradient-to-b from-brand-darkgreen/90 via-brand-darkgreen/40 to-transparent py-5 text-brand-ivory'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Badge */}
          <button
            onClick={onNavigateToHome}
            className="flex items-center gap-3 group focus:outline-none cursor-pointer"
          >
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-brand-tan/80 shadow-md group-hover:scale-105 transition-transform bg-brand-green">
              <img
                src={logoImg}
                alt={CAFE_INFO.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className={`font-serif text-xl sm:text-2xl font-normal tracking-wide leading-none transition-colors ${
                isScrolled || currentPage === 'menu' ? 'text-brand-espresso' : 'text-brand-ivory'
              }`}>
                {CAFE_INFO.name}
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-brand-tan font-medium mt-0.5">
                Ichalkaranji
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {homeNavLinks.map((link) => {
              const isActive = link.isMenuPage ? currentPage === 'menu' : currentPage === 'home' && link.name === 'Home';
              return (
                <a
                  key={link.name}
                  href={link.isMenuPage ? '#menu' : link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.isMenuPage, link.href);
                  }}
                  className={`text-xs font-semibold uppercase tracking-[0.2em] transition-all relative py-1 cursor-pointer ${
                    isActive
                      ? 'text-brand-green'
                      : isScrolled || currentPage === 'menu'
                      ? 'text-brand-espresso/80 hover:text-brand-green'
                      : 'text-brand-ivory/80 hover:text-brand-tan'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-tan rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Primary View Menu CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onNavigateToMenu}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm flex items-center gap-2 cursor-pointer border ${
                currentPage === 'menu'
                  ? 'bg-brand-green text-brand-ivory border-brand-green'
                  : isScrolled
                  ? 'bg-brand-green text-brand-ivory hover:bg-brand-darkgreen border-brand-green/30'
                  : 'bg-brand-cream/15 text-brand-ivory hover:bg-brand-cream/30 border-brand-cream/30 backdrop-blur-md'
              }`}
            >
              <Coffee className="w-3.5 h-3.5 text-brand-tan" />
              <span>{currentPage === 'menu' ? 'Full Menu Active' : 'View Menu'}</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileNavOpen(true)}
            className={`md:hidden p-2 rounded-full transition-colors focus:outline-none ${
              isScrolled || currentPage === 'menu'
                ? 'text-brand-espresso bg-brand-cream/60 hover:bg-brand-cream'
                : 'text-brand-ivory bg-brand-cream/10 hover:bg-brand-cream/20'
            }`}
            aria-label="Open mobile menu"
          >
            <MenuIcon className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileNav
        isOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
        navLinks={homeNavLinks}
        currentPage={currentPage}
        onNavigateToHome={onNavigateToHome}
        onNavigateToMenu={onNavigateToMenu}
      />
    </>
  );
};
