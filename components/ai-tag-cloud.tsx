"use client";

import { useState, type FormEvent } from "react";

const DEFAULT_TAGS = [
  "DeepSeek",
  "ChatGPT",
  "豆包",
  "千问",
  "Kimi",
  "Skill",
  "MCP",
  "智能体",
  "光模块",
  "Workbuddy",
  "Claude",
  "Gemini",
  "Codex",
  "Agent",
  "RAG"
];

export function AiTagCloud() {
  const [tags, setTags] = useState<string[]>(DEFAULT_TAGS);
  const [active, setActive] = useState<string[]>([]);
  const [value, setValue] = useState("");

  const toggleTag = (tag: string) => {
    setActive((current) =>
      current.includes(tag)
        ? current.filter((item) => item !== tag)
        : [...current, tag]
    );
  };

  const addTag = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const next = value.trim();
    if (!next) return;

    setTags((current) =>
      current.some((item) => item.toLowerCase() === next.toLowerCase())
        ? current
        : [...current, next]
    );
    setValue("");
  };

  return (
    <div className="mt-10 flex flex-col items-center">
      <div className="flex max-w-4xl flex-wrap justify-center gap-3 sm:gap-4">
        {tags.map((tag) => {
          const isActive = active.includes(tag);
          return (
            <button
              key={tag}
              type="button"
              aria-pressed={isActive}
              onClick={() => toggleTag(tag)}
              className={`border px-4 py-2 font-mono text-sm transition-colors sm:text-base ${
                isActive
                  ? "border-[#E8C35A] bg-[#E8C35A] text-slate"
                  : "border-marble bg-cloud text-muted hover:border-slate hover:text-slate"
              }`}
            >
              {tag}
            </button>
          );
        })}
      </div>

      <form
        onSubmit={addTag}
        className="mt-10 flex w-full max-w-xl gap-2"
      >
        <input
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder="添加 AI 新词汇"
          className="min-w-0 flex-1 border border-mist bg-cloud px-4 py-3 text-sm text-slate outline-none transition-colors placeholder:text-sand focus:border-slate"
        />
        <button
          type="submit"
          className="bg-pumpkin px-5 py-3 font-mono text-xs font-bold uppercase text-slate transition-colors hover:bg-slate hover:text-frost"
        >
          添加
        </button>
      </form>

      <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-10">
        <p className="w-fit border-l-2 border-pumpkin pl-4 font-serif text-base font-semibold leading-7 text-slate">
          终身学习能力
        </p>
        <p className="w-fit border-l-2 border-pumpkin pl-4 font-serif text-base font-semibold leading-7 text-slate">
          DIY能力
        </p>
      </div>
    </div>
  );
}
