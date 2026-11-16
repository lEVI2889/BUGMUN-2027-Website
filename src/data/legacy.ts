export interface MilestoneAssembly {
  year: string;
  badge: string;
  subtitle: string;
  theme: string;
  narrative: string;
  metrics: { label: string; value: string }[];
  quote: string;
  mainPhoto: {
    url: string;
    alt: string;
    caption: string;
  };
  subPhotos: {
    url: string;
    alt: string;
    caption: string;
  }[];
}

export interface GalleryPlate {
  id: string;
  category: "plenary" | "committee" | "registration" | "awards" | "cultural" | "press" | "graphics";
  year: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  catalogNo?: string;
  sourceFile?: string;
}

export const MILESTONES_DATA: MilestoneAssembly[] = [
  {
    year: "2014",
    badge: "Inaugural Conference",
    subtitle: "First Edition • Dhaka, Bangladesh",
    theme: "\"Post-2015: Envisioning a Better Future of the World\"",
    narrative: "Initiated in 2014 under the theme 'Post-2015: Envisioning a Better Future of the World', the inaugural edition brought together more than 400 representatives from countries including Costa Rica, Nepal, Nigeria, Pakistan, Indonesia, and India. This groundbreaking gathering established a new national benchmark of diplomatic inclusivity and organizational scale in Bangladesh.",
    metrics: [
      { label: "Representatives", value: "400+ Reps" },
      { label: "Documented Nations", value: "6+ Sovereign States" },
      { label: "Legacy Milestone", value: "Inaugural Foundation" },
    ],
    quote: "\"The opening gavel at BUGMUN 2014 announced BRAC University’s entrance onto the international diplomatic conference circuit with unyielding clarity.\"",
    mainPhoto: {
      url: "/assets/legacy/placeholders/archival-record-2014.svg",
      alt: "Official archival record holding for the BUGMUN 2014 inaugural conference. Documentary photography pending declassification.",
      caption: "Plate 1.1 • Archival Holding Notice (Documentation in Acquisition)",
    },
    subPhotos: [
      {
        url: "/assets/legacy/placeholders/archival-record-2014.svg",
        alt: "BUGMUN 2014 Roll Call and Plenary assembly official record holding.",
        caption: "Roll Call & Plenary (Archival Holding)",
      },
      {
        url: "/assets/legacy/placeholders/archival-record-2014.svg",
        alt: "BUGMUN 2014 Chamber proceedings and resolution corridor official record holding.",
        caption: "Chamber Proceedings (Archival Holding)",
      },
    ],
  },
  {
    year: "2016",
    badge: "Second Assembly",
    subtitle: "Second Edition • International Cooperation & Policy Discourse",
    theme: "\"Solidifying Multilateral Cooperation and Global Dialogue\"",
    narrative: "Solidifying the precedent set by the inaugural conference, the second edition in 2016 convened national and international players in a collaborative platform dedicated to international cooperation and rigorous policy discourse. The summit expanded regional diplomatic ties and strengthened cross-cultural engagement across chambers.",
    metrics: [
      { label: "Edition", value: "2nd Assembly" },
      { label: "Participant Scope", value: "National & International" },
      { label: "Core Focus", value: "Global Policy Discourse" },
    ],
    quote: "\"BUGMUN 2016 solidified the tradition of high-level policy debate, bridging student leaders from diverse backgrounds in shared diplomatic discourse.\"",
    mainPhoto: {
      url: "/assets/legacy/placeholders/archival-record-2016.svg",
      alt: "Official archival record holding for BUGMUN 2016 Second Assembly. Documentary photography pending declassification.",
      caption: "Plate 2.1 • Archival Holding Notice (Documentation in Acquisition)",
    },
    subPhotos: [
      {
        url: "/assets/legacy/placeholders/archival-record-2016.svg",
        alt: "BUGMUN 2016 Multilateral policy debate official record holding.",
        caption: "Multilateral Debate (Archival Holding)",
      },
      {
        url: "/assets/legacy/placeholders/archival-record-2016.svg",
        alt: "BUGMUN 2016 Secretariat leadership official record holding.",
        caption: "Secretariat Leadership (Archival Holding)",
      },
    ],
  },
  {
    year: "2017",
    badge: "Third Edition",
    subtitle: "December 27–31, 2017 • Five-Day Summit at Savar",
    theme: "\"Conforming to Egalitarianism: Provision of Consolidated Global Prosperity\"",
    narrative: "Held from December 27th to 31st, 2017 at BRAC University’s Savar campus, the third edition convened over 350 delegates and executive board members across 12 specialized committees. The summit marked the historic first-time inclusion of the UN Peacebuilding Commission (UNPBC) and the Special Political and Decolonization Committee (SPECPOL), alongside social events, cultural performances, and high-level debates.",
    metrics: [
      { label: "Delegates & EB", value: "350+ Leaders" },
      { label: "Committees", value: "12 Specialized" },
      { label: "Historic Debuts", value: "UNPBC & SPECPOL" },
    ],
    quote: "\"Culminating with a grand diplomatic soiree on New Year's Eve, BUGMUN 2017 celebrated international fellowship and consensus building across borders.\"",
    mainPhoto: {
      url: "/assets/legacy/2017/bugmun-2017-banner.jpg",
      alt: "Official digital promotional banner for BUGMUN 2017 featuring the theme Conforming to Egalitarianism: Provision for Consolidated Global Prosperity.",
      caption: "Plate 3.1 • Official Commemorative Theme Banner (Historical Graphic)",
    },
    subPhotos: [
      {
        url: "/assets/legacy/2017/bugmun-2017-emblem.jpg",
        alt: "Official graphic emblem of BUGMUN 2017 showing stylized student diplomats on cyan splash insignia.",
        caption: "Official Insignia (Historical Graphic)",
      },
      {
        url: "/assets/legacy/placeholders/archival-record-2017.svg",
        alt: "BUGMUN 2017 Committee Floor Interventions photographic records in archival acquisition.",
        caption: "Floor Interventions (Archival Record)",
      },
    ],
  },
  {
    year: "2020",
    badge: "Fourth Edition • The Residential Summit",
    subtitle: "BRAC University TARC Campus, Savar • Fully Residential",
    theme: "\"United in the Search of Compounding Global Prosperity: Altruism in Practice\"",
    narrative: "Organized as a fully residential conference at BRAC University's TARC campus in Savar, the fourth edition convened over 400 delegates across 11 specialized committees and an International Press corps. Featuring round-the-clock committee diplomacy, networking, concerts, and a formal gala ball, BUGMUN 2020 established an enduring standard for immersive collegiate summits before the pandemic-era residential suspension.",
    metrics: [
      { label: "Delegation", value: "400+ Residential" },
      { label: "Chambers", value: "11 + Intl Press" },
      { label: "Campus Format", value: "Fully Residential" },
    ],
    quote: "\"TARC 2020 became more than a conference; it transformed into an ephemeral diplomatic city where future leaders negotiated through daybreak.\"",
    mainPhoto: {
      url: "/assets/legacy/2020/84139249_2672508346202634_234899165941858304_n.jpg",
      alt: "Authentic historical photograph of the BUGMUN 2020 Executive Secretariat Plenary Session dais, showing the Secretary-General, President, and Committee Directors.",
      caption: "Plate 4.1 • Executive Secretariat Plenary Dais (BUGMUN 2020 Archival Photograph)",
    },
    subPhotos: [
      {
        url: "/assets/legacy/2020/83741393_2658465557606913_3097477564302622720_n.jpg",
        alt: "Authentic historical photograph of BUGMUN 2020 committee chamber in session with delegates seated in a semicircle facing the chairperson desk.",
        caption: "Committee Deliberation (Archival Photograph)",
      },
      {
        url: "/assets/legacy/2020/83046767_2658457060941096_1128950218386046976_n.jpg",
        alt: "Authentic historical photograph of the BUGMUN 2020 cultural night musical performance before the conference LED stage backdrop.",
        caption: "Cultural Evening Gala (Archival Photograph)",
      },
    ],
  },
];

export const GALLERY_PLATES: GalleryPlate[] = [
  {
    id: "plate-01",
    category: "plenary",
    year: "2020",
    title: "Executive Secretariat Plenary Dais",
    subtitle: "Opening convocation head table",
    description: "Official formal record of the complete BUGMUN 2020 Executive Secretariat seated behind the white-draped dais table under the plenary banner during the convocation assembly.",
    imageUrl: "/assets/legacy/2020/84139249_2672508346202634_234899165941858304_n.jpg",
    imageAlt: "Authentic historical photograph of the BUGMUN 2020 Executive Secretariat Plenary Session dais with Secretary-General, President, and Chairpersons.",
    catalogNo: "BGM-ARC-2001",
    sourceFile: "84139249_2672508346202634_234899165941858304_n.jpg",
  },
  {
    id: "plate-02",
    category: "committee",
    year: "2020",
    title: "SOCHUM Multilateral Caucus",
    subtitle: "Delegations of Italy, Japan, Norway & Pakistan",
    description: "Delegates in formal business attire deliberate global human rights policy in the Social, Humanitarian and Cultural Committee (SOCHUM) during BUGMUN 2020.",
    imageUrl: "/assets/legacy/2020/83562882_2658447977608671_465243531951210496_n.jpg",
    imageAlt: "Delegates seated with country placards for Italy, Japan, Norway, and Pakistan during formal debate in SOCHUM chamber.",
    catalogNo: "BGM-ARC-2002",
    sourceFile: "83562882_2658447977608671_465243531951210496_n.jpg",
  },
  {
    id: "plate-03",
    category: "registration",
    year: "2020",
    title: "Secretariat Registration Check-In",
    subtitle: "Delegate credentialing and kit distribution",
    description: "Secretariat organizing committee members in formal blazers issuing official delegate badges, research dossiers, and participation kits at the conference entrance.",
    imageUrl: "/assets/legacy/2020/82076535_2629384990514970_8223624162833334272_n.jpg",
    imageAlt: "Secretariat members at the registration desk handing out delegate folders and materials to arriving participants.",
    catalogNo: "BGM-ARC-2003",
    sourceFile: "82076535_2629384990514970_8223624162833334272_n.jpg",
  },
  {
    id: "plate-04",
    category: "awards",
    year: "2020",
    title: "NATO Dais Commemorative Plaque",
    subtitle: "Valedictory honors and token of appreciation",
    description: "The Secretary-General and senior university dignitary present a commemorative token of appreciation plaque to the NATO Committee Co-Chairperson on stage.",
    imageUrl: "/assets/legacy/2020/84604988_2672533222866813_1344314180848582656_n.jpg",
    imageAlt: "The Secretary-General and senior dignitary presenting a framed token of appreciation plaque to the NATO Co-Chairperson on stage.",
    catalogNo: "BGM-ARC-2004",
    sourceFile: "84604988_2672533222866813_1344314180848582656_n.jpg",
  },
  {
    id: "plate-05",
    category: "cultural",
    year: "2020",
    title: "Cultural Gala Musical Performance",
    subtitle: "Unmoderated cultural evening on main stage",
    description: "Live acoustic musical duet performing on stage during the BUGMUN 2020 cultural night before the conference LED backdrop screen, celebrating inter-delegation fellowship.",
    imageUrl: "/assets/legacy/2020/83046767_2658457060941096_1128950218386046976_n.jpg",
    imageAlt: "Guitarist and female vocalist performing on stage in front of the BUGMUN 2020 digital LED backdrop during cultural night.",
    catalogNo: "BGM-ARC-2005",
    sourceFile: "83046767_2658457060941096_1128950218386046976_n.jpg",
  },
  {
    id: "plate-06",
    category: "press",
    year: "2020",
    title: "International Press Corps Dispatch",
    subtitle: "CNN Press Corps committee investigation",
    description: "An International Press student journalist representing CNN taking handwritten field notes during high-stakes committee proceedings.",
    imageUrl: "/assets/legacy/2020/83906451_2658445140942288_8458513059508387840_n.jpg",
    imageAlt: "A student delegate representing CNN in the International Press corps writing notes during committee deliberations.",
    catalogNo: "BGM-ARC-2006",
    sourceFile: "83906451_2658445140942288_8458513059508387840_n.jpg",
  },
  {
    id: "plate-07",
    category: "committee",
    year: "2020",
    title: "Specialized Crisis Cabinet in Caucus",
    subtitle: "Unmoderated strategic directives circle",
    description: "Delegates seated in a caucus circle with specialized agency name placards and laptops drafting emergency directives during a fast-paced crisis simulation.",
    imageUrl: "/assets/legacy/2020/83377822_2658467087606760_5789628280218845184_n.jpg",
    imageAlt: "Crisis committee delegates seated in a circle with laptops and name placards debating directives.",
    catalogNo: "BGM-ARC-2007",
    sourceFile: "83377822_2658467087606760_5789628280218845184_n.jpg",
  },
  {
    id: "plate-08",
    category: "plenary",
    year: "2020",
    title: "Plenary Assembly Standing Ovation",
    subtitle: "Chamber applause following keynote address",
    description: "Delegates and Secretariat leadership rise in spontaneous standing ovation across the plenary assembly hall at the conclusion of opening remarks.",
    imageUrl: "/assets/legacy/2020/84516056_2672514122868723_2711937067608178688_n.jpg",
    imageAlt: "Audience of delegates and secretariat officers standing and applauding in the plenary hall.",
    catalogNo: "BGM-ARC-2008",
    sourceFile: "84516056_2672514122868723_2711937067608178688_n.jpg",
  },
  {
    id: "plate-09",
    category: "graphics",
    year: "2017",
    title: "BUGMUN 2017 Commemorative Theme Banner",
    subtitle: "Conforming to Egalitarianism: Consolidated Global Prosperity",
    description: "Official digital theme banner for the 3rd Edition at Savar, setting forth the landmark mandate of egalitarianism and international fellowship.",
    imageUrl: "/assets/legacy/2017/bugmun-2017-banner.jpg",
    imageAlt: "Official BUGMUN 2017 digital promotional banner with theme: Conforming to Egalitarianism: Provision for Consolidated Global Prosperity.",
    catalogNo: "BGM-ARC-1701",
    sourceFile: "513276094_10034706469982748_8650447140062765741_n.jpg",
  },
  {
    id: "plate-10",
    category: "graphics",
    year: "2017",
    title: "BUGMUN 2017 Official Diplomatic Insignia",
    subtitle: "3rd Edition conference emblem",
    description: "Authentic graphic insignia of BUGMUN 2017 featuring stylized youth diplomats over a cyan and primary splash motif.",
    imageUrl: "/assets/legacy/2017/bugmun-2017-emblem.jpg",
    imageAlt: "Official graphic emblem of BUGMUN 2017 displaying stylized figures and conference text.",
    catalogNo: "BGM-ARC-1702",
    sourceFile: "327161731_924765458890754_2571667840696250472_n.jpg",
  },
  {
    id: "plate-11",
    category: "graphics",
    year: "2020",
    title: "BUGMUN 2020 Residential Summit Banner",
    subtitle: "United in the Search of Compounding Global Prosperity",
    description: "Official promotional banner for the 4th Edition residential conference held 2nd–6th January 2020 at the TARC campus in Savar.",
    imageUrl: "/assets/legacy/2020/bugmun-2020-banner.jpg",
    imageAlt: "BUGMUN 2020 panoramic theme banner with conference dates 2nd-6th January 2020 and altruism theme.",
    catalogNo: "BGM-ARC-2009",
    sourceFile: "480312319_680413670976120_6636976475665138404_n(1).jpg",
  },
  {
    id: "plate-12",
    category: "cultural",
    year: "Undated",
    title: "Campus Night Luminous Formation",
    subtitle: "Evening collegiate solidarity on the campus lawn",
    description: "High-angle night documentary shot of hundreds of student participants gathered on the illuminated lawn spelling out BUGMUN with phone flashlights.",
    imageUrl: "/assets/legacy/undated/bugmun-night-signage.jpg",
    imageAlt: "Night aerial photograph of delegates on the ground creating a luminous BUGMUN formation with phone lights.",
    catalogNo: "BGM-ARC-0001",
    sourceFile: "511853887_10014145998705462_684547533004631961_n.jpg",
  },
  {
    id: "plate-13",
    category: "registration",
    year: "2020",
    title: "Residential Arrival & Venue Check-In",
    subtitle: "Delegates arriving at TARC residential campus",
    description: "Arriving student delegates with travel luggage and winter wraps standing before the conference center entrance.",
    imageUrl: "/assets/legacy/2020/82017842_2629384927181643_7866529346209447936_n.jpg",
    imageAlt: "Two delegates with suitcases and backpacks arriving at the conference center entrance.",
    catalogNo: "BGM-ARC-2010",
    sourceFile: "82017842_2629384927181643_7866529346209447936_n.jpg",
  },
  {
    id: "plate-14",
    category: "registration",
    year: "2020",
    title: "Official Study Guides & Working Dossiers",
    subtitle: "Printed research literature for delegates",
    description: "Stacks of official BUGMUN 2020 committee study guides and delegate research dossiers ready for distribution at the registration desk.",
    imageUrl: "/assets/legacy/2020/82069062_2629381190515350_2383905796460118016_n.jpg",
    imageAlt: "Stacked printed copies of the BUGMUN 2020 delegate handbook and pens at registration.",
    catalogNo: "BGM-ARC-2011",
    sourceFile: "82069062_2629381190515350_2383905796460118016_n.jpg",
  },
  {
    id: "plate-15",
    category: "committee",
    year: "2020",
    title: "Full Chamber Horseshoe Deliberation",
    subtitle: "Moderated caucus and amendment debate",
    description: "Panoramic view of an active committee chamber with the Executive Board dais at the front and delegates arranged in a horseshoe formation consulting laptops and draft resolutions.",
    imageUrl: "/assets/legacy/2020/83741393_2658465557606913_3097477564302622720_n.jpg",
    imageAlt: "Wide angle shot of a committee room in session with delegates seated in a semicircle facing the director desk.",
    catalogNo: "BGM-ARC-2012",
    sourceFile: "83741393_2658465557606913_3097477564302622720_n.jpg",
  },
  {
    id: "plate-16",
    category: "committee",
    year: "2020",
    title: "China, France & India Floor Debate",
    subtitle: "SOCHUM multilateral policy negotiations",
    description: "Delegates representing the delegations of China, France, and India conferring and presenting policy arguments during formal committee debate.",
    imageUrl: "/assets/legacy/2020/83762979_2658453114274824_10571782826229760_n.jpg",
    imageAlt: "Delegates with placards for China, France, and India participating in SOCHUM committee debate.",
    catalogNo: "BGM-ARC-2013",
    sourceFile: "83762979_2658453114274824_10571782826229760_n.jpg",
  },
  {
    id: "plate-17",
    category: "awards",
    year: "2020",
    title: "UNSC Leadership Appreciation",
    subtitle: "Plaque presentation to Security Council President",
    description: "The UN Security Council President receiving an engraved token of appreciation plaque from a senior dignitary during the valedictory ceremonies.",
    imageUrl: "/assets/legacy/2020/85007494_2672533846200084_9157947199466766336_n.jpg",
    imageAlt: "UN Security Council President receiving an engraved commemorative plaque from a senior dignitary on stage.",
    catalogNo: "BGM-ARC-2014",
    sourceFile: "85007494_2672533846200084_9157947199466766336_n.jpg",
  },
  {
    id: "plate-18",
    category: "awards",
    year: "2020",
    title: "Continuous Crisis Committee Recognition",
    subtitle: "Vice-Chairperson honours conferral",
    description: "The Secretary-General presenting a commemorative honors plaque to the Vice-Chairperson of the Continuous Crisis Committee (CCC) on stage.",
    imageUrl: "/assets/legacy/2020/85121027_2672535556199913_1053567915934089216_n.jpg",
    imageAlt: "CCC Vice-Chairperson receiving an engraved commemorative plaque on stage from the Secretary-General.",
    catalogNo: "BGM-ARC-2015",
    sourceFile: "85121027_2672535556199913_1053567915934089216_n.jpg",
  },
  {
    id: "plate-19",
    category: "plenary",
    year: "2020",
    title: "Secretary-General Keynote Address",
    subtitle: "Addressing the assembled delegations",
    description: "The Secretary-General delivering formal remarks to the assembled delegations from the plenary dais flanked by secretariat colleagues.",
    imageUrl: "/assets/legacy/2020/84821704_2672513026202166_7130023140201070592_n.jpg",
    imageAlt: "Secretary-General speaking into the microphone at the plenary dais table alongside executive board members.",
    catalogNo: "BGM-ARC-2016",
    sourceFile: "84821704_2672513026202166_7130023140201070592_n.jpg",
  },
  {
    id: "plate-20",
    category: "registration",
    year: "2020",
    title: "UNHCR & SOCHUM Entrance Queue",
    subtitle: "Arrival queue beside committee standees",
    description: "Delegates queuing at check-in with travel backpacks beside tall official UNHCR and SOCHUM banner standees at the conference entrance.",
    imageUrl: "/assets/legacy/2020/83391517_2629391407180995_1141810046254972928_n.jpg",
    imageAlt: "Delegates queuing at check-in with luggage beside UNHCR and SOCHUM roll-up banner standees.",
    catalogNo: "BGM-ARC-2017",
    sourceFile: "83391517_2629391407180995_1141810046254972928_n.jpg",
  },
];
