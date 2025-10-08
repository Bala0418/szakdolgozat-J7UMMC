import { Locator, Page } from "@playwright/test";
import { CommonPage } from "./common.page";

export function initSelectors(instance: CommonPage, page: Page) {
    instance.logo = page.locator('#Layer_1');
    instance.homeButton = page.getByTestId('nav-home');
    instance.categoriesDropdownButton = page.getByTestId('nav-categories');
    instance.contactButton = page.getByTestId('nav-contact');
    instance.signInButton = page.getByTestId('nav-sign-in');
    instance.languageSelectDropdownButton = page.getByTestId('language-select');
}

declare module './common.page' {
    interface CommonPage {
        logo: Locator;
        homeButton: Locator;
        categoriesDropdownButton: Locator;
        contactButton: Locator;
        signInButton: Locator;
        languageSelectDropdownButton: Locator;
    }
}