"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/cases", label: "案例" },
  { href: "/tools", label: "工具" },
  { href: "/live", label: "演示" },
  { href: "/#about", label: "关于" }
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  if (/^\/live\/\d+$/.test(pathname)) {
    return null;
  }

  const isActive = (href: string) => {
    if (href === "/#about") return false;
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper">
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setMenuOpen(false)}
        >
          <span className="h-2.5 w-2.5 bg-acid" aria-hidden="true" />
          <span className="font-sans text-sm font-bold uppercase">
            AI赋能采编· 案例与实战
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="主导航">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-mono text-xs uppercase transition-colors hover:text-muted ${
                isActive(link.href) ? "font-bold text-ink" : "text-ink/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <span className="flex items-center gap-2 font-mono text-[11px] uppercase text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-acid" aria-hidden="true" />
            Lab Active
          </span>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center border border-line md:hidden"
          aria-label={menuOpen ? "关闭菜单" : "打开菜单"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-line bg-paper md:hidden">
          <nav className="mx-auto max-w-content px-4 py-4 sm:px-6" aria-label="移动端导航">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between border-b border-line py-4 font-mono text-sm uppercase"
              >
                {link.label}
                <ArrowUpRight size={16} className="text-muted" />
              </Link>
            ))}
            <div className="flex items-center gap-2 pt-4 font-mono text-[11px] uppercase text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-acid" aria-hidden="true" />
              Lab Active
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
