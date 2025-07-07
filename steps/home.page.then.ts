import { expect, test } from "@playwright/test";
import { HomePage } from "../pages/home.page";

export function initThenSteps(instance: HomePage) {
    instance.then = {
        async assertHomePageTitleText() {
            await test.step('Then the Home Page title should be visible and should have the correct text', async () => {
                await expect(instance.title).toBeVisible();
                await expect(instance.title).toHaveText('Home Page');
            });
        },
    };
}