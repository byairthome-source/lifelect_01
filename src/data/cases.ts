export interface ProjectCase {
  title: string;
  region: string;
  industry: string;
  desc: string;
  highlights: string[];
}

export const projectCases: ProjectCase[] = [
  {
    title: "Southeast Asia Hotel Chain Deployment",
    region: "Thailand · Vietnam · Indonesia",
    industry: "Hospitality",
    desc: "Deployed 200+ M82 units across 15 luxury hotel properties for daily facade maintenance. Reduced external cleaning contractor costs by 60% within the first quarter.",
    highlights: ["200+ units", "15 properties", "60% cost reduction"],
  },
  {
    title: "Middle East Commercial Tower Program",
    region: "UAE · Saudi Arabia · Qatar",
    industry: "Commercial Real Estate",
    desc: "D90 series robots handle 40-story curtain wall cleaning for a major Dubai developer. Continuous operation in 45°C temperatures with zero safety incidents.",
    highlights: ["40-story buildings", "45°C operation", "Zero incidents"],
  },
  {
    title: "European OEM Partner Integration",
    region: "Germany · Poland · France",
    industry: "OEM / White Label",
    desc: "Custom-branded BO Series units manufactured for a leading European home appliance brand. Full CE, RoHS compliance with localized packaging and multilingual UI.",
    highlights: ["Custom branding", "CE & RoHS certified", "3 language UI"],
  },
  {
    title: "Chinese Smart City Government Tender",
    region: "Shenzhen · Shanghai · Beijing",
    industry: "Government / Municipal",
    desc: "Won municipal smart city contract for automated public building maintenance. 500+ robots deployed across government offices, libraries, and transit hubs.",
    highlights: ["500+ units", "Government certified", "Smart city program"],
  },
  {
    title: "North American Distribution Partnership",
    region: "United States · Canada",
    industry: "Distribution",
    desc: "Established exclusive distribution agreement covering 12 states. First container shipment of 1,000 units cleared FCC certification and delivered within 45 days.",
    highlights: ["1,000 units", "FCC certified", "45-day delivery"],
  },
  {
    title: "Australian High-Rise Specialist Rollout",
    region: "Australia · New Zealand",
    industry: "Facade Maintenance",
    desc: "Partnered with Australia's largest facade maintenance contractor. D91 units deployed on 30+ high-rise projects with custom rigging integration for building maintenance units.",
    highlights: ["30+ projects", "Custom rigging", "Safety compliant"],
  },
];
