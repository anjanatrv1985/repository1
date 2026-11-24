const { test, expect } = require("@playwright/test");

test.describe('Source demo login module', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
    });

    test('@smoke Login with valid credential should redirect to inventory', async ({ page }) => {
        await page.fill('#user-name', 'standard_user');
        await page.fill('#password', 'secret_sauce');   // fixed: one #
        await page.click('#login-button');
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    });

    test('@regression Login with invalid credential to show error message', async ({ page }) => {
        await page.fill('#user-name', 'standardser');
        await page.fill('#password', 'secret_sauce');
        await page.click('#login-button');
        await expect(page.locator("h3[data-test='error']")).toContainText('Epic sadface: Username and password do not match any user in this service');
    });

    test('@sanity @login user see error when user name is missing', async ({ page }) => {
        // await page.fill('#user-name', 'standard_user');   // skipped on purpose
        await page.fill('#password', 'secret_sauce');         // fixed: one #
        await page.click('#login-button');
        await expect(page.locator("h3[data-test='error']")).toContainText('Epic sadface: Username is required');
    });

});