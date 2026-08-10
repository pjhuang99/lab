import type { ReactNode } from "react";
import { Disclosure } from "@/components/disclosure";

interface TimelineProps {
  children: ReactNode;
  label?: string;
}

export function Timeline({
  children,
  label = "Process"
}: TimelineProps) {
  return (
    <section className="mt-16">
      <div className="flex items-center justify-between border-b border-ink pb-3">
        <h2 className="font-mono text-xs uppercase text-ink">Process</h2>
        <span className="font-mono text-[11px] uppercase text-muted">
          {label}
        </span>
      </div>
      <ol className="border-b border-line">{children}</ol>
    </section>
  );
}

interface TimelineItemProps {
  step: string;
  title: string;
  time?: string;
  summary: string;
  children: ReactNode;
}

export function TimelineItem({
  step,
  title,
  time,
  summary,
  children
}: TimelineItemProps) {
  return (
    <li className="border-b border-line py-7 sm:py-8">
      <div className="grid gap-3 sm:grid-cols-[64px_1fr] sm:gap-6">
        <span className="font-mono text-xs font-bold uppercase text-muted">
          {step}
        </span>
        <div>
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="font-sans text-xl font-bold text-ink">{title}</h3>
            {time && (
              <span className="font-mono text-[11px] uppercase text-muted">
                {time}
              </span>
            )}
          </div>
          <Disclosure summary={summary} className="mt-3">
            {children}
          </Disclosure>
        </div>
      </div>
    </li>
  );
}

interface FieldProps {
  label: string;
  children: ReactNode;
}

export function Field({ label, children }: FieldProps) {
  return (
    <div className="mt-5 first:mt-0">
      <p className="mb-2 font-mono text-[11px] font-bold uppercase text-muted">
        {label}
      </p>
      <div className="space-y-3 text-sm leading-7 text-ink/85">{children}</div>
    </div>
  );
}

interface ImageBlockProps {
  src: string;
  alt: string;
  caption?: string;
}

export function ImageBlock({ src, alt, caption }: ImageBlockProps) {
  return (
    <figure className="mt-5 border border-line bg-paper">
      <div className="px-3 py-3 sm:px-6 sm:py-6">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="mx-auto h-auto w-full"
        />
      </div>
      {caption && (
        <figcaption className="border-t border-line px-4 py-3 font-mono text-[11px] uppercase text-muted">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
