"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BeforeAfterProps {
  before: string;
  after: string;
  beforeAlt?: string;
  afterAlt?: string;
  beforeLabel?: string;
  afterLabel?: string;
  caption?: string;
  title?: string;
}

export function BeforeAfterSlider({
  before,
  after,
  beforeAlt = "原始数据截图",
  afterAlt = "最终信息图",
  beforeLabel = "Before",
  afterLabel = "After",
  caption,
  title = "Before / After"
}: BeforeAfterProps) {
  const [view, setView] = useState<"before" | "after">("before");
  const isBefore = view === "before";
  const src = isBefore ? before : after;
  const alt = isBefore ? beforeAlt : afterAlt;

  return (
    <section className="mt-16">
      <div className="flex items-center justify-between border-b border-ink pb-3">
        <h2 className="font-mono text-xs uppercase text-ink">{title}</h2>
        <span className="font-mono text-[11px] uppercase text-muted">
          AI + Workflow
        </span>
      </div>

      <div className="mt-6">
        <div className="flex items-center justify-between font-mono text-[11px] uppercase">
          <span
            className={
              isBefore ? "font-bold text-ink" : "text-muted"
            }
          >
            {beforeLabel}
          </span>
          <span className="text-muted">点击箭头切换</span>
          <span
            className={
              isBefore ? "text-muted" : "font-bold text-ink"
            }
          >
            {afterLabel}
          </span>
        </div>

        <div className="relative mt-3 border border-line bg-paper px-3 py-3 sm:px-6 sm:py-6">
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className="mx-auto h-auto w-full"
          />

          <div className="absolute inset-y-0 left-0 flex items-center pl-2 sm:pl-3">
            <button
              type="button"
              onClick={() => setView("before")}
              disabled={isBefore}
              aria-label={`查看${beforeLabel}`}
              className="flex h-10 w-10 items-center justify-center border border-line bg-paper text-ink transition-colors hover:bg-ink hover:text-paper disabled:cursor-default disabled:opacity-40 disabled:hover:bg-paper disabled:hover:text-ink"
            >
              <ChevronLeft size={18} />
            </button>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:pr-3">
            <button
              type="button"
              onClick={() => setView("after")}
              disabled={!isBefore}
              aria-label={`查看${afterLabel}`}
              className="flex h-10 w-10 items-center justify-center border border-line bg-paper text-ink transition-colors hover:bg-ink hover:text-paper disabled:cursor-default disabled:opacity-40 disabled:hover:bg-paper disabled:hover:text-ink"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {caption && (
          <p className="mt-3 font-mono text-[11px] uppercase text-muted">
            {caption}
          </p>
        )}
      </div>
    </section>
  );
}
