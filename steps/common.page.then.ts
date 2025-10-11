import { expect, test } from "@playwright/test";
import { CommonPage } from "../pages/common.page";

export function initThenSteps(instance: CommonPage) {
    instance.then = {
        async assertHomePageTitleText() {
            await test.step('Then the Home Page title should be visible and should have the correct text', async () => {
                await expect(instance.logo).toBeVisible();
            });
        },
    }
}