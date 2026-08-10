import { ArrowUpRight } from "lucide-react";

interface ResultProps {
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  caption?: string;
  url?: string;
  urlLabel?: string;
  status?: "live" | "demo" | "planned";
}

export function Result({
  title = "成果",
  description,
  image,
  imageAlt = "案例成果截图",
  caption,
  url,
  urlLabel = "打开工具 ↗",
  status = "demo"
}: ResultProps) {
  return (
    <section className="mt-16">
      <div className="flex items-center justify-between border-b border-ink pb-3">
        <h2 className="font-mono text-xs uppercase text-ink">{title}</h2>
        <span className="font-mono text-[11px] uppercase text-muted">
          Result
        </span>
      </div>

      {description && (
        <p className="mt-4 max-w-prose text-sm leading-7 text-ink/80">
          {description}
        </p>
      )}

      {image && (
        <figure className="mt-5 border border-line bg-paper">
          <img
            src={image}
            alt={imageAlt}
            loading="lazy"
            className="aspect-[16/9] w-full border-b border-line object-cover"
          />
          {caption && (
            <figcaption className="px-4 py-3 font-mono text-[11px] uppercase text-muted">
              {caption}
            </figcaption>
          )}
        </figure>
      )}

      <div className="mt-5">
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-ink px-5 py-3 font-mono text-xs uppercase text-paper transition-colors hover:bg-acid hover:text-ink"
          >
            {urlLabel}
            <ArrowUpRight size={14} />
          </a>
        ) : (
          <span className="inline-flex items-center border border-line bg-paper px-5 py-3 font-mono text-[11px] uppercase text-muted">
            {status === "planned" ? "未上线 · IN LAB" : "DEMO · 占位"}
          </span>
        )}
      </div>
    </section>
  );
}
