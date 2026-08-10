"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export interface PipelineStep {
  title: string;
  description: string;
}

interface PipelineProps {
  steps: PipelineStep[];
  title?: string;
  label?: string;
}

export function Pipeline({
  steps,
  title = "Build Pipeline",
  label = "AI + Workflow"
}: PipelineProps) {
  const [active, setActive] = useState(0);

  return (
    <section className="mt-16">
      <div className="flex items-center justify-between border-b border-ink pb-3">
        <h2 className="font-mono text-xs uppercase text-ink">{title}</h2>
        <span className="font-mono text-[11px] uppercase text-muted">
          {label}
        </span>
      </div>

      <div className="mt-6 overflow-x-auto pb-2">
        <ol className="flex min-w-max items-stretch gap-2">
          {steps.map((step, index) => (
            <li key={step.title} className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setActive(index)}
                className={`w-32 border px-3 py-4 text-left transition-colors sm:w-36 ${
                  active === index
                    ? "border-ink bg-ink text-paper"
                    : "border-line bg-paper text-ink hover:bg-acid"
                }`}
                aria-pressed={active === index}
              >
                <span
                  className={`block font-mono text-[11px] font-bold ${
                    active === index ? "text-acid" : "text-muted"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="mt-2 block text-sm font-bold leading-5">
                  {step.title}
                </span>
              </button>
              {index < steps.length - 1 && (
                <ArrowRight size={16} className="shrink-0 text-muted" />
              )}
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-3 border border-line bg-paper p-5">
        <p className="font-mono text-[11px] font-bold uppercase text-muted">
          Step {String(active + 1).padStart(2, "0")} · {steps[active].title}
        </p>
        <p className="mt-2 max-w-prose text-sm leading-7 text-ink/85">
          {steps[active].description}
        </p>
      </div>
    </section>
  );
}
