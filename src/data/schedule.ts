export interface ScheduleItem {
  time: string;
  title: string;
  description: string;
  location: string;
}

export interface DaySchedule {
  dayNumber: number;
  tabLabel: string;
  items: ScheduleItem[];
}

export const SCHEDULE_DATA: DaySchedule[] = [
  {
    dayNumber: 1,
    tabLabel: "Day 01 • Inauguration & Order",
    items: [
      {
        time: "08:30 – 09:00",
        title: "Reporting and Registration",
        description: "Accreditation and credential check for incoming delegates and delegation heads.",
        location: "In front of Multipurpose Hall / Auditorium",
      },
      {
        time: "09:00 – 10:00",
        title: "Welcome Breakfast",
        description: "Morning refreshments and introductory reception prior to plenary convocation.",
        location: "In front of Multipurpose Hall / Auditorium",
      },
      {
        time: "10:30 – 12:30",
        title: "Opening Ceremony & Opening Plenary",
        description: "Official inaugural addresses by Secretariat leadership, guest envoys, and institutional dignitaries.",
        location: "Auditorium / Multipurpose Hall",
      },
      {
        time: "12:30 – 14:00",
        title: "Lunch and Prayer Break",
        description: "Delegates convene for midday lunch, prayer observance, and informal networking.",
        location: "Canteen and Classrooms",
      },
      {
        time: "14:00 – 18:00",
        title: "Committee Session I: Setting the Agenda",
        description: "Chambers establish quorum, open the General Speakers List, and commence preliminary policy discourse.",
        location: "Classrooms and Lecture Theatres",
      },
    ],
  },
  {
    dayNumber: 2,
    tabLabel: "Day 02 • Caucuses & Resolutions",
    items: [
      {
        time: "08:30 – 09:00",
        title: "Morning Reporting & Quorum Call",
        description: "Roll call of sovereign states and observer missions across all active chambers.",
        location: "Designated Classrooms",
      },
      {
        time: "09:00 – 11:30",
        title: "Committee Session II: Substantive Debate",
        description: "Moderated debate on substantive agenda points and initial caucus alignments.",
        location: "Classrooms",
      },
      {
        time: "11:30 – 11:45",
        title: "Morning Refreshment Break",
        description: "Short intermission for delegates and executive board members.",
        location: "Campus Foyer & Break Areas",
      },
      {
        time: "11:45 – 13:00",
        title: "Committee Session III: Coalition Consultation",
        description: "Unmoderated consultation, bloc negotiations, and formulation of preliminary working papers.",
        location: "Classrooms",
      },
      {
        time: "13:00 – 14:30",
        title: "Lunch and Prayer Break",
        description: "Midday break for nourishment, prayer, and informal inter-bloc dialogue.",
        location: "Canteen & Dining Areas",
      },
      {
        time: "14:30 – 18:00",
        title: "Committee Session IV: Working Paper Review",
        description: "Tabling of working papers across chambers, with investigative reporting by the International Press.",
        location: "Classrooms",
      },
    ],
  },
  {
    dayNumber: 3,
    tabLabel: "Day 03 • Voting & Diplomat's Dinner",
    items: [
      {
        time: "08:30 – 09:00",
        title: "Morning Breakfast & Consultations",
        description: "Breakfast gathering and informal consultations ahead of final resolution debates.",
        location: "Campus Dining Areas",
      },
      {
        time: "09:00 – 11:30",
        title: "Committee Session V: Draft Resolution Scrutiny",
        description: "Rigorous debate on submitted draft resolutions, clause-by-clause evaluation, and sponsor presentations.",
        location: "Classrooms",
      },
      {
        time: "11:30 – 11:45",
        title: "Refreshment Break",
        description: "Short intermission prior to formal voting preparations.",
        location: "Campus Foyer & Break Areas",
      },
      {
        time: "11:45 – 13:00",
        title: "Committee Session VI: Amendments & Voting Procedure",
        description: "Chambers enter formal voting procedure on draft resolutions and binding amendments.",
        location: "Classrooms",
      },
      {
        time: "13:00 – 14:00",
        title: "Lunch and Prayer Break",
        description: "Midday lunch and prayer observance following conclusion of substantive committee proceedings.",
        location: "Canteen & Dining Areas",
      },
      {
        time: "14:00 – 16:00",
        title: "Final Committee Session & Plenary Wrap-up",
        description: "Closing remarks by Dias executive bodies and final chamber rapporteur summaries.",
        location: "Classrooms",
      },
      {
        time: "16:00 – 18:00",
        title: "Grand Closing Ceremony & Awards Presentation",
        description: "Conferral of diplomatic awards and accolades, Secretariat adieu, and formal summit closure.",
        location: "Auditorium / Multipurpose Hall",
      },
      {
        time: "18:00 – 20:00",
        title: "Official Diplomat’s Dinner",
        description: "Evening gala and fellowship banquet celebrating international diplomacy and cross-cultural unity.",
        location: "Multipurpose Hall / Cafeteria",
      },
    ],
  },
];
