import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight, FileText, Play } from "lucide-react";
import { getAllCases, type CaseMeta } from "@/lib/cases";
import { CATEGORY_CODES } from "@/lib/categories";
import { getToolbox, type Tool } from "@/lib/tools";

export const metadata: Metadata = {
  title: "演示 — AI赋能采编· 案例与实战",
  description:
    "今天不讲 AI 有多神奇。我给你看，我是怎么拿它干活的。"
};

export default function LivePage() {
  const cases = getAllCases();
  const realCases = cases.filter((item) => !item.demo);
  const tools = getToolbox();
  const liveTools = tools.filter((tool) => tool.status === "live");

  const caseBySlug = (slug: string) => realCases.find((item) => item.slug === slug);
  const case01 = caseBySlug("gemini-year-end-profile");
  const case02 = caseBySlug("earnings-pdf-to-product");
  const case03 = caseBySlug("infographic-pipeline");

  return (
    <>
      <LiveHero />
      <Agenda case01={case01} case02={case02} case03={case03} />
      <ToolsShowcase tools={liveTools} />
      <CorePoints />
      <Closing />
    </>
  );
}

function LiveHero() {
  return (
    <section className="border-b border-mist bg-frost">
      <div className="mx-auto max-w-content px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-mist pb-4 font-mono text-[11px] uppercase text-sand">
          <span>LIVE Session · Internal Talk</span>
          <span>AI赋能采编· 案例与实战</span>
        </div>

        <p className="mt-12 inline-flex items-center gap-2 bg-pumpkin px-3 py-1.5 font-mono text-[11px] font-bold uppercase text-slate">
          <Play size={12} fill="currentColor" />
          本次分享
        </p>

        <h1 className="mt-6 max-w-4xl font-serif text-5xl font-bold leading-[1.05] text-slate sm:text-7xl lg:text-8xl">
          Vibe Coding 这么火，
          <br />
          你还在围观？
        </h1>

        <p className="mt-6 font-sans text-xl font-medium text-sand sm:text-2xl">
          把 AI 玩成你的“生产力外挂”
        </p>

        <p className="mt-5 max-w-2xl text-[15px] leading-7 text-sand sm:text-base">
          今天不讲 AI 有多神奇。
          <br />
          我给你看，我是怎么拿它干活的。
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/live/01"
            className="inline-flex items-center justify-center gap-2 bg-pumpkin px-6 py-3.5 font-mono text-xs font-bold uppercase text-slate transition-colors hover:bg-slate hover:text-frost"
          >
            START
            <ArrowRight size={14} />
          </Link>
          <Link
            href="/tools"
            className="inline-flex items-center justify-center gap-2 border border-slate bg-frost px-6 py-3.5 font-mono text-xs font-bold uppercase text-slate transition-colors hover:bg-slate hover:text-frost"
          >
            看看我的工具
            <ArrowUpRight size={14} />
          </Link>
        </div>

        <p className="mt-14 border-t border-mist pt-5 font-mono text-[11px] uppercase text-sand">
          以前：我们适应软件。现在：软件可以适应我们。
        </p>
      </div>
    </section>
  );
}

interface AgendaProps {
  case01: CaseMeta | undefined;
  case02: CaseMeta | undefined;
  case03: CaseMeta | undefined;
}

function Agenda({ case01, case02, case03 }: AgendaProps) {
  const chapters = [
    {
      number: "01",
      title: "AI 已经不只是聊天机器人",
      range: "Slides 01-05",
      keyLine:
        "AI 最重要的变化，不是替你写文章，而是让你可以制造自己的工具。",
      href: "/live/01",
      label: "进入演示",
      caseHref: case01 ? `/cases/${case01.slug}` : "/cases",
      caseLabel: case01 ? "Case 01 完整实验" : "查看案例"
    },
    {
      number: "02",
      title: "我怎么开始给自己“造工具”",
      range: "Slides 06-11",
      keyLine: "从一个问题开始，而不是从 AI 开始。",
      href: "/live/06",
      label: "进入演示",
      caseHref: case02 ? `/cases/${case02.slug}` : "/cases",
      caseLabel: case02 ? "Case 02 完整实验" : "查看案例"
    },
    {
      number: "03",
      title: "从写稿，到作图，再到编程",
      range: "Slides 12-18",
      keyLine: "我描述需求，AI 写代码；我看效果，继续描述。",
      href: "/live/12",
      label: "进入演示",
      caseHref: case03 ? `/cases/${case03.slug}` : "/cases",
      caseLabel: case03 ? "Case 03 完整实验" : "查看案例"
    },
    {
      number: "04",
      title: "把我的工具做成展览",
      range: "Slides 19-25",
      keyLine: "把重复劳动交给 AI，把判断留给自己。",
      href: "/live/19",
      label: "进入演示",
      caseHref: "/tools",
      caseLabel: "打开工具架"
    },
    {
      number: "05",
      title: "年轻人现在应该怎么开始",
      range: "Slides 26-29",
      keyLine: "找一个重复了 100 次的问题。",
      href: "/live/26",
      label: "进入演示",
      caseHref: "/#about",
      caseLabel: "查看我的方法"
    }
  ];

  return (
    <section className="border-b border-mist bg-frost">
      <div className="mx-auto max-w-content px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between border-b border-mist pb-3">
          <div>
            <p className="font-mono text-[11px] uppercase text-sand">Agenda</p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate sm:text-4xl">
              本次分享
            </h2>
          </div>
          <span className="font-mono text-[11px] uppercase text-sand">
            5 Chapters
          </span>
        </div>

        <ol className="mt-6">
          {chapters.map((chapter) => (
            <li
              key={chapter.number}
              className="grid gap-4 border-b border-mist py-7 sm:grid-cols-[64px_1fr_auto] sm:items-center sm:gap-8"
            >
              <span className="font-mono text-xs font-bold text-sand">
                {chapter.number}
              </span>
              <div>
                <div className="flex flex-wrap items-baseline gap-3">
                  <h3 className="font-serif text-xl font-bold text-slate sm:text-2xl">
                    {chapter.title}
                  </h3>
                  <span className="font-mono text-[11px] uppercase text-sand">
                    {chapter.range}
                  </span>
                </div>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-sand">
                  {chapter.keyLine}
                </p>
              </div>
              <div className="flex flex-col items-start gap-2 sm:items-end">
                <a
                  href={chapter.href}
                  className="inline-flex w-fit items-center gap-2 bg-pumpkin px-4 py-2.5 font-mono text-[11px] font-bold uppercase text-slate transition-colors hover:bg-slate hover:text-frost"
                >
                  {chapter.label}
                  <ArrowRight size={13} />
                </a>
                {chapter.caseHref && chapter.caseLabel && (
                  <a
                    href={chapter.caseHref}
                    className="inline-flex w-fit items-center gap-2 border border-mist bg-frost px-4 py-2.5 font-mono text-[11px] uppercase text-slate transition-colors hover:bg-slate hover:text-frost"
                  >
                    {chapter.caseLabel}
                    <ArrowUpRight size={13} />
                  </a>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function ToolsShowcase({ tools }: { tools: Tool[] }) {
  return (
    <section className="border-b border-mist bg-frost">
      <div className="mx-auto max-w-content px-4 py-12 sm:px-6 lg:px-8">
        <div className="border-b border-mist pb-3">
          <p className="font-mono text-[11px] uppercase text-sand">
            Toolbox
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-slate sm:text-4xl">
            我到底做了些什么
          </h2>
        </div>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-sand">
          这些不是 PPT 里的概念，是现在就能打开的工具。
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <LiveTool key={tool.id} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  );
}

function LiveTool({ tool }: { tool: Tool }) {
  const isLive = tool.status === "live" && Boolean(tool.url);

  return (
    <article className="flex h-full flex-col border border-mist bg-cloud p-5 sm:p-6">
      <div className="flex items-center justify-between gap-3">
        <span
          className={`inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase ${
            isLive ? "bg-pumpkin px-2 py-1 text-slate" : "text-sand"
          }`}
        >
          <Play size={12} />
          {isLive ? "Live" : tool.note}
        </span>
        <span className="font-mono text-[11px] uppercase text-sand">
          {CATEGORY_CODES[tool.category]}
        </span>
      </div>

      <h3 className="mt-5 font-serif text-xl font-bold text-slate">
        {tool.name}
      </h3>
      <p className="mt-2 text-sm leading-6 text-sand">{tool.description}</p>

      <div className="mt-auto pt-6">
        {isLive && tool.url ? (
          <a
            href={tool.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-pumpkin px-4 py-2.5 font-mono text-xs font-bold uppercase text-slate transition-colors hover:bg-slate hover:text-frost"
          >
            打开工具
            <ArrowUpRight size={14} />
          </a>
        ) : (
          <span className="inline-flex items-center font-mono text-[11px] uppercase text-sand">
            尚未上线 · 完成后开放
          </span>
        )}
      </div>
    </article>
  );
}

function CorePoints() {
  const points = [
    "AI 不是一个聊天机器人，而是一个可以调用的生产力。",
    "不会编程，不再等于不能做工具。",
    "最好的 AI 使用者，不一定是最懂 AI 的人，而是最懂自己工作的人。",
    "Vibe Coding 降低了“做东西”的成本，但没有降低“判断什么值得做”的成本。",
    "别再围观 AI，给自己造一个外挂。"
  ];

  return (
    <section className="border-b border-mist bg-frost">
      <div className="mx-auto max-w-content px-4 py-12 sm:px-6 lg:px-8">
        <div className="border-b border-mist pb-3">
          <p className="font-mono text-[11px] uppercase text-sand">
            Takeaway
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-slate sm:text-4xl">
            整场只记住这 5 句
          </h2>
        </div>

        <ol className="mt-6 grid gap-0 md:grid-cols-2">
          {points.map((point, index) => (
            <li
              key={point}
              className="border-b border-mist py-7 pr-0 md:odd:border-r md:odd:pr-8 md:even:pl-8"
            >
              <span className="font-mono text-xs font-bold text-pumpkin">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 max-w-md font-serif text-xl font-bold leading-8 text-slate sm:text-2xl sm:leading-9">
                {point}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section className="bg-slate text-frost">
      <div className="mx-auto max-w-content px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="max-w-4xl font-serif text-4xl font-bold leading-tight sm:text-6xl">
          别再围观 AI。
          <br />
          给自己造一个外挂。
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-8 text-frost/75">
          Vibe Coding — 把想法变成工具的能力。
        </p>

        <div className="mt-12 border border-frost/25 bg-frost/5 p-6 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <FileText size={22} className="text-pumpkin" />
              <div>
                <p className="font-mono text-[11px] uppercase text-pumpkin">
                  Download / View
                </p>
                <p className="mt-1 text-sm leading-6 text-frost/80">
                  PPT · 演讲提纲 · 案例合集
                </p>
              </div>
            </div>
            <span className="inline-flex w-fit items-center border border-dashed border-frost/30 px-4 py-2.5 font-mono text-[11px] uppercase text-frost/50">
              分享结束后再开放
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
