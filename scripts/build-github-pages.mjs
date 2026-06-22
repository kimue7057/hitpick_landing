import { spawnSync } from "node:child_process";
import { dirname, resolve } from "node:path";
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const rootDir = dirname(dirname(fileURLToPath(import.meta.url)));

const buildResult = spawnSync("next", ["build"], {
  cwd: rootDir,
  env: {
    ...process.env,
    DEPLOY_TARGET: "github-pages",
  },
  shell: true,
  stdio: "inherit",
});

if (buildResult.status !== 0) {
  process.exit(buildResult.status ?? 1);
}

const outDir = resolve(rootDir, "out");
writeFileSync(resolve(outDir, ".nojekyll"), "");
console.log(`GitHub Pages export generated at ${outDir}`);
