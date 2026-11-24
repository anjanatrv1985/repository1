const {  test, expect } = require("@playwright/test");

test('Login and Complete product purchase', async({page}) => {

    const productName = "Sauce Labs Backpack";
    await page.goto('https://www.saucedemo.com/');
    console.log('Application launched successfully');

    await page.fill('#user-name', 'standard_user' );
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    console.log('Login is Successfull');

    await expect(page.locator(".inventory_list")).toBeVisible();
    console.log('Home pge is successfully loaded');

    const count = await page.locator(".inventory_item_name").count();
    console.log("Total product:", count);

    for(let i=0; i<count ; i++){
        const text = await page.locator(".inventory_item_name").nth(i).textContent();
        if(text.includes(productName)){
            await page.locator(".inventory_item").nth(i).locator("button").click();
            console.log(productName+" Added to Cart");
            break;
        }

    }

    await page.locator(".shopping_cart_link").click();
    console.log('navigated to Shopping cart successfully');

    await expect(page.locator(".inventory_item_name")).toHaveText(productName);
    console.log("Product verified successfully");

    await page.locator('#checkout').click();
    console.log('Checkout page is opened successfully');

    await page.locator("#first-name").fill("Sibi");
    await page.locator("#last-name").fill("V");
    await page.locator("#postal-code").fill("682030");
    console.log("Shipping details entered successfully");

    await page.locator("#continue").click();

    console.log('Navigated to checkout overview page successsfully');

    //checkout overview 

    await expect(page.locator('.inventory_item_price')).toContainText('29.99');
    
    await page.locator('#finish').click();
    
    await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
    console.log("Order is Placed");

})