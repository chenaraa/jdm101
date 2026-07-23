import type { Metadata } from "next";
import { QuizWidget } from "@/components/QuizWidget";

export const metadata: Metadata = {
  title: "JDM Matchmaker Quiz — Find Your Perfect JDM Car",
  description:
    "Answer a few questions about your budget, driving style, and experience level, and the JDM Matchmaker will recommend the Japanese sports car built for you.",
  alternates: { canonical: "/quiz" }
};

export default function QuizPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10 text-center">
        <h1 className="font-display text-3xl sm:text-4xl font-semibold text-chalk">
          JDM Matchmaker
        </h1>
        <p className="mt-3 text-chalk-dim">
          Answer four quick questions and we&rsquo;ll recommend the JDM car
          that fits your budget, driving style, and experience level.
        </p>
      </div>
      <QuizWidget />
    </div>
  );
}
