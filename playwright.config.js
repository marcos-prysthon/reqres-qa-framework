// playwright.config.js
import { defineConfig } from "@playwright/test";

export default defineConfig({
  testMatch: "*playwright/tests/*/*.spec.js",
  retries: 0,
  timeout: 30 * 1000,
  use: {
    baseURL: "https://reqres.in",
    ignoreHTTPSErrors: true,
    trace: "on-first-retry",
  },
});
