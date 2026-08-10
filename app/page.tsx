import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { getAllCases, getLabCounts } from "@/lib/cases";
import { getToolbox, type Tool } from "@/lib/tools";
import { LabStatus } from "@/components/lab-status";
import { CaseCard } from "@/components/case-card";
import { ToolCard } from "@/components/tool-card";

export default function HomePage() {
  const cases = getAllCases();
  const counts = getLabCounts();
  const featured = cases.filter((item) => item.featured).slice(0, 4);
  const tools = getToolbox();

  return (
    <>
      <Hero />
      <FeaturedCases cases={featured} />
      <LabStatus counts={counts} />
      <ToolsSection tools={tools} />
      <Philosophy />
    </>
  );
}

function Hero() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-content px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink pb-4 font-mono text-[11px] uppercase text-muted">
          <span>PJ LAB</span>
          <span>Independent Project / 2026</span>
        </div>

        <h1 className="mt-12 font-sans text-5xl font-bold leading-[0.95] text-ink sm:text-6xl lg:text-7xl">
          AI赋能采编
          <br />
          案例与实战
        </h1>

       

        <div className="mt-5 max-w-2xl space-y-1 text-[15px] leading-7 text-ink/75 sm:text-base">
          <p>从写稿、作图，到开发采编工具。</p>
          <p>记录每一次尝试、迭代、踩坑和最终结果。</p>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/cases"
            className="inline-flex items-center justify-center gap-2 bg-acid px-6 py-3.5 font-mono text-xs font-bold uppercase text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            探索案例
            <ArrowRight size={14} />
          </Link>
          <Link
            href="/tools"
            className="inline-flex items-center justify-center gap-2 border border-ink bg-paper px-6 py-3.5 font-mono text-xs font-bold uppercase text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            看看我做的工具
            <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-3">
          {[
            ["Index", "/cases", "全部实验记录"],
            ["Toolbox", "/tools", "可以直接打开的工具"],
            ["Philosophy", "/#about", "我怎么看待 AI 生产力"]
          ].map(([label, href, note]) => (
            <Link
              key={label}
              href={href}
              className="group flex items-center justify-between gap-4 bg-paper px-4 py-4 transition-colors hover:bg-ink hover:text-paper"
            >
              <span>
                <span className="block font-mono text-[11px] font-bold uppercase">
                  {label}
                </span>
                <span className="mt-1 block text-xs text-muted group-hover:text-paper/60">
                  {note}
                </span>
              </span>
              <ArrowUpRight
                size={16}
                className="shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedCases({
  cases
}: {
  cases: ReturnType<typeof getAllCases>;
}) {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-content px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between border-b border-ink pb-3">
          <div>
            <p className="font-mono text-[11px] uppercase text-muted">
              Selection
            </p>
            <h2 className="mt-2 font-sans text-3xl font-bold text-ink sm:text-4xl">
              Featured Cases
            </h2>
          </div>
          <Link
            href="/cases"
            className="hidden items-center gap-2 font-mono text-xs uppercase text-ink hover:text-muted sm:inline-flex"
          >
            全部案例
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {cases.map((item, index) => (
            <CaseCard key={item.slug} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ToolsSection({ tools }: { tools: Tool[] }) {
  const liveTools = tools.filter((tool) => tool.status === "live");
  const plannedTools = tools.filter((tool) => tool.status !== "live");

  return (
    <section id="tools" className="border-b border-line">
      <div className="mx-auto max-w-content px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between border-b border-ink pb-3">
          <div>
            <p className="font-mono text-[11px] uppercase text-muted">
              Toolbox
            </p>
            <h2 className="mt-2 font-sans text-3xl font-bold text-ink sm:text-4xl">
              Tools
            </h2>
          </div>
          <Link
            href="/tools"
            className="hidden items-center gap-2 font-mono text-xs uppercase text-ink hover:text-muted sm:inline-flex"
          >
            工具架
            <ArrowRight size={14} />
          </Link>
        </div>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-ink/70">
          已上线工具可以直接用，实验中的工具仍在摸索中。
        </p>

        {liveTools.length > 0 ? (
          <div className="mt-8">
            <h3 className="border-b border-ink pb-3 font-mono text-[11px] uppercase text-ink">
              已上线
            </h3>
            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {liveTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
            {plannedTools.length > 0 && (
              <div className="mt-10">
                <h3 className="border-b border-ink pb-3 font-mono text-[11px] uppercase text-muted">
                  实验中的工具
                </h3>
                <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  {plannedTools.map((tool) => (
                    <ToolCard key={tool.id} tool={tool} />
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="mt-8">
            <div className="border border-dashed border-line px-4 py-3 font-mono text-[11px] uppercase text-muted">
              暂无已上线工具 · 正在实验室里迭代
            </div>
            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {plannedTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function Philosophy() {
  const points = [
    {
      text: "AI不是一个聊天机器人，而是一种可以调用的生产力。",
      note: "Workflow, not chat"
    },
    {
      text: "不会编程，不再等于不能做工具。",
      note: "Build without a CS degree"
    },
    {
      text: "最好的AI使用者，不一定最懂AI，而是最懂自己工作的人。",
      note: "Domain first"
    },
    {
      text: "Vibe Coding降低了“做东西”的成本，但没有降低“判断什么值得做”的成本。",
      note: "Taste is the bottleneck"
    }
  ];

  return (
    <section id="about" className="border-b border-line">
      <div className="mx-auto max-w-content px-4 py-14 sm:px-6 lg:px-8">
        <div className="border-b border-ink pb-3">
          <p className="font-mono text-[11px] uppercase text-muted">
            Philosophy
          </p>
          <h2 className="mt-2 font-sans text-3xl font-bold text-ink sm:text-4xl">
            About / 我怎么看 AI 生产力
          </h2>
        </div>

        <div className="mt-8 grid gap-0 md:grid-cols-2">
          {points.map((point, index) => (
            <div
              key={point.text}
              className="border-b border-line py-8 pr-0 md:odd:border-r md:odd:pr-8 md:even:pl-8"
            >
              <div className="flex items-start justify-between gap-4">
                <p className="max-w-md font-sans text-xl font-medium leading-8 text-ink sm:text-2xl sm:leading-9">
                  {point.text}
                </p>
                <span className="shrink-0 font-mono text-xs font-bold text-acid">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="mt-3 font-mono text-[11px] uppercase text-muted">
                {point.note}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-14 font-sans text-3xl font-bold leading-tight text-ink sm:text-5xl sm:leading-[1.1]">
          不要从 AI 技术出发寻找应用，
          <br />
          而要从工作问题出发选择 AI 技术。
        </p>
        
      </div>
    </section>
  );
}
