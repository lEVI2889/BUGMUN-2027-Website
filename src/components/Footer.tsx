import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-tertiary text-on-tertiary">
      <div className="max-w-[1280px] mx-auto px-margin pt-space-xl pb-space-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-gutter mb-space-xl">
          {/* Organization & Branding (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-space-md">
            <div className="flex items-center gap-space-md">
              <img
                alt="BUGMUN Logo"
                className="h-8 w-auto object-contain"
                src="/assets/logos/Colored Logo.png"
              />
              <div className="flex flex-col">
                <span className="font-title-lg text-title-lg text-tertiary-fixed tracking-tight">
                  BUGMUN 2027
                </span>
                <span className="font-label-protocol text-label-protocol text-tertiary-fixed-dim uppercase tracking-wider">
                  Global Model United Nations
                </span>
              </div>
            </div>
            <p className="font-body-sm text-body-sm text-tertiary-fixed-dim max-w-md">
              Organized by IABC | International Association of Business Communicators, BRAC University.
              Fostering diplomatic discourse, international statecraft, and multilateral cooperation among global leaders of tomorrow.
            </p>
            <div className="flex items-center gap-space-sm">
              <a
                aria-label="Global Network"
                className="w-8 h-8 rounded-lg bg-tertiary-container flex items-center justify-center text-tertiary-fixed hover:bg-secondary-container hover:text-on-secondary-container transition-colors"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-[18px]">public</span>
              </a>
              <a
                aria-label="Media Feed"
                className="w-8 h-8 rounded-lg bg-tertiary-container flex items-center justify-center text-tertiary-fixed hover:bg-secondary-container hover:text-on-secondary-container transition-colors"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-[18px]">hub</span>
              </a>
              <a
                aria-label="Broadcast"
                className="w-8 h-8 rounded-lg bg-tertiary-container flex items-center justify-center text-tertiary-fixed hover:bg-secondary-container hover:text-on-secondary-container transition-colors"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-[18px]">podcasts</span>
              </a>
              <a
                aria-label="Documentation"
                className="w-8 h-8 rounded-lg bg-tertiary-container flex items-center justify-center text-tertiary-fixed hover:bg-secondary-container hover:text-on-secondary-container transition-colors"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Official BUGMUN Conference Guide & Documentation will be released in Q1 2027.");
                }}
              >
                <span className="material-symbols-outlined text-[18px]">description</span>
              </a>
            </div>
          </div>

          {/* Conference Navigation (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-space-sm">
            <span className="font-label-md text-label-md uppercase tracking-wider text-secondary-container">
              Conference
            </span>
            <Link
              to="/"
              className="font-body-sm text-body-sm text-tertiary-fixed-dim hover:text-on-tertiary transition-colors"
            >
              Plenary Portal
            </Link>
            <a
              href="/#committees-section"
              className="font-body-sm text-body-sm text-tertiary-fixed-dim hover:text-on-tertiary transition-colors"
            >
              Chambers &amp; Topics
            </a>
            <a
              href="/#schedule-section"
              className="font-body-sm text-body-sm text-tertiary-fixed-dim hover:text-on-tertiary transition-colors"
            >
              Itinerary &amp; Order
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert("Standard UN Rules of Procedure and delegate guidelines are currently in editorial review.");
              }}
              className="font-body-sm text-body-sm text-tertiary-fixed-dim hover:text-on-tertiary transition-colors"
            >
              Protocol Guidelines
            </a>
          </div>

          {/* Legacy Archive Navigation (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-space-sm">
            <span className="font-label-md text-label-md uppercase tracking-wider text-secondary-container">
              Our Legacy
            </span>
            <Link
              to="/legacy"
              className="font-body-sm text-body-sm text-tertiary-fixed-dim hover:text-on-tertiary transition-colors"
            >
              Editions Archive
            </Link>
            <Link
              to="/legacy#edition-2014"
              className="font-body-sm text-body-sm text-tertiary-fixed-dim hover:text-on-tertiary transition-colors"
            >
              BUGMUN 2014
            </Link>
            <Link
              to="/legacy#edition-2016"
              className="font-body-sm text-body-sm text-tertiary-fixed-dim hover:text-on-tertiary transition-colors"
            >
              BUGMUN 2016-2020
            </Link>
            <Link
              to="/legacy#gallery-section"
              className="font-body-sm text-body-sm text-tertiary-fixed-dim hover:text-on-tertiary transition-colors"
            >
              Photo Gallery
            </Link>
          </div>

          {/* Secretariat Contact (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-space-sm">
            <span className="font-label-md text-label-md uppercase tracking-wider text-secondary-container">
              Secretariat Contact
            </span>
            <p className="font-body-sm text-body-sm text-tertiary-fixed-dim leading-relaxed">
              BRAC University, Kha 224 Pragati Sarani, Merul Badda, Dhaka 1212, Bangladesh
            </p>
            <div className="flex items-center gap-space-xs text-tertiary-fixed mt-space-xs">
              <span className="material-symbols-outlined text-[16px]">mail</span>
              <a
                className="font-body-sm text-body-sm hover:text-secondary-fixed transition-colors"
                href="mailto:club.iabc@g.bracu.ac.bd"
              >
                club.iabc@g.bracu.ac.bd
              </a>
            </div>
            <div className="flex items-center gap-space-xs text-tertiary-fixed">
              <span className="material-symbols-outlined text-[16px]">domain</span>
              <span className="font-body-sm text-body-sm text-tertiary-fixed-dim">
                IABC BRAC University
              </span>
            </div>
          </div>
        </div>

        {/* Legal & Standards Bottom Ribbon */}
        <div className="pt-space-md border-t border-outline/20 flex flex-col md:flex-row items-center justify-between gap-space-sm font-label-md text-label-md text-tertiary-fixed-dim">
          <p>© 2027 BUGMUN Secretariat &amp; IABC BRAC University. All rights reserved.</p>
          <p className="text-tertiary-fixed-dim/80">Diplomatic Standards • UN SDGs Alignment</p>
        </div>
      </div>
    </footer>
  );
};
