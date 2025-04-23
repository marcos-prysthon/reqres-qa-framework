// playwright.config.js
import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  testMatch: ["**/api/**/*.spec.js", "**/ui/**/*.spec.js"],
  retries: 0,
  timeout: 30 * 1000,
  use: {
    baseURL: "https://reqres.in",
    ignoreHTTPSErrors: true,
    trace: "on-first-retry",
  },
});
