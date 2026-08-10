"use client";

import { useState } from "react";
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";
import { CopyButton } from "@/components/copy-button";

export interface ConversationMessage {
  role: "me" | "ai";
  text: string;
  code?: string;
  codeLabel?: string;
}

interface ConversationProps {
  messages: ConversationMessage[];
  title?: string;
  initialCount?: number;
  label?: string;
  fullLabel?: string;
  fullUrl?: string;
}

export function Conversation({
  messages,
  title = "关键对话",
  initialCount = 3,
  label = "关键对话",
  fullLabel = "查看完整对话",
  fullUrl
}: ConversationProps) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? messages : messages.slice(0, initialCount);
  const hasMore = messages.length > initialCount;

  return (
    <section className="mt-16">
      <div className="flex items-center justify-between border-b border-ink pb-3">
        <h2 className="font-mono text-xs uppercase text-ink">{title}</h2>
        <span className="font-mono text-[11px] uppercase text-muted">
          {label}
        </span>
      </div>

      <ol className="border-b border-line">
        {visible.map((message, index) => (
          <li
            key={`${message.role}-${index}`}
            className="grid gap-4 border-b border-line py-6 sm:grid-cols-[64px_1fr] sm:gap-6"
          >
            <div className="flex items-start gap-3 sm:block">
              <span
                className={`inline-flex min-w-[3rem] items-center justify-center px-2 py-1 font-mono text-[11px] font-bold uppercase ${
                  message.role === "me"
                    ? "bg-acid text-ink"
                    : "bg-ink text-paper"
                }`}
              >
                {message.role === "me" ? "ME" : "AI"}
              </span>
              <span className="font-mono text-[11px] text-muted sm:mt-2 sm:block">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <div className="min-w-0">
              <p className="whitespace-pre-wrap text-sm leading-7 text-ink/90">
                {message.text}
              </p>
              {message.code && (
                <div className="relative mt-4 border border-line bg-ink">
                  <pre className="overflow-x-auto p-4 pr-16 font-mono text-xs leading-6 text-paper">
                    <code>{message.code}</code>
                  </pre>
                  <CopyButton
                    text={message.code}
                    label={message.codeLabel ?? "复制代码"}
                    className="absolute right-2 top-2 border-paper/25 bg-transparent text-paper hover:bg-paper hover:text-ink"
                  />
                </div>
              )}
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-5 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
        {hasMore && (
          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            className="inline-flex items-center gap-2 font-mono text-xs uppercase text-ink underline decoration-line underline-offset-4 hover:text-muted"
          >
            {expanded ? "收起对话" : "展开更多对话"}
            {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
        )}
        {fullUrl && (
          <a
            href={fullUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-ink px-4 py-2.5 font-mono text-xs uppercase text-paper transition-colors hover:bg-acid hover:text-ink"
          >
            {fullLabel}
            <ArrowUpRight size={14} />
          </a>
        )}
      </div>
    </section>
  );
}
