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
        time: "08:30 – 10:00",
        title: "Delegate Accreditation & Dossier Handover",
        description: "Delegates receive official name badges, committee placards, conference guidelines, and official credentials.",
        location: "BRAC University Central Plenary Atrium",
      },
      {
        time: "10:15 – 12:00",
        title: "Grand Opening Ceremony & Keynote Address",
        description: "Addresses by the Secretary-General, university leadership, and distinguished guest envoys.",
        location: "Auditorium 1, Ground Level",
      },
      {
        time: "12:15 – 13:15",
        title: "Rules of Procedure Briefing & Roll Call",
        description: "Briefing by the Secretariat on points, motions, decorum, and preliminary quorum establishment.",
        location: "Designated Committee Chambers",
      },
      {
        time: "14:30 – 17:30",
        title: "Committee Session I: Setting the Agenda",
        description: "General Speakers List opens. Sovereign policy statements and preliminary moderated caucuses begin.",
        location: "Chambers 301 – 308, Academic Wing",
      },
    ],
  },
  {
    dayNumber: 2,
    tabLabel: "Day 02 • Caucuses & Resolutions",
    items: [
      {
        time: "09:00 – 12:00",
        title: "Committee Session II: Substantive Caucusing",
        description: "Moderated debate on primary draft clauses, followed by unmoderated bloc coalition negotiations.",
        location: "Designated Committee Chambers",
      },
      {
        time: "13:15 – 15:45",
        title: "Committee Session III: Working Paper Tabling",
        description: "Introduction of Working Papers across all 8 committees. International Press begins live investigative grilling.",
        location: "Designated Committee Chambers",
      },
      {
        time: "16:00 – 18:30",
        title: "Committee Session IV: Crisis Flashpoints & Mergers",
        description: "Secretariat-directed crisis directive simulation for UNSC and DISEC. Consolidation of working papers.",
        location: "Designated Committee Chambers",
      },
    ],
  },
  {
    dayNumber: 3,
    tabLabel: "Day 03 • Voting & Diplomat's Dinner",
    items: [
      {
        time: "09:30 – 12:30",
        title: "Committee Session V & VI: Final Draft Amendments",
        description: "Review of friendly and unfriendly amendments, final speeches for and against resolution adoption.",
        location: "Designated Committee Chambers",
      },
      {
        time: "13:30 – 15:00",
        title: "Voting Procedure & Plenary Resolution Adoption",
        description: "Chambers enter formal voting procedure without interruption. Final roll-call votes taken on binding texts.",
        location: "Designated Committee Chambers",
      },
      {
        time: "16:00 – 18:30",
        title: "Grand Closing Plenary & Best Delegate Accolades",
        description: "Conferral of Best Delegate, Outstanding Diplomat, and Honorable Mention Gavels. Secretary-General gavel adieu.",
        location: "Auditorium 1, Ground Level",
      },
      {
        time: "19:30 – 22:00",
        title: "Official Diplomat's Dinner & Cultural Gala",
        description: "Evening reception celebrating international cooperation, delegate networking, and diplomatic friendship.",
        location: "Rooftop Banquet Hall, BRAC University",
      },
    ],
  },
];
