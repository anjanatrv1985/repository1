const { test,expect } = require("@playwright/test");

test('keyboard function',async({page})=>
{
    await page.goto('https://www.onlinenotepad.io/');
    await page.keyboard.type("Welcome to Kerala");
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Control+C');
    await page.keyboard.press('ArrowRight');
    await page.keyboard.press('Enter');
    await page.keyboard.press('Control+V');
});