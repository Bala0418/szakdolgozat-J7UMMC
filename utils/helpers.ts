import { test } from "@playwright/test";
import { CommonPage } from "../pages/common.page";

export function initHelpers(instance: CommonPage) {
    instance.helpers = {
        async refreshPage() {
            await test.step('When the page is refreshed', async () => {
                await instance.page.reload();
            });
        },
    }
}