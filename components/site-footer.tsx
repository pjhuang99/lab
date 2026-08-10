import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto max-w-content px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 border-b border-line pb-10 md:grid-cols-3">
          <div>
            <p className="font-mono text-[11px] uppercase text-muted">
              AI Productivity Lab
            </p>
            <p className="mt-3 max-w-xs text-sm leading-6 text-ink/80">
              记录我如何用 AI，从一个想法出发，做出真正能用的东西。
            </p>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase text-muted">Index</p>
            <div className="mt-3 grid gap-2 text-sm">
              <Link href="/cases" className="w-fit hover:text-muted">
                案例
              </Link>
              <Link href="/tools" className="w-fit hover:text-muted">
                工具
              </Link>
              <Link href="/live" className="w-fit hover:text-muted">
                演示
              </Link>
              <Link href="/#about" className="w-fit hover:text-muted">
                关于
              </Link>
            </div>
          </div>

          <div className="flex items-end">
            <p className="font-sans text-2xl font-bold leading-tight md:text-right">
              Don&apos;t just use AI.
              <br />
              Build with it.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-6 font-mono text-[11px] uppercase text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>© {year} AI赋能采编· 案例与实战</span>
          <span>Next.js / TypeScript / Tailwind / MDX</span>
        </div>
      </div>
    </footer>
  );
}
