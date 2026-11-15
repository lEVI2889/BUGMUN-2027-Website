import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { COMMITTEES_DATA } from '../data/committees';
import { SCHEDULE_DATA } from '../data/schedule';
import { NEWS_DATA } from '../data/news';

export const HomePage: React.FC = () => {
  const [activeDay, setActiveDay] = useState<number>(1);
  const [emailInput, setEmailInput] = useState<string>('');
  const [notifySuccess, setNotifySuccess] = useState<boolean>(false);

  const handleNotifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setNotifySuccess(true);
      setEmailInput('');
    }
  };

  const currentSchedule = SCHEDULE_DATA.find((d) => d.dayNumber === activeDay) || SCHEDULE_DATA[0];

  return (
    <div className="flex flex-col w-full">
      {/* =========================================================================
          SECTION B: HERO SECTION
          ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-primary text-on-primary">
        {/* Ambient Diplomatic Underlay & Cartographic Grid */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <svg className="w-full h-full object-cover" fill="none" viewBox="0 0 1440 900" xmlns="http://www.w3.org/2000/svg">
            <circle className="text-secondary-container" cx="720" cy="450" r="380" stroke="currentColor" strokeDasharray="4 8" strokeWidth="1"></circle>
            <circle className="text-tertiary-fixed" cx="720" cy="450" r="540" stroke="currentColor" strokeWidth="0.75"></circle>
            <ellipse className="text-secondary-container" cx="720" cy="450" rx="380" ry="140" stroke="currentColor" strokeDasharray="3 6" strokeWidth="0.75"></ellipse>
            <path className="text-outline-variant" d="M720 0 V900 M0 450 H1440" stroke="currentColor" strokeDasharray="2 4" strokeWidth="0.5"></path>
            <path className="text-secondary" d="M120 180 L240 180 M120 240 L180 240 M1260 680 L1380 680" stroke="currentColor" strokeWidth="1.5"></path>
          </svg>
        </div>

        {/* Subtle Radial Glow */}
        <div className="absolute -top-32 right-1/4 w-[600px] h-[600px] bg-secondary-container/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative max-w-[1240px] mx-auto px-margin pt-space-xl pb-24 flex flex-col justify-between">
          {/* Eyebrow & Coordinates Bar */}
          <div className="flex flex-wrap items-center justify-between gap-space-md mb-8">
            <div className="inline-flex items-center gap-space-xs bg-tertiary-container/80 text-secondary-fixed px-space-md py-1 rounded-full shadow-sm">
              <span className="w-2 h-2 rounded-full bg-secondary-container animate-ping"></span>
              <span className="font-label-protocol text-label-protocol tracking-widest uppercase">
                The Return of a Diplomatic Legacy • 5th Plenary
              </span>
            </div>
            <div className="flex items-center gap-space-sm font-label-protocol text-label-protocol text-tertiary-fixed-dim uppercase tracking-wider">
              <span>LAT 23° 46' 31" N</span>
              <span className="text-secondary-container">•</span>
              <span>LON 90° 25' 38" E</span>
              <span className="text-secondary-container">•</span>
              <span className="text-secondary-container font-semibold">DHAKA PLENARY</span>
            </div>
          </div>

          {/* Main Headline Assembly */}
          <div className="max-w-4xl flex flex-col gap-6">
            <h1 className="font-headline-lg text-headline-lg tracking-tight leading-tight text-surface-container-lowest">
              BRAC University Global <br />
              <span className="italic font-display-hero text-display-hero text-secondary-container">
                Model United Nations
              </span>{" "}
              2027
            </h1>
            <p className="font-body-lg text-body-lg text-tertiary-fixed-dim max-w-2xl leading-relaxed">
              Reigniting South Asia's preeminent collegiate diplomatic forum. As geopolitical architectures evolve, BUGMUN 2027 convenes emerging global envoys to negotiate sovereign consensus, architect multilateral solutions, and confront the decisive challenges of our century.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-space-md pt-4">
              <a
                href="#committees-section"
                className="inline-flex items-center gap-space-xs bg-secondary-container text-on-secondary-container px-6 py-3.5 rounded-lg shadow-md hover:bg-secondary-fixed transition-all font-label-lg text-label-lg tracking-wide group"
              >
                <span>Explore BUGMUN 2027</span>
                <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-y-0.5">
                  arrow_downward
                </span>
              </a>
              <Link
                to="/legacy"
                className="inline-flex items-center gap-space-xs bg-surface-container-lowest/10 backdrop-blur-sm text-surface-container-lowest px-6 py-3.5 rounded-lg hover:bg-surface-container-lowest/20 transition-all font-label-lg text-label-lg tracking-wide group"
              >
                <span>Discover Our Legacy (2014–2020)</span>
                <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>

          {/* Key Metadata Ribbon */}
          <div className="mt-16 bg-tertiary-container/90 backdrop-blur-md rounded-xl p-space-lg shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="flex items-start gap-space-md">
                <div className="w-12 h-12 rounded-lg bg-primary-container flex items-center justify-center text-secondary-container shrink-0">
                  <span className="material-symbols-outlined text-[24px]">location_on</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-protocol text-label-protocol text-tertiary-fixed-dim uppercase tracking-wider">
                    Summit Venue
                  </span>
                  <span className="font-title-md text-title-md text-surface-container-lowest mt-0.5 font-semibold">
                    BRAC University Campus
                  </span>
                  <span className="font-body-sm text-body-sm text-tertiary-fixed-dim">
                    Kha 224 Pragati Sarani, Merul Badda, Dhaka
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-space-md">
                <div className="w-12 h-12 rounded-lg bg-primary-container flex items-center justify-center text-secondary-container shrink-0">
                  <span className="material-symbols-outlined text-[24px]">event_upcoming</span>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="font-label-protocol text-label-protocol text-tertiary-fixed-dim uppercase tracking-wider">
                      Convocation Window
                    </span>
                    <span className="bg-secondary/40 text-secondary-fixed text-label-protocol font-label-protocol px-2 py-0.5 rounded uppercase font-semibold">
                      Tentative • Dates TBA
                    </span>
                  </div>
                  <span className="font-title-md text-title-md text-surface-container-lowest mt-0.5 font-semibold">
                    Dates To Be Announced
                  </span>
                  <span className="font-body-sm text-body-sm text-tertiary-fixed-dim">
                    Official Schedule Announcement Forthcoming
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-space-md">
                <div className="w-12 h-12 rounded-lg bg-primary-container flex items-center justify-center text-secondary-container shrink-0">
                  <span className="material-symbols-outlined text-[24px]">groups</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-protocol text-label-protocol text-tertiary-fixed-dim uppercase tracking-wider">
                    Plenary Assembly
                  </span>
                  <span className="font-title-md text-title-md text-surface-container-lowest mt-0.5 font-semibold">
                    320 Projected Delegates
                  </span>
                  <span className="font-body-sm text-body-sm text-tertiary-fixed-dim">
                    8 Specialized Chambers • 3 Plenary Days
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION C: ABOUT BUGMUN 2027 & THE DIPLOMATIC RETURN
          ========================================================================= */}
      <section className="w-full py-space-xl bg-surface" id="about-legacy">
        <div className="max-w-[1240px] mx-auto px-margin">
          {/* Section Marker */}
          <div className="flex items-center gap-space-xs text-secondary mb-3">
            <span className="font-label-protocol text-label-protocol uppercase tracking-widest font-bold">
              Article I // Institutional Background
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
            {/* Left Column: Editorial Discourse */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <h2 className="font-headline-md text-headline-md text-primary tracking-tight">
                Revitalizing Sovereign Dialogue After a Sabbatical of Historic Global Realignment
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                First inaugurated in 2014 by the International Association of Business Communicators (IABC | BRAC University), BUGMUN grew into one of the largest and most influential Model United Nations conferences in Bangladesh across landmark editions in 2014, 2016, 2017, and 2020. Traditionally organized during residential semester breaks as an immersive conference at the Savar TARC campus, the event was placed on hold following 2020 due to the pandemic and the suspension of residential semesters.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                As BRAC University transitioned to its state-of-the-art permanent campus in Badda, Dhaka, IABC continued hosting flagship forums such as TEDxBRACU and DIPLOMATS’ MEET. Now, BUGMUN 2027 marks our monumental Fifth Plenary Edition—reviving this premier platform on a greater scale with renewed ambition to foster multilateral consensus, youth leadership, and actionable engagement with the UN Sustainable Development Goals.
              </p>
              <div className="p-space-lg bg-surface-container-low rounded-xl flex items-center gap-space-md shadow-sm">
                <span className="material-symbols-outlined text-[32px] text-secondary shrink-0">
                  verified_user
                </span>
                <div>
                  <p className="font-title-md text-title-md text-primary font-semibold">
                    Conducted Under Standard UN Rules of Procedure
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Formal moderated caucuses, sovereign bilateral consultations, and parliamentary working papers reviewed by seasoned diplomatic chairs.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Institutional Stats & Visual Artifact */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm flex flex-col justify-between">
                  <span className="font-label-protocol text-label-protocol uppercase tracking-wider text-secondary font-bold">
                    Milestone Edition
                  </span>
                  <div className="my-4">
                    <span className="font-display-hero text-display-hero text-primary">
                      5<span className="font-title-lg text-title-lg">th</span>
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Biennial tradition revived for an ambitious cohort of future diplomats.
                  </p>
                </div>

                <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm flex flex-col justify-between">
                  <span className="font-label-protocol text-label-protocol uppercase tracking-wider text-secondary font-bold">
                    Plenary Capacity
                  </span>
                  <div className="my-4">
                    <span className="font-display-hero text-display-hero text-primary">320</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Projected international and collegiate delegate seats.
                  </p>
                </div>

                <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm flex flex-col justify-between">
                  <span className="font-label-protocol text-label-protocol uppercase tracking-wider text-secondary font-bold">
                    Chambers
                  </span>
                  <div className="my-4">
                    <span className="font-display-hero text-display-hero text-primary">08</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Specialized multilateral councils spanning security, economy, and ecology.
                  </p>
                </div>

                <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm flex flex-col justify-between">
                  <span className="font-label-protocol text-label-protocol uppercase tracking-wider text-secondary font-bold">
                    Diplomatic Days
                  </span>
                  <div className="my-4">
                    <span className="font-display-hero text-display-hero text-primary">03</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Exhaustive debate, resolution vetting, and formal gala assembly.
                  </p>
                </div>
              </div>

              {/* Editorial Imagery Artifact */}
              <div className="relative w-full h-56 rounded-xl overflow-hidden shadow-md">
                <img
                  className="w-full h-full object-cover"
                  alt="BUGMUN Assembly Archives Deliberation"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrnwF7Vst_9EhSmXiHlFNx3oeYyPu0XabqQBvO9i-Ajf-2wTc53JI4pyX_ZG_k-9WKgvmXDS7xK4IsEX-H-HEQ6XGwyCi6q-WFhVNTGWkn9BK1tVR-Gg04W6NhfhJBRx1YR1CJm5JAZO0fDObVU5VJM454x1yHhgYhX9gXrY_tJRvDcHUnveozS1LJppmtB6CZUNLHSNgvqQpV2DP9IYhSK5vResGsbCqH4e8dE3c"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent flex items-end p-4">
                  <span className="font-label-protocol text-label-protocol text-surface-container-lowest uppercase tracking-widest font-semibold">
                    BUGMUN Assembly Archives // Sovereign Committee Deliberation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION D: CONFERENCE VISION & SUSTAINABLE DEVELOPMENT GOALS (SDGS)
          ========================================================================= */}
      <section className="w-full py-space-xl bg-surface-container-low">
        <div className="max-w-[1240px] mx-auto px-margin">
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-space-xs text-secondary mb-2">
              <span className="material-symbols-outlined text-[16px]">public</span>
              <span className="font-label-protocol text-label-protocol uppercase tracking-widest font-bold">
                Agenda 2030 // Multilateral Pillars
              </span>
            </div>
            <h2 className="font-headline-md text-headline-md text-primary tracking-tight">
              Anchored in the United Nations Sustainable Development Framework
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-3 leading-relaxed">
              BUGMUN 2027 establishes its thematic architecture upon four foundational UN SDGs. Every committee mandate, study guide, and working paper topic is drafted to address systemic vulnerabilities and multilateral trade-offs within these key agendas.
            </p>
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* SDG 7 */}
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-amber-500"></div>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center font-title-md text-title-md text-amber-700 font-bold">
                    07
                  </span>
                  <span className="font-label-protocol text-label-protocol text-on-surface-variant uppercase tracking-widest font-semibold">
                    UN SDG 7
                  </span>
                </div>
                <h3 className="font-title-lg text-title-lg text-primary mb-2 font-bold">
                  Affordable &amp; Clean Energy
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Accelerating equitable clean energy transitions across the Global South, nuclear safeguards, and sovereign energy grid resilience amidst supply chain disruptions.
                </p>
              </div>
              <div className="pt-6 flex items-center gap-2 text-secondary font-label-md text-label-md font-semibold">
                <span>UNIDO &amp; ECOSOC Agenda Focus</span>
                <span className="material-symbols-outlined text-[16px]">north_east</span>
              </div>
            </div>

            {/* SDG 8 */}
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-rose-700"></div>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center font-title-md text-title-md text-rose-800 font-bold">
                    08
                  </span>
                  <span className="font-label-protocol text-label-protocol text-on-surface-variant uppercase tracking-widest font-semibold">
                    UN SDG 8
                  </span>
                </div>
                <h3 className="font-title-lg text-title-lg text-primary mb-2 font-bold">
                  Decent Work &amp; Growth
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Addressing workforce vulnerabilities under automation, sovereign debt restructuring for developing nations, and macroeconomic youth labor resilience.
                </p>
              </div>
              <div className="pt-6 flex items-center gap-2 text-secondary font-label-md text-label-md font-semibold">
                <span>ECOFIN Agenda Focus</span>
                <span className="material-symbols-outlined text-[16px]">north_east</span>
              </div>
            </div>

            {/* SDG 9 */}
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-orange-600"></div>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center font-title-md text-title-md text-orange-700 font-bold">
                    09
                  </span>
                  <span className="font-label-protocol text-label-protocol text-on-surface-variant uppercase tracking-widest font-semibold">
                    UN SDG 9
                  </span>
                </div>
                <h3 className="font-title-lg text-title-lg text-primary mb-2 font-bold">
                  Industry &amp; Innovation
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Architecting governance standards for emerging frontier technologies, critical supply route safeguards, and climate-resilient transport corridors.
                </p>
              </div>
              <div className="pt-6 flex items-center gap-2 text-secondary font-label-md text-label-md font-semibold">
                <span>UNDP &amp; UNIDO Focus</span>
                <span className="material-symbols-outlined text-[16px]">north_east</span>
              </div>
            </div>

            {/* SDG 13 */}
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-emerald-600"></div>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center font-title-md text-title-md text-emerald-800 font-bold">
                    13
                  </span>
                  <span className="font-label-protocol text-label-protocol text-on-surface-variant uppercase tracking-widest font-semibold">
                    UN SDG 13
                  </span>
                </div>
                <h3 className="font-title-lg text-title-lg text-primary mb-2 font-bold">
                  Climate Action
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Loss and damage treaty implementation, carbon market integrity, and multilateral climate justice mechanisms for vulnerable frontline littoral regions.
                </p>
              </div>
              <div className="pt-6 flex items-center gap-2 text-secondary font-label-md text-label-md font-semibold">
                <span>UNFCCC Specialized Mandate</span>
                <span className="material-symbols-outlined text-[16px]">north_east</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION E: COMMITTEES (8 TENTATIVE COMMITTEES GRID)
          ========================================================================= */}
      <section className="w-full py-space-xl bg-surface" id="committees-section">
        <div className="max-w-[1240px] mx-auto px-margin">
          {/* Section Header with Notice */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <div className="flex items-center gap-space-xs text-secondary mb-2">
                <span className="material-symbols-outlined text-[16px]">account_balance</span>
                <span className="font-label-protocol text-label-protocol uppercase tracking-widest font-bold">
                  Chambers of Deliberation
                </span>
              </div>
              <h2 className="font-headline-md text-headline-md text-primary tracking-tight">
                Tentative Committees &amp; Specialized Councils
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
                Eight specialized simulation chambers covering security doctrines, multilateral economics, sustainable climate protocols, and investigative diplomatic journalism.
              </p>
            </div>
            <div className="bg-surface-container px-4 py-3 rounded-lg flex items-center gap-3 shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse"></span>
              <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider font-semibold">
                Agendas &amp; Study Guides Forthcoming
              </span>
            </div>
          </div>

          {/* 8 Committee Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMMITTEES_DATA.map((committee) => (
              <div
                key={committee.id}
                className="bg-surface-container-lowest p-6 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-outline-variant/30"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-lg bg-primary-container text-secondary-container flex items-center justify-center">
                      <span className="material-symbols-outlined text-[20px]">{committee.icon}</span>
                    </span>
                    <span className="bg-secondary/10 text-secondary font-label-protocol text-label-protocol px-2.5 py-0.5 rounded-full uppercase font-bold">
                      {committee.seats}
                    </span>
                  </div>
                  <span className="font-label-protocol text-label-protocol text-on-surface-variant uppercase tracking-wider">
                    {committee.organ}
                  </span>
                  <h3 className="font-title-lg text-title-lg text-primary mt-1 mb-2 font-bold">
                    {committee.name}
                  </h3>
                  <p className="font-label-lg text-label-lg text-secondary mb-3 font-semibold">
                    {committee.acronym}
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    {committee.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 bg-surface-container-low -mx-6 -mb-6 p-4 rounded-b-xl flex items-center justify-between">
                  <span className="font-label-protocol text-label-protocol text-on-surface-variant font-medium">
                    {committee.agendaStatus}
                  </span>
                  <span className="text-secondary font-label-protocol text-label-protocol uppercase tracking-wider font-semibold">
                    {committee.boardStatus}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION F: THREE-DAY CONFERENCE SCHEDULE
          ========================================================================= */}
      <section className="w-full py-space-xl bg-surface-container-low" id="schedule-section">
        <div className="max-w-[1240px] mx-auto px-margin">
          <div className="max-w-2xl mb-10">
            <div className="flex items-center gap-space-xs text-secondary mb-2">
              <span className="material-symbols-outlined text-[16px]">calendar_month</span>
              <span className="font-label-protocol text-label-protocol uppercase tracking-widest font-bold">
                Summit Chronology // 3-Day Sequence
              </span>
            </div>
            <h2 className="font-headline-md text-headline-md text-primary tracking-tight">
              Conference Program of Work
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
              A high-cadence procedural itinerary balancing rigorous parliamentary debate, informal diplomatic negotiation, and cultural exchange.
            </p>
          </div>

          {/* Tab Buttons */}
          <div className="flex flex-wrap items-center gap-2 mb-8 bg-surface-container p-1 rounded-lg w-fit">
            {SCHEDULE_DATA.map((day) => (
              <button
                key={day.dayNumber}
                type="button"
                onClick={() => setActiveDay(day.dayNumber)}
                className={`px-6 py-2.5 rounded-lg font-label-lg text-label-lg transition-all ${
                  activeDay === day.dayNumber
                    ? "bg-primary text-on-primary shadow-sm font-semibold"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {day.tabLabel}
              </button>
            ))}
          </div>

          {/* Timeline Content Pane */}
          <div className="flex flex-col gap-4">
            {currentSchedule.items.map((item, idx) => (
              <div
                key={idx}
                className="bg-surface-container-lowest p-6 rounded-xl shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-6">
                  <div className="font-label-lg text-label-lg text-secondary bg-secondary-fixed/30 px-3 py-1.5 rounded w-32 text-center shrink-0 font-bold">
                    {item.time}
                  </div>
                  <div>
                    <h4 className="font-title-lg text-title-lg text-primary font-bold">
                      {item.title}
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-on-surface-variant font-label-protocol text-label-protocol shrink-0 bg-surface-container px-3 py-1.5 rounded">
                  <span className="material-symbols-outlined text-[16px]">location_on</span>
                  <span>{item.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION G: NEWS & LATEST FROM BUGMUN
          ========================================================================= */}
      <section className="w-full py-space-xl bg-surface" id="news-section">
        <div className="max-w-[1240px] mx-auto px-margin">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <div className="flex items-center gap-space-xs text-secondary mb-2">
                <span className="material-symbols-outlined text-[16px]">feed</span>
                <span className="font-label-protocol text-label-protocol uppercase tracking-widest font-bold">
                  Official Dispatches
                </span>
              </div>
              <h2 className="font-headline-md text-headline-md text-primary tracking-tight">
                Latest Bulletins &amp; Updates
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
                Curated dispatches from the BUGMUN 2027 Organizing Secretariat and official announcements cross-posted to our social channels.
              </p>
            </div>
            <a
              className="inline-flex items-center gap-2 text-primary font-label-lg text-label-lg hover:text-secondary transition-colors group font-semibold"
              href="https://facebook.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>Follow @BUGMUNofficial on Facebook</span>
              <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">
                open_in_new
              </span>
            </a>
          </div>

          {/* News Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {NEWS_DATA.map((news) => (
              <div
                key={news.id}
                className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group border border-outline-variant/30"
              >
                <div>
                  <div className="relative w-full h-48 overflow-hidden bg-surface-container">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      alt={news.imageAlt}
                      src={news.imageUrl}
                    />
                    <div className="absolute top-3 left-3 bg-primary text-on-primary font-label-protocol text-label-protocol px-2.5 py-1 rounded font-bold">
                      {news.tag}
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="font-label-protocol text-label-protocol text-on-surface-variant uppercase tracking-wider font-semibold">
                      {news.date}
                    </span>
                    <h3 className="font-title-lg text-title-lg text-primary mt-2 mb-3 leading-snug font-bold">
                      {news.title}
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      {news.description}
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <a
                    className="inline-flex items-center gap-1.5 text-secondary font-label-md text-label-md group-hover:underline font-semibold"
                    href={news.linkUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span>{news.linkText}</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Social Media Connect Banner */}
          <div className="mt-12 bg-primary text-on-primary rounded-xl p-space-lg flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
            <div className="flex items-center gap-space-md">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-on-secondary shrink-0">
                <span className="material-symbols-outlined text-[24px]">forum</span>
              </div>
              <div>
                <h4 className="font-title-lg text-title-lg text-surface-container-lowest font-bold">
                  Connect with the Secretariat Feed
                </h4>
                <p className="font-body-sm text-body-sm text-tertiary-fixed-dim">
                  Daily dispatches, executive board unveilings, and delegate preparation tips published on our official page.
                </p>
              </div>
            </div>
            <a
              className="bg-surface-container-lowest text-primary px-6 py-3 rounded-lg font-label-lg text-label-lg hover:bg-secondary-fixed transition-colors shrink-0 shadow-sm font-semibold"
              href="https://facebook.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              Join Facebook Community
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION H: PARTICIPATION CALL-TO-ACTION & EARLY ACCESS
          ========================================================================= */}
      <section className="w-full py-space-xl bg-surface-container-high relative overflow-hidden" id="register-section">
        <div className="max-w-[1240px] mx-auto px-margin">
          <div className="bg-primary rounded-2xl p-space-xl md:p-16 text-on-primary relative overflow-hidden shadow-xl">
            {/* Decorative subtle SVG seal background */}
            <div className="absolute -right-20 -bottom-20 w-96 h-96 pointer-events-none opacity-10">
              <svg fill="none" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <circle className="text-secondary-container" cx="100" cy="100" r="90" stroke="currentColor" strokeDasharray="6 6" strokeWidth="2"></circle>
                <circle className="text-tertiary-fixed" cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="1.5"></circle>
                <polygon className="text-secondary" points="100,20 120,80 180,80 130,120 150,180 100,140 50,180 70,120 20,80 80,80" stroke="currentColor" strokeWidth="1"></polygon>
              </svg>
            </div>

            <div className="relative z-10 max-w-3xl flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full w-fit">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                <span className="font-label-protocol text-label-protocol uppercase tracking-wider font-bold">
                  Registration Cycle 2027
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-surface-container-lowest tracking-tight">
                Shape Global Statecraft. <br />
                <span className="italic text-secondary-container">Be Part of BUGMUN 2027.</span>
              </h2>
              <p className="font-body-lg text-body-lg text-tertiary-fixed-dim leading-relaxed">
                Whether representing a permanent member of the Security Council or advancing climate equity for small island developing states, your voice will articulate solutions for an interdependent world. Delegate and delegation applications open soon.
              </p>

              {/* Notification Signup Form */}
              <div className="pt-4 max-w-xl">
                <p className="font-label-md text-label-md text-tertiary-fixed uppercase tracking-wider mb-2 font-semibold">
                  Priority Notification Registry
                </p>
                <form className="flex flex-col sm:flex-row gap-3" onSubmit={handleNotifySubmit}>
                  <input
                    className="bg-surface-container-lowest text-on-surface px-4 py-3.5 rounded-lg flex-1 font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-secondary-container placeholder:text-on-surface-variant/70 shadow-sm"
                    placeholder="Enter institutional or delegate email"
                    required
                    type="email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                  />
                  <button
                    className="bg-secondary-container text-on-secondary-container font-label-lg text-label-lg px-6 py-3.5 rounded-lg hover:bg-secondary-fixed transition-colors shadow-sm whitespace-nowrap font-bold cursor-pointer"
                    type="submit"
                  >
                    Notify Me When Open
                  </button>
                </form>
                {notifySuccess && (
                  <div className="bg-secondary/20 border border-secondary/40 text-surface-container-lowest rounded-lg p-3.5 mt-3 flex items-start gap-2.5 animate-fadeIn">
                    <span className="material-symbols-outlined text-secondary-container text-[20px] shrink-0 mt-0.5">check_circle</span>
                    <div className="font-body-sm text-body-sm">
                      <p className="font-semibold text-secondary-container">Thank you for your interest!</p>
                      <p className="text-tertiary-fixed-dim mt-0.5">Official delegate and delegation registration will launch with the public portal in 2027. Follow @BUGMUNofficial on Facebook for live updates.</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Fast Institutional Meta */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-outline/20">
                <div>
                  <span className="font-label-protocol text-label-protocol text-tertiary-fixed-dim uppercase tracking-wider">
                    Target Quorum
                  </span>
                  <p className="font-title-md text-title-md text-surface-container-lowest mt-0.5 font-bold">
                    320 Delegates
                  </p>
                </div>
                <div>
                  <span className="font-label-protocol text-label-protocol text-tertiary-fixed-dim uppercase tracking-wider">
                    Host Organizer
                  </span>
                  <p className="font-title-md text-title-md text-surface-container-lowest mt-0.5 font-bold">
                    IABC BRAC University
                  </p>
                </div>
                <div>
                  <span className="font-label-protocol text-label-protocol text-tertiary-fixed-dim uppercase tracking-wider">
                    Jurisdiction
                  </span>
                  <p className="font-title-md text-title-md text-surface-container-lowest mt-0.5 font-bold">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
