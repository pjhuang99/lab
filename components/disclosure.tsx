"use client";

import { useId, useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

interface DisclosureProps {
  summary: string;
  children: ReactNode;
  className?: string;
}

export function Disclosure({
  summary,
  children,
  className = ""
}: DisclosureProps) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <div className={className}>
      <button
        type="button"
        className="group flex w-full items-start justify-between gap-4 text-left"
        aria-expanded={open}
        aria-controls={`${id}-content`}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="text-sm font-medium leading-6 text-ink/85 group-hover:text-ink">
          {summary}
        </span>
        <span
          className={`mt-1 shrink-0 border border-line p-1.5 transition-transform duration-300 ${
            open ? "rotate-180 bg-acid" : "bg-paper"
          }`}
          aria-hidden="true"
        >
          <ChevronDown size={14} />
        </span>
      </button>

      <div
        id={`${id}-content`}
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
        aria-hidden={!open}
      >
        <div className="overflow-hidden">
          <div className="mt-5 border-l-2 border-acid pl-4 sm:pl-6">{children}</div>
        </div>
      </div>
    </div>
  );
}
