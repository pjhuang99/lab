interface RoleSplitProps {
  ai: string[];
  human: string[];
  title?: string;
}

export function RoleSplit({
  ai,
  human,
  title = "AI 真正帮了什么？"
}: RoleSplitProps) {
  return (
    <section className="mt-16">
      <div className="flex items-center justify-between border-b border-ink pb-3">
        <h2 className="font-mono text-xs uppercase text-ink">{title}</h2>
        <span className="font-mono text-[11px] uppercase text-muted">
          Division of Labor
        </span>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="border border-line bg-paper p-5 sm:p-6">
          <span className="inline-flex bg-acid px-2 py-1 font-mono text-[11px] font-bold uppercase text-ink">
            AI 负责
          </span>
          <ul className="mt-5 space-y-3">
            {ai.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-6 text-ink/85">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-acid" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="border border-line bg-ink p-5 text-paper sm:p-6">
          <span className="inline-flex border border-paper/40 px-2 py-1 font-mono text-[11px] font-bold uppercase text-paper">
            人负责
          </span>
          <ul className="mt-5 space-y-3">
            {human.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-6 text-paper/90">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-acid" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
