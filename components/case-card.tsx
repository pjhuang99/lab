import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CATEGORY_CODES } from "@/lib/categories";
import type { CaseMeta } from "@/lib/cases";

interface CaseCardProps {
  item: CaseMeta;
  index?: number;
}

export function CaseCard({ item, index }: CaseCardProps) {
  return (
    <article className="group flex h-full flex-col border border-line bg-paper shadow-offset transition-transform duration-300 hover:-translate-y-1">
      <Link href={`/cases/${item.slug}`} className="flex h-full flex-col">
        <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-line">
          <img
            src={item.cover}
            alt={item.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
          {item.demo && (
            <span className="absolute left-3 top-3 bg-acid px-2 py-1 font-mono text-[10px] font-bold uppercase text-ink">
              Demo
            </span>
          )}
          {typeof index === "number" && (
            <span className="absolute bottom-3 right-3 font-mono text-[11px] text-paper mix-blend-difference">
              {String(index + 1).padStart(2, "0")}
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="flex items-center justify-between gap-3 font-mono text-[11px] uppercase">
            <span className="font-bold text-ink">
              <span className="mr-2 inline-block h-2 w-2 bg-acid" aria-hidden="true" />
              {item.category}
            </span>
            <span className="text-muted">{item.date}</span>
          </div>

          <h3 className="mt-4 font-sans text-xl font-bold leading-snug text-ink">
            {item.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-ink/70">{item.summary}</p>

          <div className="mt-auto flex items-center gap-2 pt-5 font-mono text-xs uppercase text-ink">
            <span className="border-b border-ink pb-0.5 transition-colors group-hover:border-acid">
              查看案例
            </span>
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </article>
  );
}
