import { Locator, Page } from "@playwright/test";
import { CommonPage } from "./common.page";

export function initSelectors(instance: CommonPage, page: Page) {
    instance.logo = page.locator('.logo');
    instance.signInButton = page.locator('.header .links .authorization-link a');
    instance.createAccountButton = page.locator(''); 
    instance.searchBar = page.locator('.minisearch .input-text');
    instance.cartButton = page.locator('.showcart');

    instance.newsButton = page.locator('#ui-id-3');

    instance.womenButton = page.locator('#ui-id-4');
    instance.womenSubmenu = instance.womenButton.locator('');
    instance.womenTops = instance.womenSubmenu.locator('');
    instance.womenBottoms = instance.womenSubmenu.locator('');
    instance.womenTopsSubmenu = instance.womenSubmenu.locator('');
    instance.womenJackets = instance.womenTopsSubmenu.locator('');
    instance.womenHoodies = instance.womenTopsSubmenu.locator('');
    instance.womenTees = instance.womenTopsSubmenu.locator('');
    instance.womenBras = instance.womenTopsSubmenu.locator('');
    instance.womenBottomsSubmenu = instance.womenSubmenu.locator('');
    instance.womenPants = instance.womenBottomsSubmenu.locator('');
    instance.womenShorts = instance.womenBottomsSubmenu.locator('');

    instance.menButton = page.locator('#ui-id-5');
    instance.menSubmenu = instance.menButton.locator('');
    instance.menTops = instance.menSubmenu.locator('');
    instance.menBottoms = instance.menSubmenu.locator('');
    instance.menTopsSubmenu = instance.menSubmenu.locator('');
    instance.menJackets = instance.menTopsSubmenu.locator('');
    instance.menHoodies = instance.menTopsSubmenu.locator('');
    instance.menTees = instance.menTopsSubmenu.locator('');
    instance.menTanks = instance.menTopsSubmenu.locator('');
    instance.menBottomsSubmenu = instance.menSubmenu.locator('');
    instance.menPants = instance.menBottomsSubmenu.locator('');
    instance.menShorts = instance.menBottomsSubmenu.locator('');

    instance.gearButton = page.locator('#ui-id-6');
    instance.gearSubmenu = instance.gearButton.locator('');
    instance.gearBags = instance.gearSubmenu.locator('');
    instance.gearEquipment = instance.gearSubmenu.locator('');
    instance.gearWatches = instance.gearSubmenu.locator('');

    instance.trainingButton = page.locator('#ui-id-7');
    instance.trainingSubmenu = instance.trainingButton.locator('');
    instance.trainingVideoDownload = instance.trainingSubmenu.locator('');

    instance.saleButton = page.locator('#ui-id-8');

    instance.breadcrumbs = page.locator('.breadcrumbs');

    instance.footer = page.locator('.footer');
    instance.footerNotesButton = instance.footer.locator('.footer-notes-button');
    instance.footerPracticeButton = instance.footer.locator('.footer-practice-button');
    instance.footerWriteForUsButton = instance.footer.locator('.footer-write-for-us-button');
    instance.footerSubscribeButton = instance.footer.locator('.footer-subscribe-button');
    instance.footerSearchTermsButton = instance.footer.locator('.footer-search-terms-button');
    instance.footerPrivacyButton = instance.footer.locator('.footer-privacy-button');
    instance.footerAdvancedSearchButton = instance.footer.locator('.footer-advanced-search-button');
    instance.footerOrdersButton = instance.footer.locator('.footer-orders-button');

}

declare module './common.page' {
    interface CommonPage {
        logo: Locator;
        signInButton: Locator;
        createAccountButton: Locator;

        searchBar: Locator;
        cartButton: Locator;

        newsButton: Locator;

        womenButton: Locator;
        womenSubmenu: Locator;
        womenTops: Locator;
        womenBottoms: Locator;
        womenTopsSubmenu: Locator;
        womenJackets: Locator;
        womenHoodies: Locator;
        womenTees: Locator;
        womenBras: Locator;
        womenBottomsSubmenu: Locator;
        womenPants: Locator;
        womenShorts: Locator;

        menButton: Locator;
        menSubmenu: Locator;
        menTops: Locator;
        menBottoms: Locator;
        menTopsSubmenu: Locator;
        menJackets: Locator;
        menHoodies: Locator;
        menTees: Locator;
        menTanks: Locator;
        menBottomsSubmenu: Locator;
        menPants: Locator;
        menShorts: Locator;

        gearButton: Locator;
        gearSubmenu: Locator;
        gearBags: Locator;
        gearEquipment: Locator;
        gearWatches: Locator;

        trainingButton: Locator;
        trainingSubmenu: Locator;
        trainingVideoDownload: Locator;

        saleButton: Locator;

        breadcrumbs: Locator;

        footer: Locator;
        footerNotesButton: Locator;
        footerPracticeButton: Locator;
        footerWriteForUsButton: Locator;
        footerSubscribeButton: Locator;
        footerSearchTermsButton: Locator;
        footerPrivacyButton: Locator;
        footerAdvancedSearchButton: Locator;
        footerOrdersButton: Locator;
    }
}