import '@playwright/test';

export interface CommonPageWhenSteps {
    /**
     * Clicks on the logo in the top left corner of the page.
     */
    clickOnLogo(): Promise<void>;

    /** 
     * Clicks on the Home button in the navigation bar.
     */
    clickOnHomeButton(): Promise<void>;

    /**
     * Clicks on the Categories Dropdown button in the navigation bar.
     */
    clickOnCategoriesButton(): Promise<void>;

    /**
     * Clicks on the Contact button in the navigation bar.
     */
    clickOnContactButton(): Promise<void>;

    /**
     * Clicks on the Sign In button in the navigation bar.
     */
    clickOnSignInButton(): Promise<void>;

    /** 
     * Clicks on the Language Select Dropdown button in the navigation bar.
     */
    clickOnLanguageSelectButton(): Promise<void>;
}

export interface CommonPageThenSteps { }
export interface CommonPageHelpers { 
    /** 
     * Refreshes the current page
     */
    refreshPage(): Promise<void>;
}

export interface CommonPageDocs {
    when: CommonPageWhenSteps;
    then: CommonPageThenSteps;
    helpers: CommonPageHelpers;
}