import { test } from "@playwright/test";
import { HomePage } from "../pages/home.page";

export function initWhenSteps(instance: HomePage) {
    instance.when = {
        async clickOnLogo() {
            await test.step('When the logo is clicked on', async () => {
                await instance.logo.click();
            });
        },
    };
}