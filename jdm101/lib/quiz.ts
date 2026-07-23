import { cars } from "@/data/cars";
import type { Car } from "@/lib/types";

export type Budget = "under-10k" | "10k-25k" | "25k-50k" | "50k-plus";
export type DrivingStyle = "track" | "street" | "drift" | "collecting";
export type Preference = "turbo" | "na" | "awd" | "rwd";
export type Experience = "beginner" | "intermediate" | "advanced";

export interface QuizAnswers {
  budget: Budget;
  drivingStyle: DrivingStyle;
  preference: Preference;
  experience: Experience;
}

export interface QuizResult {
  car: Car;
  score: number;
  reasons: string[];
}

// Rough, illustrative price bands per car (USD) for matching against budget.
// These are ballpark market ranges, not live pricing — see each car's
// buying guide for real-world context. Cars not listed default to the
// "25k-50k" band, a safe middle assumption for a JDM classic.
const PRICE_BAND: Record<string, Budget> = {
  "toyota-ae86-corolla": "10k-25k",
  "toyota-sprinter-trueno-ae111": "under-10k",
  "toyota-starlet-glanza-ep91": "under-10k",
  "nissan-180sx": "10k-25k",
  "nissan-silvia-s13": "10k-25k",
  "nissan-silvia-s14": "10k-25k",
  "mazda-mx5-na": "under-10k",
  "honda-crx-sir-ef8": "10k-25k",
  "honda-prelude-bb6": "10k-25k",
  "honda-beat-pp1": "under-10k",
  "suzuki-cappuccino": "under-10k",
  "autozam-az1": "10k-25k",
  "nissan-laurel-c33": "under-10k",
  "toyota-altezza-rs200": "10k-25k",
  "mazda-familia-gtx": "10k-25k",
  "nissan-pulsar-gti-r": "10k-25k",
  "mitsubishi-evo-1": "10k-25k",
  "mitsubishi-evo-3": "10k-25k",
  "subaru-svx": "10k-25k",
  "toyota-aristo-jzs161": "10k-25k",
  "toyota-soarer-jzz30": "10k-25k",
  "nissan-300zx-z32": "10k-25k",
  "mazda-rx7-fc": "10k-25k",
  "nissan-fairlady-z-s30": "25k-50k",
  "honda-integra-type-r-dc2": "25k-50k",
  "honda-civic-type-r-ek9": "25k-50k",
  "honda-s2000-ap1": "25k-50k",
  "subaru-impreza-wrx-sti-gc8": "25k-50k",
  "subaru-impreza-wrx-sti-gdb": "25k-50k",
  "mitsubishi-evo-5": "25k-50k",
  "mitsubishi-evo-6": "25k-50k",
  "mitsubishi-evo-9": "25k-50k",
  "mitsubishi-evo-10": "25k-50k",
  "mitsubishi-gto-3000gt": "25k-50k",
  "nissan-stagea-wgnc34": "25k-50k",
  "toyota-chaser-jzx100": "25k-50k",
  "toyota-celica-gt-four": "25k-50k",
  "toyota-mr2-sw20": "25k-50k",
  "mazda-rx7-fd": "50k-plus",
  "nissan-silvia-s15": "50k-plus",
  "nissan-skyline-gtr-r32": "50k-plus",
  "nissan-skyline-gtr-r33": "50k-plus",
  "nissan-skyline-gtr-r34": "50k-plus",
  "nissan-skyline-gtr-r35": "50k-plus",
  "toyota-supra-mk4": "50k-plus",
  "honda-nsx-na1": "50k-plus",
  "honda-civic-type-r-fd2": "25k-50k",
  "nissan-skyline-gtr-hakosuka": "50k-plus",
  "nissan-skyline-gtr-kenmeri": "50k-plus",
  "mazda-cosmo": "50k-plus",
  "mazda-savanna-rx3": "25k-50k"
};

function getPriceBand(car: Car): Budget {
  return PRICE_BAND[car.slug] ?? "25k-50k";
}

// Budget bands adjacent to the selected one still score partial credit,
// since real-world pricing is a range, not a hard cutoff.
const BUDGET_ORDER: Budget[] = ["under-10k", "10k-25k", "25k-50k", "50k-plus"];

function budgetScore(carBudget: Budget, selected: Budget): number {
  const diff = Math.abs(
    BUDGET_ORDER.indexOf(carBudget) - BUDGET_ORDER.indexOf(selected)
  );
  if (diff === 0) return 3;
  if (diff === 1) return 1;
  return -2;
}

function drivingStyleScore(car: Car, style: DrivingStyle): number {
  let score = 0;
  switch (style) {
    case "drift":
      if (car.drivetrain === "RWD") score += 3;
      if (car.tags.includes("drift")) score += 3;
      if (car.aspiration === "Naturally Aspirated") score -= 1;
      break;
    case "track":
      if (car.drivetrain === "AWD") score += 1;
      if (["Turbo", "Twin-Turbo"].includes(car.aspiration)) score += 1;
      if (
        car.tags.some((t) =>
          ["type r", "evo", "sti", "gt-r", "rally"].includes(t)
        )
      )
        score += 2;
      break;
    case "street":
      // Street driving rewards well-rounded, comfortable, usable cars.
      if (car.bodyStyle.includes("sedan") || car.bodyStyle.includes("hatch"))
        score += 1;
      score += 1;
      break;
    case "collecting":
      if (
        car.tags.some((t) =>
          ["classic", "hakosuka", "kenmeri", "rare"].includes(t)
        )
      )
        score += 3;
      if (car.years.match(/19[67]\d/)) score += 2;
      break;
  }
  return score;
}

function preferenceScore(car: Car, preference: Preference): number {
  switch (preference) {
    case "turbo":
      return ["Turbo", "Twin-Turbo"].includes(car.aspiration) ? 3 : -1;
    case "na":
      return car.aspiration === "Naturally Aspirated" ? 3 : -1;
    case "awd":
      return car.drivetrain === "AWD" ? 3 : -1;
    case "rwd":
      return car.drivetrain === "RWD" ? 3 : -1;
    default:
      return 0;
  }
}

function experienceScore(car: Car, experience: Experience): number {
  const highPowerRwd =
    car.drivetrain === "RWD" &&
    ["Turbo", "Twin-Turbo"].includes(car.aspiration);

  switch (experience) {
    case "beginner":
      // Beginners do better with forgiving, simple, lower-power cars.
      if (car.tags.includes("kei car")) return 2;
      if (car.aspiration === "Naturally Aspirated" && car.drivetrain !== "AWD")
        return 2;
      if (highPowerRwd) return -2;
      return 0;
    case "intermediate":
      return 1;
    case "advanced":
      if (highPowerRwd) return 2;
      if (car.tags.includes("rotary")) return 1;
      return 0;
  }
}

/**
 * Scores every car against the quiz answers and returns the results
 * sorted from best match to worst. The caller typically takes the top
 * result as the "primary recommendation" and the next few as alternates.
 */
export function getQuizResults(answers: QuizAnswers): QuizResult[] {
  const results: QuizResult[] = cars.map((car) => {
    const reasons: string[] = [];
    let score = 0;

    const bScore = budgetScore(getPriceBand(car), answers.budget);
    score += bScore;
    if (bScore >= 3) reasons.push("Fits comfortably within your budget");

    const dScore = drivingStyleScore(car, answers.drivingStyle);
    score += dScore;
    if (dScore >= 2) {
      if (answers.drivingStyle === "drift") reasons.push("RWD platform with a deep drift-community following");
      if (answers.drivingStyle === "track") reasons.push("Strong track credentials and tuning ceiling");
      if (answers.drivingStyle === "collecting") reasons.push("Genuine collector significance and rarity");
    }

    const pScore = preferenceScore(car, answers.preference);
    score += pScore;
    if (pScore >= 3) {
      if (answers.preference === "turbo") reasons.push("Turbocharged for strong, tunable power");
      if (answers.preference === "na") reasons.push("Naturally-aspirated character enthusiasts love");
      if (answers.preference === "awd") reasons.push("AWD grip for all-condition confidence");
      if (answers.preference === "rwd") reasons.push("RWD balance for classic driver engagement");
    }

    const eScore = experienceScore(car, answers.experience);
    score += eScore;
    if (eScore >= 2 && answers.experience === "beginner")
      reasons.push("Forgiving, approachable for a first JDM project");
    if (eScore >= 2 && answers.experience === "advanced")
      reasons.push("Rewards experienced drivers who can use the power");

    if (car.tags.includes(car.manufacturer.toLowerCase())) {
      // no-op, placeholder to keep structure extensible
    }

    // Always include at least one grounded reason from the data itself.
    reasons.push(car.strengths[0]);

    return { car, score, reasons: Array.from(new Set(reasons)).slice(0, 4) };
  });

  return results.sort((a, b) => b.score - a.score);
}
