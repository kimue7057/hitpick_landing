import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const rootDir = dirname(dirname(fileURLToPath(import.meta.url)));
const distDir = join(rootDir, "dist");
const openNextDir = join(rootDir, ".open-next");
const hostingSource = join(rootDir, ".openai", "hosting.json");
const hostingTarget = join(distDir, ".openai", "hosting.json");

const nextBuildResult = spawnSync("next", ["build"], {
  cwd: rootDir,
  shell: true,
  stdio: "inherit",
});

if (nextBuildResult.status !== 0) {
  process.exit(nextBuildResult.status ?? 1);
}

const buildResult = spawnSync("opennextjs-cloudflare", ["build", "--skipNextBuild"], {
  cwd: rootDir,
  shell: true,
  stdio: "inherit",
});

if (buildResult.status !== 0) {
  process.exit(buildResult.status ?? 1);
}

rmSync(distDir, { force: true, recursive: true });
mkdirSync(distDir, { recursive: true });
cpSync(openNextDir, distDir, { dereference: true, recursive: true });

if (existsSync(hostingSource)) {
  mkdirSync(dirname(hostingTarget), { recursive: true });
  cpSync(hostingSource, hostingTarget);
}
