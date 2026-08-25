import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { BrandPreloader } from './components/ui/BrandPreloader';
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';

export function App() {
  const [preloaderFinished, setPreloaderFinished] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'menu'>('home');

  const handleNavigateToHome = () => {
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToMenu = () => {
    setCurrentPage('menu');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-brand-ivory text-brand-espresso font-sans selection:bg-brand-green selection:text-brand-ivory antialiased">
      {/* Brand Splash Preloader */}
      <BrandPreloader onComplete={() => setPreloaderFinished(true)} />

      {/* Main Website Structure */}
      {preloaderFinished && (
        <>
          {/* Header */}
          <Header
            currentPage={currentPage}
            onNavigateToHome={handleNavigateToHome}
            onNavigateToMenu={handleNavigateToMenu}
          />

          {/* Main Page View */}
          <main>
            {currentPage === 'home' ? (
              <HomePage onNavigateToMenu={handleNavigateToMenu} />
            ) : (
              <MenuPage onNavigateToHome={handleNavigateToHome} />
            )}
          </main>

          {/* Footer */}
          <Footer
            onNavigateToHome={handleNavigateToHome}
            onNavigateToMenu={handleNavigateToMenu}
          />
        </>
      )}
    </div>
  );
}

export default App;
