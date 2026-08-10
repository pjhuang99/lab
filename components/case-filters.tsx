"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { CATEGORIES } from "@/lib/categories";
import type { CaseMeta } from "@/lib/cases";
import { CaseCard } from "@/components/case-card";

interface CaseFiltersProps {
  cases: CaseMeta[];
}

const ALL = "全部";

export function CaseFilters({ cases }: CaseFiltersProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>(ALL);

  const filtered = useMemo(() => {
    const keyword = query.trim().toLowerCase();
    return cases.filter((item) => {
      const matchesCategory = category === ALL || item.category === category;
      const matchesQuery =
        keyword.length === 0 ||
        [item.title, item.summary, item.result, item.tags.join(" "), item.category]
          .join(" ")
          .toLowerCase()
          .includes(keyword);
      return matchesCategory && matchesQuery;
    });
  }, [cases, query, category]);

  const categories = [ALL, ...CATEGORIES];

  return (
    <div>
      <div className="flex flex-col gap-5 border-b border-line pb-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full lg:max-w-sm">
          <Search
            size={16}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted"
            aria-hidden="true"
          />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="搜索案例……"
            className="w-full border border-line bg-paper py-3 pl-10 pr-3 text-sm text-ink placeholder:text-muted focus:border-ink focus:outline-none"
            aria-label="搜索案例"
          />
        </div>

        <div className="flex flex-wrap gap-2" role="tablist" aria-label="案例分类">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={category === item}
              onClick={() => setCategory(item)}
              className={`px-3 py-2 font-mono text-[11px] uppercase transition-colors ${
                category === item
                  ? "bg-ink text-paper"
                  : "border border-line text-ink hover:bg-acid"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <p className="pt-5 font-mono text-[11px] uppercase text-muted">
        {filtered.length} {filtered.length === 1 ? "Case" : "Cases"}
      </p>

      {filtered.length > 0 ? (
        <div className="grid gap-6 pt-4 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item, index) => (
            <CaseCard key={item.slug} item={item} index={index} />
          ))}
        </div>
      ) : (
        <div className="border border-dashed border-line px-6 py-16 text-center">
          <p className="font-sans text-lg font-bold text-ink">没有找到匹配案例</p>
          <p className="mt-2 text-sm text-muted">
            换个关键词，或切换到“全部”分类。
          </p>
        </div>
      )}
    </div>
  );
}
