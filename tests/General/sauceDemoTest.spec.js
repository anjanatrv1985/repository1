const{test,expect}=require('@playwright/test');
const{ testData }=require('../TestData/testData');

test('New Method - Entering Incorrect Value',async({page})=>
{
        await page.locator("#user-name").fill(testData.login.invalidUsername);
    await page.locator("#password").fill(testData.login.validPassword);
    await page.locator("#login-button").click();

    const error = page.locator("[data-test='error']");
    console.log(await error.textContent());
    await expect(error).toContainText("Epic sadface");
    await expect(error).toHaveText("Epic sadface: Username and password do not match any user in this service");

    // Recover with a valid username (password is still filled in)
    await page.locator("#user-name").fill(testData.login.validUsername);
    await page.locator("#login-button").click();

    await expect(page).toHaveURL(/inventory/);

})