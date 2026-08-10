import type { Category } from "@/lib/categories";

export type ToolStatus = "live" | "planned";

export interface Tool {
  id: string;
  name: string;
  description: string;
  category: Category;
  status: ToolStatus;
  url?: string;
  note: string;
}

export const PLANNED_TOOLS: Tool[] = [
  {
    id: "earnings-radar",
    name: "财报雷达",
    description: "从财报PDF到分析摘要的情报工具。",
    category: "采编工具",
    status: "live",
    url: "https://cb.bbird.xyz/",
    note: "LIVE"
  },
  {
    id: "infographic-pipeline",
    name: "信息图流水线",
    description: "从一张表格到可发布信息图：OCR、理解、设计、生成、校正、导出。",
    category: "AI作图",
    status: "live",
    url: "https://tu.bbird.xyz/",
    note: "LIVE"
  },
  {
    id: "commentary-radar",
    name: "时评雷达",
    description: "热点线索、事实素材、评论角度与溯源核查一体的写稿工作台。",
    category: "采编工具",
    status: "live",
    url: "https://www.bbird.xyz/",
    note: "LIVE"
  },
  {
    id: "weekly-digest",
    name: "Weekly Digest",
    description: "把零散材料整理成每周可读摘要，先解决自己的信息过载。",
    category: "采编工具",
    status: "planned",
    note: "IN LAB"
  },
  {
    id: "interview-reshaper",
    name: "Interview Reshaper",
    description: "把采访记录改写成有编辑结构的成稿，保留事实，去掉噪音。",
    category: "AI写作",
    status: "planned",
    note: "IN LAB"
  },
  {
    id: "chart-checker",
    name: "Chart Checker",
    description: "AI 做图前的数据校验器，避免把错误图表发出去。",
    category: "踩坑",
    status: "planned",
    note: "IN LAB"
  },
  {
    id: "sec-radar",
    name: "SEC雷达",
    description: "美股发布会、财报分析与 IPO 前瞻等。",
    category: "采编工具",
    status: "planned",
    note: "IN LAB"
  },
  {
    id: "tech-radar",
    name: "科技雷达",
    description: "美国最新科技新闻汇总与选题推荐、写稿。",
    category: "采编工具",
    status: "planned",
    note: "IN LAB"
  }
];

export function getToolbox(): Tool[] {
  return PLANNED_TOOLS;
}
