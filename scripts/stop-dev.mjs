import { execSync } from "node:child_process";
import { rmSync } from "node:fs";
import path from "node:path";

const output = execSync("netstat -ano -p TCP", { encoding: "utf8" });
const line = output
  .split(/\r?\n/)
  .find((entry) => entry.includes(":3003") && entry.includes("LISTENING"));

if (line) {
  const pid = Number(line.trim().split(/\s+/).at(-1));
  if (Number.isFinite(pid)) {
    try {
      execSync(`taskkill /F /T /PID ${pid}`, { stdio: "ignore" });
    } catch {
      try {
        process.kill(pid);
      } catch {
        // Process may already be gone.
      }
    }
  }
}

await new Promise((resolve) => setTimeout(resolve, 1200));

rmSync(path.join(process.cwd(), ".next"), {
  recursive: true,
  force: true,
  maxRetries: 5,
  retryDelay: 300
});
