import { defineCloudflareConfig } from "@opennextjs/cloudflare";

const config = defineCloudflareConfig();

config.cloudflare = {
  ...config.cloudflare,
  dangerousDisableConfigValidation: true,
};

config.middleware = {
  ...config.middleware,
  external: false,
};

export default config;
