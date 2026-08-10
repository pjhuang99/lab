import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { isCategory, type Category } from "@/lib/categories";

export interface CaseMeta {
  slug: string;
  title: string;
  category: Category;
  summary: string;
  result: string;
  date: string;
  order?: number;
  tags: string[];
  cover: string;
  featured: boolean;
  demo: boolean;
  tool_url?: string;
  article_url?: string;
}

interface ParsedCase {
  meta: CaseMeta;
  content: string;
}

const casesDir = path.join(process.cwd(), "content", "cases");

function caseFiles(): string[] {
  return fs
    .readdirSync(casesDir)
    .filter((file) => file.endsWith(".mdx"))
    .sort();
}

function parseCaseFile(file: string): ParsedCase {
  const raw = fs.readFileSync(path.join(casesDir, file), "utf8");
  const { data, content } = matter(raw);

  const meta: CaseMeta = {
    slug: typeof data.slug === "string" ? data.slug : file.replace(/\.mdx$/, ""),
    title: typeof data.title === "string" ? data.title : "Untitled Case",
    category: isCategory(data.category) ? data.category : "Vibe Coding",
    summary: typeof data.summary === "string" ? data.summary : "",
    result: typeof data.result === "string" ? data.result : "",
    date: typeof data.date === "string" ? data.date : "",
    order: typeof data.order === "number" ? data.order : undefined,
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    cover:
      typeof data.cover === "string"
        ? data.cover
        : "/images/covers/placeholder.svg",
    featured: Boolean(data.featured),
    demo: Boolean(data.demo),
    tool_url:
      typeof data.tool_url === "string" && data.tool_url.trim().length > 0
        ? data.tool_url
        : undefined,
    article_url:
      typeof data.article_url === "string" && data.article_url.trim().length > 0
        ? data.article_url
        : undefined
  };

  return { meta, content };
}

export function getAllCases(): CaseMeta[] {
  return caseFiles()
    .map((file) => parseCaseFile(file).meta)
    .sort((a, b) => {
      const aOrder = a.order ?? Number.MAX_SAFE_INTEGER;
      const bOrder = b.order ?? Number.MAX_SAFE_INTEGER;
      if (aOrder !== bOrder) return aOrder - bOrder;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
}

export function getCaseBySlug(slug: string): ParsedCase | null {
  const file = caseFiles().find((name) => {
    const parsed = parseCaseFile(name);
    return parsed.meta.slug === slug;
  });

  if (!file) return null;
  return parseCaseFile(file);
}

export interface LabCounts {
  total: number;
  featured: number;
  tools: number;
  failures: number;
  byCategory: Record<Category, number>;
}

export function getLabCounts(): LabCounts {
  const cases = getAllCases();
  const byCategory = {
    "AI写作": 0,
    "AI作图": 0,
    "Vibe Coding": 0,
    "采编工具": 0,
    "踩坑": 0
  } satisfies Record<Category, number>;

  for (const item of cases) {
    byCategory[item.category] += 1;
  }

  return {
    total: cases.length,
    featured: cases.filter((item) => item.featured).length,
    tools: cases.filter((item) => Boolean(item.tool_url)).length,
    failures: byCategory["踩坑"],
    byCategory
  };
}
