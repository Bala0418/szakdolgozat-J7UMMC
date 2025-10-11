import { Locator, test } from "@playwright/test";
import { HomePage } from "../pages/home.page";
import { initWhenSteps as initCommonWhenSteps } from "./common.page.when";

export function initWhenSteps(instance: HomePage) {
    initCommonWhenSteps(instance);
    instance.when = {
        ...instance.when,

        async clickOnSortDropdownButton() {
            await test.step('When the Sort dropdown is clicked on', async () => {
                await instance.sortDropdown.click();
            });
        },

        async clickOnSearchField() {
            await test.step('When the Search field is clicked on', async () => {
                await instance.searchTextField.click();
            });
        },

        async clickOnSearchResetButton() {
            await test.step('When the Search Reset button is clicked on', async () => {
                await instance.searchTextFieldClearButton.click();
            });
        },

        async clickOnSearchSubmitButton() {
            await test.step('When the Search Submit button is clicked on', async () => {
                await instance.searchButton.click();
            });
        },

        async selectOptionInSortDropdown(optionToSelect: 'Name (A-Z)' | 'Name (Z-A)' | 'Price (High - Low)' | 'Price (Low - High)') {
            await test.step(`When the ${optionToSelect} option in the Sort dropdown list is selected`, async () => {
                await instance.sortDropdown.selectOption(optionToSelect);
            });
        },

        async typeInSearchField(text: string) {
            await test.step(`When ${text} is typed in the Search field`, async () => {
                await instance.searchTextField.fill(text);
            });
        },

        async clearSearchField() {
            await test.step('When the Search field is cleared', async () => {
                await instance.searchTextFieldClearButton.click();
            });
        },

        async setPriceRangeSlider(minPrice: number, maxPrice: number) {
            await test.step(
                `When the Price Range slider is set to a minimum value of ${minPrice} and a maximum value of ${maxPrice}`,
                async () => {

                    const box = await instance.priceRangeSlider.boundingBox();
                    if (!box) throw new Error('Could not get bounding box of the price range slider');

                    const minValue = Number(await instance.priceRangeMin.getAttribute('aria-valuemin'));
                    const maxValue = Number(await instance.priceRangeMax.getAttribute('aria-valuemax'));
                    const sliderWidth = box.width;

                    const minOffset = ((minPrice - minValue) / (maxValue - minValue)) * sliderWidth;
                    const maxOffset = ((maxPrice - minValue) / (maxValue - minValue)) * sliderWidth;

                    await instance.priceRangeMin.hover();
                    await instance.priceRangeMin.dragTo(instance.priceRangeSlider, { targetPosition: { x: minOffset, y: box.height / 2 } });

                    await instance.priceRangeMax.hover();
                    await instance.priceRangeMax.dragTo(instance.priceRangeSlider, { targetPosition: { x: maxOffset, y: box.height / 2 } });

                    async function fineTune(handle: Locator, target: number) {
                        let current = Number(await handle.getAttribute('aria-valuenow'));
                        while (current < target) {
                            await handle.press('ArrowRight');
                            current = Number(await handle.getAttribute('aria-valuenow'));
                        }
                        while (current > target) {
                            await handle.press('ArrowLeft');
                            current = Number(await handle.getAttribute('aria-valuenow'));
                        }
                    }

                    await fineTune(instance.priceRangeMin, minPrice);
                    await fineTune(instance.priceRangeMax, maxPrice);
                }
            );
        },

        async waitForItemListToDinamicallyReload() {
            await test.step('When the item list to dinamically reload is waited for', async () => {
                await instance.page.waitForLoadState('networkidle');
            });
        },
    };
}