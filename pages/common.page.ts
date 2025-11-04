import { Page } from "@playwright/test";
import { initSelectors } from "./common.page.selectors";
import { initWhenSteps } from "../steps/common.page.when";
import { initThenSteps } from "../steps/common.page.then";
import { initHelpers } from "../utils/helpers";
import { CommonPageDocs } from "../functionDocs/common.page";

class CommonPage implements CommonPageDocs {
    page: Page;
    when: CommonPageDocs['when'];
    then: CommonPageDocs['then'];
    helpers: CommonPageDocs['helpers'];

    protected constructor(page: Page) {
        initSelectors(this, page);
        initWhenSteps(this);
        initThenSteps(this);
        initHelpers(this);
    }
}

export { CommonPage }