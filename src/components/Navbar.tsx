import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface NavbarProps {
  onRegisterClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRegisterClick }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isHome = location.pathname === '/' || location.pathname === '';
  const isLegacy = location.pathname === '/legacy';

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    if (!isHome) {
      navigate('/#' + sectionId);
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRegisterAction = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onRegisterClick) {
      onRegisterClick();
    } else {
      scrollToSection('register-section');
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-[1280px] mx-auto px-margin flex items-center justify-between">
        {/* Brand Logo & Title */}
        <Link to="/" className="flex items-center gap-space-md group">
          <img
            alt="BUGMUN Logo"
            className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            src="/assets/logos/Colored Logo.png"
          />
          <div className="flex flex-col">
            <span className="font-title-lg text-title-lg tracking-tight text-primary leading-tight">
              BUGMUN 2027
            </span>
            <span className="font-label-protocol text-label-protocol text-on-surface-variant uppercase tracking-widest">
              BRAC University • 5th Edition
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-gutter">
          <Link
            to="/"
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
            onClick={() => scrollToSection('committees-section')}
            className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors py-2 cursor-pointer"
          >
            Committees
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('schedule-section')}
            className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors py-2 cursor-pointer"
          >
            Schedule
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('news-section')}
            className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors py-2 cursor-pointer"
          >
            News &amp; Updates
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-space-md">
          <a
            href="#register-section"
            onClick={handleRegisterAction}
            className="group relative inline-flex items-center gap-space-xs bg-primary-container text-on-primary px-space-md py-space-sm rounded-lg hover:bg-tertiary transition-all shadow-sm"
          >
            <span className="font-label-lg text-label-lg tracking-wide">Register</span>
            <span className="bg-secondary-container text-on-secondary-container font-label-protocol text-label-protocol px-1.5 py-0.5 rounded-full uppercase tracking-wider">
              Coming Soon
            </span>
          </a>

          <div
            className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary shadow-sm"
            title="Diplomatic Delegation Profile"
          >
            <span className="material-symbols-outlined text-on-primary text-[18px]">
              person
            </span>
          </div>

          {/* Mobile menu toggle button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-primary hover:text-secondary transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-container-lowest border-b border-outline-variant px-margin py-4 shadow-lg animate-fadeIn">
          <div className="flex flex-col gap-3">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2 px-3 rounded-lg text-sm font-semibold ${
                isHome ? "bg-primary text-on-primary" : "text-on-surface hover:bg-surface-container-low"
              }`}
            >
              BUGMUN 2027
            </Link>
            <Link
              to="/legacy"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2 px-3 rounded-lg text-sm font-semibold ${
                isLegacy ? "bg-primary text-on-primary" : "text-on-surface hover:bg-surface-container-low"
              }`}
            >
              Our Legacy
            </Link>
            <button
              type="button"
              onClick={() => scrollToSection('committees-section')}
              className="text-left py-2 px-3 rounded-lg text-sm font-semibold text-on-surface hover:bg-surface-container-low"
            >
              Committees
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('schedule-section')}
              className="text-left py-2 px-3 rounded-lg text-sm font-semibold text-on-surface hover:bg-surface-container-low"
            >
              Schedule
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('news-section')}
              className="text-left py-2 px-3 rounded-lg text-sm font-semibold text-on-surface hover:bg-surface-container-low"
            >
              News &amp; Updates
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
