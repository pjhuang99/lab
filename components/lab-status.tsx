import { CATEGORIES, CATEGORY_CODES } from "@/lib/categories";
import type { LabCounts } from "@/lib/cases";

interface LabStatusProps {
  counts: LabCounts;
}

export function LabStatus({ counts }: LabStatusProps) {
  const maxCategory = Math.max(1, ...CATEGORIES.map((c) => counts.byCategory[c]));
  const activeCategories = CATEGORIES.filter((c) => counts.byCategory[c] > 0).length;

  const stats = [
    { label: "Case Files", value: counts.total, note: "已归档案例" },
    { label: "Tools Built", value: counts.tools, note: "可打开的工具" },
    { label: "Failed Experiments", value: counts.failures, note: "踩坑记录" },
    { label: "Categories", value: activeCategories, note: "实验方向" }
  ];

  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-content px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="flex items-center justify-between border-b border-ink pb-3">
          <div>
            <p className="font-mono text-[11px] uppercase text-muted">
              Lab Index
            </p>
            <h2 className="mt-1 font-sans text-3xl font-bold text-ink sm:text-4xl">
              What I Make
            </h2>
          </div>
          <span className="flex items-center gap-2 font-mono text-[11px] uppercase text-ink">
            <span className="h-2 w-2 animate-pulse bg-acid" aria-hidden="true" />
            Active
          </span>
        </div>

        <div className="grid grid-cols-2 border-b border-line lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border-b border-line py-7 pr-4 lg:border-b-0 lg:border-r lg:border-line lg:px-6 lg:first:pl-0 lg:last:border-r-0"
            >
              <p className="font-mono text-[11px] uppercase text-muted">
                {stat.label}
              </p>
              <p className="mt-3 font-sans text-5xl font-bold tracking-normal text-ink">
                {String(stat.value).padStart(2, "0")}
              </p>
              <p className="mt-2 text-xs text-muted">{stat.note}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-6 pt-8 sm:grid-cols-3 lg:grid-cols-5">
          {CATEGORIES.map((category) => {
            const count = counts.byCategory[category];
            return (
              <div key={category} className="border-t-2 border-ink pt-3">
                <div className="flex items-baseline justify-between gap-2">
                  <span className="font-mono text-[11px] font-bold uppercase text-ink">
                    {CATEGORY_CODES[category]}
                  </span>
                  <span className="font-mono text-xl font-bold text-ink">
                    {String(count).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-1 text-xs text-muted">{category}</p>
                <div className="mt-3 h-1 w-full bg-line" aria-hidden="true">
                  <div
                    className="h-full bg-acid"
                    style={{ width: `${Math.round((count / maxCategory) * 100)}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
