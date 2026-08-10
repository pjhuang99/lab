interface LessonsProps {
  items: string[];
  title?: string;
}

export function Lessons({
  items,
  title = "What I Learned"
}: LessonsProps) {
  return (
    <section className="mt-20 bg-ink text-paper">
      <div className="mx-auto max-w-content px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between border-b border-paper/20 pb-3">
          <h2 className="font-mono text-xs uppercase text-paper">{title}</h2>
          <span className="font-mono text-[11px] uppercase text-paper/50">
            Lessons Learned
          </span>
        </div>

        <ol className="mt-8 grid gap-8 md:grid-cols-2">
          {items.map((item, index) => (
            <li key={item} className="border-t border-paper/20 pt-4">
              <span className="font-mono text-3xl font-bold text-acid">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 max-w-prose text-base leading-7 text-paper/90">
                {item}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
