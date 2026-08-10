import Link from "next/link";

export default function NotFound() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-content px-4 py-24 text-center sm:px-6 lg:px-8">
        <p className="font-mono text-[11px] uppercase text-muted">404</p>
        <h1 className="mt-3 font-sans text-4xl font-bold text-ink">
          这个实验档案不存在
        </h1>
        <Link
          href="/cases"
          className="mt-8 inline-flex items-center bg-acid px-5 py-3 font-mono text-xs font-bold uppercase text-ink hover:bg-ink hover:text-paper"
        >
          返回案例列表
        </Link>
      </div>
    </section>
  );
}
