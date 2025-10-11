import '@playwright/test';
import { CommonPageDocs, CommonPageWhenSteps } from './common.page';

export interface HomePageWhenSteps extends CommonPageWhenSteps {
    /**
     * Clicks on the Sort dropdown Button on the Home page
     */
    clickOnSortDropdownButton(): Promise<void>;

    /**
     * Clicks on the Search field on the Home page
     */
    clickOnSearchField(): Promise<void>;

    /**
     * Clicks on the Search Reset button on the Home page
     */
    clickOnSearchResetButton(): Promise<void>;

    /**
     * Clicks on the Search Submit button on the Home page
     */
    clickOnSearchSubmitButton(): Promise<void>;

    /**
     * Selects an option in the Sort dropdown list on the Home page
     * @param optionToSelect The option to select in the Sort dropdown list. Can be one of the following: 'Name (A-Z)', 'Name (Z-A)', 'Price (High - Low)', 'Price (Low - High)'
     */
    selectOptionInSortDropdown(optionToSelect: 'Name (A-Z)' | 'Name (Z-A)' | 'Price (High - Low)' | 'Price (Low - High)'): Promise<void>;

    /**
     * Types text in the Search field on the Home page
     * @param text The text to type in the Search field
     */
    typeInSearchField(text: string): Promise<void>;

    /**
     * Clears the Search field on the Home page
     */
    clearSearchField(): Promise<void>;

    /**
     * Sets the Price Range slider to the given min and max price on the Home page
     * @param minPrice The minimum price to set the Price Range slider to
     * @param maxPrice The maximum price to set the Price Range slider to
     */
    setPriceRangeSlider(minPrice: number, maxPrice: number): Promise<void>;

    /**
     * Waits for the item list to dinamically reload after setting a filter or performing a search
     */
    waitForItemListToDinamicallyReload(): Promise<void>;
}

export interface HomePageThenSteps {
    /**
     * Checks for the home page title to be visible and asserts the "Home Page" title text
     */
    assertHomePageTitleText(): Promise<void>;

    /**
     * Checks for the items in the Sort dropdown to be visible
     */
    assertSortDropdownVisibility(): Promise<void>;

    /**
     * Asserts the text in the Search field
     * @param text The text to assert in the Search field
     */
    assertSearchFieldText(text: string): Promise<void>;

    /**
     * Asserts that the Search field is empty and the placeholder is displayed
     */
    assertSearchFieldIsEmpty(): Promise<void>;

    /**
     * Asserts the count of items on the main page
     * @param count The count of items to assert on the main page
     */
    assertItemCount(count: number): Promise<void>;

    /**
     * Asserts that the prices of the items on the main page are between the given min and max price
     * @param minPrice The minimum price to assert the items' prices against
     * @param maxPrice The maximum price to assert the items' prices against
     */
    assertItemsPrices(minPrice: number, maxPrice: number): Promise<void>;

    /**
     * Asserts that the names of the items on the main page contain the given text
     * @param text The text to assert the items' names against
     */
    assertItemNamesContainText(text: string): Promise<void>;
}

export interface HomePageDocs extends CommonPageDocs {
    when: HomePageWhenSteps;
    then: HomePageThenSteps;
}