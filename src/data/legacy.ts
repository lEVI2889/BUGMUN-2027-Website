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
  category: "plenary" | "dinners" | "board" | "tarc";
  year: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

export const MILESTONES_DATA: MilestoneAssembly[] = [
  {
    year: "2014",
    badge: "Inaugural Conference",
    subtitle: "First Edition • Dhaka, Bangladesh",
    theme: "\"Post-2015: Envisioning a Better Future of the World\"",
    narrative: "The inaugural edition set the foundational paradigm for BUGMUN. Attracting over 400 representatives including prominent delegations from across South Asia, the conference aligned itself directly with the emerging United Nations Sustainable Development Goals agenda, replacing the Millennium Development Goals (MDGs).",
    metrics: [
      { label: "Delegates", value: "400+ Reps" },
      { label: "Special Feature", value: "Intl Delegations" },
      { label: "Legacy Impact", value: "Precedent Set" },
    ],
    quote: "\"The opening gavel at BUGMUN 2014 announced BRAC University’s entrance onto the international diplomatic conference circuit with unyielding clarity.\"",
    mainPhoto: {
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBy76JVFXCvTaAuios0USldBl9CHWEOzNWdJTgftWKV4ClSkmDLG4IgVjV6H8cBCo3KlaGQ0AcqyMHTnZCDSQ9Gi1dBOIa2cqLm1M5O5ZKJPWUgmYduC5tZlXn4R1rgHNTPXlXoKgoqPt8Z9vsY-I4bdEBIAoU1-yvAduNU_6QUg6H0gh69KJcZ6tSSpQTO7G3jsnF7UP5w7b4bKnlzCZdnFGLQ8C2e8T1wdzBkxDk",
      alt: "Historical sepia-toned high-resolution photograph from 2014 showing a spirited Model United Nations committee room in session, delegates holding country placards like France and Brazil high in the air during roll call voting, conference folders spread across tables.",
      caption: "Fig 1.1 • Roll Call & Plenary Session 2014",
    },
    subPhotos: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBuNO5l1nkXxJeAPcv4OUO2FoeYRQqpr6Tt8LlDD2a9d-odQnGcFNszbuNUUz8v8zOB4Tred_rrSEr0QbE0J_A-oLpXpKdCecUNufS-hlS4BLd0RAyL8Tbsch2PbCKXXTXWpjDvUYkA4IHHsD0k-4kQFyIEml3_8X0K6rpiVHYksa8X-qE5o2iU6AVbbipY_DVs9zR7I7Lx8Xyx8fD020bwNnxZnwUiyFZ-xbPhtI0",
        alt: "Archival close-up photograph of an Executive Board member striking a wooden gavel onto a ceremonial sound block with an embossed conference crest, crisp indoor lighting, formal diplomatic ambiance.",
        caption: "The Call to Order",
      },
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJ91RVnMhF1oRMGYL48njWNehjXjnpG7zU3QBs2ubFcLx44zrxxbwozRd1MTJnE_QDZjrtOdTsOMAtb6LwPc5KhdfhGINmXErInQSpYM9v5jWRb4ZvjtBF1c0-ud_y-8Dfq-X_G9r-yKsk_BkVY8hmp1Vk64qgVxH2CL3r1M0xaC-S_W2f2KC5nnD01YnWVtQTFfUTSS99NSVX1ATCwSlRU6Tpsejd7cilNZuKtv8",
        alt: "Archival photograph of international delegates conferring in an unmoderated caucus hallway, reviewing draft resolutions printed on formal treaty paper, animated diplomatic debate.",
        caption: "Draft Resolution Corridor",
      },
    ],
  },
  {
    year: "2016",
    badge: "Second Assembly",
    subtitle: "Consolidation of Policy • Academic Rigor",
    theme: "Strengthening the Foundation & Crisis Simulations",
    narrative: "The 2016 summit represented a massive leap in procedural sophistication. The academic curriculum introduced fast-paced Historical Crisis Committees (HCC) alongside traditional General Assembly chambers. Partnerships expanded into regional South Asian diplomatic circuits, cementing BUGMUN as a definitive national summit.",
    metrics: [
      { label: "Chambers", value: "8 Committees" },
      { label: "Innovation", value: "Crisis Mechanix" },
      { label: "Mentorship", value: "Novice Track" },
    ],
    quote: "\"BUGMUN 2016 introduced high-stakes midnight crises, testing delegate endurance and tactical diplomacy under simulated geopolitical pressure.\"",
    mainPhoto: {
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9kyR94ElS5_hoS0LSouboVHHBZBn47lhVVS9sR4PHyRPXsJai3bM97-Pt94XzwsHb-7_FJazhDap9qH2Azq-nqdM3ZanPRVRS6qmIU8JV0xwT24uzUkTTvgGefiIjlJiYX3-yl_kKrXH1P91AZH31wCKEtMLEVkAx1AWr2miArk9pgX2kluUkso7LsBq1m0xD8PihM6a4HhE3hGA7EVyXf2e98wyLxdky7DzVu5g",
      alt: "Editorial archival photo from BUGMUN 2016 showing delegates in sharp formal diplomatic suits engaged in intense multilateral debate inside an expansive modern lecture theater, delegate placards raised, projection screens displaying committee clauses.",
      caption: "Fig 2.1 • Security Council Emergency Session 2016",
    },
    subPhotos: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOH52RUZOoUkEExC5tnbGxjwpQUAYFeFHxml6zUpGp2qaUGB7ChPl9h49v91KXdSV-Zpm9Jp6Q1d7eUEy0rbKg3mSGAR5JSPD1lMp1QVbQNY3Kvzu01knzTlzCa2XoOnLtsjDOfnjchNQTgNwRhFLf8CXb5SxtkCKsU1xT0T1_hVVTZcyjou1CBicjVN55i4nXWMCqcV0LCtJLyw866vdsGFtVa_MXz8HqqaHt4jY",
        alt: "Archival photo of guest keynote speaker addressing an assembly hall with diplomatic flags of various nations displayed behind them, warm professional conference illumination.",
        caption: "Keynote Address",
      },
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMUA3KXV-oaM3QhmyQyU_5cqaOFR2xax-C3uGyjnuiFTGn7IC4x4IouCuc4ztvXx8bK7ILj_ZyCr_uuI2HlO63hVQAUCL00Z-QbboODWm6pFlFb7p4gP2UlUMdWuaJ2fd3NSSQbfByFskp2VCiuJm7CJQ0ZjhQqM7tQoQI6OOqOtp2nU8khZv3mFf9GqHBmgmUPJnkdNb3fj5qcobInR_xXs8qttY09wSbup_4syo",
        alt: "Archival group photograph of the IABC Secretariat team in matching diplomatic navy blazers holding conference badges, smiling with institutional poise in front of a conference banner.",
        caption: "2016 Secretariat Corps",
      },
    ],
  },
  {
    year: "2017",
    badge: "Third Edition",
    subtitle: "December 27–31, 2017 • Five-Day Summit",
    theme: "\"Conforming to Egalitarianism: Provision of Consolidated Global Prosperity\"",
    narrative: "Spanning five intensive days over the year-end transition, the 2017 edition convened 350+ delegates and executive board leaders across 12 specialized committees. The summit championed human rights frameworks, climate justice, and wealth disparity eradication through nuanced legislative negotiation.",
    metrics: [
      { label: "Delegates & EB", value: "350+ Leaders" },
      { label: "Committees", value: "12 Specialized" },
      { label: "Format", value: "Gala & Diplomatic Dinner" },
    ],
    quote: "\"Culminating with a grand diplomatic soiree on New Year's Eve, BUGMUN 2017 celebrated international fellowship and consensus building across borders.\"",
    mainPhoto: {
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWyJl_xqfmVft8KUSuAqQpbbTql8WKdoXN1jPwmaL2XYeeOHfxIWnlJqEiPyvLPswXqX1grhxlfn-qme9RvHsAaaTmDtFC-vZ5qUiprkfDW2cViP1TpfEaYhRLrm2burFo8CKnbo6jO1lX-U-DjcJU6EDglc40XN6lg2JlM3c8vVPetb7vdfCLRWHyyZa9r9TLNQf_ScceL0rPBIv7actJl6gDbZs5oga6BMrlAss",
      alt: "Atmospheric archival photo from BUGMUN 2017 diplomatic gala dinner, long banquet tables adorned with candelabras and national flags, delegates in formal evening wear and traditional national attire engaged in warm conversation.",
      caption: "Fig 3.1 • Formal Diplomatic Gala 2017",
    },
    subPhotos: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAnApr4Wx3IYU0KXw1OCGwrjeGMzcAHUufJsC7x3vWoMxshDzxRt_4oHLJYCWyu6M6fvgjOtv3dI-q-ztnCQFHRcTkYMQtO6_DsqTVsM0AdwiXzbhZwI6uurk_daCtrgAodvGBd7SasTgf_zr2Uskxb7ay0cs-E3n-UcGLg275uf8qtLvfBaxrfCUqZHvvq5XX9y0Wa3hbnaE8OqrEnU6MZQI5GLZb_OznjhCo3VaY",
        alt: "Archival close-up of delegates signing an official UN resolution treaty document with fountain pens, official red wax seals and embossed insignia visible.",
        caption: "Treaty Ratification",
      },
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGNsIt-n4XT4VYa5uF07ekOgf66UoPoeo7-06Qpbjz0jVro7UZbdbL92QcuECuHLI0oX5MBFlvVQiHjvmhDKUU213ZCOnCguEppAGxgYtoP_BQuBo0Lti3PxDISFVkaToWwP644qubfzO3RBNGydZMg_rUXTElYCshuQ903eBdkI-dzOLP_w6H90K-QswEiXA41dMHKfFIkvjskWk9Mc55loA_dhxg0JFx3Yep04s",
        alt: "Archival photo of a delegate speaking with passion at a committee lectern, hands gesturing emphatically while addressing fellow delegates.",
        caption: "Floor Intervention",
      },
    ],
  },
  {
    year: "2020",
    badge: "The Landmark Residential Summit",
    subtitle: "TARC Campus, Savar • Fully Residential",
    theme: "\"United in the Search of Compounding Global Prosperity: Altruism in Practice\"",
    narrative: "Regarded by alumni as the most iconic edition in BUGMUN history. Held at BRAC University's sprawling residential campus (TARC), the conference immersed 400+ delegates in 24-hour diplomacy across 11 specialized committees and a high-tempo International Press Corps. The residential format dissolved barriers, cultivating enduring multilateral bonds.",
    metrics: [
      { label: "Delegation", value: "400+ Residential" },
      { label: "Committees", value: "11 + Intl Press" },
      { label: "Immersion", value: "24/7 Diplomatic" },
    ],
    quote: "\"TARC 2020 became more than a conference; it transformed into an ephemeral diplomatic city where future leaders negotiated through daybreak.\"",
    mainPhoto: {
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8-uZFeID9Sk-LitvgT41ljjbCHYvFOqsnGUl7aDk5-C6d9m-ozvu7kKSn7gaRhZNqpc6ueznEQHcuW8tVZCuDQSKnS3DaPMles7HyhY0p1eU8V9on7G0moocIZbiEcLWPmfAIpSiJvJq0pGqDupdWrebMcAMLMmmyVXAa3via3n3XTj2VW4-qaJFLMmb6mkhTE40WnXnHJesqwgJ67OhnRml9GYAmsQQoGkWxG88",
      alt: "Wide-angle archival documentary shot of BRAC University TARC residential campus during BUGMUN 2020, delegates walking along verdant lush walkways between conference halls in early morning mist, badges visible.",
      caption: "Fig 4.1 • TARC Residential Campus 2020",
    },
    subPhotos: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAp2tNS833ukyu8VxUY3hThnRLB5H9KYpuG7OT959tdiS88ujbQR1qWATq2_Et5KEUrfToVPt8FqEBI_W-HEvjyYkCJBWvHv4PQtKiDJ_6--XVVw5k2xBhi-oQHBkuiY2DDY3B5EZNK-_iYGt8vIgJYdDwRVojVznDU_pcF_HKPramQ2zuwx3AYssNk5VMA6GILO1hHzIwfwFNG58da6XrtFv5c43qvq2Da__rG7cM",
        alt: "Archival photo of a late night informal caucus on the TARC residential lawn under string fairy lights, delegates huddled over laptops drafting unmoderated agreements with hot cups of tea.",
        caption: "Midnight Caucuses",
      },
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyeGik3X1E9wc1Ac1ZvUi3HhcgIvzMusEHM95FbCet_BZUEbSCEZ7uYpzOfZ8u0X4xhIVHLG9Ek_Bf35uKwxXClVPHrSUP1__c9fJ3HHv44GV7rWFR9bOThAYezjckWd22eFg4bq-9_vKclyy-eQGMoA7UCtZ7EhnLjOXkON8upiE3NGg4ubOBX3FCKUMLdKf85IkyZDVMyQVPudiZQLGqhJPwf_4q3EdfOav18EE",
        alt: "Emotional archival photograph of the BUGMUN 2020 closing awards ceremony, Secretariat on stage embracing, holding crystal gavels with gold foil confetti falling overhead.",
        caption: "Closing Ceremony Confetti",
      },
    ],
  },
];

export const GALLERY_PLATES: GalleryPlate[] = [
  {
    id: "plate-1",
    category: "plenary",
    year: "2014",
    title: "General Assembly Quorum",
    subtitle: "Opening plenary session debate",
    description: "Over 400 delegates convene for the decisive resolution vote in Dhaka, marking the inaugural plenary.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAC3nVHdmAy7CI8lbHtRVv7iGhYhDubejvBsCMrtm0xBMU2c6XFwe3NZcFVzZItrBv2UmJlFPxqfjaRMmNAraBtQEF36TMqutmCbzTNHSHPIZEJtz_CwaAS_0FKrB5Od-PM6lHjXeUTCIXCsgC33xjbX3z3hFpccEPYiwgf4nB7f0ztCKJPzPotRc6psFv867-ymrWoX-br1dQ7Y1-8OQ2kLunnJcRpLoTSFYnjh6g",
    imageAlt: "Archival black and white photograph of an expansive model UN plenary hall packed with well-dressed student delegates, rows of desks with country name cards, grand stage with the UN emblem in the background, sharp vintage contrast.",
  },
  {
    id: "plate-2",
    category: "dinners",
    year: "2017",
    title: "Diplomatic Gala Toast",
    subtitle: "Inter-delegation cultural gala",
    description: "Celebration of youth diplomacy on New Year's Eve, fostering camaraderie and cross-border friendship.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDg84r1oIcyp_LVZou76WQn99Ff2bU4b9gO__r97MhpFKSO9DaEEXq2AZVnJacSXdvPmTu_sU0VN8geRoM_6yiRGcnpZPgDecNSlq5_1vouhXKo2Q4PomhRanzSGg9MBpMQxnjBHRPjaSnHHem8ihRmWjaVy8olqSKhTvXVeo1DumZ0rGO3mA-paBz62NYBfrEpwR7DZXlSKUfJ7iQ_62gDQGDJNqJD-KystWF_tPI",
    imageAlt: "Archival evening photograph of delegates raising crystal glasses in a formal dinner setting, chandeliers illuminating the opulent ballroom, formal suits and cultural diplomatic garments, warm festive atmosphere.",
  },
  {
    id: "plate-3",
    category: "board",
    year: "2016",
    title: "Executive Dais in Caucus",
    subtitle: "Directing the Security Council",
    description: "The Security Council dais analyzing crisis directives under strict procedural protocol and time pressure.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBmTFyC-yZCEl4hMqsRMBMn4w6j0uO8owZm1XiOi8_R755umkDP6Zg-9mcaO6WpRXbA0Y-MZE4LHLVL47R9OrQhlw-hUrFra8nb0UFFpm36ZxGe0r0Yd-QXOISah6rTBcO0GOa_ulAvYMEPwuE9cXRNgi8Ef3hKYUz-4ennm7lEzmUpszCkTSMR5cnYP27VezMth-i0G3HoAq5yi_K35JGi1958AtO91-iObFDBKz0",
    imageAlt: "Archival photograph of three executive board committee directors seated behind a draped dais table, pens in hand, consulting official rulebooks and drafting a presidential statement, intense concentration.",
  },
  {
    id: "plate-4",
    category: "tarc",
    year: "2020",
    title: "Residential Lawn Caucus",
    subtitle: "TARC Savar overnight negotiations",
    description: "Delegates at the TARC residential campus finalizing draft agreements at first light on the lush campus lawn.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDljqELi-QDg1Nnru-6-PN8N1HdetNJ508UBzido7a_NU49ITJ4HXqu92VYTC19-vz-2S5lEVo3Nl9FAy8j61odRT7Hkm479IvSJ2wHULVX5SULfo6upTrY-neu6MhLPpD3il9xfjjFjCNwBtKrbNbhKfy8vlOevybDMfwtq4OaIYwqBYC6Z4PDMxnVnzAdk2ErvwNNKf6XPeuI6auJHv18e3xYaws8DXciSR8KMsE",
    imageAlt: "Documentary style archival shot of young students gathered around an outdoor wooden bench at the TARC campus during early morning golden hour, papers laid out, laughing together after an all-night negotiating session.",
  },
  {
    id: "plate-5",
    category: "plenary",
    year: "2017",
    title: "Address from the Floor",
    subtitle: "Moderated caucus intervention",
    description: "A young diplomat commands the chamber during moderated caucus debate on economic equality and human development.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDyY2piuOqEh8xTUkNOlkANVR574H9yvpyROKXUgP6qQVoIgUCnAGIN4fKi8lw5OS4rRkVwIjDLT2jQUYCAdECuUrD9J8RpPkL4pb0DkpHgfL5EUqcN0iNHhuPNlfu21hFlIQrEoOo_-Hg64t70MuUh02D-GqKOo3hhVH8N3G5S0K_yL9oGJRQvfpVCn_t_BemoSteOBBfEcBv6XHiOabcuFC5pCH883ivPz31Luw8",
    imageAlt: "Archival mid-shot of a confident female student delegate speaking into a chrome microphone at a wooden lectern, wearing a sharp dark blazer, delegates in background taking rapid notes.",
  },
  {
    id: "plate-6",
    category: "tarc",
    year: "2020",
    title: "TARC Amphitheater Night",
    subtitle: "Cultural solidarity night",
    description: "Delegates gather in the open-air amphitheater at TARC for an unmoderated cultural evening and musical solidarity.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSKtDq0NiKmLmZ84mWqbZ17Dj6QrY0emjbUU1Ei2vgaohtI8BMNykPFPkoLmGqW-yYghI5h2FrppUirqncoxo7M_4IyTKo7GYQdMgxi4kRGoj2mbUbRP6suGEaoHJEaGXMkTaPjq-B13Rn0s1FAp5u-1Tv6_4Y9PF__gB9mqPuZiCbuWrLsIu9oEkAoCMFFpdeSGD4_qEsuZrtSAAwJtwgR_qSyMeeCwvg-F5Y45I",
    imageAlt: "Night archival photo of an open-air amphitheater with curved brick seating filled with smiling delegates holding acoustic guitars, glowing fairy lights strung across trees above, warm communal atmosphere.",
  },
  {
    id: "plate-7",
    category: "board",
    year: "2014",
    title: "Behind the Dais",
    subtitle: "Secretariat command operations",
    description: "Behind-the-scenes archival record of logistics, crisis coordination, and research briefing dispatch during the first edition.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRpGQg6ZHpXvQb572dUY0c3E6meQ3eNZQKNr-xLjhW-hRXNSZ8pTTJCtLGZArk4vkVkJYR9vhuwcoOehpE7-ctWREQYsU115c5uZv4EFw817DwTap2hnAeNBX5OI139UE2rI05hPdU8waKHV1m4FQ8VYJyBwPRtM6CaUNK6mMFCZzVoN0e02EQjSJD7MWwtsdf-nmK5QDDNTI6C-dl_K7ApNRRgab-qkhvkLvxQhA",
    imageAlt: "Candid archival photo of the conference Secretariat command room, organizers surrounded by whiteboards with committee schedules, walkie-talkies, stacks of certificate folders and official lanyards.",
  },
  {
    id: "plate-8",
    category: "dinners",
    year: "2020",
    title: "Commemorative Awards",
    subtitle: "Valedictory banquet & honors",
    description: "Honoring outstanding delegations during the closing banquet ceremony at TARC Savar.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBn8hRP_QLYgSj_UJxSxw-fB6WrdPAANpqO3WWBk8unZTUO_bswhO8wDf-7_npg3Yd6qskQLfpUCGUt4VYBr5p0gP0oBcBqgOAe4luE2DC98XYcOs5OxGX4C-9pGFY2ssO7Ttj6NalBCxj8tK_HvkEos6ZCILKTcY_VoTO5JT1GOej7Fv8oDrzeFHl7relDy3ICrO6VXNfVizknaEBIqJOjbwu4_47Fe3WDD9r1Gdg",
    imageAlt: "Archival photo of a smiling Secretary-General presenting a carved commemorative wooden gavel to an emotional award-winning delegate on stage, applause from the seated banquet audience.",
  },
];
