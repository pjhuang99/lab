import { ArrowUpRight, FlaskConical } from "lucide-react";
import { CATEGORY_CODES } from "@/lib/categories";
import type { Tool } from "@/lib/tools";

interface ToolCardProps {
  tool: Tool;
}

export function ToolCard({ tool }: ToolCardProps) {
  const isLive = tool.status === "live" && Boolean(tool.url);

  return (
    <article className="flex h-full flex-col border border-line bg-paper p-5 sm:p-6">
      <div className="flex items-center justify-between gap-3">
        <span
          className={`inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase ${
            isLive ? "bg-acid px-2 py-1 text-ink" : "text-muted"
          }`}
        >
          <FlaskConical size={12} />
          {isLive ? "Live" : tool.note}
        </span>
        <span className="font-mono text-[11px] uppercase text-muted">
          {CATEGORY_CODES[tool.category]}
        </span>
      </div>

      <h3 className="mt-5 font-sans text-xl font-bold text-ink">{tool.name}</h3>
      <p className="mt-2 text-sm leading-6 text-ink/70">{tool.description}</p>

      <div className="mt-auto pt-6">
        {isLive && tool.url ? (
          <a
            href={tool.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-ink px-4 py-2.5 font-mono text-xs uppercase text-paper transition-colors hover:bg-acid hover:text-ink"
          >
            打开工具
            <ArrowUpRight size={14} />
          </a>
        ) : (
          <span className="inline-flex items-center font-mono text-[11px] uppercase text-muted">
            尚未上线 · 完成后开放
          </span>
        )}
      </div>
    </article>
  );
}
