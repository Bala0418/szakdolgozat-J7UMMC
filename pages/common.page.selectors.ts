import { Locator, Page } from "@playwright/test";
import { CommonPage } from "./common.page";

export function initSelectors(instance: CommonPage, page: Page) {
    instance.logo = page.locator('.logo');
}

declare module './common.page' {
    interface CommonPage {
        logo: Locator;
    }
}