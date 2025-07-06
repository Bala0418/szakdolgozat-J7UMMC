import { expect, Page } from "@playwright/test";
import { initSelectors } from "./home.page.selectors";
import { CommonPage } from "./common.page";
import { HomePageDocs } from "../functionDocs/home.page";

class HomePage extends CommonPage implements HomePageDocs {
    page: Page

    constructor(page: Page) {
        super(page);
        this.page = page;
        initSelectors(this, page);
    }

    async assertHomePageTitleText() {
        await expect(this.title).toBeVisible();
        await expect(this.title).toHaveText('Home Page');
    }
}

export { HomePage }