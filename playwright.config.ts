import { defineConfig } from "@playwright/test";

export default defineConfig({
  use: {
    headless: false, // Change to true for CI environments
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    baseURL: "https://automation-playground.vercel.app",
    trace: "on-first-retry",
    screenshot: "only-on-failure",
  },
  testDir: "tests",
  reporter: [["list"], ["html"]],
  retries: 1,
});
