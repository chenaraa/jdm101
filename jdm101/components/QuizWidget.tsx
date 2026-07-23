"use client";

import { useState } from "react";
import Link from "next/link";
import {
  getQuizResults,
  type Budget,
  type DrivingStyle,
  type Preference,
  type Experience,
  type QuizAnswers
} from "@/lib/quiz";

const STEPS: Array<{
  key: keyof QuizAnswers;
  question: string;
  options: { value: string; label: string }[];
}> = [
  {
    key: "budget",
    question: "What's your budget?",
    options: [
      { value: "under-10k", label: "Under $10k" },
      { value: "10k-25k", label: "$10k – $25k" },
      { value: "25k-50k", label: "$25k – $50k" },
      { value: "50k-plus", label: "$50k+" }
    ]
  },
  {
    key: "drivingStyle",
    question: "What's your driving style?",
    options: [
      { value: "track", label: "Track" },
      { value: "street", label: "Street" },
      { value: "drift", label: "Drift" },
      { value: "collecting", label: "Collecting" }
    ]
  },
  {
    key: "preference",
    question: "What do you prefer?",
    options: [
      { value: "turbo", label: "Turbo" },
      { value: "na", label: "Naturally Aspirated" },
      { value: "awd", label: "AWD" },
      { value: "rwd", label: "RWD" }
    ]
  },
  {
    key: "experience",
    question: "What's your experience level?",
    options: [
      { value: "beginner", label: "Beginner" },
      { value: "intermediate", label: "Intermediate" },
      { value: "advanced", label: "Advanced" }
    ]
  }
];

type PartialAnswers = Partial<QuizAnswers>;

export function QuizWidget() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<PartialAnswers>({});
  const [submitted, setSubmitted] = useState(false);

  const isComplete =
    answers.budget && answers.drivingStyle && answers.preference && answers.experience;

  function selectOption(key: keyof QuizAnswers, value: string) {
    const next = { ...answers, [key]: value };
    setAnswers(next);
    if (step < STEPS.length - 1) {
      setStep(step + 1);
    } else {
      setSubmitted(true);
    }
  }

  function restart() {
    setAnswers({});
    setStep(0);
    setSubmitted(false);
  }

  if (submitted && isComplete) {
    const results = getQuizResults(answers as QuizAnswers);
    const primary = results[0];
    const alternates = results.slice(1, 4);

    return (
      <div>
        <div className="rounded-lg spec-plate p-6 sm:p-8 mb-8">
          <p className="font-mono text-redline-bright text-xs uppercase tracking-widest mb-2">
            Your Primary Recommendation
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-chalk mb-4">
            {primary.car.name}
          </h2>
          <p className="text-chalk-dim mb-4">{primary.car.overview}</p>
          <div className="mb-4">
            <p className="text-sm text-chalk uppercase tracking-wide font-display mb-2">
              Why:
            </p>
            <ul className="list-disc list-inside space-y-1 text-chalk-dim text-sm">
              {primary.reasons.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </div>
          <Link
            href={`/cars/${primary.car.slug}`}
            className="inline-block rounded-md bg-redline px-5 py-2.5 font-display text-sm uppercase tracking-wide text-chalk hover:bg-redline-bright transition-colors"
          >
            View Full Profile →
          </Link>
        </div>

        <h3 className="font-display text-lg uppercase tracking-wide text-chalk mb-4">
          Alternative Choices
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {alternates.map((result) => (
            <Link
              key={result.car.slug}
              href={`/cars/${result.car.slug}`}
              className="rounded-lg spec-plate p-4 hover:border-redline/60 transition-colors"
            >
              <p className="font-display text-base text-chalk mb-1">
                {result.car.name}
              </p>
              <p className="text-xs text-chalk-dim font-mono mb-2">
                {result.car.chassisCode} &middot; {result.car.horsepower}
              </p>
              <p className="text-xs text-chalk-dim">{result.reasons[0]}</p>
            </Link>
          ))}
        </div>

        <button
          onClick={restart}
          className="rounded-md border border-graphite-600 px-5 py-2.5 font-display text-sm uppercase tracking-wide text-chalk hover:border-redline transition-colors"
        >
          Retake the Quiz
        </button>
      </div>
    );
  }

  const currentStep = STEPS[step];

  return (
    <div className="rounded-lg spec-plate p-6 sm:p-10">
      <div className="mb-6 flex gap-2">
        {STEPS.map((s, i) => (
          <div
            key={s.key}
            className={`h-1 flex-1 rounded-full ${
              i <= step ? "bg-redline" : "bg-graphite-700"
            }`}
          />
        ))}
      </div>

      <p className="font-mono text-xs text-chalk-dim uppercase tracking-widest mb-2">
        Question {step + 1} of {STEPS.length}
      </p>
      <h2 className="font-display text-2xl font-semibold text-chalk mb-6">
        {currentStep.question}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {currentStep.options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => selectOption(currentStep.key, opt.value)}
            className="rounded-md border border-graphite-600 bg-graphite-800 px-5 py-4 text-left font-display uppercase tracking-wide text-sm text-chalk hover:border-redline hover:bg-graphite-700 transition-colors"
          >
            {opt.label}
          </button>
        ))}
      </div>

      {step > 0 && (
        <button
          onClick={() => setStep(step - 1)}
          className="mt-6 text-sm text-chalk-dim hover:text-redline-bright transition-colors"
        >
          ← Back
        </button>
      )}
    </div>
  );
}
