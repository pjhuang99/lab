import type { Metadata } from "next";
import { getAllCases } from "@/lib/cases";
import { CaseFilters } from "@/components/case-filters";

export const metadata: Metadata = {
  title: "案例",
  description: "真实案例，而不是Prompt教程。"
};

export default function CasesPage() {
  const cases = getAllCases();

  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-content px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <p className="font-mono text-[11px] uppercase text-muted">Archive</p>
        <h1 className="mt-3 font-sans text-5xl font-bold text-ink sm:text-6xl">
          案例
        </h1>
        <p className="mt-4 max-w-xl text-base leading-7 text-ink/70">
          真实案例，而不是Prompt教程。
        </p>

        <div className="mt-10">
          <CaseFilters cases={cases} />
        </div>
      </div>
    </section>
  );
}
