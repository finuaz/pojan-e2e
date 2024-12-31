const { defineConfig } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "./tests",
  timeout: 30000, // 30 seconds
  retries: 2, // Retries on failure
  reporter: [["html", { open: "never" }]], // Use the HTML reporter
  use: {
    baseURL: "http://localhost:3000", // Update this to match your app's dev environment
    headless: true,
    screenshot: "on", // Capture screenshots for failed tests
    video: "retain-on-failure", // Capture video only on failures
  },
});
