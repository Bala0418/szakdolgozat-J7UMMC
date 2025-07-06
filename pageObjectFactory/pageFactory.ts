import { Page } from "@playwright/test";
import { HomePage } from "../pages/home.page";

export class PageFactory {
    private static homePage: HomePage | null = null;
    private static isInitialized = false;

    public static initialize(page: Page) {
        if(!this.isInitialized) {
            this.homePage = new HomePage(page);
            this.isInitialized = true;
        }
    }

    public static reset() {
        this.homePage = null;
        this.isInitialized = false;
    }

    public static getHomePage(): HomePage {
        if(!this.homePage) {
            throw new Error('HomePage is not initialized');
        }
        return this.homePage;
    }
}