# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: POM1\demoBlazeTest.spec.js >> DemoBlaze Automation
- Location: tests\POM1\demoBlazeTest.spec.js:6:1

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('a[onclick=\'addToCart(3)\']')

```

# Test source

```ts
  1  | exports.HomePage = class HomePage{
  2  | 
  3  |     constructor(page){
  4  | 
  5  |         this.page = page;
  6  |         this.productList = "//*[@id='tbodyid']";
  7  |         this.addToCartButton = "a[onclick='addToCart(3)']";
  8  |         this.cartIcon = "#cartur";
  9  | 
  10 |     }
  11 | 
  12 |     async addProductToCart(productName){
  13 | 
  14 |         await this.page.waitForSelector(this.productList);
  15 |         const productList = await this.page.$$(this.productList);
  16 |         for(const product of productList){
  17 |             if(productName == await product.textContent()){
  18 |                 await product.click();
  19 |                 break;
  20 |             }
  21 |         }
  22 | 
  23 |         this.page.on('dialog', async dialog =>{
  24 |             if(dialog.message().includes('added')){
  25 |                 await dialog.accept();
  26 |             }
  27 |         })
  28 | 
> 29 |         await this.page.locator(this.addToCartButton).click();
     |                                                       ^ Error: locator.click: Target page, context or browser has been closed
  30 |     }
  31 | 
  32 |     async gotoCart(){
  33 |         
  34 |         await this.page.locator(this.cartIcon).click();
  35 |     }
  36 |     
  37 | }
```