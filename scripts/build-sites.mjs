import {
  copyFileSync,
  cpSync,
  existsSync,
  lstatSync,
  mkdirSync,
  readdirSync,
  realpathSync,
  rmSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const rootDir = dirname(dirname(fileURLToPath(import.meta.url)));
const distDir = join(rootDir, "dist");
const openNextDir = join(rootDir, ".open-next");
const hostingSource = join(rootDir, ".openai", "hosting.json");
const hostingTarget = join(distDir, ".openai", "hosting.json");
const serverCompatDir = join(distDir, "server");
const serverCompatIndex = join(serverCompatDir, "index.js");
const serverCompatPackageJson = join(serverCompatDir, "package.json");
const serverCompatPublic = join(serverCompatDir, "public");

function materializeSymlinks(targetPath) {
  for (const entry of readdirSync(targetPath, { withFileTypes: true })) {
    const entryPath = join(targetPath, entry.name);
    const entryStats = lstatSync(entryPath);

    if (entryStats.isSymbolicLink()) {
      let realSourcePath;
      let realSourceStats;

      try {
        realSourcePath = realpathSync(entryPath);
        realSourceStats = statSync(realSourcePath);
      } catch (error) {
        if (error instanceof Error && "code" in error && error.code === "ENOENT") {
          rmSync(entryPath, { force: true, recursive: true });
          continue;
        }

        throw error;
      }

      rmSync(entryPath, { force: true, recursive: true });

      if (realSourceStats.isDirectory()) {
        cpSync(realSourcePath, entryPath, {
          dereference: true,
          recursive: true,
        });
        materializeSymlinks(entryPath);
      } else {
        copyFileSync(realSourcePath, entryPath);
      }

      continue;
    }

    if (entryStats.isDirectory()) {
      materializeSymlinks(entryPath);
    }
  }
}

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
materializeSymlinks(distDir);

mkdirSync(serverCompatDir, { recursive: true });
writeFileSync(
  serverCompatIndex,
  [
    'export { default } from "../worker.js";',
    'export * from "../worker.js";',
    "",
  ].join("\n"),
);
writeFileSync(
  serverCompatPackageJson,
  JSON.stringify({ type: "module" }, null, 2) + "\n",
);

if (existsSync(join(distDir, "assets"))) {
  cpSync(join(distDir, "assets"), serverCompatPublic, {
    dereference: true,
    recursive: true,
  });
}

if (existsSync(hostingSource)) {
  mkdirSync(dirname(hostingTarget), { recursive: true });
  cpSync(hostingSource, hostingTarget);
}
