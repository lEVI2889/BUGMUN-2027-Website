export interface NewsItem {
  id: string;
  tag: string;
  date: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  linkText: string;
  linkUrl: string;
}

export const NEWS_DATA: NewsItem[] = [
  {
    id: "secretariat-guidelines",
    tag: "Official Bulletin",
    date: "October 2026",
    title: "Secretariat Application Guidelines & Timeline Announcement",
    description: "The Executive Board outlines recruitment procedures for Committee Directors, Rapporteurs, and Operations Officers ahead of the national delegate launch.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCkNjOiLBWKwvU_wkG3cWzsoi6-R-IumdUCjbZvvYmFc6tc6arp6Y-UwsyKKI4XODSFUIoZ999RarXUxKxf1RVxF1mfkqjQ0CO4uPvZIfTZJwXJmqzWwFPbYlDBS5h7yY-m11LMsJwM5M3TejVbFtba7urzvlIrA6Q3weRTaQf6UH7jvsS24iHUz6voktp1X0yj-vs5Ht3Tl-qwmekyxVCHw88CUSl5Cgsii3UOD0",
    imageAlt: "Modern architectural blueprints and conference planning files laid on an executive wooden conference table with a brass diplomatic gavel and modern notebooks in clean morning sunlight.",
    linkText: "View Announcement on Facebook",
    linkUrl: "https://facebook.com",
  },
  {
    id: "thematic-direction",
    tag: "Thematic Brief",
    date: "November 2026",
    title: "Unveiling the 2027 Thematic Direction: Bridging Multilateral Action with SDGs",
    description: "A deep dive into how BUGMUN's four SDG focal areas intersect with contemporary non-proliferation, climate loss-and-damage, and sovereign monetary policy.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6o_e5_HvUnIBXFkgUBgeH9Of3WyjT4xJnTjs0nQfiL2xRIUDjQ2-_2U2D8KHPJ94njvvKq_qExzEdWhaOEGLHeZZC7c2q6s6OvlD1ynqiLBtTfEOiVlvG7rPnMv8HrLdx7YN3UHWerVEyNBdpSoJFUqfGhY5eASRYoQEMy_0wreOwx3zVmVwfGWprAA5RggXOJKsFU2Z0kl18dHij6Vf5K8iXreHn3UiFrWDNpAI",
    imageAlt: "Macro artistic view of an acrylic transparent globe illuminated by subtle cyan and deep blue studio lights with geometric compass grids reflecting on a high-gloss surface.",
    linkText: "Read Thematic Brief",
    linkUrl: "https://facebook.com",
  },
  {
    id: "campus-preparation",
    tag: "Venue Update",
    date: "December 2026",
    title: "Campus Preparation: BRAC University Badda Campus Ready to Host Global Delegates",
    description: "An insider tour of the architectural facilities, committee rooms, and digital translation chambers reserved exclusively for the 5th edition convocation.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-pd41Jv8NBTagoTnrs-RE-zT5IScc4em2HbM3NQ1Ks835VD5hk791RXWFsl2Lu77tugaTXFw3_JmNuzl_eMsxybQ0nGCNCKIK9DvDHKkz5KL-nN4ziUoBUmlHXyjjpMI4FRxsqIdXiziDDbyZf4B51ehbf4mh-vdxCO-WJJt9oLds_4X_4-KGQEPuBDT3qk1StKuRSaPQLD3hVsaBDMMWaqV5KW2CQXjyVWhw5O4",
    imageAlt: "BRAC University's modern eco-friendly architectural campus in Badda Dhaka, showcasing sweeping biophilic glass corridors, natural vertical gardens, and expansive modern collegiate atriums.",
    linkText: "Explore Venue Photo Log",
    linkUrl: "https://facebook.com",
  },
];
