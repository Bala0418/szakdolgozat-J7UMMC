import '@playwright/test';

export interface HomePageWhenSteps {}

export interface HomePageThenSteps {
    /**
     * Checks for the home page title to be visible and asserts the "Home Page" title text
     */
    assertHomePageTitleText(): Promise<void>;
}

export interface HomePageDocs {
    when: HomePageWhenSteps;
    then: HomePageThenSteps;
}