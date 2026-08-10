import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import {
  PRESENTATION_SLIDES,
  PRESENTATION_TOTAL,
  getSlideById
} from "@/lib/presentation";
import { SlideKeyboardNav } from "@/components/slide-keyboard-nav";

interface SlidePageProps {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  return PRESENTATION_SLIDES.map((slide) => ({ id: slide.id }));
}

export function generateMetadata({ params }: SlidePageProps): Metadata {
  const slide = getSlideById(params.id);
  if (!slide) {
    return { title: "Slide not found" };
  }
  return {
    title: `演示 ${slide.id} — AI赋能采编· 案例与实战`,
    description: slide.title.join(" ")
  };
}

export default function SlidePage({ params }: SlidePageProps) {
  const slide = getSlideById(params.id);
  if (!slide) notFound();

  const index = PRESENTATION_SLIDES.findIndex((item) => item.id === slide.id);
  const prev = index > 0 ? PRESENTATION_SLIDES[index - 1] : undefined;
  const next =
    index < PRESENTATION_SLIDES.length - 1
      ? PRESENTATION_SLIDES[index + 1]
      : undefined;

  return (
    <div className="border-b border-mist bg-frost">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-content flex-col px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 border-b border-mist pb-4">
          <Link
            href="/live"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase text-slate hover:text-sand"
          >
            <ArrowLeft size={13} />
            演示
          </Link>
          <span className="font-mono text-[11px] uppercase text-sand">
            Slide {slide.id} / {PRESENTATION_TOTAL}
          </span>
        </div>

        <div className="flex flex-1 flex-col justify-center py-14 sm:py-20">
          <p className="font-mono text-[11px] font-bold uppercase text-sand">
            {slide.chapter}
          </p>
          {slide.kicker && (
            <p className="mt-2 font-mono text-[11px] uppercase text-slate">
              {slide.kicker}
            </p>
          )}

          <h1 className="mt-8 max-w-5xl font-serif text-3xl font-bold leading-[1.25] text-slate sm:text-5xl lg:text-6xl">
            {slide.title.map((line) => (
              <span key={line} className="block pb-2.5">
                {line}
              </span>
            ))}
          </h1>

          {slide.body && (
            <div className="mt-8 max-w-3xl space-y-3">
              {slide.body.map((line) => (
                <p
                  key={line}
                  className="text-lg leading-8 text-sand sm:text-xl sm:leading-9"
                >
                  {line}
                </p>
              ))}
            </div>
          )}

          {slide.bullets && (
            <ul
              className={`mt-8 grid max-w-4xl gap-x-10 gap-y-3 ${
                slide.bullets.length > 6
                  ? "sm:grid-cols-2"
                  : "sm:grid-cols-3"
              }`}
            >
              {slide.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex gap-3 border-t border-mist pt-3 text-[15px] leading-6 text-sand"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-pumpkin" aria-hidden="true" />
                  {bullet}
                </li>
              ))}
            </ul>
          )}

          {slide.note && (
            <p className="mt-8 max-w-2xl border-l-2 border-pumpkin pl-4 font-serif text-base font-semibold leading-7 text-slate">
              {slide.note}
            </p>
          )}

          {slide.link && (
            <Link
              href={slide.link.href}
              className="mt-10 inline-flex w-fit items-center gap-2 bg-pumpkin px-5 py-3.5 font-mono text-xs font-bold uppercase text-slate transition-colors hover:bg-slate hover:text-frost"
            >
              {slide.link.label}
              <ArrowUpRight size={14} />
            </Link>
          )}
        </div>

        <nav className="flex items-center justify-between border-t border-mist pt-5">
          {prev ? (
            <Link
              href={`/live/${prev.id}`}
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase text-slate hover:text-sand"
            >
              <ArrowLeft size={13} />
              {prev.id}
            </Link>
          ) : (
            <span className="font-mono text-[11px] uppercase text-sand">
              START
            </span>
          )}

          <span className="hidden font-mono text-[11px] uppercase text-sand sm:inline">
            方向键翻页
          </span>

          {next ? (
            <Link
              href={`/live/${next.id}`}
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase text-slate hover:text-sand"
            >
              {next.id}
              <ArrowRight size={13} />
            </Link>
          ) : (
            <span className="font-mono text-[11px] uppercase text-sand">
              END
            </span>
          )}
        </nav>
      </div>

      <SlideKeyboardNav
        prevHref={prev ? `/live/${prev.id}` : undefined}
        nextHref={next ? `/live/${next.id}` : undefined}
      />
    </div>
  );
}
