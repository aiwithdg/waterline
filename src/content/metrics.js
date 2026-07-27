export const CHARGES = [
  { category: "Port Dues (Vessel)", detail: "Entry/exit charge based on vessel tonnage", chargedTo: "Ship Owner / Agent" },
  { category: "Berth Hire / Wharfage", detail: "Occupying the berth beyond the free period", chargedTo: "Ship Owner / Agent" },
  { category: "Pilotage & Towage", detail: "Marine pilot and tug assistance in and out", chargedTo: "Ship Owner / Agent" },
  { category: "Wharfage on Cargo", detail: "Per tonne or per TEU loaded/unloaded", chargedTo: "Cargo Owner / CHA" },
  { category: "Storage / Demurrage", detail: "Cargo left beyond the free period (typically 3–7 days)", chargedTo: "Importer / Exporter" },
  { category: "Terminal Handling Charges", detail: "Container handling at terminal, separate from ocean freight", chargedTo: "Importer / Exporter" },
  { category: "Detention Charges", detail: "Container held beyond the shipping line's free time", chargedTo: "Importer" },
  { category: "Agency Charges", detail: "The ship agent's fee for managing all port formalities", chargedTo: "Ship Owner" },
];

export const KPIS = [
  { label: "Berth Throughput", value: "300k–500k", unit: "TEU per berth / year, world-class" },
  { label: "Crane Productivity", value: "30–35", unit: "moves/hour; JNPA runs closer to ~25" },
  { label: "Vessel Turnaround Time", value: "< 24 hrs", unit: "target for container vessels" },
  { label: "Pre-Berthing Detention", value: "< 6 hrs", unit: "target wait time at anchorage" },
  { label: "Import Dwell Time", value: "3–5 days", unit: "India average, vs. a 72-hour target" },
  { label: "Equipment Availability", value: "> 90%", unit: "target operational uptime" },
];
