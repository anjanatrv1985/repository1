import { test,expect } from '@playwright/test';
import { LoginPage } from './LoginPage';
import { HomePage } from './homePage';
import { CartPage } from './cartPage';
import { PlaceOrderPage } from './placeOrderPage';


test('DemoBlaze Automation',async({page})=>
{   
    //Login
    const logIn=new LoginPage(page);
    await logIn.gotoNavigation();
    await logIn.loginForm('anjanatrv', 'anjanatrv');

    //Homepage
    const homePageobj=new HomePage(page);
    await page.waitForTimeout(3000);
    await homePageobj.addProductToCart("Nexus 6");
    await page.waitForTimeout(3000);
    await homePageobj.gotoCart();

    //Cartpage
    const cart=new CartPage(page);
    await page.waitForTimeout(3000);
    const status=await cart.checkProductInCart("Nexus 6");
    await page.waitForTimeout(3000);

    //PlaceOrder
    const order=new PlaceOrderPage(page);
    await order.clickOnPlaceOrder();
    await order.fillCustomerDetails('Anju','India','Kerala','12345467','12','2027');
    await order.clickOnPurchase();

})

