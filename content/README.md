# 内容维护说明

## 如何新增案例

在 `content/cases/` 下新建一个 `.mdx` 文件，例如 `content/cases/my-case.mdx`，然后按下面的格式填写 frontmatter 和正文。文件名不需要等于 slug，slug 以 frontmatter 为准。

## Frontmatter Schema

```mdx
---
title: "案例标题"
slug: "my-case"
category: "Vibe Coding"
summary: "一句话目标，会显示在卡片和详情页顶部。"
result: "一句话结果，会显示在详情页顶部。"
date: "2026-08-01"
order: 1
tags: ["AI", "Next.js"]
cover: "/images/covers/my-case.svg"
featured: true
demo: true
tool_url: ""
article_url: ""
---
```

字段说明：

- `title`：案例标题。
- `slug`：URL 路径，例如 `/cases/my-case`。
- `category`：必须是 `AI写作`、`AI作图`、`Vibe Coding`、`采编工具`、`踩坑` 之一。
- `summary`：一句话描述案例目标。
- `result`：一句话描述案例结果，显示在详情页“结果”位置。
- `date`：`YYYY-MM-DD` 格式。
- `order`：案例排序。真实案例建议从 1 开始；不写则排在带 order 的案例之后。
- `tags`：标签数组，用于搜索。
- `cover`：封面图路径，放在 `/public/images/` 下。
- `featured`：是否出现在首页 Featured Cases。
- `demo`：是否标注为演示案例。真实案例改为 `false`。
- `tool_url`：工具真实链接。没有上线就留空，不要填假链接。
- `article_url`：已发表文章的链接，可留空。

## 正文结构

正文建议按这个顺序组织：

```mdx
## Objective

我为什么做这个东西？

<Timeline label="实验过程">
  <TimelineItem step="01" title="提出需求" time="Day 1" summary="一句话摘要">
    <Field label="我的输入">...</Field>
    <Field label="AI 回应">...</Field>
    <Field label="我的判断">...</Field>
    <ImageBlock src="/images/artifacts/example.svg" alt="截图说明" caption="说明文字" />
  </TimelineItem>
</Timeline>

<Conversation
  messages={[
    { role: "me", text: "我的提问" },
    { role: "ai", text: "AI 的回应", code: "可选代码", codeLabel: "复制代码" }
  ]}
/>

<PromptCard prompt="完整 prompt 内容" />

<Result
  description="成果说明"
  image="/images/artifacts/example.svg"
  caption="截图说明"
  status="demo"
/>

<Lessons
  items={["结论一", "结论二", "结论三"]}
/>
```

## 可复用组件

- `Timeline` / `TimelineItem`：实验过程时间线，默认折叠，点击展开。
- `Field`：时间线内的字段块，如“我的输入”“我的判断”。
- `ImageBlock`：截图或图片。
- `Conversation`：关键对话，默认显示前 3 条，可展开完整对话。
- `Moments`：记录对话或过程中最关键的转折点。
- `Pipeline`：可点击的横向流水线，适合展示多步骤工作流。
- `BeforeAfterSlider`：拖动查看前后对比。
- `RoleSplit`：AI 与人各自负责什么。
- `TryItYourself`：案例结尾引导用户去使用真实工具。
- `PromptCard`：完整 prompt，带复制按钮。
- `Result`：成果展示，可放截图和真实链接。
- `Lessons`：案例结尾的 What I Learned。

所有数字（Case Files、Tools Built、Failed Experiments）都从 `content/cases/` 自动计算，不需要手工维护。
