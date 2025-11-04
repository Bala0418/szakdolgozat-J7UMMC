import { test } from "@playwright/test";
import { CommonPage } from "../pages/common.page";

export function initWhenSteps(instance: CommonPage) {
    instance.when = {
        async clickOnLogo() {
            await test.step('When the logo is clicked on', async () => {
                await instance.logo.click();
            });
        },

        async clickOnHomeButton() {
            await test.step('When the Home button is clicked on', async () => {
                await instance.homeButton.click();
            });
        },

        async clickOnCategoriesButton() {
            await test.step('When the Categories Dropdown button is clicked on', async () => {
                await instance.categoriesDropdownButton.click();
            });
        },

        async clickOnContactButton() {
            await test.step('When the Contact button is clicked on', async () => {
                await instance.contactButton.click();
            });
        },

        async clickOnSignInButton() {
            await test.step('When the Sign In button is clicked on', async () => {
                await instance.signInButton.click();
            });
        },

        async clickOnLanguageSelectButton() {
            await test.step('When the Language Select Dropdown button is clicked on', async () => {
                await instance.languageSelectDropdownButton.click();
            });
        },
    }
}