import { CopyButton } from "@/components/copy-button";

interface PromptCardProps {
  prompt: string;
  title?: string;
  context?: string;
}

export function PromptCard({
  prompt,
  title = "我是怎么告诉AI的？",
  context
}: PromptCardProps) {
  return (
    <section className="mt-16">
      <div className="flex items-center justify-between border-b border-ink pb-3">
        <h2 className="font-mono text-xs uppercase text-ink">{title}</h2>
        <span className="font-mono text-[11px] uppercase text-muted">
          Prompt
        </span>
      </div>

      {context && (
        <p className="mt-4 text-sm leading-7 text-muted">{context}</p>
      )}

      <div className="relative mt-4 border border-line bg-paper">
        <pre className="overflow-x-auto p-4 pr-24 font-mono text-xs leading-6 text-ink sm:p-5 sm:pr-28">
          <code className="whitespace-pre-wrap">{prompt}</code>
        </pre>
        <CopyButton
          text={prompt}
          label="复制Prompt"
          className="absolute right-3 top-3"
        />
      </div>
    </section>
  );
}
