interface MomentItem {
  title: string;
  note?: string;
}

interface MomentsProps {
  items: MomentItem[];
  title?: string;
  label?: string;
}

export function Moments({
  items,
  title = "AI Moments",
  label = "AI Moments"
}: MomentsProps) {
  return (
    <section className="mt-16">
      <div className="flex items-center justify-between border-b border-ink pb-3">
        <h2 className="font-mono text-xs uppercase text-ink">{title}</h2>
        <span className="font-mono text-[11px] uppercase text-muted">
          {label}
        </span>
      </div>

      <ol className="mt-6 grid gap-6 md:grid-cols-3">
        {items.map((item, index) => (
          <li key={item.title} className="border-t-2 border-ink pt-4">
            <span className="font-mono text-xs font-bold text-acid">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="mt-3 font-sans text-xl font-bold leading-snug text-ink">
              {item.title}
            </p>
            {item.note && (
              <p className="mt-2 text-sm leading-6 text-muted">{item.note}</p>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
