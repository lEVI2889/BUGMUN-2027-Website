# BRAC University Global Model United Nations (BUGMUN) 2027 Website

The official web portal for the **5th Plenary Edition of the BRAC University Global Model United Nations (BUGMUN 2027)**, organized by the International Association of Business Communicators (IABC), BRAC University.

This project implements the user-approved desktop design retrieved from **Google Stitch** (`BUGMUN 2027 Website Design`).

---

## 🏛️ Project Overview

- **Conference:** BRAC University Global Model United Nations 2027 (BUGMUN 2027)
- **Edition:** 5th Plenary Edition (Revival Summit)
- **Host Institution:** IABC | International Association of Business Communicators, BRAC University
- **Summit Venue:** BRAC University Campus, Kha 224 Pragati Sarani, Merul Badda, Dhaka 1212, Bangladesh
- **Target Quorum:** 320 Delegates • 8 Specialized Chambers • 3 Plenary Days
- **SDG Thematic Pillars:** UN SDG 7 (Affordable & Clean Energy), UN SDG 8 (Decent Work & Growth), UN SDG 9 (Industry & Innovation), UN SDG 13 (Climate Action)
- **Design Authority:** Approved Google Stitch Project (`BUGMUN 2027 Website Design`, Project ID: `9246311265885373419`)

---

## 🚀 Tech Stack

- **Framework:** [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Dev Server:** [Vite 5](https://vitejs.dev/)
- **Styling:** [Tailwind CSS 3](https://tailwindcss.com/) configured with the exact design tokens and palette from the Stitch "Diplomatic Vanguard" Design System
- **Routing:** [React Router 6](https://reactrouter.com/) (Client-side routing with smooth in-page anchor navigation)
- **Typography:**
  - *Headlines & Display:* Playfair Display & Montserrat (Editorial serif and display headers)
  - *Body & Descriptions:* Manrope & Lato (Neutral, legible geometric body copy)
  - *UI Controls, Protocol & Metadata:* Geist (Monospace/humanist labels, tracking, tags)
  - *Icons:* Google Material Symbols Outlined
- **Official Assets:** High-resolution official BUGMUN branding (`Colored Logo.png`, `White Logo.png`, `Black Logo.png`)

---

## 📂 Project Structure

```text
BUGMUN-2027-Website/
├── Logo and Details/               # Original official assets & conference proposal
│   ├── Black Logo.png
│   ├── Colored Logo.png
│   ├── White Logo.png
│   └── Proposal for BRAC University Global Model United Nations (BUGMUN) 2027 for Website.pdf
├── public/
│   └── assets/
│       └── logos/                  # Offline static logo assets
├── src/
│   ├── components/
│   │   ├── Navbar.tsx              # Diplomatic fixed header with logo, navigation & register pill
│   │   ├── Footer.tsx              # Standard diplomatic footer with links & IABC contact
│   │   └── LightboxModal.tsx       # Interactive declassified archival image inspection modal
│   ├── data/
│   │   ├── committees.ts           # 8 tentative specialized simulation chambers
│   │   ├── schedule.ts             # 3-day conference itinerary
│   │   ├── news.ts                 # Curated bulletins & Facebook social updates
│   │   └── legacy.ts               # Historical assemblies (2014, 2016, 2017, 2020) & photo archive
│   ├── pages/
│   │   ├── HomePage.tsx            # BUGMUN 2027 main portal & convocation overview
│   │   └── LegacyPage.tsx          # "Our Legacy" 10-year historical retrospective (2014–2020)
│   ├── App.tsx                     # Top-level routing and scroll restoration
│   ├── index.css                   # Tailwind directives & typography hierarchy
│   └── main.tsx                    # React DOM entry point
├── index.html                      # HTML entry with preconnected Google Fonts & Material Symbols
├── package.json                    # Project dependencies & scripts
├── postcss.config.js               # PostCSS configuration
├── tailwind.config.js              # Stitch design token configuration (colors, spacing, fonts)
├── tsconfig.json                   # Strict TypeScript compiler configuration
├── tsconfig.node.json              # TypeScript configuration for Vite
└── vite.config.ts                  # Vite configuration
```

---

## 🛠️ Local Development

### Prerequisites

- [Node.js](https://nodejs.org/) v18.0.0 or later (v24+ recommended)
- `npm` v9.0.0 or later

### Installation

```bash
# Clone the repository
git clone https://github.com/lEVI2889/BUGMUN-2027-Website.git
cd BUGMUN-2027-Website

# Checkout the feature branch
git checkout feat/initial-stitch-integration

# Install dependencies
npm install
```

### Running Locally

```bash
# Start Vite development server
npm run dev
```

The application will be available at `http://localhost:3000`.

### Building for Production

```bash
# Run TypeScript type check and compile production bundle
npm run build
```

The output will be generated in the `dist/` directory.

### Previewing the Production Build

```bash
npm run preview
```

### Type Checking

```bash
npm run lint
```

---

## 📑 Implemented Pages & Features

### 1. BUGMUN 2027 Main Landing Page (`/`)
- **Hero Section:** Ambient cartographic grid SVG, Dhaka coordinates indicator (`LAT 23° 46' 31" N • LON 90° 25' 38" E`), 5th Plenary badge, editorial headline, call-to-action buttons, and summit metadata ribbon.
- **Article I // Institutional Background:** Narrative covering the 2014 founding through the 2027 revival at the new Badda campus, UN Rules of Procedure badge, and milestone metrics.
- **UN SDGs Thematic Pillars:** 4 interactive pillar cards highlighting SDG 7, SDG 8, SDG 9, and SDG 13.
- **Tentative Committees Grid:** 8 specialized chambers (UNSC, UNIDO, ECOSOC, ECOFIN, UNFCCC, UNDP, DISEC, International Press Corps) with seat counts and organ designations.
- **Conference Schedule:** Interactive 3-day itinerary tab selector (`Day 01`, `Day 02`, `Day 03`) with time slots and venues.
- **News & Bulletins:** Official dispatches with Facebook community links.
- **Registration Registry:** Early access notification form with interactive submission confirmation.

### 2. BUGMUN Historical Legacy Page (`/legacy`)
- **Declassified Archival Hero:** Curated archival centerpiece (Fig 1.1) with scrim citation overlay (`CATALOG NO. BGM-ARC-1401`), chronology milestones tracker, and institutional background.
- **Curatorial Overview & Metrics:** 1,500+ delegates trained, 42 committees convened, 18 nations represented, plus the Office of the Secretary-General testimonial quote.
- **Four Landmark Assemblies:**
  - *BUGMUN 2014:* "Post-2015: Envisioning a Better Future of the World" (Dhaka)
  - *BUGMUN 2016:* "Strengthening the Foundation & Crisis Simulations" (Consolidation of Policy)
  - *BUGMUN 2017:* "Conforming to Egalitarianism: Provision of Consolidated Global Prosperity" (5-Day Summit)
  - *BUGMUN 2020:* "United in the Search of Compounding Global Prosperity: Altruism in Practice" (TARC Residential)
- **Exhibition Photo Archive:** Filterable masonry gallery (Plenary, Dinners, Executive Board, TARC) with 8 declassified historical plates.
- **Archival Lightbox Modal:** High-resolution image inspection with keyboard (`Escape`) and click dismissal.
- **The Legacy Continues:** Narrative bridge transitioning the historic assemblies into the 2027 convocation.

---

## 🎨 Google Stitch Design System Mapping

| Design System Token | Stitch Value | Implementation |
|---|---|---|
| `primary` | `#10104b` (Deep Sovereign Navy) | `text-primary`, `bg-primary` |
| `primary-container` | `#262760` (Deep Indigo) | `bg-primary-container`, `text-primary-container` |
| `secondary` | `#00658b` (Diplomatic Cyan) | `text-secondary`, `border-secondary` |
| `secondary-container` | `#50c4fd` (Bright Cyan Accent) | `bg-secondary-container`, `text-secondary-container` |
| `tertiary` | `#12182e` (Midnight Navy) | `bg-tertiary`, `text-tertiary` |
| `surface` | `#f7f9fb` (Paper Canvas) | `bg-surface` |
| `surface-container-lowest` | `#ffffff` (Card Surface) | `bg-surface-container-lowest` |
| `surface-container-low` | `#f2f4f6` (Recessed Section) | `bg-surface-container-low` |
| Headlines Font | `Playfair Display` / `Montserrat` | `.font-serif`, `font-headline-*` |
| Body Font | `Manrope` / `Lato` | `font-body-*` |
| Protocol / UI Font | `Geist` / `Manrope` | `font-label-*`, `font-title-*` |

---

## 📄 License & Attribution

All BUGMUN logos, conference branding, committee frameworks, and archival materials are © 2014–2027 IABC BRAC University.
Website implementation built with React, TypeScript, and Vite under MIT license.
