const { test,expect } = require('@playwright/test');

const testData=require('./input.json');
test('Registration form-data driven using JSON',async({page})=>
{
    await page.goto('https://automationteststore.com/index.php?rt=account/create');
    await page.locator('#AccountFrm_firstname').fill(testData.firstName);
    await page.locator('#AccountFrm_lastname').fill(testData.lastName);
    await page.locator('#AccountFrm_email').fill(testData.email);
    await page.locator('#AccountFrm_telephone').fill(testData.telephone);
    await page.locator('#AccountFrm_fax').fill(testData.fax);

})