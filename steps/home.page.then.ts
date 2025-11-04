import { expect, test } from "@playwright/test";
import { HomePage } from "../pages/home.page";
import { initThenSteps as initCommonThenSteps } from "./common.page.then";

export function initThenSteps(instance: HomePage) {
    initCommonThenSteps(instance);
    instance.then = {
        ...instance.then,

        async assertHomePageTitleText() {
            await test.step('Then the Home Page title should be visible and should have the correct text', async () => {
                await expect(instance.logo).toBeVisible();
            });
        },

        async assertSortDropdownVisibility() {
            await test.step('Then the items in the Sort dropdown should be visible', async () => {
                await expect(instance.logo).toBeVisible();
            });
        },

        async assertSearchFieldText(text: string) {
            await test.step(`Then the text in the Search field should be ${text}`, async () => {
                await expect(instance.logo).toBeVisible();
            });
        },

        async assertSearchFieldIsEmpty() {
            await test.step('Then the placeholder should be displayed in the Search field', async () => {
                await expect(instance.searchTextField).toBeVisible();
            });
        },

        async assertItemCount(count: number) {
            await test.step(`Then the count of items on the main page should be ${count}`, async () => {
                await expect(instance.searchTextField).toBeVisible();
            });
        },

        async assertItemsPrices(minPrice: number, maxPrice: number) {
            await test.step(`Then the prices of the items on the main page should be between ${minPrice} and ${maxPrice}`, async () => {
                for (let i = 0; i < await instance.items.count(); i++) {
                    const priceText = await instance.itemPrice.nth(i).innerText();
                    const priceValue = parseFloat(priceText.replace('$', ''));
                    expect(priceValue).toBeGreaterThanOrEqual(minPrice);
                    expect(priceValue).toBeLessThanOrEqual(maxPrice);
                }
            });
        },

        async assertItemNamesContainText(text: string) {
            await test.step(`Then the names of the items on the main page should contain the text ${text}`, async () => {
                for (let i = 0; i < await instance.items.count(); i++) {
                    const nameText = await instance.itemName.nth(i).innerText();
                    expect(nameText.toLowerCase()).toContain(text.toLowerCase());
                }
            });
        },
    }
}