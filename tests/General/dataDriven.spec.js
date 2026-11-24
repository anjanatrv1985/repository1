const { test,expect } = require("@playwright/test");

const testData2=require("./testData1.json");
test('Login to app',async({page})=>
{
    await page.goto('https://freelance-learn-automation.vercel.app/login');
    await page.locator("//input[@id='email1']").fill(testData2.address.area);
    await page.locator("//input[@id='password1']").fill(testData2.password);

    await page.pause();
})