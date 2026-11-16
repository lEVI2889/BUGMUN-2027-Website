import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface NavbarProps {
  onRegisterClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRegisterClick }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('summit');

  const isHome = location.pathname === '/' || location.pathname === '';
  const isLegacy = location.pathname === '/legacy';

  // Handle escape key, resize, and body overflow when mobile drawer is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('resize', handleResize);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (sectionId: string, navTag?: string) => {
    setMobileMenuOpen(false);
    if (navTag) {
      setActiveSection(navTag);
    }
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const scrollBehavior = prefersReducedMotion ? 'auto' : 'smooth';

    if (!isHome) {
      navigate('/#' + sectionId);
    } else {
      if (sectionId === 'hero-section') {
        window.scrollTo({ top: 0, behavior: scrollBehavior });
      } else {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: scrollBehavior });
        }
      }
    }
  };

  const handleRegisterAction = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onRegisterClick) {
      onRegisterClick();
    } else {
      scrollToSection('register-section');
    }
  };

  return (
    <>
      {/* Top Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 lg:bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe">
        <div className="h-16 lg:h-20 max-w-[1280px] mx-auto px-gutter lg:px-margin flex items-center justify-between">
          {/* Brand Logo & Title */}
          <Link to="/" className="flex items-center gap-space-sm lg:gap-space-md group" onClick={() => setActiveSection('summit')}>
            <img
              alt="BUGMUN Logo"
              className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              src="/assets/logos/Colored Logo.png"
            />
            {/* Mobile Branding Text */}
            <div className="flex flex-col lg:hidden">
              <span className="font-title-md text-title-md text-primary tracking-tight font-bold">
                BUGMUN 2027
              </span>
              <span className="font-label-protocol text-label-protocol text-secondary uppercase font-semibold">
                BRAC University
              </span>
            </div>
            {/* Desktop Branding Text */}
            <div className="hidden lg:flex flex-col">
              <span className="font-title-lg text-title-lg tracking-tight text-primary leading-tight font-bold">
                BUGMUN 2027
              </span>
              <span className="font-label-protocol text-label-protocol text-on-surface-variant uppercase tracking-widest">
                BRAC University • 5th Edition
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-gutter" aria-label="Desktop Navigation">
            <Link
              to="/"
              onClick={() => setActiveSection('summit')}
              className={`transition-colors py-2 font-label-lg text-label-lg ${
                isHome
                  ? "text-primary font-bold border-b-2 border-secondary"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              BUGMUN 2027
            </Link>
            <Link
              to="/legacy"
              className={`transition-colors py-2 font-label-lg text-label-lg ${
                isLegacy
                  ? "text-primary font-bold border-b-2 border-secondary"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              Our Legacy
            </Link>
            <button
              type="button"
              onClick={() => scrollToSection('committees-section', 'chambers')}
              className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors py-2 cursor-pointer"
            >
              Committees
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('schedule-section', 'plenary')}
              className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors py-2 cursor-pointer"
            >
              Schedule
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('news-section', 'gazette')}
              className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors py-2 cursor-pointer"
            >
              News &amp; Updates
            </button>
          </nav>

          {/* Action Buttons: Desktop & Mobile */}
          <div className="flex items-center gap-space-sm lg:gap-space-md">
            {/* Desktop Register Button */}
            <a
              href="#register-section"
              onClick={handleRegisterAction}
              className="hidden lg:inline-flex group relative items-center gap-space-xs bg-primary-container text-on-primary px-space-md py-space-sm rounded-lg hover:bg-tertiary transition-all shadow-sm"
            >
              <span className="font-label-lg text-label-lg tracking-wide">Register</span>
              <span className="bg-secondary-container text-on-secondary-container font-label-protocol text-label-protocol px-1.5 py-0.5 rounded-full uppercase tracking-wider">
                Coming Soon
              </span>
            </a>

            {/* Diplomatic Delegation Avatar Icon */}
            <div
              className="w-9 h-9 lg:w-8 lg:h-8 rounded-full bg-primary flex items-center justify-center text-on-primary shadow-sm"
              title="Diplomatic Delegation Profile"
            >
              <span className="material-symbols-outlined text-on-primary text-[18px]">
                person
              </span>
            </div>

            {/* Mobile Navigation Drawer Toggle */}
            <button
              type="button"
              id="drawer-toggle"
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden w-11 h-11 flex items-center justify-center text-primary rounded-lg hover:bg-surface-container transition-colors"
              aria-label="Open Diplomatic Navigation Drawer"
              aria-expanded={mobileMenuOpen}
              aria-controls="summit-drawer"
            >
              <span className="material-symbols-outlined text-[24px]">
                menu
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Diplomatic Mobile Navigation Drawer (Stitch Reference) */}
      <div
        id="summit-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Diplomatic Navigation Drawer"
        className={`fixed inset-0 z-50 bg-surface flex flex-col p-gutter pb-safe pt-safe overflow-y-auto overscroll-contain lg:hidden transition-transform duration-300 ease-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between h-16 flex-shrink-0 px-space-md -mx-gutter -mt-gutter bg-primary text-on-primary shadow-sm">
          <div className="flex items-center gap-space-sm min-w-0">
            <img
              alt="BUGMUN Logo"
              className="h-8 w-auto object-contain flex-shrink-0"
              src="/assets/logos/White Logo.png"
            />
            <div className="flex items-center gap-1.5 min-w-0">
              <span className="font-title-md text-title-md text-on-primary font-bold tracking-tight whitespace-nowrap">
                BUGMUN 2027
              </span>
              <span className="text-on-primary/40 font-light select-none">|</span>
              <span className="font-label-protocol text-label-protocol text-secondary-fixed uppercase font-semibold truncate">
                BRAC University
              </span>
            </div>
          </div>
          <button
            type="button"
            className="w-11 h-11 flex items-center justify-center text-on-primary/80 hover:text-on-primary hover:bg-white/10 rounded-lg transition-colors flex-shrink-0 ml-2"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close Navigation Drawer"
          >
            <span className="material-symbols-outlined text-[24px]">close</span>
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex flex-col gap-space-md mt-space-lg flex-1">
          <div className="px-space-xs">
            <span className="font-label-protocol text-label-protocol text-outline uppercase tracking-wider">
              Summit Protocol &amp; Directory
            </span>
          </div>

          <nav className="flex flex-col gap-space-xs" aria-label="Mobile Drawer Navigation">
            <button
              type="button"
              onClick={() => scrollToSection('hero-section', 'summit')}
              className={`h-12 px-space-md flex items-center justify-between rounded-lg font-title-md text-title-md transition-colors text-left ${
                isHome && activeSection === 'summit'
                  ? 'bg-surface-container text-primary font-bold'
                  : 'text-on-surface hover:bg-surface-container-low'
              }`}
            >
              <span>BUGMUN 2027</span>
              <span className="material-symbols-outlined text-outline text-[20px]">
                arrow_forward_ios
              </span>
            </button>

            <Link
              to="/legacy"
              onClick={() => setMobileMenuOpen(false)}
              className={`h-12 px-space-md flex items-center justify-between rounded-lg font-title-md text-title-md transition-colors ${
                isLegacy
                  ? 'bg-surface-container text-primary font-bold'
                  : 'text-on-surface hover:bg-surface-container-low'
              }`}
            >
              <span>Our Legacy</span>
              <span className="material-symbols-outlined text-outline text-[20px]">
                arrow_forward_ios
              </span>
            </Link>

            <button
              type="button"
              onClick={() => scrollToSection('committees-section', 'chambers')}
              className="h-12 px-space-md flex items-center justify-between rounded-lg font-title-md text-title-md text-on-surface hover:bg-surface-container-low transition-colors text-left"
            >
              <span>Committees</span>
              <span className="material-symbols-outlined text-outline text-[20px]">
                arrow_forward_ios
              </span>
            </button>

            <button
              type="button"
              onClick={() => scrollToSection('schedule-section', 'plenary')}
              className="h-12 px-space-md flex items-center justify-between rounded-lg font-title-md text-title-md text-on-surface hover:bg-surface-container-low transition-colors text-left"
            >
              <span>Schedule</span>
              <span className="material-symbols-outlined text-outline text-[20px]">
                arrow_forward_ios
              </span>
            </button>

            <button
              type="button"
              onClick={() => scrollToSection('news-section', 'gazette')}
              className="h-12 px-space-md flex items-center justify-between rounded-lg font-title-md text-title-md text-on-surface hover:bg-surface-container-low transition-colors text-left"
            >
              <span>News &amp; Updates</span>
              <span className="material-symbols-outlined text-outline text-[20px]">
                arrow_forward_ios
              </span>
            </button>
          </nav>

          {/* Drawer Registration CTA Button */}
          <div className="mt-space-md">
            <a
              href="#register-section"
              onClick={handleRegisterAction}
              className="w-full h-12 bg-primary text-on-primary flex items-center justify-center rounded-lg font-label-lg text-label-lg tracking-wide uppercase hover:bg-tertiary transition-colors shadow-sm"
            >
              Register (Coming Soon)
            </a>
          </div>

          {/* Host Secretariat Info Card */}
          <div className="mt-auto mb-space-xl p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-xs">
            <div className="flex items-center gap-space-xs text-secondary">
              <span className="material-symbols-outlined text-[18px]">verified</span>
              <span className="font-label-protocol text-label-protocol uppercase font-bold">Host Secretariat</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              International Affairs &amp; Business Conference (IABC), BRAC University. Dedicated to youth empowerment &amp; UN SDGs.
            </p>
          </div>
        </div>
      </div>

      {/* Fixed Mobile Bottom Navigation Bar (Stitch Reference) */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-40 pb-safe bg-surface/90 backdrop-blur-xl border-t border-outline-variant/30 shadow-[0_-1px_8px_rgba(0,0,0,0.04)] lg:hidden"
        aria-label="Mobile Quick Navigation"
      >
        <div className="flex justify-around items-center h-20 px-space-sm">
          {/* 1. Summit */}
          <button
            type="button"
            onClick={() => scrollToSection('hero-section', 'summit')}
            className={`flex flex-col items-center justify-center gap-1 w-16 h-16 transition-colors ${
              isHome && activeSection === 'summit'
                ? 'text-primary font-bold'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
            aria-label="Summit Portal"
          >
            <span className="material-symbols-outlined text-[22px]">assured_workload</span>
            <span className="font-label-protocol text-label-protocol uppercase">Summit</span>
          </button>

          {/* 2. Chambers */}
          <button
            type="button"
            onClick={() => scrollToSection('committees-section', 'chambers')}
            className={`flex flex-col items-center justify-center gap-1 w-16 h-16 transition-colors ${
              isHome && activeSection === 'chambers'
                ? 'text-primary font-bold'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
            aria-label="Chambers and Committees"
          >
            <span className="material-symbols-outlined text-[22px]">groups</span>
            <span className="font-label-protocol text-label-protocol uppercase">Chambers</span>
          </button>

          {/* 3. Plenary */}
          <button
            type="button"
            onClick={() => scrollToSection('schedule-section', 'plenary')}
            className={`flex flex-col items-center justify-center gap-1 w-16 h-16 transition-colors ${
              isHome && activeSection === 'plenary'
                ? 'text-primary font-bold'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
            aria-label="Plenary Schedule"
          >
            <span className="material-symbols-outlined text-[22px]">event_note</span>
            <span className="font-label-protocol text-label-protocol uppercase">Plenary</span>
          </button>

          {/* 4. Gazette */}
          <button
            type="button"
            onClick={() => scrollToSection('news-section', 'gazette')}
            className={`flex flex-col items-center justify-center gap-1 w-16 h-16 transition-colors ${
              isHome && activeSection === 'gazette'
                ? 'text-primary font-bold'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
            aria-label="Gazette News and Updates"
          >
            <span className="material-symbols-outlined text-[22px]">feed</span>
            <span className="font-label-protocol text-label-protocol uppercase">Gazette</span>
          </button>
        </div>
      </nav>
    </>
  );
};
