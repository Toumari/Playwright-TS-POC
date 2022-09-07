import { test, expect, Page } from '@playwright/test';
import { LoginPage } from '../../../page_objects/loginPage';
require('dotenv').config();


test.describe('Login Functionality', () => {

    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
    })

    test.afterAll(async ({ page }) => {
        page.close();
    })

    test('Login to Workspace via SDX', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.login(process.env.SWITCHID as string, process.env.PASSWORD as string);
        await expect(page.locator('text=Recent')).toBeVisible();
        await expect(page.url()).toBe(`https://${process.env.BASEURL}/`);
    })

    test('Login to Workspace with invalid switch ID', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.login('test@test.com', process.env.PASSWORD as string);
        await expect(page.locator('#statusPanel_pnlErrorReport')).toBeVisible();
        await expect(page.locator('text=The Egress ID test@test.com and password that you entered did not match our records. Please double-check and try again.')).toBeVisible()
    })

    test('Login to Workspace with invalid password', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.login(process.env.SWITCHID as string, 'IncorrectPassword');
        await expect(page.locator('#statusPanel_pnlErrorReport')).toBeVisible();
        await expect(page.locator(`text=The Egress ID ${process.env.SWITCHID} and password that you entered did not match our records. Please double-check and try again.`)).toBeVisible()
    })
})
