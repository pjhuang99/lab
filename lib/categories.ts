export const CATEGORIES = [
  "AI写作",
  "AI作图",
  "Vibe Coding",
  "采编工具",
  "踩坑"
] as const;

export type Category = (typeof CATEGORIES)[number];

export const CATEGORY_LABELS: Record<Category, string> = {
  "AI写作": "AI写作",
  "AI作图": "AI作图",
  "Vibe Coding": "Vibe Coding",
  "采编工具": "采编工具",
  "踩坑": "踩坑"
};

export const CATEGORY_CODES: Record<Category, string> = {
  "AI写作": "WRITE",
  "AI作图": "CREATE",
  "Vibe Coding": "CODE",
  "采编工具": "TOOLS",
  "踩坑": "FAIL"
};

export function isCategory(value: unknown): value is Category {
  return typeof value === "string" && (CATEGORIES as readonly string[]).includes(value);
}
