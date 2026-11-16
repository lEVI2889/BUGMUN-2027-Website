import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <>
      {/* =========================================================================
          MOBILE FOOTER (Approved Stitch Reference: Light surface, compact stack, mb-20)
          ========================================================================= */}
      <footer className="w-full bg-surface-container-lowest px-gutter py-space-xl mt-space-xl flex flex-col gap-space-md mb-20 lg:hidden border-t border-outline-variant/30">
        <div className="flex flex-col gap-space-xs">
          <span className="font-title-md text-title-md text-primary font-bold">BUGMUN 2027</span>
          <span className="font-label-protocol text-label-protocol text-secondary uppercase font-semibold">
            IABC BRAC UNIVERSITY
          </span>
        </div>
        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
          Organized by the International Affairs &amp; Business Conference (IABC) at BRAC University. Grounded in diplomatic decorum and aligned with the United Nations Sustainable Development Goals (SDGs).
        </p>
        <div className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-secondary text-[18px]">mail</span>
            <a className="hover:text-primary underline decoration-secondary" href="mailto:club.iabc@g.bracu.ac.bd">
              club.iabc@g.bracu.ac.bd
            </a>
          </div>
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-secondary text-[18px]">location_on</span>
            <span>Merul Badda, Dhaka 1212, Bangladesh</span>
          </div>
        </div>
        <div className="flex items-center gap-space-md pt-space-xs">
          <a
            aria-label="Global Network"
            className="w-11 h-11 rounded-lg bg-surface-container-low flex items-center justify-center text-primary hover:bg-surface-container transition-colors shadow-sm"
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-[20px]">public</span>
          </a>
          <a
            aria-label="Summit Communications"
            className="w-11 h-11 rounded-lg bg-surface-container-low flex items-center justify-center text-primary hover:bg-surface-container transition-colors shadow-sm"
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-[20px]">forum</span>
          </a>
          <a
            aria-label="Official Portal"
            className="w-11 h-11 rounded-lg bg-surface-container-low flex items-center justify-center text-primary hover:bg-surface-container transition-colors shadow-sm"
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-[20px]">share</span>
          </a>
        </div>
        <div className="pt-space-xs border-t border-outline-variant/30">
          <span className="font-label-protocol text-label-protocol text-outline uppercase tracking-wider block">
            BUGMUN 2027 | UNITED NATIONS SUSTAINABLE DEVELOPMENT GOALS INITIATIVE
          </span>
        </div>
      </footer>

      {/* =========================================================================
          DESKTOP FOOTER (Approved Desktop Reference: Dark tertiary, 12-col grid)
          ========================================================================= */}
      <footer className="hidden lg:block w-full bg-tertiary text-on-tertiary">
        <div className="max-w-[1280px] mx-auto px-margin pt-space-xl pb-space-lg">
          <div className="grid grid-cols-12 gap-gutter mb-space-xl">
            {/* Organization & Branding (5 cols) */}
            <div className="col-span-5 flex flex-col gap-space-md">
              <div className="flex items-center gap-space-md">
                <img
                  alt="BUGMUN Logo"
                  className="h-8 w-auto object-contain"
                  src="/assets/logos/White Logo.png"
                />
                <div className="flex flex-col">
                  <span className="font-title-lg text-title-lg text-tertiary-fixed tracking-tight font-bold">
                    BUGMUN 2027
                  </span>
                  <span className="font-label-protocol text-label-protocol text-tertiary-fixed-dim uppercase tracking-wider">
                    Global Model United Nations
                  </span>
                </div>
              </div>
              <p className="font-body-sm text-body-sm text-tertiary-fixed-dim max-w-md leading-relaxed">
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
                  aria-label="Documentation Archive"
                  className="w-8 h-8 rounded-lg bg-tertiary-container flex items-center justify-center text-tertiary-fixed hover:bg-secondary-container hover:text-on-secondary-container transition-colors"
                  href="/#news-section"
                  title="Official Dispatches & Documentation"
                >
                  <span className="material-symbols-outlined text-[18px]">description</span>
                </a>
              </div>
            </div>

            {/* Conference Navigation (2 cols) */}
            <div className="col-span-2 flex flex-col gap-space-sm">
              <span className="font-label-md text-label-md uppercase tracking-wider text-secondary-container font-semibold">
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
                href="/#about-section"
                className="font-body-sm text-body-sm text-tertiary-fixed-dim hover:text-on-tertiary transition-colors"
              >
                Protocol Guidelines
              </a>
            </div>

            {/* Legacy Archive Navigation (2 cols) */}
            <div className="col-span-2 flex flex-col gap-space-sm">
              <span className="font-label-md text-label-md uppercase tracking-wider text-secondary-container font-semibold">
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
            <div className="col-span-3 flex flex-col gap-space-sm">
              <span className="font-label-md text-label-md uppercase tracking-wider text-secondary-container font-semibold">
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
          <div className="pt-space-md border-t border-outline/20 flex flex-row items-center justify-between gap-space-sm font-label-md text-label-md text-tertiary-fixed-dim">
            <p>© 2027 BUGMUN Secretariat &amp; IABC BRAC University. All rights reserved.</p>
            <p className="text-tertiary-fixed-dim/80">Diplomatic Standards • UN SDGs Alignment</p>
          </div>
        </div>
      </footer>
    </>
  );
};
