import { defineConfig, devices } from '@playwright/test';

/**
 * In CI (`process.env.CI === 'true'`):
 *   - Serves the pre-built static output from `out/` using `serve`.
 *   - Assumes `npm run build` has already run before `npm run test:ui`.
 *
 * Locally:
 *   - Reuses an already-running dev server if one is on port 3000.
 *   - Otherwise starts `next dev` automatically.
 */
export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  // Fail the build if any test has `test.only` committed accidentally.
  forbidOnly: !!process.env.CI,
  // Retry failed tests once in CI to reduce noise from flakiness.
  retries: process.env.CI ? 1 : 0,
  // Single worker in CI to avoid resource contention; auto locally.
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI ? 'github' : 'html',
  use: {
    baseURL: 'http://localhost:3000',
    // Record a trace on the first retry to aid debugging in CI.
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    command: process.env.CI ? 'npx serve out -l 3000' : 'npm run dev',
    port: 3000,
    // Reuse an existing dev server locally to avoid a slow cold start.
    reuseExistingServer: !process.env.CI,
  },
});
