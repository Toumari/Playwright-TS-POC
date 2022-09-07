import { test, expect, Page, Browser } from '@playwright/test';
import { LoginPage } from '../../../page_objects/loginPage';
import { NavigationPage } from '../../../page_objects/navigationPage';
require('dotenv').config();



test.describe('Site Navigation', () => {

    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login(process.env.SWITCHID as string, process.env.PASSWORD as string);
    });

    test.afterAll(async ({ page }) => {
        page.close();
    })

    test('Verify Left Hand Links Exist', async ({ page }) => {
        const navigationPage = new NavigationPage(page);
        const links = await navigationPage.returnTextLabels();
        for (let link in links) {
            await (expect(page.locator('text=' + links[link])).toBeVisible());
            if (links[link] == 'Help') {
                await page.click('text=' + links[link]);
                await page.click('.hi-logo-img');
            }
            await page.click('text=' + links[link]);
        }
    });
})