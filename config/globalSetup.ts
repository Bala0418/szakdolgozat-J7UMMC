import { chromium } from "@playwright/test";

async function globalSetup(config: { projects: { use: { baseURL: string; headless: boolean } }[] }) {
    const authFile = 'playwright/.auth/user.json';
    const { baseURL, headless } = config.projects[0].use;
    const browser = await chromium.launch({ args: ['--auth-server-allowlist="*"'], headless: true });
    const page = await browser.newPage();
    await page.goto(baseURL);

    await page.context().storageState({ path: authFile });
    await browser.close();
}

export default globalSetup;