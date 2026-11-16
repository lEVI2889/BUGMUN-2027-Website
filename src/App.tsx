import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { LegacyPage } from './pages/LegacyPage';

export const App: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const scrollBehavior = prefersReducedMotion ? 'auto' : 'smooth';

    if (hash) {
      const id = hash.replace('#', '');
      if (id === 'hero-section' || id === 'top') {
        window.scrollTo({ top: 0, behavior: scrollBehavior });
        return;
      }

      let attempts = 0;
      const maxAttempts = 10;
      let timerId: ReturnType<typeof setTimeout>;

      const scrollToTarget = () => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: scrollBehavior });
        } else if (attempts < maxAttempts) {
          attempts++;
          timerId = setTimeout(scrollToTarget, 50);
        }
      };

      scrollToTarget();

      return () => {
        clearTimeout(timerId);
      };
    } else {
      // Instant reset on route transition without hash
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);

  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface">
      <Navbar />
      <main className="w-full pt-16 lg:pt-20 bg-surface flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/legacy" element={<LegacyPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};
