export interface Car {
  slug: string;
  name: string;
  image?: string;
  shortName: string;
  chassisCode: string;
  engineCode: string;
  manufacturer: string;
  country: string;
  years: string;
  engine: string;
  horsepower: string;
  torque: string;
  transmission: string;
  drivetrain: "RWD" | "AWD" | "FWD";
  weight: string;
  zeroToSixty: string;
  aspiration: "Turbo" | "Naturally Aspirated" | "Twin-Turbo";
  bodyStyle: string;
  overview: string;
  history: string;
  whyFamous: string;
  strengths: string[];
  weaknesses: string[];
  commonProblems: string[];
  modPotential: string;
  buyingGuide: string;
  popularity: string;
  funFacts: string[];
  tags: string[]; // used for search: chassis codes, engine codes, nicknames
}
