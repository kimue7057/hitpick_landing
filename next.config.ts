import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
import type { NextConfig } from "next";

const isGitHubPages = process.env.DEPLOY_TARGET === "github-pages";
const repositoryName =
  process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "hitpick_landing";
const githubPagesBasePath = isGitHubPages ? `/${repositoryName}` : "";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.0.7"],
  assetPrefix: githubPagesBasePath || undefined,
  basePath: githubPagesBasePath,
  images: {
    unoptimized: isGitHubPages,
  },
  output: isGitHubPages ? "export" : "standalone",
  trailingSlash: isGitHubPages,
};

if (process.env.NODE_ENV === "development") {
  void initOpenNextCloudflareForDev();
}

export default nextConfig;
