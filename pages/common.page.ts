import { Page } from "@playwright/test";
import { initSelectors } from "./common.page.selectors";
import { CommonPageDocs } from "../functionDocs/common.page";

class CommonPage implements CommonPageDocs {
    page: Page

    protected constructor(page: Page) {
        initSelectors(this, page);
    }
}

export { CommonPage }