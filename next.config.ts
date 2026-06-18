import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.0.7"],
  output: "standalone",
};

if (process.env.NODE_ENV === "development") {
  void initOpenNextCloudflareForDev();
}

export default nextConfig;
