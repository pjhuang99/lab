import { ArrowRight } from "lucide-react";

interface TryItYourselfProps {
  title?: string;
  description?: string;
  url?: string;
  urlLabel?: string;
}

export function TryItYourself({
  title = "TRY IT YOURSELF",
  description = "看完了？现在拿一张表试试。",
  url,
  urlLabel = "打开我的信息图工具 →"
}: TryItYourselfProps) {
  return (
    <section className="mt-16 border-2 border-ink bg-paper p-6 sm:p-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-mono text-[11px] font-bold uppercase text-muted">
            {title}
          </p>
          <p className="mt-3 font-sans text-2xl font-bold leading-tight text-ink sm:text-3xl">
            {description}
          </p>
        </div>

        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-2 bg-acid px-5 py-3.5 font-mono text-xs font-bold uppercase text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            {urlLabel}
            <ArrowRight size={14} />
          </a>
        ) : (
          <span className="inline-flex shrink-0 items-center border border-dashed border-line px-5 py-3.5 font-mono text-[11px] uppercase text-muted">
            工具尚未开放 · 完成后会出现在这里
          </span>
        )}
      </div>
    </section>
  );
}
