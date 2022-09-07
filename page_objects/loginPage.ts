import { expect, Locator, Page } from '@playwright/test';

export class LoginPage {

    readonly page: Page;
    readonly emailField: Locator;
    readonly passwordField: Locator;
    readonly loginButton: Locator;
    readonly continueButton: Locator
    readonly userName: string;
    readonly password: string;
    readonly alternateOptionsButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailField = page.locator('#tbEmail');
        this.passwordField = page.locator('#tbPassword');
        this.loginButton = page.locator('#btnLogin');
        this.continueButton = page.locator('#btnContinue');
        this.alternateOptionsButton = page.locator('#alternative-option-link');
    }

    async goto() {
        await this.page.goto(`https://${process.env.BASEURL}/sign_in/`);
    }

    async login(username: string, password: string) {
        await this.alternateOptionsButton.click()
        await this.page.locator('text=SDX').click()
        await this.emailField.fill(username)
        await this.continueButton.click();
        await this.passwordField.fill(password);
        await this.loginButton.click();
    }
}