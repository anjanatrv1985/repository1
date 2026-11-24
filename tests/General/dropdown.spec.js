const { test,expecte } = require("@playwright/test");

test('Handling dropdown using 3 methods',async({page})=>
    {
        await page.goto('https://selenium.qabible.in/select-input.php');
        await page.locator('#single-input-field').selectOption({label:'Red'});
        console.log('Selected by label',await page.locator('#single-input-field').inputValue())
        await page.locator('#single-input-field').selectOption({value:'Yellow'});
        console.log('Selected by value',await page.locator('#single-input-field').inputValue())
        await page.locator('#single-input-field').selectOption({index:3});
        console.log('Selected by index',await page.locator('#single-input-field').inputValue())


    })