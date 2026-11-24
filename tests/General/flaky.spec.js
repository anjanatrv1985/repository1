const { test, expect } = require('@playwright/test');
const { TIMEOUT } = require('node:dns');

test.skip('Flaky test',async({page})=>
{   
    await page.goto('https://testautomationpractice.blogspot.com/.');
    const btn= page.locator('.start');
    
    await btn.waitFor({state:'visible'});
    await btn.click();
    await page.waitForTimeout(5000);
    

});

test('Flaky test 2',async({page})=>
{   
    await page.goto('https://practice.expandtesting.com/dynamic-loading/2');
    const btn=await page.getByRole('button',{name:'start'})
       
    await btn.waitFor({state:'visible'});
    await btn.click();
    await expect(page.getByRole('heading',{name:'Hello World!'})).toBeVisible({TIMEOUT:10000});
    

});