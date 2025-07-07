import test, { expect, Page } from "@playwright/test";
import { initSelectors } from "./home.page.selectors";
import { initWhenSteps } from "../steps/home.page.when";
import { initThenSteps } from "../steps/home.page.then";
import { CommonPage } from "./common.page";
import { HomePageDocs } from "../functionDocs/home.page";

class HomePage extends CommonPage implements HomePageDocs {
    page: Page
    when: HomePageDocs['when'];
    then: HomePageDocs['then'];

    constructor(page: Page) {
        super(page);
        this.page = page;
        initSelectors(this, page);
        initWhenSteps(this);
        initThenSteps(this);
    }
}

export { HomePage }