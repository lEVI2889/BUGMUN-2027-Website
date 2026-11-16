import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MILESTONES_DATA, GALLERY_PLATES, GalleryPlate } from '../data/legacy';
import { LightboxModal } from '../components/LightboxModal';

const FILTER_TABS = [
  { key: 'all', label: 'All Moments' },
  { key: 'plenary', label: 'Plenary Sessions' },
  { key: 'committee', label: 'Committee Sessions' },
  { key: 'registration', label: 'Registration & Arrival' },
  { key: 'awards', label: 'Ceremonies & Awards' },
  { key: 'cultural', label: 'Cultural Programme' },
  { key: 'press', label: 'International Press' },
  { key: 'graphics', label: 'Historical Graphics' },
];

export const LegacyPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activePlate, setActivePlate] = useState<GalleryPlate | null>(null);
  const [showMonographNotice, setShowMonographNotice] = useState<boolean>(false);

  const filteredPlates = selectedCategory === 'all'
    ? GALLERY_PLATES
    : GALLERY_PLATES.filter((plate) => plate.category === selectedCategory);

  return (
    <div className="flex flex-col w-full">
      {/* =========================================================================
          SECTION 1: LEGACY HERO SECTION
          Mobile: Approved Stitch Mobile Legacy Hero (Classification strip, Plate 01, Fast scroller)
          Desktop: Approved Desktop Hero (Curated frame, radial gradient, chronology sidebar)
          ========================================================================= */}

      {/* MOBILE LEGACY HERO (lg:hidden) */}
      <section className="px-gutter pt-space-md pb-space-lg flex flex-col gap-space-md bg-surface lg:hidden">
        {/* Archival Classification Protocol Strip */}
        <div className="bg-surface-container-low rounded-xl p-space-md flex flex-col gap-space-xs shadow-sm">
          <div className="flex items-center justify-between">
            <span className="font-label-protocol text-label-protocol text-secondary uppercase tracking-widest flex items-center gap-1 font-bold">
              <span className="material-symbols-outlined text-[14px]">lock_open</span>
              DECLASSIFIED PUBLIC RECORD
            </span>
            <span className="font-label-protocol text-label-protocol bg-secondary-container/20 text-on-secondary-container px-2 py-0.5 rounded-full font-bold">
              SERIES 2014–2027
            </span>
          </div>
          <p className="font-label-protocol text-label-protocol text-on-surface-variant font-medium">
            ARCHIVES &amp; ANNALS // BUGMUN HISTORICAL REGISTRY // RECORD #904-B
          </p>
        </div>

        {/* Editorial Typography Title */}
        <div className="flex flex-col gap-space-xs">
          <span className="font-label-protocol text-label-protocol text-secondary uppercase tracking-widest font-bold">
            Commemorative Retrospective
          </span>
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-primary leading-tight tracking-tight font-bold">
            The Legacy of BUGMUN
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant italic">
            A Decade of Multilateral Dialogue, Youth Leadership, and Diplomatic Excellence (2014–2027)
          </p>
        </div>

        {/* Curatorial Note */}
        <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-xs">
          <div className="flex items-center gap-space-xs text-primary">
            <span className="material-symbols-outlined text-[20px] text-secondary">history_edu</span>
            <span className="font-label-md text-label-md uppercase text-primary font-bold">Curatorial Statement</span>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Preserved by the International Affairs &amp; Business Conference (IABC) at BRAC University. These annals document the collective intellectual capital, emergency treaties, and historic resolutions formulated by young diplomats over a formative decade in South Asian collegiate statecraft.
          </p>
        </div>

        {/* Featured Archival Plate 01 */}
        <div
          className="relative bg-surface-container-lowest rounded-xl overflow-hidden shadow-md flex flex-col cursor-pointer active:scale-[0.99] transition-transform"
          onClick={() => setActivePlate(GALLERY_PLATES[0])}
        >
          <div className="relative w-full aspect-[4/3] bg-surface-container">
            <img
              className="w-full h-full object-cover"
              alt={GALLERY_PLATES[0].imageAlt}
              src={GALLERY_PLATES[0].imageUrl}
            />
            <div className="absolute top-3 left-3 bg-tertiary/85 backdrop-blur-md px-2.5 py-1 rounded-md text-on-tertiary flex items-center gap-1.5 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary-container"></span>
              <span className="font-label-protocol text-label-protocol tracking-wider uppercase font-semibold">Archival Plate 01</span>
            </div>
            <div className="absolute bottom-3 right-3 bg-surface/90 backdrop-blur-md px-2.5 py-1 rounded-md text-primary font-label-protocol text-label-protocol font-bold">
              CONVOCATION PLENARY
            </div>
          </div>
          <div className="p-space-md flex flex-col gap-space-xs bg-surface-container-lowest">
            <span className="font-title-md text-title-md text-primary font-bold">Session Plenary 2020</span>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Opening plenary convocation dais at BRAC University TARC Savar campus, convening residential delegates and the complete Executive Secretariat.
            </p>
            <div className="pt-space-xs flex items-center justify-between text-outline border-t border-outline-variant/20 mt-1">
              <span className="font-label-protocol text-label-protocol tracking-wider uppercase">CATALOG NO. BGM-ARC-2001</span>
              <span className="font-label-protocol text-label-protocol text-secondary font-semibold">AUTHENTICATED IABC ARCHIVE</span>
            </div>
          </div>
        </div>

        {/* Quick Chronology Horizontal Scroller */}
        <div className="flex flex-col gap-space-xs mt-space-xs">
          <span className="font-label-protocol text-label-protocol text-outline uppercase tracking-wider font-semibold">
            Fast Chronology Directory
          </span>
          <div className="flex gap-space-sm overflow-x-auto pb-2 -mx-gutter px-gutter scrollbar-none">
            <a
              className="flex-shrink-0 bg-surface-container-low hover:bg-surface-container px-space-md py-space-sm rounded-xl flex items-center gap-space-xs shadow-sm transition-colors"
              href="#edition-2014"
            >
              <span className="w-6 h-6 rounded-full bg-primary text-on-primary font-label-protocol text-label-protocol flex items-center justify-center font-bold">
                01
              </span>
              <div className="flex flex-col">
                <span className="font-label-md text-label-md text-primary font-bold leading-none">BUGMUN 2014</span>
                <span className="font-label-protocol text-label-protocol text-on-surface-variant">The Beginning</span>
              </div>
            </a>
            <a
              className="flex-shrink-0 bg-surface-container-low hover:bg-surface-container px-space-md py-space-sm rounded-xl flex items-center gap-space-xs shadow-sm transition-colors"
              href="#edition-2016"
            >
              <span className="w-6 h-6 rounded-full bg-primary text-on-primary font-label-protocol text-label-protocol flex items-center justify-center font-bold">
                02
              </span>
              <div className="flex flex-col">
                <span className="font-label-md text-label-md text-primary font-bold leading-none">BUGMUN 2016</span>
                <span className="font-label-protocol text-label-protocol text-on-surface-variant">Foundation</span>
              </div>
            </a>
            <a
              className="flex-shrink-0 bg-surface-container-low hover:bg-surface-container px-space-md py-space-sm rounded-xl flex items-center gap-space-xs shadow-sm transition-colors"
              href="#edition-2017"
            >
              <span className="w-6 h-6 rounded-full bg-primary text-on-primary font-label-protocol text-label-protocol flex items-center justify-center font-bold">
                03
              </span>
              <div className="flex flex-col">
                <span className="font-label-md text-label-md text-primary font-bold leading-none">BUGMUN 2017</span>
                <span className="font-label-protocol text-label-protocol text-on-surface-variant">Expansion</span>
              </div>
            </a>
            <a
              className="flex-shrink-0 bg-surface-container-low hover:bg-surface-container px-space-md py-space-sm rounded-xl flex items-center gap-space-xs shadow-sm transition-colors"
              href="#edition-2020"
            >
              <span className="w-6 h-6 rounded-full bg-primary text-on-primary font-label-protocol text-label-protocol flex items-center justify-center font-bold">
                04
              </span>
              <div className="flex flex-col">
                <span className="font-label-md text-label-md text-primary font-bold leading-none">BUGMUN 2020</span>
                <span className="font-label-protocol text-label-protocol text-on-surface-variant">Residential TARC</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* DESKTOP LEGACY HERO (hidden lg:block) */}
      <section className="hidden lg:block relative w-full bg-surface-container-lowest overflow-hidden py-space-xl">
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
            <div className="flex items-center gap-space-sm bg-surface-container-low px-space-md py-1 rounded-full text-on-surface-variant font-label-protocol text-label-protocol uppercase tracking-wider">
              <span className="inline-block w-2 h-2 rounded-full bg-secondary-container"></span>
              <span>Exhibition Protocol: Historical Archive Series</span>
            </div>
          </div>

          {/* Main Headline Typography Grid */}
          <div className="grid grid-cols-12 gap-gutter items-end mb-space-xl">
            <div className="col-span-8 flex flex-col gap-space-sm">
              <span className="font-label-protocol text-label-protocol uppercase tracking-[0.2em] text-secondary font-bold">
                BRAC University Model United Nations Archive
              </span>
              <h1 className="font-headline-lg text-headline-lg text-primary leading-tight tracking-tight font-bold">
                The Legacy of BUGMUN
              </h1>
              <p className="font-title-md text-title-md text-primary-container italic font-serif">
                A Decade of Multilateral Dialogue, Leadership, and Diplomatic Excellence (2014–2027)
              </p>
            </div>
            <div className="col-span-4 flex flex-col justify-end">
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Curated under the custody of the International Association of Business Communicators (IABC), BRAC University. Preserving sovereign collegiate parliamentary procedure and visionary youth statecraft in South Asia.
              </p>
            </div>
          </div>

          {/* Hero Visual Composition with Curated Frame */}
          <div className="grid grid-cols-12 gap-gutter items-center">
            {/* Main Archival Centerpiece (8 cols) */}
            <div className="col-span-8 relative">
              <div className="bg-surface-container rounded-xl overflow-hidden shadow-xl p-space-sm">
                <div
                  className="relative w-full h-[460px] rounded-lg overflow-hidden group cursor-pointer"
                  onClick={() => setActivePlate(GALLERY_PLATES[0])}
                >
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    alt={GALLERY_PLATES[0].imageAlt}
                    src={GALLERY_PLATES[0].imageUrl}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
                  {/* Bottom Scrim Citation Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-space-lg text-on-primary flex flex-row items-end justify-between gap-space-md">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="bg-secondary text-on-secondary font-label-protocol text-label-protocol px-2 py-0.5 rounded uppercase font-semibold">
                          Archival Plate 01
                        </span>
                        <span className="font-label-protocol text-label-protocol text-secondary-fixed uppercase tracking-wider font-semibold">
                          Session Plenary 2020
                        </span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm font-serif text-white font-bold">
                        Executive Secretariat Plenary Convocation
                      </h3>
                      <p className="font-body-sm text-body-sm text-surface-variant max-w-lg mt-1 leading-relaxed">
                        The Secretary-General, President, and Committee Directors preside over the formal opening convocation of BUGMUN 2020 at the residential campus in Savar.
                      </p>
                    </div>
                    <div className="text-right font-label-protocol text-label-protocol text-tertiary-fixed-dim whitespace-nowrap">
                      <span>CATALOG NO. BGM-ARC-2001</span>
                      <br />
                      <span>DECLASSIFIED PHOTOGRAPHIC RECORD</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Archival Timeline Indicator Ribbon (4 cols) */}
            <div className="col-span-4 flex flex-col gap-space-md">
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
          SECTION 2: HISTORICAL NARRATIVE & CURATORIAL OVERVIEW
          Mobile: Approved Stitch 3-Stat Summary Mosaic & Secretariat Testament Quote Card
          Desktop: Approved Desktop 7-Col / 5-Col Grid Layout
          ========================================================================= */}

      {/* MOBILE CURATORIAL OVERVIEW (lg:hidden) */}
      <section className="px-gutter pt-space-xl flex flex-col gap-space-md lg:hidden">
        <div className="flex flex-col gap-space-xs">
          <span className="font-label-protocol text-label-protocol text-secondary uppercase tracking-widest font-bold">
            CURATORIAL OVERVIEW
          </span>
          <h2 className="font-headline-sm text-headline-sm text-primary font-bold">
            A Crucible of South Asian Youth Diplomacy &amp; Global Statecraft
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            From its humble inception in 2014 to the historic residential plenary of 2020, BUGMUN transformed international affairs pedagogy in Bangladesh. It served as a crucible where theoretical treaties collided with sovereign crises, giving hundreds of student diplomats their first taste of high-stakes multilateral diplomacy.
          </p>
        </div>

        {/* 3-Stat Summary Mosaic */}
        <div className="grid grid-cols-3 gap-space-sm">
          <div className="bg-surface-container-lowest p-space-sm rounded-xl shadow-sm flex flex-col items-center text-center">
            <span className="font-headline-sm text-headline-sm text-secondary font-bold">1,150+</span>
            <span className="font-label-protocol text-label-protocol text-on-surface-variant uppercase mt-1 font-semibold">
              Delegates Trained
            </span>
          </div>
          <div className="bg-surface-container-lowest p-space-sm rounded-xl shadow-sm flex flex-col items-center text-center">
            <span className="font-headline-sm text-headline-sm text-primary font-bold">23+</span>
            <span className="font-label-protocol text-label-protocol text-on-surface-variant uppercase mt-1 font-semibold">
              Chambers Convened
            </span>
          </div>
          <div className="bg-surface-container-lowest p-space-sm rounded-xl shadow-sm flex flex-col items-center text-center">
            <span className="font-headline-sm text-headline-sm text-secondary font-bold">04</span>
            <span className="font-label-protocol text-label-protocol text-on-surface-variant uppercase mt-1 font-semibold">
              Landmark Assemblies
            </span>
          </div>
        </div>

        {/* Secretariat Testament Card */}
        <div className="bg-primary text-on-primary p-space-lg rounded-xl shadow-md flex flex-col gap-space-md relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="material-symbols-outlined text-[32px] text-secondary-container">format_quote</span>
            <span className="font-label-protocol text-label-protocol tracking-wider uppercase text-on-primary-container font-semibold">
              OFFICIAL ARCHIVE EXCERPT
            </span>
          </div>
          <blockquote className="font-headline-sm text-headline-sm text-on-primary italic leading-snug">
            “BUGMUN was never conceived simply to award gavels; it was engineered to instill empathy in negotiation, fidelity to truth, and the conviction that dialogue can outlast conflict.”
          </blockquote>
          <div className="flex flex-col pt-space-xs border-t border-primary-container/40">
            <span className="font-title-md text-title-md text-on-primary font-bold">Office of the Secretary-General</span>
            <span className="font-label-protocol text-label-protocol text-on-primary-container uppercase font-semibold">
              Archives of the Secretariat • IABC BRAC University
            </span>
          </div>
        </div>
      </section>

      {/* DESKTOP CURATORIAL OVERVIEW (hidden lg:block) */}
      <section className="hidden lg:block w-full bg-surface-container-low py-space-xl">
        <div className="max-w-[1240px] mx-auto px-margin">
          <div className="grid grid-cols-12 gap-gutter items-center">
            {/* Curatorial Introduction (7 cols) */}
            <div className="col-span-7 flex flex-col gap-space-md">
              <div className="flex items-center gap-2">
                <span className="w-6 h-0.5 bg-secondary"></span>
                <span className="font-label-protocol text-label-protocol uppercase tracking-widest text-secondary font-bold">
                  Curatorial Overview
                </span>
              </div>
              <h2 className="font-headline-md text-headline-md text-primary leading-tight font-serif font-bold">
                A Crucible of South Asian Youth Diplomacy &amp; Global Statecraft
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
                In 2014, BRAC University witnessed the inauguration of an ambitious institutional venture: the creation of a flagship diplomatic simulation that would rise above conventional debating circuits. Spearheaded by the International Association of Business Communicators (IABC), BUGMUN was established not merely as an extracurricular exercise, but as an intellectual sanctuary where complex geopolitical impasses met collegiate idealism.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Through four transformative assemblies spanning from 2014 to 2020, the conference cultivated an alumni community of over 1,150 verified delegates and executive board leaders across documented summits. Rooted in rigorous research, authentic Rules of Procedure, and uncompromising ethical conduct, BUGMUN set the benchmark for youth parliamentary discourse in Bangladesh.
              </p>

              {/* Key Metrics Counter Display */}
              <div className="grid grid-cols-3 gap-space-md pt-space-md">
                <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm">
                  <span className="font-headline-md text-headline-md text-primary font-serif block font-bold">
                    1,150+
                  </span>
                  <span className="font-label-protocol text-label-protocol text-on-surface-variant uppercase tracking-wider font-semibold">
                    Verified Delegates &amp; EB
                  </span>
                </div>
                <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm">
                  <span className="font-headline-md text-headline-md text-secondary font-serif block font-bold">
                    23+
                  </span>
                  <span className="font-label-protocol text-label-protocol text-on-surface-variant uppercase tracking-wider font-semibold">
                    Verified Chambers
                  </span>
                </div>
                <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm">
                  <span className="font-headline-md text-headline-md text-primary font-serif block font-bold">
                    04
                  </span>
                  <span className="font-label-protocol text-label-protocol text-on-surface-variant uppercase tracking-wider font-semibold">
                    Landmark Assemblies
                  </span>
                </div>
              </div>
            </div>

            {/* Highlight Quote & Editorial Framing (5 cols) */}
            <div className="col-span-5 flex flex-col justify-center">
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
                      <p className="font-label-protocol text-label-protocol text-tertiary-fixed-dim uppercase font-semibold">
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
          SECTION 3: CHRONOLOGICAL TIMELINE (4 LANDMARK ASSEMBLIES)
          Mobile: Approved Stitch Single-Column Stacked Dossier Articles
          Desktop: Approved Desktop Alternating Visual/Text Cards
          Canonical milestone wrappers with responsive scroll-margin
          ========================================================================= */}
      <section className="w-full bg-surface py-space-xl">
        {/* Mobile Header (lg:hidden) */}
        <div className="px-gutter flex flex-col gap-space-xs lg:hidden mb-space-lg">
          <span className="font-label-protocol text-label-protocol text-secondary uppercase tracking-widest font-bold">
            ARCHIVAL DOSSIER
          </span>
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-primary font-bold">
            The Four Landmark Assemblies
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            An exhaustive survey of the four historic sessions that defined collegiate diplomacy at BRAC University.
          </p>
        </div>

        {/* Desktop Header (hidden lg:block) */}
        <div className="hidden lg:block text-center max-w-2xl mx-auto mb-space-xl">
          <span className="font-label-protocol text-label-protocol uppercase tracking-[0.2em] text-secondary font-bold block mb-1">
            Archival Chronology
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary font-serif font-bold">
            The Four Landmark Assemblies
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            An exhaustive survey of the four historic sessions that defined international collegiate diplomacy at BRAC University.
          </p>
        </div>

        {/* Canonical Milestone Containers (Wraps both responsive presentations) */}
        <div className="max-w-[1240px] mx-auto px-gutter lg:px-margin flex flex-col gap-space-lg lg:space-y-space-xl">
          {MILESTONES_DATA.map((milestone, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <div
                key={milestone.year}
                id={`edition-${milestone.year}`}
                className="w-full scroll-mt-16 lg:scroll-mt-20"
              >
                {/* Mobile Milestone Card (lg:hidden) */}
                <article className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-md border border-outline-variant/30 lg:hidden">
                  <div className="flex flex-col gap-space-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-label-protocol text-label-protocol bg-secondary-container/20 text-on-secondary-container font-bold px-2 py-0.5 rounded-full uppercase">
                        {milestone.badge}
                      </span>
                      <span className="font-label-protocol text-label-protocol text-outline uppercase font-semibold">
                        {milestone.subtitle}
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                      {milestone.theme}
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      {milestone.narrative}
                    </p>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-space-xs">
                    {milestone.metrics.map((m, mIdx) => (
                      <span
                        key={mIdx}
                        className="bg-surface-container px-2.5 py-1 rounded-md font-label-protocol text-label-protocol text-primary font-semibold"
                      >
                        {m.label}: {m.value}
                      </span>
                    ))}
                  </div>

                  {/* Photo Showcase (Stacked) */}
                  <div className="flex flex-col gap-space-sm pt-space-xs">
                    <div className="rounded-lg overflow-hidden bg-surface-container shadow-sm">
                      <img
                        className="w-full aspect-[16/10] object-cover"
                        alt={milestone.mainPhoto.alt}
                        src={milestone.mainPhoto.url}
                        loading="lazy"
                      />
                      <div className="p-2.5 bg-surface-container-low flex items-center justify-between">
                        <span className="font-body-sm text-body-sm text-primary font-medium">
                          {milestone.mainPhoto.caption}
                        </span>
                        <span className="font-label-protocol text-label-protocol text-outline font-semibold">
                          PLATE {milestone.year.slice(2)}-A
                        </span>
                      </div>
                    </div>

                    {milestone.subPhotos.slice(0, 1).map((sub, sIdx) => (
                      <div key={sIdx} className="rounded-lg overflow-hidden bg-surface-container shadow-sm">
                        <img
                          className="w-full aspect-[16/10] object-cover"
                          alt={sub.alt}
                          src={sub.url}
                          loading="lazy"
                        />
                        <div className="p-2.5 bg-surface-container-low flex items-center justify-between">
                          <span className="font-body-sm text-body-sm text-primary font-medium">
                            {sub.caption}
                          </span>
                          <span className="font-label-protocol text-label-protocol text-outline font-semibold">
                            PLATE {milestone.year.slice(2)}-B
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </article>

                {/* Desktop Milestone Card (hidden lg:block) */}
                <article className="hidden lg:block bg-surface-container-lowest rounded-xl shadow-md p-space-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-outline-variant/30">
                  <div className="grid grid-cols-12 gap-gutter items-center">
                    {/* Visual Showcase */}
                    <div
                      className={`col-span-5 flex flex-col gap-space-sm ${
                        isEven ? "order-1" : "order-2"
                      }`}
                    >
                      <div className="relative h-64 rounded-lg overflow-hidden group shadow-sm bg-surface-container">
                        <img
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          alt={milestone.mainPhoto.alt}
                          src={milestone.mainPhoto.url}
                          loading="lazy"
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
                              loading="lazy"
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
                      className={`col-span-7 flex flex-col gap-space-sm ${
                        isEven ? "order-2" : "order-1"
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
                      <h3 className="font-headline-md text-headline-md text-primary font-serif font-bold">
                        {milestone.theme}
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                        {milestone.narrative}
                      </p>

                      {/* Milestone Badges Grid */}
                      <div className="grid grid-cols-3 gap-space-sm pt-space-xs">
                        {milestone.metrics.map((m, mIdx) => (
                          <div
                            key={mIdx}
                            className={`bg-surface-container p-space-sm rounded-lg ${
                              mIdx === 2 ? "col-span-1" : ""
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
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: EXHIBITION PHOTO ARCHIVE
          Mobile: Approved Stitch 2-Column Photo Grid & Horizontal Filter Bar
          Desktop: Approved Desktop 4-Column Grid & Curatorial Notice
          ========================================================================= */}
      <div id="gallery-section" className="w-full scroll-mt-16 lg:scroll-mt-20">
        {/* MOBILE GALLERY (lg:hidden) */}
        <section className="px-gutter pt-space-xl flex flex-col gap-space-md lg:hidden">
        <div className="flex flex-col gap-space-xs">
          <span className="font-label-protocol text-label-protocol text-secondary uppercase tracking-widest font-bold">
            CURATED RETROSPECTIVE
          </span>
          <h2 className="font-headline-sm text-headline-sm text-primary font-bold">
            Exhibition Photo Archive
          </h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Authentic photographic plates from across four editions. Tap any moment to inspect declassified records.
          </p>
        </div>

        {/* Filter Pills (Scrollable) */}
        <div className="flex gap-space-xs overflow-x-auto pb-1 -mx-gutter px-gutter scrollbar-none" id="archive-filter-bar">
          {FILTER_TABS.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setSelectedCategory(tab.key)}
              className={`filter-btn flex-shrink-0 font-label-protocol text-label-protocol uppercase px-3 py-1.5 rounded-full transition-all cursor-pointer font-semibold ${
                selectedCategory === tab.key
                  ? 'bg-primary text-on-primary'
                  : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 2-Column Photo Grid */}
        <div className="grid grid-cols-2 gap-space-sm pt-space-xs" id="archive-gallery-grid">
          {filteredPlates.map((plate) => (
            <div
              key={plate.id}
              className="archive-card group relative bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col cursor-pointer active:scale-95 transition-transform border border-outline-variant/30"
              onClick={() => setActivePlate(plate)}
            >
              <div className="relative w-full aspect-square bg-surface-container">
                <img
                  className="w-full h-full object-cover"
                  alt={plate.imageAlt}
                  src={plate.imageUrl}
                  loading="lazy"
                />
                <div className="absolute top-2 left-2 bg-surface/90 px-1.5 py-0.5 rounded text-[10px] font-label-protocol text-label-protocol font-bold text-primary">
                  {plate.year}
                </div>
                <div className="absolute bottom-2 right-2 w-6 h-6 rounded-full bg-primary/80 text-on-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[14px]">zoom_in</span>
                </div>
              </div>
              <div className="p-2 flex flex-col gap-0.5">
                <span className="font-label-md text-label-md text-primary font-bold truncate">
                  {plate.title}
                </span>
                <span className="font-label-protocol text-label-protocol text-outline uppercase truncate">
                  {plate.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DESKTOP GALLERY (hidden lg:block) */}
      <section className="hidden lg:block w-full bg-surface-container-low py-space-xl">
        <div className="max-w-[1240px] mx-auto px-margin">
          {/* Section Header & Filter Tabs */}
          <div className="flex flex-row items-end justify-between gap-space-md mb-space-lg">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="material-symbols-outlined text-secondary text-[20px]">
                  photo_library
                </span>
                <span className="font-label-protocol text-label-protocol uppercase tracking-widest text-secondary font-bold">
                  Curated Retrospective
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-primary font-serif font-bold">
                Exhibition Photo Archive
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                Moments captured across plenary chambers, executive sessions, and residential diplomacy (2014–2020).
              </p>
            </div>

            {/* Archival Gallery Category Filters */}
            <div className="flex flex-wrap gap-1 bg-surface-container p-1 rounded-lg">
              {FILTER_TABS.map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setSelectedCategory(tab.key)}
                  className={`px-3 py-1.5 rounded font-label-protocol text-label-protocol uppercase tracking-wider transition-all cursor-pointer ${
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
                <strong className="text-primary font-semibold">Exhibition Notice:</strong> Authentic historical photographic plates and archival graphics from the BUGMUN archive series (2017–2020) are cataloged below under the custody of the IABC Secretariat. Click any plate to inspect official declassified records.
              </span>
            </div>
            <span className="font-label-protocol text-label-protocol text-on-surface-variant uppercase tracking-wider font-semibold">
              {filteredPlates.length} Archival Plates
            </span>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-4 gap-space-md" id="gallery-grid">
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
                  loading="lazy"
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
    </div>

      {/* =========================================================================
          SECTION 5: THE RETURN: BUGMUN 2027 ("THE LEGACY CONTINUES")
          Mobile: Approved Stitch Gradient Card with Quick CTAs
          Desktop: Approved Desktop Broad Lattice Card with Archival Emblem
          ========================================================================= */}

      {/* MOBILE LEGACY CONTINUATION (lg:hidden) */}
      <section className="px-gutter pt-space-xl lg:hidden">
        <div className="bg-gradient-to-br from-primary via-primary-container to-tertiary text-on-primary rounded-xl p-space-lg shadow-xl flex flex-col gap-space-md relative overflow-hidden">
          {/* Decorative Backdrop Graphic */}
          <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-secondary/20 blur-2xl pointer-events-none"></div>
          <div className="flex items-center justify-between">
            <span className="font-label-protocol text-label-protocol bg-secondary-container/20 text-secondary-container px-2.5 py-1 rounded-full uppercase tracking-wider font-bold">
              THE FIFTH ASSEMBLY • 2027
            </span>
            <span className="material-symbols-outlined text-secondary-container text-[24px]">verified</span>
          </div>
          <div className="flex flex-col gap-space-xs">
            <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-primary font-bold">
              The Legacy Continues — BUGMUN 2027
            </h2>
            <p className="font-body-md text-body-md text-on-primary-container leading-relaxed">
              Seven years since the storied 2020 assembly, the world stands at an unprecedented inflection point. In 2027, BUGMUN returns for its momentous 5th Edition at the contemporary campus of BRAC University, summoning the next vanguard of global changemakers.
            </p>
          </div>
          {/* Revival Stamp Badge */}
          <div className="bg-surface/10 backdrop-blur-md p-space-sm rounded-lg flex items-center gap-space-sm">
            <span className="material-symbols-outlined text-secondary-container text-[28px]">token</span>
            <div className="flex flex-col">
              <span className="font-label-md text-label-md text-on-primary font-bold">5th Edition Revival Summit</span>
              <span className="font-label-protocol text-label-protocol text-on-primary-container">Dhaka, Bangladesh • 2027 Secretariat Registry</span>
            </div>
          </div>
          {/* Action Buttons */}
          <div className="flex flex-col gap-space-sm pt-space-xs">
            <Link
              to="/"
              className="w-full h-12 bg-secondary-container text-on-secondary-container rounded-lg font-label-lg text-label-lg uppercase tracking-wider flex items-center justify-center gap-2 font-bold shadow-md hover:brightness-105 transition-all"
            >
              <span>Enter BUGMUN 2027 Portal</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
            <button
              type="button"
              onClick={() => setShowMonographNotice(true)}
              className="w-full h-12 bg-surface/10 text-on-primary hover:bg-surface/20 rounded-lg font-label-lg text-label-lg uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">download</span>
              <span>Download Commemorative Brief (PDF)</span>
            </button>
            {showMonographNotice && (
              <div className="bg-primary/90 border border-secondary-container/40 text-on-primary rounded-xl p-4 mt-2 flex items-start justify-between gap-3 animate-fadeIn">
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-secondary-container text-[22px] shrink-0 mt-0.5">
                    auto_stories
                  </span>
                  <div className="font-body-sm text-body-sm">
                    <p className="font-semibold text-secondary-container">
                      Commemorative Monograph In Compilation
                    </p>
                    <p className="text-tertiary-fixed-dim mt-0.5">
                      The official BUGMUN 2014–2027 Commemorative Archival Monograph is currently being compiled and authenticated by the IABC Editorial Board. The publication dossier will be released digitally alongside the registration portal launch.
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setShowMonographNotice(false)}
                  className="text-tertiary-fixed hover:text-white p-1"
                  aria-label="Dismiss notice"
                >
                  <span className="material-symbols-outlined text-[18px]">close</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* DESKTOP LEGACY CONTINUATION (hidden lg:block) */}
      <section className="hidden lg:block w-full bg-tertiary text-on-tertiary py-space-xl relative overflow-hidden">
        {/* Diplomatic Lattice Background Motif */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

        <div className="max-w-[1240px] mx-auto px-margin relative z-10">
          <div className="bg-primary-container/60 border border-outline/10 p-space-xl rounded-2xl backdrop-blur-sm shadow-2xl">
            <div className="grid grid-cols-12 gap-gutter items-center">
              {/* Text Narrative & Strategic Bridge (8 cols) */}
              <div className="col-span-8 flex flex-col gap-space-md">
                <div className="flex items-center gap-space-sm">
                  <span className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold">
                    5
                  </span>
                  <span className="font-label-protocol text-label-protocol uppercase tracking-[0.2em] text-secondary-container font-bold">
                    The Fifth Assembly • 2027
                  </span>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-white font-serif leading-tight font-bold">
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
                    onClick={() => setShowMonographNotice(true)}
                    className="inline-flex items-center gap-space-xs bg-tertiary-container text-tertiary-fixed hover:text-white px-space-md py-space-sm rounded-lg hover:bg-tertiary transition-all font-label-lg text-label-lg cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      download_for_offline
                    </span>
                    <span>Download Historical Commemorative Brief (PDF)</span>
                  </button>
                </div>

                {showMonographNotice && (
                  <div className="bg-primary/90 border border-secondary-container/40 text-on-primary rounded-xl p-4 mt-2 flex items-start justify-between gap-3 animate-fadeIn">
                    <div className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-secondary-container text-[22px] shrink-0 mt-0.5">
                        auto_stories
                      </span>
                      <div className="font-body-sm text-body-sm">
                        <p className="font-semibold text-secondary-container">
                          Commemorative Monograph In Compilation
                        </p>
                        <p className="text-tertiary-fixed-dim mt-0.5">
                          The official BUGMUN 2014–2027 Commemorative Archival Monograph is currently being compiled and authenticated by the IABC Editorial Board. The publication dossier will be released digitally alongside the registration portal launch.
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setShowMonographNotice(false)}
                      className="text-tertiary-fixed hover:text-white p-1"
                      aria-label="Dismiss notice"
                    >
                      <span className="material-symbols-outlined text-[18px]">close</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Decorative Archival Emblem / Monogram (4 cols) */}
              <div className="col-span-4 flex flex-col items-center justify-center">
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
