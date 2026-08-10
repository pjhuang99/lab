const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const pkgPath = path.join(root, "package.json");
const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));

if (pkg.scripts.build !== "next build") {
  pkg.scripts.build = "next build";
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n");
}

const run = (command) =>
  execSync(command, { cwd: root, stdio: "inherit" });

run("git add -A");
run('git commit -m "fix: upgrade next-mdx-remote to v6 and restore MDX JS props"');
run("git push");
