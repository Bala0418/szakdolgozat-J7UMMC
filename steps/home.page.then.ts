import { expect, test } from "@playwright/test";
import { HomePage } from "../pages/home.page";

export function initThenSteps(instance: HomePage) {
    instance.then = {
        async assertHomePageTitleText() {
            await test.step('Then the Home Page title should be visible and should have the correct text', async () => {
                await expect(instance.logo).toBeVisible();
            });
        },

        async assertHomePageHasEverythingVisible() {
            await test.step('I hate myself', async () => {
                await expect(instance.frontPicture).toBeVisible();
                await expect(instance.filters).toBeVisible();
                await expect(instance.sortTitle).toBeVisible();
                await expect(instance.sortDropdown).toBeVisible();

                await expect(instance.priceRangeTitle).toBeVisible();
                await expect(instance.priceRangeSlider).toBeVisible();

                await expect(instance.searchTitle).toBeVisible();
                await expect(instance.searchTextField).toBeVisible();
                await expect(instance.searchTextFieldClearButton).toBeVisible();
                await expect(instance.searchButton).toBeVisible();

                await expect(instance.filtersTitle).toBeVisible();
                await expect(instance.byCategoryTitle).toBeVisible();
                await expect(instance.byBrandTitle).toBeVisible();

                await expect(instance.categories).toBeVisible();
                await expect(instance.handTools).toBeVisible();
                await expect(instance.hammer).toBeVisible();
                await expect(instance.handSaw).toBeVisible();
                await expect(instance.wrench).toBeVisible();
                await expect(instance.screwdriver).toBeVisible();
                await expect(instance.pliers).toBeVisible();
                await expect(instance.chisels).toBeVisible();
                await expect(instance.measures).toBeVisible();

                await expect(instance.powerTools).toBeVisible();
                await expect(instance.grinder).toBeVisible();
                await expect(instance.sander).toBeVisible();
                await expect(instance.saw).toBeVisible();
                await expect(instance.drill).toBeVisible();

                await expect(instance.other).toBeVisible();
                await expect(instance.toolBelts).toBeVisible();
                await expect(instance.storageSolutions).toBeVisible();
                await expect(instance.workbench).toBeVisible();
                await expect(instance.safetyGear).toBeVisible();
                await expect(instance.fasteners).toBeVisible();

                await expect(instance.brands).toBeVisible();
                await expect(instance.forgeFlexTools).toBeVisible();
                await expect(instance.mightyCraftHardware).toBeVisible();

                await expect(instance.itemsGrid).toBeVisible();

                await expect(instance.pagination).toBeVisible();
            });
        },
    };
}