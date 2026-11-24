const { test,expect } = require("@playwright/test");

test.skip('simple alert',async({page})=>
    {
        await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
        page.on("dialog",(dia)=>
        {
            expect(dia.message()).toBe('I am a JS Alert');
            dia.accept();
        })
        await page.locator("//button[@onclick='jsAlert()']").click();
        await expect(page.locator("#result")).toHaveText('You successfully clicked an alert');
    });

    test.skip('Confirm alert',async({page})=>
    {
        await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
        page.on("dialog",(dia)=>
        {
            expect(dia.message()).toBe('I am a JS Confirm');
            dia.dismiss();
        })
        await page.locator("//button[@onclick='jsConfirm()']").click();
        await expect(page.locator("#result")).toHaveText('You clicked: Cancel');
        await page.waitForTimeout(2000);
    });

  test('Prompt alert',async({page})=>
    {
        await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
        page.on("dialog",(dia)=>
        {
            expect(dia.message()).toBe('I am a JS prompt');
            dia.accept("Hello Tester");
        })
        await page.locator("//button[@onclick='jsPrompt()']").click();
              
        await expect(page.locator("#result")).toHaveText('You entered: Hello Tester');
        await page.waitForTimeout(2000);
    });