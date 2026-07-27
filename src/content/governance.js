export const CENTRAL_BODIES = [
  {
    abbr: "MoPSW",
    name: "Ministry of Ports, Shipping and Waterways",
    role: "The apex body for policy, planning, and development of major ports, inland waterways, and shipping. Oversees the Ports Division (12 Major Port Authorities), Shipping Division, and IWAI.",
  },
  {
    abbr: "DG Shipping",
    name: "Directorate General of Shipping",
    role: "Regulates merchant shipping, seafarer licensing, ship registration and surveys, and coastal shipping (cabotage) permits.",
  },
  {
    abbr: "IWAI",
    name: "Inland Waterways Authority of India",
    role: "Develops and maintains India's national waterways for inland cargo transport.",
  },
  {
    abbr: "SCI",
    name: "Shipping Corporation of India",
    role: "State-owned shipping line; privatisation has been under discussion for several years.",
  },
  {
    abbr: "CSIR-NIO",
    name: "National Institute of Oceanography",
    role: "Ocean research supporting port and coastal infrastructure decisions.",
  },
  {
    abbr: "MIF",
    name: "Maritime India Foundation",
    role: "Knowledge and innovation outreach body; runs the S2I2 startup programme.",
  },
];

export const MAJOR_PORTS = [
  { name: "Deendayal Port Authority", city: "Kandla", state: "Gujarat", cargo: "Crude oil, fertilisers, dry bulk" },
  { name: "Mumbai Port Authority", city: "Mumbai", state: "Maharashtra", cargo: "Containers, POL, general cargo" },
  { name: "JNPA (Nhava Sheva)", city: "Navi Mumbai", state: "Maharashtra", cargo: "India's largest container port" },
  { name: "Mormugao Port Authority", city: "Goa", state: "Goa", cargo: "Iron ore, POL" },
  { name: "New Mangalore Port Authority", city: "Mangalore", state: "Karnataka", cargo: "POL, containers, granite" },
  { name: "Cochin Port Authority", city: "Kochi", state: "Kerala", cargo: "Containers, POL, LNG" },
  { name: "Chennai Port Authority", city: "Chennai", state: "Tamil Nadu", cargo: "Containers, vehicles, POL" },
  { name: "Kamarajar Port Authority", city: "Ennore", state: "Tamil Nadu", cargo: "Coal, LNG, industrial cargo" },
  { name: "V.O. Chidambaranar Port", city: "Tuticorin", state: "Tamil Nadu", cargo: "Containers, coal, salt" },
  { name: "Visakhapatnam Port Authority", city: "Visakhapatnam", state: "Andhra Pradesh", cargo: "Iron ore, POL, fertilisers" },
  { name: "Paradip Port Authority", city: "Paradip", state: "Odisha", cargo: "Iron ore, coal, fertilisers" },
  { name: "Kolkata Port Authority", city: "Kolkata + Haldia", state: "West Bengal", cargo: "Coal, containers, fertilisers" },
];

export const REGULATORS = [
  {
    abbr: "TAMP",
    name: "Tariff Authority for Major Ports",
    role: "Regulates tariffs at Major Ports, though some tariff-setting power has shifted to Port Authorities for PPP terminals.",
  },
  {
    abbr: "ICG",
    name: "Indian Coast Guard",
    role: "Under the Ministry of Defence — maritime law enforcement, search and rescue, offshore patrol, and port security oversight separate from MoPSW.",
  },
  {
    abbr: "CBIC",
    name: "Central Board of Indirect Taxes and Customs",
    role: "Administers customs at every port — import/export clearance, EXIM documentation, bonded warehouses, and Free Trade Warehousing Zones.",
  },
  {
    abbr: "Other regulators",
    name: "FSSAI, DGFT, PNGRB, AERB, State Pollution Control Boards, MoEFCC",
    role: "Step in depending on cargo type: food safety, export policy, LNG terminals, nuclear cargo (rare), and coastal environmental clearance.",
  },
];
