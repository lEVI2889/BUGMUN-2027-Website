export interface Committee {
  id: string;
  name: string;
  acronym: string;
  organ: string;
  seats: string;
  icon: string;
  description: string;
  agendaStatus: string;
  boardStatus: string;
}

export const COMMITTEES_DATA: Committee[] = [
  {
    id: "unsc",
    name: "United Nations Security Council",
    acronym: "UNSC",
    organ: "Primary Organ",
    seats: "15 Seats",
    icon: "shield",
    description: "Maintenance of global peace, sovereign territorial integrity, crisis response mandates, and sanction regimes.",
    agendaStatus: "Agenda: TBA",
    boardStatus: "Executive Board Pending",
  },
  {
    id: "unido",
    name: "UN Industrial Development Org.",
    acronym: "UNIDO",
    organ: "Specialized Agency",
    seats: "40 Seats",
    icon: "factory",
    description: "Pioneering sustainable industrial growth, decarbonizing global manufacturing chains, and equitable technology transfers.",
    agendaStatus: "Agenda: TBA",
    boardStatus: "Executive Board Pending",
  },
  {
    id: "ecosoc",
    name: "Economic and Social Council",
    acronym: "ECOSOC",
    organ: "Principal Organ",
    seats: "45 Seats",
    icon: "hub",
    description: "Coordination of economic, social, cultural, and educational affairs to foster human development and global cooperation.",
    agendaStatus: "Agenda: TBA",
    boardStatus: "Executive Board Pending",
  },
  {
    id: "ecofin",
    name: "Economic & Financial Committee",
    acronym: "ECOFIN",
    organ: "GA Second Committee",
    seats: "50 Seats",
    icon: "account_balance_wallet",
    description: "Global financial architecture reform, international trade harmonization, sovereign debt sustainability, and poverty eradication.",
    agendaStatus: "Agenda: TBA",
    boardStatus: "Executive Board Pending",
  },
  {
    id: "unfccc",
    name: "UN Framework Convention on Climate",
    acronym: "UNFCCC",
    organ: "Treaty Body",
    seats: "45 Seats",
    icon: "eco",
    description: "Multilateral climate protocols, NDC compliance, global loss and damage funding, and international environmental law.",
    agendaStatus: "Agenda: TBA",
    boardStatus: "Executive Board Pending",
  },
  {
    id: "undp",
    name: "UN Development Programme",
    acronym: "UNDP",
    organ: "Global Development",
    seats: "45 Seats",
    icon: "trending_up",
    description: "Capacity building, poverty eradication, public institution strengthening, and democratic governance acceleration.",
    agendaStatus: "Agenda: TBA",
    boardStatus: "Executive Board Pending",
  },
  {
    id: "disec",
    name: "Disarmament & Int. Security",
    acronym: "DISEC",
    organ: "GA First Committee",
    seats: "55 Seats",
    icon: "military_tech",
    description: "Non-proliferation, autonomous weapons regulations, militarization of outer space, and regional stability accords.",
    agendaStatus: "Agenda: TBA",
    boardStatus: "Executive Board Pending",
  },
  {
    id: "ip",
    name: "International Press Corps",
    acronym: "IP",
    organ: "Special Body",
    seats: "25 Seats",
    icon: "newspaper",
    description: "Critical journalistic scrutiny, real-time press releases, press conferences, and investigative media coverage across all chambers.",
    agendaStatus: "Agenda: TBA",
    boardStatus: "Executive Board Pending",
  },
];
