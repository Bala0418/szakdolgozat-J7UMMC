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

  test('The "Home Page" should have everything visible', async () => {
    await homePage.then.assertHomePageHasEverythingVisible();
  });
});
