import { Locator, Page } from "@playwright/test";
import { HomePage } from "./home.page";

export function initSelectors(instance: HomePage, page: Page) {
    instance.title = page.locator('.page-title .base');
}

declare module './home.page' {
    interface HomePage {
        title: Locator;
    }

}