import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllCases, getCaseBySlug } from "@/lib/cases";
import { mdxComponents } from "@/components/mdx";

interface CasePageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return getAllCases().map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: CasePageProps): Metadata {
  const found = getCaseBySlug(params.slug);
  if (!found) {
    return { title: "Case not found" };
  }
  return {
    title: found.meta.title,
    description: found.meta.summary
  };
}

export default function CasePage({ params }: CasePageProps) {
  const found = getCaseBySlug(params.slug);
  if (!found) notFound();

  const { meta, content } = found;

  return (
    <article className="border-b border-line">
      <div className="mx-auto max-w-content px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <Link
          href="/cases"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase text-ink hover:text-muted"
        >
          <ArrowLeft size={14} />
          全部案例
        </Link>

        <header className="mt-10 border-b border-ink pb-8">
          <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase">
            <span className="inline-flex items-center gap-2 bg-acid px-2 py-1 font-bold text-ink">
              <span className="h-1.5 w-1.5 bg-ink" aria-hidden="true" />
              {meta.category}
            </span>
            {meta.demo && (
              <span className="border border-ink px-2 py-1 font-bold text-ink">
                Demo Case
              </span>
            )}
            <span className="text-muted">{meta.date}</span>
          </div>

          <h1 className="mt-6 max-w-4xl font-sans text-4xl font-bold leading-tight text-ink sm:text-5xl lg:text-6xl">
            {meta.title}
          </h1>
          <div className="mt-6 max-w-2xl space-y-4">
            <div className="grid gap-3 sm:grid-cols-[64px_1fr]">
              <span className="font-mono text-[11px] font-bold uppercase text-muted">
                目标
              </span>
              <p className="text-base leading-7 text-ink/80">{meta.summary}</p>
            </div>
            {meta.result && (
              <div className="grid gap-3 sm:grid-cols-[64px_1fr]">
                <span className="font-mono text-[11px] font-bold uppercase text-muted">
                  结果
                </span>
                <p className="text-base leading-7 text-ink/80">{meta.result}</p>
              </div>
            )}
          </div>

          {meta.tags.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {meta.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-line px-2 py-1 font-mono text-[11px] uppercase text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {(meta.article_url || meta.tool_url) && (
            <div className="mt-7 flex flex-wrap gap-3">
              {meta.article_url && (
                <a
                  href={meta.article_url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-ink bg-paper px-5 py-3 font-mono text-xs uppercase text-ink transition-colors hover:bg-ink hover:text-paper"
                >
                  阅读发表文章
                  <ArrowUpRight size={14} />
                </a>
              )}
              {meta.tool_url && (
                <a
                  href={meta.tool_url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-ink px-5 py-3 font-mono text-xs uppercase text-paper transition-colors hover:bg-acid hover:text-ink"
                >
                  打开工具
                  <ArrowUpRight size={14} />
                </a>
              )}
            </div>
          )}
        </header>

        <div className="mx-auto mt-12 max-w-content">
          <MDXRemote
            source={content}
            components={mdxComponents}
            options={{ blockJS: false }}
          />
        </div>
      </div>
    </article>
  );
}
