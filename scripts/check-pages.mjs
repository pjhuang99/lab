const base = "http://127.0.0.1:3003";

const checks = [
  { path: "/", contains: "What I Make" },
  { path: "/cases", contains: "真实案例" },
  { path: "/cases/earnings-pdf-to-product", contains: "财报雷达" },
  { path: "/cases/earnings-pdf-to-product", contains: "chat.deepseek.com" },
  { path: "/cases/infographic-pipeline", contains: "chatgpt.com" },
  { path: "/cases/infographic-pipeline", contains: "Build Pipeline" },
  { path: "/cases/infographic-pipeline", contains: "tu.bbird.xyz" },
  { path: "/cases/gemini-year-end-profile", contains: "m.jiemian.com" },
  { path: "/cases/gemini-year-end-profile", contains: "share.gemini.google" },
  { path: "/cases/commentary-radar", contains: "www.bbird.xyz" },
  { path: "/live", contains: "Vibe Coding 这么火" },
  { path: "/live", contains: "别再围观 AI" },
  { path: "/live/01", contains: "你还在围观" },
  { path: "/live/29", contains: "不如加入游戏" },
  { path: "/tools", contains: "tu.bbird.xyz" },
  { path: "/tools", contains: "www.bbird.xyz" },
  { path: "/tools", contains: "实验中的工具" }
];

let failed = false;

for (const check of checks) {
  try {
    const response = await fetch(`${base}${check.path}`);
    const html = await response.text();
    const ok = response.status === 200 && html.includes(check.contains);
    console.log(
      `${ok ? "PASS" : "FAIL"} ${check.path} (${response.status}) ${ok ? "" : `missing: ${check.contains}`}`
    );
    if (!ok) failed = true;
  } catch (error) {
    console.log(`FAIL ${check.path} request error: ${error.message}`);
    failed = true;
  }
}

if (failed) {
  process.exit(1);
}
