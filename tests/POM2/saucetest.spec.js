const{test,expect}=require('@playwright/test');
const loginPage=require('./loginPage.spec');
const DashBoard=require('./dashboard.spec');
const dashboard = require('./dashboard.spec');
const Cart = require('./cartPage.spec');
const ShippingDetails = require('./shippingDetailsPage.spec');
const Summary=require('./summaryPage.spec');
const { OrderConfirmation } = require('./orderConfirmationPage.spec');

test('POM2 SauceDemo E2E application',async({page})=>
{
    const username="standard_user";
    const password="secret_sauce";
    const productName="Sauce Labs Backpack";
    const firstname='Anjana';
    const lastname='B';
    const zip='695006';
    

    const login=new loginPage(page);
    await login.goto();
    await login.validLogin(username,password); 
    
    const dashboardobj=new dashboard(page);
    await dashboardobj.printProducts();
    await dashboardobj.selectProduct(productName);

    const cart=new Cart(page);
    await cart.getChecked();
    await cart.checkOut();
    
    const shipping=new ShippingDetails(page);
    await shipping.shipment(firstname,lastname,zip);
    await shipping.submitShipping();

    const summary=new Summary(page);
    await summary.summaryDetails();
    await summary.clickFinish();

    const confirm=new OrderConfirmation(page);
    confirm.verifyOrderConfirmation();

});