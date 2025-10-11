import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { PageFactory } from '../pageObjectFactory/pageFactory';

let homePage: HomePage;

test.describe('Home page tests', async () => {
  test.beforeEach('Open and set up fresh page', async ({ page }) => {
    await test.step('Navigate to the Tool Shop Home page', async () => {
      await page.goto('/', { waitUntil: 'domcontentloaded' });
    });

    PageFactory.initialize(page);
    homePage = PageFactory.getHomePage();
  });

  test.afterEach(async () => {
    PageFactory.reset();
  });

  test('The "Home Page" title should be visible on the Home page', async () => {
    await homePage.then.assertHomePageTitleText();
  });

  test('The items in the Sort dropdown should be visible when clicking on the Sort dropdown button', async () => {
    await homePage.when.clickOnSortDropdownButton();
    await homePage.then.assertSortDropdownVisibility();
  });

  test('The item price values should be between the selected min and max price set on the Price Range slider', async () => {
    const minPrice = 10;
    const maxPrice = 50;
    await homePage.when.setPriceRangeSlider(minPrice, maxPrice);
    await homePage.when.waitForItemListToDinamicallyReload();
    await homePage.then.assertItemsPrices(minPrice, maxPrice);
  });
  
  test('The search field should have a placeholder when loading the Home page', async () => {
    await homePage.then.assertSearchFieldIsEmpty();
  });

  test('The text in the Search field should match the input text after typing in the Search field', async () => {
    const inputText = 'hammer';
    await homePage.when.clickOnSearchField();
    await homePage.when.typeInSearchField(inputText);
    await homePage.then.assertSearchFieldText(inputText);
  });

  test('The count of items on the main page should match the expected count and item names after searching for a specific term', async () => {
    const searchTerm = 'screwdriver';
    const expectedItemCount = 2;
    await homePage.when.clickOnSearchField();
    await homePage.when.typeInSearchField(searchTerm);
    await homePage.when.clickOnSearchSubmitButton();
    await homePage.then.assertItemCount(expectedItemCount);
    await homePage.then.assertItemNamesContainText(searchTerm);
  });
});
