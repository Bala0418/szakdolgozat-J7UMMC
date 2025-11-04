import { Locator, Page } from "@playwright/test";
import { HomePage } from "./home.page";

export function initSelectors(instance: HomePage, page: Page) {
    instance.frontPicture = page.locator('.jumbotron .lead img');

    // Locators for filters
    instance.filters = page.locator('#filters');
    instance.sortTitle = instance.filters.getByText('Sort');
    instance.sortDropdown = instance.filters.getByTestId('sort');

    instance.priceRangeTitle = instance.filters.getByText('Price Range');
    instance.priceRangeSlider = instance.filters.locator('.ngx-slider');
    instance.priceRangeMin = instance.priceRangeSlider.locator('.ngx-slider-pointer-min');
    instance.priceRangeMax = instance.priceRangeSlider.locator('.ngx-slider-pointer-max');

    instance.searchTitle = instance.filters.locator('h4').getByText('Search', {exact: true});
    instance.searchTextField = instance.filters.getByTestId('search-query');
    instance.searchTextFieldClearButton = instance.filters.getByTestId('search-reset');
    instance.searchButton = instance.filters.getByTestId('search-submit');

    instance.filtersTitle = instance.filters.locator('h4').getByText('Filters', {exact: true});
    instance.byCategoryTitle = instance.filters.locator('h4').getByText('By category:', {exact: true});
    instance.byBrandTitle = instance.filters.locator('h4').getByText('By brand:', {exact: true});

    instance.categories = instance.filters.locator('fieldset').first();
    instance.handTools = instance.categories.getByText('Hand Tools', {exact: true});
    instance.hammer = instance.categories.getByText('Hammer', {exact: true});
    instance.handSaw = instance.categories.getByText('Hand Saw', {exact: true});
    instance.wrench = instance.categories.getByText('Wrench', {exact: true});
    instance.screwdriver = instance.categories.getByText('Screwdriver', {exact: true});
    instance.pliers = instance.categories.getByText('Pliers', {exact: true});
    instance.chisels = instance.categories.getByText('Chisels', {exact: true});
    instance.measures = instance.categories.getByText('Measures', {exact: true});

    instance.powerTools = instance.categories.getByText('Power Tools', {exact: true});
    instance.grinder = instance.categories.getByText('Grinder', {exact: true});
    instance.sander = instance.categories.getByText('Sander', {exact: true});
    instance.saw = instance.categories.getByText('Saw', {exact: true});
    instance.drill = instance.categories.getByText('Drill', {exact: true});

    instance.other = instance.categories.getByText('Other', {exact: true});
    instance.toolBelts = instance.categories.getByText('Tool Belts', {exact: true});
    instance.storageSolutions = instance.categories.getByText('Storage Solutions', {exact: true});
    instance.workbench = instance.categories.getByText('Workbench', {exact: true});
    instance.safetyGear = instance.categories.getByText('Safety Gear', {exact: true});
    instance.fasteners = instance.categories.getByText('Fasteners', {exact: true});

    instance.brands = instance.filters.locator('fieldset').last();
    instance.forgeFlexTools = instance.brands.getByText('ForgeFlex Tools', {exact: true});
    instance.mightyCraftHardware = instance.brands.getByText('MightyCraft Hardware', {exact: true});

    // Locators for goods
    instance.itemsGrid = page.locator('.row .container');
    instance.items = instance.itemsGrid.locator('a.card');
    instance.itemName = instance.items.getByTestId('product-name');
    instance.itemPrice = instance.items.getByTestId('product-price');

    // Locators for pagination
    instance.pagination = page.locator('.pagination');
}

declare module './home.page' {
    interface HomePage {
        frontPicture: Locator;

        // Locators for filters
        filters: Locator;
        sortTitle: Locator;
        sortDropdown: Locator;
        priceRangeTitle: Locator;
        priceRangeSlider: Locator;
        priceRangeMin: Locator;
        priceRangeMax: Locator;
        searchTitle: Locator;
        searchTextField: Locator;
        searchTextFieldClearButton: Locator;
        searchButton: Locator;
        filtersTitle: Locator;
        byCategoryTitle: Locator;
        byBrandTitle: Locator;

        categories: Locator;
        handTools: Locator;
        hammer: Locator;
        handSaw: Locator;
        wrench: Locator;
        screwdriver: Locator;
        pliers: Locator;
        chisels: Locator;
        measures: Locator;
        powerTools: Locator;
        grinder: Locator;
        sander: Locator;
        saw: Locator;
        drill: Locator;
        other: Locator;
        toolBelts: Locator;
        storageSolutions: Locator;
        workbench: Locator;
        safetyGear: Locator;
        fasteners: Locator;

        brands: Locator;
        forgeFlexTools: Locator;
        mightyCraftHardware: Locator;

        // Locators for goods
        itemsGrid: Locator;
        items: Locator;
        itemName: Locator;
        itemPrice: Locator;

        // Locators for pagination
        pagination: Locator;
    }

}