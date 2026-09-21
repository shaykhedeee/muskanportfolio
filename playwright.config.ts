import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: false,
  workers: 1,
  forbidOnly: !!process.env.CI,
  retries: 0,
  use: {
    baseURL: "http://localhost:3000",
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1920, height: 1080 },
      },
    },
  ],
  webServer: {
    command: "powershell -ExecutionPolicy Bypass -Command \"npm.cmd run start\"",
    url: "http://localhost:3000",
    reuseExistingServer: true,
    timeout: 120000,
  },
});
