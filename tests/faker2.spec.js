import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";

test('Testing in a website', async({page}) => {

    const name = faker.person.fullName();
    const email = faker.internet.email();
    const currentAddress = faker.location.streetAddress();
    const permanentAddress = faker.location.city();

    console.log('name:',name);
    console.log('email:',email);
    console.log('current address:',currentAddress);
    console.log('permanent address:',permanentAddress);

    await page.goto('https://demoqa.com/text-box');

    await page.fill('#userName',name);
    await page.fill('#userEmail',email);
    await page.fill('#currentAddress',currentAddress);
    await page.fill('#permanentAddress',permanentAddress);

     // Submit (scroll first, because ads can overlap the button)
    await page.locator('#submit').scrollIntoViewIfNeeded();
    await page.locator('#submit').click();

    const output = page.locator('#output');
    await expect(output.locator('#name')).toContainText(name);
    await expect(output.locator('#email')).toContainText(email);
    await expect(output.locator('#currentAddress')).toContainText(currentAddress);
    await expect(output.locator('#permanentAddress')).toContainText(permanentAddress);


})