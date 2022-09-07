import { expect, Locator, Page } from '@playwright/test';

export class NavigationPage {

    readonly page: Page;
    readonly recentLink: Locator;
    readonly favouritesLink: Locator;
    readonly myZonesLink: Locator;
    readonly zoneOrganisationLink: Locator;
    readonly fileInboxLink: Locator;
    readonly helpLink: Locator;
    readonly adminDashboardLink: Locator;
    readonly adminToolsLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.recentLink = page.locator('text=Recent');
        this.favouritesLink = page.locator('text=Favourites');
        this.myZonesLink = page.locator('text=My Zones');
        this.zoneOrganisationLink = page.locator('text=Zone Organisation');
        this.fileInboxLink = page.locator('text=File Inbox');
        this.helpLink = page.locator('text=Help');
        this.adminDashboardLink = page.locator('text=Admin Dashboard');
        this.adminToolsLink = page.locator('text=Admin Tools');

    }


    async returnTextLabels() {
        return ['Recent', 'Favourites', 'My Zones', 'Shared With Me', 'Zone Organisation', 'Help', 'Admin Dashboard', 'Admin Tools']
    }

}