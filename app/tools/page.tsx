import type { Metadata } from "next";
import { getToolbox } from "@/lib/tools";
import { ToolCard } from "@/components/tool-card";

export const metadata: Metadata = {
  title: "工具",
  description: "实验室里真正可以打开的工具。"
};

export default function ToolsPage() {
  const tools = getToolbox();
  const live = tools.filter((tool) => tool.status === "live");
  const planned = tools.filter((tool) => tool.status !== "live");

  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-content px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <p className="font-mono text-[11px] uppercase text-muted">Toolbox</p>
        <h1 className="mt-3 font-sans text-5xl font-bold text-ink sm:text-6xl">
          工具
        </h1>
        <p className="mt-4 max-w-xl text-base leading-7 text-ink/70">
          案例是“我怎么做的”，工具是“你现在可以直接使用”。
        </p>

        {live.length > 0 && (
          <div className="mt-10">
            <h2 className="border-b border-ink pb-3 font-mono text-xs uppercase text-ink">
              已上线
            </h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {live.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </div>
        )}

        <div className="mt-10">
          <h2 className="border-b border-ink pb-3 font-mono text-xs uppercase text-ink">
            实验中的工具
          </h2>
          <p className="mt-4 text-sm leading-7 text-ink/70">
            这些工具还没有上线，完成并通过真实使用检验后，会在这里开放。
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {planned.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
