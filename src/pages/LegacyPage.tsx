import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MILESTONES_DATA, GALLERY_PLATES, GalleryPlate } from '../data/legacy';
import { LightboxModal } from '../components/LightboxModal';

export const LegacyPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activePlate, setActivePlate] = useState<GalleryPlate | null>(null);

  const filteredPlates = selectedCategory === 'all'
    ? GALLERY_PLATES
    : GALLERY_PLATES.filter((plate) => plate.category === selectedCategory);

  return (
    <div className="flex flex-col w-full">
      {/* =========================================================================
          SECTION A: LEGACY HERO SECTION
          ========================================================================= */}
      <section className="relative w-full bg-surface-container-lowest overflow-hidden py-space-xl">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(80,196,253,0.12),rgba(255,255,255,0))] pointer-events-none"></div>
        <div className="max-w-[1240px] mx-auto px-margin relative z-10">
          {/* Breadcrumb & Diplomatic Metadata Header */}
          <div className="flex items-center justify-between pb-space-md mb-space-lg">
            <div className="flex items-center gap-space-xs text-on-surface-variant font-label-protocol text-label-protocol uppercase tracking-widest">
              <span className="text-secondary font-bold">Archives &amp; Annals</span>
              <span>/</span>
              <span>BUGMUN Historical Registry</span>
              <span>/</span>
              <span className="text-primary font-bold">Series 2014–2027</span>
            </div>
            <div className="hidden md:flex items-center gap-space-sm bg-surface-container-low px-space-md py-1 rounded-full text-on-surface-variant font-label-protocol text-label-protocol uppercase tracking-wider">
              <span className="inline-block w-2 h-2 rounded-full bg-secondary-container"></span>
              <span>Exhibition Protocol: Declassified Public Record</span>
            </div>
          </div>

          {/* Main Headline Typography Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-end mb-space-xl">
            <div className="lg:col-span-8 flex flex-col gap-space-sm">
              <span className="font-label-protocol text-label-protocol uppercase tracking-[0.2em] text-secondary font-bold">
                BRAC University Model United Nations Archive
              </span>
              <h1 className="font-headline-lg text-headline-lg text-primary leading-tight tracking-tight">
                The Legacy of BUGMUN
              </h1>
              <p className="font-title-md text-title-md text-primary-container italic font-serif">
                A Decade of Multilateral Dialogue, Leadership, and Diplomatic Excellence (2014–2027)
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col justify-end">
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Curated under the custody of the International Association of Business Communicators (IABC), BRAC University. Preserving sovereign collegiate parliamentary procedure and visionary youth statecraft in South Asia.
              </p>
            </div>
          </div>

          {/* Hero Visual Composition with Curated Frame */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            {/* Main Archival Centerpiece (8 cols) */}
            <div className="lg:col-span-8 relative">
              <div className="bg-surface-container rounded-xl overflow-hidden shadow-xl p-space-sm">
                <div className="relative w-full h-[460px] rounded-lg overflow-hidden group">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    alt="BUGMUN 2014 Archival Plenary"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHQVMvVHwQQlCY0sfrSQMOhcEXlHUwvrcgLoXlmbNaCRnFIYrSibvCw4IkUulsRM2PDm2eDrOgrT740GNxRB08P_RN6jw-PH3V5v49vOaIB4qOAtdWn46Oa7SJqR5cpMThXQPB5kvlYtRuKL94dSWmjF6i2aLqZNQGXchWPapcZYehgXElYJSAsFD8TjphAJfjLs40fR5NxJeTPEWG1O-DwghWMN_mOfrFaTC05as"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
                  {/* Bottom Scrim Citation Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-space-lg text-on-primary flex flex-col md:flex-row items-start md:items-end justify-between gap-space-md">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="bg-secondary text-on-secondary font-label-protocol text-label-protocol px-2 py-0.5 rounded uppercase font-semibold">
                          Archival Plate 01
                        </span>
                        <span className="font-label-protocol text-label-protocol text-secondary-fixed uppercase tracking-wider font-semibold">
                          Session Plenary 2014
                        </span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm font-serif text-white">
                        Opening of the Historic First Assembly
                      </h3>
                      <p className="font-body-sm text-body-sm text-surface-variant max-w-lg mt-1 leading-relaxed">
                        Delegates from 14 regional institutions convene in Dhaka to inaugurate the BUGMUN multilateral charter.
                      </p>
                    </div>
                    <div className="text-right font-label-protocol text-label-protocol text-tertiary-fixed-dim whitespace-nowrap">
                      <span>CATALOG NO. BGM-ARC-1401</span>
                      <br />
                      <span>AUTHENTICATED IABC ARCHIVES</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Archival Timeline Indicator Ribbon (4 cols) */}
            <div className="lg:col-span-4 flex flex-col gap-space-md">
              <div className="bg-surface-container-low p-space-lg rounded-xl shadow-sm flex flex-col justify-between h-[460px]">
                <div>
                  <div className="flex items-center justify-between pb-space-sm mb-space-md">
                    <span className="font-label-protocol text-label-protocol uppercase tracking-widest text-primary font-bold">
                      Chronology Milestones
                    </span>
                    <span className="material-symbols-outlined text-secondary text-[20px]">
                      account_balance
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-lg">
                    Explore key turning points spanning four landmark summits that reshaped diplomatic education in Bangladesh.
                  </p>

                  {/* Milestone Step Tracker */}
                  <div className="space-y-space-md">
                    <a
                      className="group flex items-center justify-between p-space-sm rounded-lg hover:bg-surface-container transition-all"
                      href="#edition-2014"
                    >
                      <div className="flex items-center gap-space-md">
                        <span className="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-label-protocol text-label-protocol font-bold group-hover:bg-secondary transition-colors">
                          01
                        </span>
                        <div>
                          <p className="font-title-md text-title-md text-primary font-semibold leading-tight">
                            BUGMUN 2014
                          </p>
                          <p className="font-label-protocol text-label-protocol text-on-surface-variant uppercase">
                            The Foundational Chapter
                          </p>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </a>

                    <a
                      className="group flex items-center justify-between p-space-sm rounded-lg hover:bg-surface-container transition-all"
                      href="#edition-2016"
                    >
                      <div className="flex items-center gap-space-md">
                        <span className="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-label-protocol text-label-protocol font-bold group-hover:bg-secondary transition-colors">
                          02
                        </span>
                        <div>
                          <p className="font-title-md text-title-md text-primary font-semibold leading-tight">
                            BUGMUN 2016
                          </p>
                          <p className="font-label-protocol text-label-protocol text-on-surface-variant uppercase">
                            Consolidating Policy
                          </p>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </a>

                    <a
                      className="group flex items-center justify-between p-space-sm rounded-lg hover:bg-surface-container transition-all"
                      href="#edition-2017"
                    >
                      <div className="flex items-center gap-space-md">
                        <span className="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-label-protocol text-label-protocol font-bold group-hover:bg-secondary transition-colors">
                          03
                        </span>
                        <div>
                          <p className="font-title-md text-title-md text-primary font-semibold leading-tight">
                            BUGMUN 2017
                          </p>
                          <p className="font-label-protocol text-label-protocol text-on-surface-variant uppercase">
                            Egalitarian Expansion
                          </p>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </a>

                    <a
                      className="group flex items-center justify-between p-space-sm rounded-lg hover:bg-surface-container transition-all"
                      href="#edition-2020"
                    >
                      <div className="flex items-center gap-space-md">
                        <span className="w-8 h-8 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-label-protocol text-label-protocol font-bold">
                          04
                        </span>
                        <div>
                          <p className="font-title-md text-title-md text-primary font-semibold leading-tight">
                            BUGMUN 2020
                          </p>
                          <p className="font-label-protocol text-label-protocol text-on-surface-variant uppercase">
                            The Landmark TARC Immersion
                          </p>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-secondary group-hover:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </a>
                  </div>
                </div>

                {/* Archival Certification Footer */}
                <div className="pt-space-md bg-surface-container-high/60 px-space-md py-space-xs rounded-lg flex items-center justify-between">
                  <span className="font-label-protocol text-label-protocol text-on-surface-variant">
                    Archived Editions: 4 Concluded
                  </span>
                  <span className="font-label-protocol text-label-protocol text-secondary font-bold uppercase">
                    2027 In Preparation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION B: HISTORICAL NARRATIVE & CURATORIAL ESSAY
          ========================================================================= */}
      <section className="w-full bg-surface-container-low py-space-xl">
        <div className="max-w-[1240px] mx-auto px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            {/* Curatorial Introduction (7 cols) */}
            <div className="lg:col-span-7 flex flex-col gap-space-md">
              <div className="flex items-center gap-2">
                <span className="w-6 h-0.5 bg-secondary"></span>
                <span className="font-label-protocol text-label-protocol uppercase tracking-widest text-secondary font-bold">
                  Curatorial Overview
                </span>
              </div>
              <h2 className="font-headline-md text-headline-md text-primary leading-tight font-serif">
                A Crucible of South Asian Youth Diplomacy &amp; Global Statecraft
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
                In 2014, BRAC University witnessed the inauguration of an ambitious institutional venture: the creation of a flagship diplomatic simulation that would rise above conventional debating circuits. Spearheaded by the International Association of Business Communicators (IABC), BUGMUN was established not merely as an extracurricular exercise, but as an intellectual sanctuary where complex geopolitical impasses met collegiate idealism.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Through four transformative assemblies spanning from 2014 to 2020, the conference cultivated an alumni community exceeding 1,500 delegates, diplomats, legal scholars, and corporate strategists. Rooted in rigorous research, authentic Rules of Procedure, and uncompromising ethical conduct, BUGMUN set the gold standard for youth parliamentary discourse in the region.
              </p>

              {/* Key Metrics Counter Display */}
              <div className="grid grid-cols-3 gap-space-md pt-space-md">
                <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm">
                  <span className="font-headline-md text-headline-md text-primary font-serif block">
                    1,500+
                  </span>
                  <span className="font-label-protocol text-label-protocol text-on-surface-variant uppercase tracking-wider font-semibold">
                    Delegates Trained
                  </span>
                </div>
                <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm">
                  <span className="font-headline-md text-headline-md text-secondary font-serif block">
                    42
                  </span>
                  <span className="font-label-protocol text-label-protocol text-on-surface-variant uppercase tracking-wider font-semibold">
                    Committees Convened
                  </span>
                </div>
                <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm">
                  <span className="font-headline-md text-headline-md text-primary font-serif block">
                    18
                  </span>
                  <span className="font-label-protocol text-label-protocol text-on-surface-variant uppercase tracking-wider font-semibold">
                    Sovereign Nations Rep.
                  </span>
                </div>
              </div>
            </div>

            {/* Highlight Quote & Editorial Framing (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="bg-primary text-on-primary p-space-xl rounded-xl shadow-xl relative overflow-hidden">
                <span className="material-symbols-outlined absolute -right-6 -bottom-6 text-primary-container/40 text-[180px] pointer-events-none select-none">
                  format_quote
                </span>
                <div className="relative z-10 flex flex-col gap-space-md">
                  <div className="flex items-center gap-space-xs text-secondary-container">
                    <span className="material-symbols-outlined text-[20px]">stars</span>
                    <span className="font-label-protocol text-label-protocol uppercase tracking-widest font-bold">
                      Past Secretariat Testament
                    </span>
                  </div>
                  <blockquote className="font-headline-sm text-headline-sm font-serif italic text-white leading-snug">
                    "BUGMUN was never conceived simply to award gavels; it was engineered to instill empathy in negotiation, fidelity to truth, and the unwavering conviction that dialogue can outlast conflict."
                  </blockquote>
                  <div className="pt-space-md bg-primary-container/30 -mx-space-xl -mb-space-xl px-space-xl py-space-md flex items-center justify-between">
                    <div>
                      <p className="font-title-md text-title-md font-semibold text-white">
                        Office of the Secretary-General
                      </p>
                      <p className="font-label-protocol text-label-protocol text-tertiary-fixed-dim uppercase">
                        Retrospective Inscription • BUGMUN Legacy Council
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold font-serif text-lg">
                      Ψ
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION C: CHRONOLOGICAL TIMELINE (4 LANDMARK ASSEMBLIES)
          ========================================================================= */}
      <section className="w-full bg-surface py-space-xl">
        <div className="max-w-[1240px] mx-auto px-margin">
          <div className="text-center max-w-2xl mx-auto mb-space-xl">
            <span className="font-label-protocol text-label-protocol uppercase tracking-[0.2em] text-secondary font-bold block mb-1">
              Archival Chronology
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary font-serif">
              The Four Landmark Assemblies
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">
              An exhaustive survey of the four historic sessions that defined international collegiate diplomacy at BRAC University.
            </p>
          </div>

          <div className="space-y-space-xl">
            {MILESTONES_DATA.map((milestone, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <article
                  key={milestone.year}
                  id={`edition-${milestone.year}`}
                  className="bg-surface-container-lowest rounded-xl shadow-md p-space-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-outline-variant/30"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
                    {/* Visual Showcase (if even: order-2 on mobile, order-1 on desktop) */}
                    <div
                      className={`lg:col-span-5 flex flex-col gap-space-sm ${
                        isEven ? "order-2 lg:order-1" : "order-2 lg:order-2"
                      }`}
                    >
                      <div className="relative h-64 rounded-lg overflow-hidden group shadow-sm bg-surface-container">
                        <img
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          alt={milestone.mainPhoto.alt}
                          src={milestone.mainPhoto.url}
                        />
                        <div className="absolute bottom-2 left-2 bg-primary/80 backdrop-blur-sm text-on-primary font-label-protocol text-label-protocol px-2 py-0.5 rounded font-semibold">
                          {milestone.mainPhoto.caption}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-space-sm">
                        {milestone.subPhotos.map((sub, sIdx) => (
                          <div
                            key={sIdx}
                            className="relative h-32 rounded-lg overflow-hidden group bg-surface-container"
                          >
                            <img
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              alt={sub.alt}
                              src={sub.url}
                            />
                            <div className="absolute bottom-1 left-1 bg-tertiary/80 text-on-tertiary font-label-protocol text-label-protocol px-1.5 py-0.5 rounded text-[10px] font-semibold">
                              {sub.caption}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Text Content & Facts */}
                    <div
                      className={`lg:col-span-7 flex flex-col gap-space-sm ${
                        isEven ? "order-1 lg:order-2" : "order-1 lg:order-1"
                      }`}
                    >
                      <div className="flex items-center gap-space-sm">
                        <span className="font-display-hero text-display-hero text-primary/20 font-serif leading-none select-none">
                          {milestone.year}
                        </span>
                        <div className="flex flex-col">
                          <span className="bg-secondary-fixed text-on-secondary-fixed font-label-protocol text-label-protocol px-2 py-0.5 rounded font-bold uppercase tracking-wider w-fit">
                            {milestone.badge}
                          </span>
                          <span className="font-label-protocol text-label-protocol text-on-surface-variant mt-1 font-semibold">
                            {milestone.subtitle}
                          </span>
                        </div>
                      </div>
                      <h3 className="font-headline-md text-headline-md text-primary font-serif">
                        {milestone.theme}
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                        {milestone.narrative}
                      </p>

                      {/* Milestone Badges Grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-space-sm pt-space-xs">
                        {milestone.metrics.map((m, mIdx) => (
                          <div
                            key={mIdx}
                            className={`bg-surface-container p-space-sm rounded-lg ${
                              mIdx === 2 ? "col-span-2 sm:col-span-1" : ""
                            }`}
                          >
                            <span className="font-label-protocol text-label-protocol text-secondary uppercase font-bold block">
                              {m.label}
                            </span>
                            <span className="font-title-md text-title-md font-bold text-primary">
                              {m.value}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="bg-surface-container-low p-space-sm rounded-lg text-on-surface-variant font-body-sm text-body-sm italic leading-relaxed">
                        {milestone.quote}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION D: MODULAR HISTORICAL PHOTO GALLERY (EXHIBITION ARCHIVE)
          ========================================================================= */}
      <section className="w-full bg-surface-container-low py-space-xl" id="gallery-section">
        <div className="max-w-[1240px] mx-auto px-margin">
          {/* Section Header & Filter Tabs */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-lg">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="material-symbols-outlined text-secondary text-[20px]">
                  photo_library
                </span>
                <span className="font-label-protocol text-label-protocol uppercase tracking-widest text-secondary font-bold">
                  Curated Retrospective
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-primary font-serif">
                Exhibition Photo Archive
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                Moments captured across plenary chambers, executive sessions, and residential diplomacy (2014–2020).
              </p>
            </div>

            {/* Archival Gallery Category Filters */}
            <div className="flex flex-wrap gap-1 bg-surface-container p-1 rounded-lg">
              {[
                { key: 'all', label: 'All Moments' },
                { key: 'plenary', label: 'Plenary Sessions' },
                { key: 'dinners', label: 'Diplomatic Dinners' },
                { key: 'board', label: 'Executive Boards' },
                { key: 'tarc', label: 'TARC Residential' },
              ].map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setSelectedCategory(tab.key)}
                  className={`px-3 py-1.5 rounded font-label-protocol text-label-protocol uppercase tracking-wider transition-all ${
                    selectedCategory === tab.key
                      ? "bg-primary text-on-primary font-bold shadow-sm"
                      : "text-on-surface-variant hover:text-primary"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Curatorial Photo Mounting Notice */}
          <div className="bg-surface-container-lowest p-space-sm rounded-lg mb-space-lg flex items-center justify-between shadow-sm border border-outline-variant/30">
            <div className="flex items-center gap-space-sm text-on-surface-variant">
              <span className="material-symbols-outlined text-secondary">info</span>
              <span className="font-body-sm text-body-sm">
                <strong className="text-primary font-semibold">Exhibition Notice:</strong> Authentic archival photographic prints from the IABC institutional storage are cataloged below. Click any image to launch high-resolution view.
              </span>
            </div>
            <span className="font-label-protocol text-label-protocol text-on-surface-variant uppercase tracking-wider hidden sm:block font-semibold">
              {filteredPlates.length} Curated Plates
            </span>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md" id="gallery-grid">
            {filteredPlates.map((plate) => (
              <div
                key={plate.id}
                className="gallery-item group relative h-80 rounded-xl overflow-hidden shadow-sm bg-surface-container-lowest cursor-pointer border border-outline-variant/30"
                onClick={() => setActivePlate(plate)}
              >
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  alt={plate.imageAlt}
                  src={plate.imageUrl}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute top-3 left-3 bg-secondary text-on-secondary font-label-protocol text-label-protocol px-2 py-0.5 rounded font-bold">
                  {plate.year}
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-on-primary">
                  <p className="font-title-md text-title-md font-serif font-semibold">
                    {plate.title}
                  </p>
                  <p className="font-body-sm text-body-sm text-surface-variant text-[12px] line-clamp-1">
                    {plate.subtitle}
                  </p>
                </div>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-surface-container-lowest/80 text-primary w-7 h-7 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-[16px]">fullscreen</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION E: THE RETURN: BUGMUN 2027 ("THE LEGACY CONTINUES")
          ========================================================================= */}
      <section className="w-full bg-tertiary text-on-tertiary py-space-xl relative overflow-hidden">
        {/* Diplomatic Lattice Background Motif */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

        <div className="max-w-[1240px] mx-auto px-margin relative z-10">
          <div className="bg-primary-container/60 border border-outline/10 p-space-xl rounded-2xl backdrop-blur-sm shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
              {/* Text Narrative & Strategic Bridge (8 cols) */}
              <div className="lg:col-span-8 flex flex-col gap-space-md">
                <div className="flex items-center gap-space-sm">
                  <span className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold">
                    5
                  </span>
                  <span className="font-label-protocol text-label-protocol uppercase tracking-[0.2em] text-secondary-container font-bold">
                    The Fifth Assembly • 2027
                  </span>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-white font-serif leading-tight">
                  The Legacy Continues — BUGMUN 2027
                </h2>
                <p className="font-body-lg text-body-lg text-tertiary-fixed-dim leading-relaxed">
                  Seven years since the storied 2020 assembly, the world stands at an unprecedented inflection point. Accelerated technological disruption, ecological precarity, and redefined multilateral alliances demand a new generation of diplomatic minds.
                </p>
                <p className="font-body-md text-body-md text-tertiary-fixed-dim/90 leading-relaxed">
                  In 2027, BUGMUN returns for its momentous 5th edition. Re-anchored in the Sustainable Development Goals and revitalized by the contemporary campus of BRAC University, the stage is set once more for bold resolutions, unyielding statecraft, and sovereign consensus.
                </p>

                {/* Strategic CTAs */}
                <div className="flex flex-wrap items-center gap-space-md pt-space-sm">
                  <Link
                    to="/"
                    className="inline-flex items-center gap-space-xs bg-secondary-container text-on-secondary-container px-space-lg py-space-sm rounded-lg hover:bg-white transition-all shadow-md font-label-lg text-label-lg font-bold"
                  >
                    <span>Enter BUGMUN 2027 Main Portal</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </Link>
                  <button
                    type="button"
                    onClick={() =>
                      alert(
                        "The BUGMUN 2014–2027 Commemorative Archival Monograph is being compiled by the IABC Editorial Board. Registration notifications will open shortly."
                      )
                    }
                    className="inline-flex items-center gap-space-xs bg-tertiary-container text-tertiary-fixed hover:text-white px-space-md py-space-sm rounded-lg hover:bg-tertiary transition-all font-label-lg text-label-lg cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      download_for_offline
                    </span>
                    <span>Download Historical Commemorative Brief (PDF)</span>
                  </button>
                </div>
              </div>

              {/* Decorative Archival Emblem / Monogram (4 cols) */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center">
                <div className="w-56 h-56 rounded-full bg-tertiary-container/80 flex flex-col items-center justify-center text-center p-space-md relative group">
                  <div className="absolute inset-0 rounded-full border border-secondary-container/30 animate-pulse"></div>
                  <span className="material-symbols-outlined text-secondary-container text-[48px] mb-1">
                    public
                  </span>
                  <span className="font-headline-sm text-headline-sm font-serif text-white">
                    5th Edition
                  </span>
                  <span className="font-label-protocol text-label-protocol text-secondary-fixed uppercase tracking-widest mt-1 font-semibold">
                    Revival Summit
                  </span>
                  <span className="font-label-protocol text-label-protocol text-tertiary-fixed-dim/80 text-[10px] mt-2 font-mono">
                    DHAKA • 2027
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal plate={activePlate} onClose={() => setActivePlate(null)} />
    </div>
  );
};
