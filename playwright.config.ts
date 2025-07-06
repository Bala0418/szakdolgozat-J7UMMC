import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Given time for test cases */
  timeout: 30*1000,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI 2 times, and locally 1 time */
  retries: process.env.CI ? 2 : 1,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['line'], ['allure-playwright', { open: 'never', detail: true, suiteTitle: false }]],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    ...devices['Desktop Chrome'],
    headless: true,
    viewport: {
      width: 1920,
      height: 1080,
    },
    deviceScaleFactor: undefined,
    launchOptions: { args: ['--start-maximized'] },
    permissions: ['clipboard-read'],
    baseURL: 'https://magento.softwaretestingboard.com/',
    testIdAttribute: 'id',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'Automated UI tests',
      use: { storageState: 'playwright/.auth/user.json' },
    },
  ],

  globalSetup: './config/globalSetup.ts',
  globalTeardown: './config/globalTeardown.ts',
});
