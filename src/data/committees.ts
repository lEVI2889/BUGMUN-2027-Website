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
    seats: "Allocation Pending",
    icon: "shield",
    description: "Maintenance of global peace, sovereign territorial integrity, crisis response mandates, and multilateral security accords.",
    agendaStatus: "Agenda: TBA",
    boardStatus: "Executive Body Pending",
  },
  {
    id: "unido",
    name: "UN Industrial Development Organization",
    acronym: "UNIDO",
    organ: "Specialized Agency",
    seats: "Allocation Pending",
    icon: "factory",
    description: "Pioneering sustainable industrial growth, decarbonizing global manufacturing chains, and equitable technology transfers.",
    agendaStatus: "Agenda: TBA",
    boardStatus: "Executive Body Pending",
  },
  {
    id: "ecosoc",
    name: "Economic and Social Council",
    acronym: "ECOSOC",
    organ: "Principal Organ",
    seats: "Allocation Pending",
    icon: "hub",
    description: "Coordination of economic, social, cultural, and humanitarian affairs to foster sustainable human development and cooperation.",
    agendaStatus: "Agenda: TBA",
    boardStatus: "Executive Body Pending",
  },
  {
    id: "ecofin",
    name: "Economic and Financial Committee",
    acronym: "ECOFIN (GA 2nd)",
    organ: "GA Second Committee",
    seats: "Allocation Pending",
    icon: "account_balance_wallet",
    description: "Global financial architecture reform, international trade harmonization, sovereign debt sustainability, and poverty eradication.",
    agendaStatus: "Agenda: TBA",
    boardStatus: "Executive Body Pending",
  },
  {
    id: "unfccc",
    name: "UN Framework Convention on Climate Change",
    acronym: "UNFCCC",
    organ: "Treaty Body",
    seats: "Allocation Pending",
    icon: "eco",
    description: "Multilateral climate protocols, NDC compliance, global loss and damage funding, and international environmental governance.",
    agendaStatus: "Agenda: TBA",
    boardStatus: "Executive Body Pending",
  },
  {
    id: "undp",
    name: "UN Development Programme",
    acronym: "UNDP",
    organ: "Global Development",
    seats: "Allocation Pending",
    icon: "trending_up",
    description: "Capacity building, poverty eradication, public institution strengthening, and democratic governance acceleration.",
    agendaStatus: "Agenda: TBA",
    boardStatus: "Executive Body Pending",
  },
  {
    id: "disec",
    name: "Disarmament & International Security Committee",
    acronym: "DISEC (GA 1st)",
    organ: "GA First Committee",
    seats: "Allocation Pending",
    icon: "military_tech",
    description: "Non-proliferation treaties, autonomous weapons regulations, militarization of outer space, and regional stability accords.",
    agendaStatus: "Agenda: TBA",
    boardStatus: "Executive Body Pending",
  },
  {
    id: "ip",
    name: "International Press",
    acronym: "IP",
    organ: "Special Body",
    seats: "Allocation Pending",
    icon: "newspaper",
    description: "Critical journalistic scrutiny, real-time press releases, press conferences, and investigative media coverage across all chambers.",
    agendaStatus: "Agenda: TBA",
    boardStatus: "Executive Body Pending",
  },
];
