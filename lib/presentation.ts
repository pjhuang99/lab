export interface PresentationLink {
  href: string;
  label: string;
}

export interface PresentationSlide {
  id: string;
  chapter: string;
  kicker?: string;
  title: string[];
  body?: string[];
  bullets?: string[];
  note?: string;
  link?: PresentationLink;
  interactive?: "tag-cloud";
}

export const PRESENTATION_SLIDES: PresentationSlide[] = [
  {
    id: "01",
    chapter: "01 · AI 不只是聊天机器人",
    kicker: "AI赋能采编· 案例与实战 · 演示",
    title: ["Vibe Coding 这么火，", "你还在围观？"],
    body: ["从对话、作图到编程，AI 赋能采编的进阶之路。"]
  },
  {
    id: "02",
    chapter: "01 · AI 不只是聊天机器人",
    title: ["AI新概念爆炸"],
    interactive: "tag-cloud"
  },
  {
    id: "03",
    chapter: "01 · AI 不只是聊天机器人",
    title: ["我不会编程"],
    body: ["但我最近做了这些东西："],
    bullets: ["财报雷达", "时评雷达", "图表直通车", "其他正在开发的小工具"],
    note: "AI 帮我写代码 → 一堆真的能跑的工具。",
    link: { href: "/tools", label: "看看我的工具" }
  },
  {
    id: "04",
    chapter: "01 · AI 不只是聊天机器人",
    title: ["过去：一个小需求", "也可能等两周"],
    bullets: [
      "找参考样本",
      "产品经理做demo",
      "美编做效果图",
      "找技术",
      "提需求",
      "等开发",
      "改需求",
      "再等"
    ]
  },
  {
    id: "05",
    chapter: "01 · AI 不只是聊天机器人",
    title: ["现在：我想要一个解析财报的工具……"],
    body: ["Codex/Workbuddy → 财报雷达网站跑起来"],
    note: "我也能Vibe Coding：AI帮我开发得心应手的工具。",
    link: { href: "/cases/earnings-pdf-to-product", label: "查看财报雷达案例" }
  },
  {
    id: "06",
    chapter: "01 · AI 不只是聊天机器人",
    title: ["AI不仅可以写文章"],
    body: ["还可以作图、做PPT，梳理、固化自己的工作流"]
  },
  {
    id: "07",
    chapter: "02 · 我怎么开始给自己造工具",
    title: ["Chatgpt等LLM的第一特性：", "对话、吐文字"],
    body: ["写稿很容易"],
    bullets: [
      "帮我把这段事件整理成一篇时间线……",
      "这个结构不对，重新来。",
      "给我推荐三个适用于公号的标题。",
      "把逻辑漏洞指出来。"
    ]
  },
  {
    id: "08",
    chapter: "02 · 我怎么开始给自己造工具",
    title: ["从文字到图片"],
    bullets: [
      "Chat:就某个文章出制图思路，挑选某个方案",
      "让 Gemini的Nana Banana出图",
      "让 Chatgpt的Image 2出图"
    ],
    link: { href: "https://share.gemini.google/CzPKupusuvYE", label: "查看Gemini制作封面海报的案例" }
  },
  {
    id: "09",
    chapter: "02 · 我怎么开始给自己造工具",
    title: ["从图片到播客、视频、思维导图……"],
    body: ["Google的Notebooklm是深度研究的利器"],
    note: "Notebooklm的魔力：1 忠于材料  2 多媒体输出。",
    link: {
      href: "https://notebook.google.com/notebook/8f5853a4-ebdd-4fad-915a-9c7c9f073c74",
      label: "查看Notebooklm制作的金雅福集团坍塌的制作流程"
    }
  },
  {
    id: "10",
    chapter: "02 · 我怎么开始给自己造工具",
    title: ["如何开始用LLM开发网站"],
    bullets: [
      "Google的AIstudio",
      "Claude Code",
      "Deepseek",
      "……",
      "Workbuddy/Codebuddy"
    ]
  },
  {
    id: "11",
    chapter: "02 · 我怎么开始给自己造工具",
    title: ["单一页面html可以完成大部分展示"],
    body: ["“PPT、表格、简单交互都可以用网页完成…”"],
    link: { href: "https://www.bbird.xyz/", label: "查看时评雷达案例" }
  },
  {
    id: "12",
    chapter: "02 · 我怎么开始给自己造工具",
    title: ["让 AI 写多个文件的复杂网站"],
    bullets: [
      "帮我做一个本地预览的网页。",
      "如何部署到服务器。",
      "注册域名。",
      "再加入草稿箱、注册、登录功能……",
      "增加手机适配。"
    ],
    note: "一个真的能用的网站出来了。"
  },
  {
    id: "13",
    chapter: "03 · 从写稿，到作图，再到编程",
    title: ["描述需求，AI 写代码 →", "看效果，继续描述 →", "AI 继续改"],
    bullets: ["想法 → 描述 → 代码 → 运行 → 发现问题 → 描述问题 → 修改 → 再运行"],
    note: "这就是我的 Vibe Coding。"
  },
  {
    id: "14",
    chapter: "03 · 从写稿，到作图，再到编程",
    title: ["不需要先学会编程"],
    body: ["不用写一行代码，网站就做出来了"],
    note: "不是“没有写代码”，而是“不需要先学会编程再开始”。"
  },
  {
    id: "15",
    chapter: "03 · 从写稿，到作图，再到编程",
    title: ["AI 写代码，比我想象中厉害", "AI 也比我想象中笨"]
  },
  {
    id: "16",
    chapter: "03 · 从写稿，到作图，再到编程",
    title: ["AI 写代码的几种经典失误"],
    bullets: [
      "数据理解错",
      "API 调用失败",
      "页面样式崩掉",
      "手机端显示异常",
      "越修越乱",
      "“看起来完成了，其实不能用”"
    ],
    link: { href: "/cases/gemini-year-end-profile", label: "查看事实核对案例" }
  },
  {
    id: "17",
    chapter: "03 · 从写稿，到作图，再到编程",
    title: ["小步快跑", "Vibe Coding 的正确姿势"],
    bullets: ["一个页面", "一个按钮", "一个功能", "数据接口", "组合起来"],
    note: "不要一次做“完整的智能平台”。"
  },
  {
    id: "18",
    chapter: "03 · 从写稿，到作图，再到编程",
    title: ["AI 不懂采编细节和价值判断"],
    bullets: [
      "什么角度才有新闻价值",
      "什么是采访线索",
      "什么是编辑部的日常工作流",
      "什么样的标题不合适",
      "怎样的报道才是好文章"
    ],
    note: "你的行业经验，就是你最重要的代码。"
  },
  {
    id: "19",
    chapter: "03 · 从写稿，到作图，再到编程",
    title: ["AI与合格新闻的最大冲撞：幻觉"],
    bullets: [
      "哲学思考：什么是真实，什么是虚构",
      "转化为工程问题：文本比对",
      "产品能力：怎么找到比对的目标文本，限定条件的搜索"
    ],
    note: "从“时评雷达”到“财报雷达”，都嵌入了事实核查环节和功能。"
  },
  {
    id: "20",
    chapter: "04 · 把我的工具做成展览",
    title: ["案例 · 财报雷达"],
    body: ["把重复劳动交给 AI。"],
    bullets: ["过去：几十分钟", "现在：几分钟", "原始财报PDF → AI → 财务分析与洞见"],
    link: { href: "/cases/earnings-pdf-to-product", label: "查看完整实验" }
  },
  {
    id: "21",
    chapter: "04 · 把我的工具做成展览",
    title: ["案例 · 时评雷达"],
    body: ["需要关注热评新闻？", "需要提供评论角度？","变成：从素材提取、选择角度、核对事实的工作流"],
    link: { href: "/cases/commentary-radar", label: "打开时评雷达案例" }
  },
  {
    id: "22",
    chapter: "04 · 把我的工具做成展览",
    title: ["图表直通车"],
    body: ["Before / After"],
    bullets: ["Excel / 原始数据", "最终成品图"],
    link: { href: "/cases/infographic-pipeline", label: "查看图表直通车项目" }
  },
  {
    id: "23",
    chapter: "04 · 把我的工具做成展览",
    title: ["不是所有能做出来的东西", "都值得做"],
    body: [
      "我花了时间做了“股市日报”，但后来发现：新闻和资金流之间没有我想象中的关系。",
      "所以我把它放弃了。"
    ],
    note: "Vibe Coding 降低了做东西的成本，但没有降低判断什么值得做的成本。"
  },
  {
    id: "24",
    chapter: "04 · 把我的工具做成展览",
    title: ["以前：学习怎么使用软件", "现在：让软件适应你的工作方式"],
    bullets: ["Excel", "Word", "Photoshop", "CMS", "workbuddy"]
  },
  {
    id: "25",
    chapter: "04 · 把我的工具做成展览",
    title: ["现在：全员DIY做工具"],
    bullets: [
      "过去：公司买软件，开发CMS……",
      "现在：公司技术部开发通用工具",
      "现在：每个人都可以自己做个性化工具"
    ],
    note: "Personal Software / Personal Tools"
  },
  {
    id: "26",
    chapter: "04 · 把我的工具做成展览",
    title: ["未来的优秀采编", "可能都是“半个产品经理”"],
    bullets: [
      "发现问题",
      "定义需求",
      "调用 AI",
      "做出原型",
      "自己使用",
      "继续迭代"
    ],
    note: "把自己的工作方法，固化成工具。"
  },
  {
    id: "27",
    chapter: "05 · 年轻人现在应该怎么开始",
    title: ["从让你烦恼很久的问题开始"],
    bullets: [
      "每天找线索很烦？做个扫描或跟踪器。",
      "Excel 画图很烦？做个图表工具。",
      "每次写稿结构都一样？做个工作流。"
    ]
  },
  {
    id: "28",
    chapter: "05 · 年轻人现在应该怎么开始",
    title: ["找一个每周重复的工作流"],
    bullets: ["描述它", "找 AI", "做第一版", "自己用", "找问题", "继续改"],
    note: "不要学会了再做。做着做着就学会了。"
  },
  {
    id: "29",
    chapter: "05 · 年轻人现在应该怎么开始",
    title: ["本次分享的工具链"],
    bullets: [
      "DeepSeek",
      "Workbuddy",
      "ChatGPT / Claude / Gemini",
      "图片生成：Nana Banana/Chatgpt Image 2",
      "Codex/Google AIstudio",
      "Notebooklm"
    ],
    note: "这场分享本身，就是一个 Vibe Coding Demo。"
  },
  {
    id: "30",
    chapter: "05 · 年轻人现在应该怎么开始",
    title: ["与其杞人忧天 ", "不如加入游戏"],
    body: ["Vibe Coding ——— 把想法变成工具的能力。"],
    note: "许多人为AI会不会替代自己的工作而忧心忡忡。如果打不过，不如加入它。",
    link: { href: "/live", label: "返回演示" }
  }
];

export const PRESENTATION_TOTAL = PRESENTATION_SLIDES.length;

export function getSlideById(id: string) {
  return PRESENTATION_SLIDES.find((slide) => slide.id === id);
}
