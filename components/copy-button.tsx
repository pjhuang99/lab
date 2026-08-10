"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CopyButtonProps {
  text: string;
  label?: string;
  copiedLabel?: string;
  className?: string;
}

export function CopyButton({
  text,
  label = "复制",
  copiedLabel = "已复制",
  className = ""
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`inline-flex items-center gap-2 border border-line bg-paper px-3 py-2 font-mono text-[11px] uppercase transition-colors hover:bg-ink hover:text-paper ${className}`}
      aria-label={label}
    >
      {copied ? <Check size={13} /> : <Copy size={13} />}
      {copied ? copiedLabel : label}
    </button>
  );
}
