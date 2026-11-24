# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: POM1\demoBlazeTest.spec.js >> DemoBlaze Automation
- Location: tests\POM1\demoBlazeTest.spec.js:8:1

# Error details

```
TypeError: order.purchaseButton is not a function
```

# Page snapshot

```yaml
- generic [ref=f3e1]:
  - dialog "Place order" [ref=f3e2]:
    - document [ref=f3e3]:
      - generic [ref=f3e4]:
        - generic [ref=f3e5]:
          - heading "Place order" [level=5] [ref=f3e6]
          - button "Close" [ref=f3e7] [cursor=pointer]: ×
        - generic [ref=f3e9]:
          - generic [ref=f3e10]: "Total: 650"
          - generic [ref=f3e11]:
            - generic [ref=f3e12]: "Name:"
            - 'textbox "Total: 650 Name:" [ref=f3e13]': Anju
          - generic [ref=f3e14]:
            - generic [ref=f3e15]: "Country:"
            - textbox "Country:" [ref=f3e16]: India
          - generic [ref=f3e17]:
            - generic [ref=f3e18]: "City:"
            - textbox "City:" [ref=f3e19]: Kerala
          - generic [ref=f3e20]:
            - generic [ref=f3e21]: "Credit card:"
            - textbox "Credit card:" [ref=f3e22]: "12345467"
          - generic [ref=f3e23]:
            - generic [ref=f3e24]: "Month:"
            - textbox "Month:" [ref=f3e25]: "12"
          - generic [ref=f3e26]:
            - generic [ref=f3e27]: "Year:"
            - textbox "Year:" [active] [ref=f3e28]: "2027"
        - generic [ref=f3e30]:
          - button "Close" [ref=f3e31]
          - button "Purchase" [ref=f3e32]
  - text:             
  - navigation [ref=f3e33]:
    - generic [ref=f3e34]:
      - link "PRODUCT STORE" [ref=f3e35] [cursor=pointer]:
        - /url: index.html
      - list [ref=f3e38]:
        - listitem [ref=f3e39]:
          - link "Home (current)" [ref=f3e40] [cursor=pointer]:
            - /url: index.html
            - text: Home
            - generic [ref=f3e41]: (current)
        - listitem [ref=f3e42]:
          - link "Contact" [ref=f3e43] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=f3e44]:
          - link "About us" [ref=f3e45] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=f3e46]:
          - link "Cart" [ref=f3e47] [cursor=pointer]:
            - /url: "#"
        - listitem
        - listitem [ref=f3e48]:
          - link "Log out" [ref=f3e49] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=f3e50]:
          - link "Welcome anjanatrv" [ref=f3e51] [cursor=pointer]:
            - /url: "#"
        - listitem
  - generic [ref=f3e53]:
    - generic [ref=f3e54]:
      - heading "Products" [level=2] [ref=f3e55]
      - table [ref=f3e57]:
        - rowgroup [ref=f3e58]:
          - row [ref=f3e59]:
            - columnheader "Pic" [ref=f3e60]
            - columnheader "Title" [ref=f3e61]
            - columnheader "Price" [ref=f3e62]
            - columnheader "x" [ref=f3e63]
        - rowgroup [ref=f3e64]:
          - row [ref=f3e65]:
            - cell [ref=f3e66]
            - cell "Nexus 6" [ref=f3e68]
            - cell "650" [ref=f3e69]
            - cell [ref=f3e70]:
              - link "Delete" [ref=f3e71] [cursor=pointer]:
                - /url: "#"
    - generic [ref=f3e72]:
      - heading "Total" [level=2] [ref=f3e73]
      - heading "650" [level=3] [ref=f3e76]
      - button "Place Order" [ref=f3e77]
  - generic [ref=f3e79]:
    - generic [ref=f3e82]:
      - heading "About Us" [level=4] [ref=f3e83]
      - paragraph [ref=f3e84]: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
    - generic [ref=f3e87]:
      - heading "Get in Touch" [level=4] [ref=f3e88]
      - paragraph [ref=f3e89]: "Address: 2390 El Camino Real"
      - paragraph [ref=f3e90]: "Phone: +440 123456"
      - paragraph [ref=f3e91]: "Email: demo@blazemeter.com"
    - heading "PRODUCT STORE" [level=4] [ref=f3e95]
  - contentinfo [ref=f3e97]:
    - paragraph [ref=f3e98]: Copyright © Product Store
```

# Test source

```ts
  1  | import { test,expect } from '@playwright/test';
  2  | import { LoginPage } from './LoginPage';
  3  | import { HomePage } from './homePage';
  4  | import { CartPage } from './cartPage';
  5  | import { PlaceOrderPage } from './placeOrderPage';
  6  | 
  7  | 
  8  | test('DemoBlaze Automation',async({page})=>
  9  | {   
  10 |     //Login
  11 |     const logIn=new LoginPage(page);
  12 |     await logIn.gotoNavigation();
  13 |     await logIn.loginForm('anjanatrv', 'anjanatrv');
  14 | 
  15 |     //Homepage
  16 |     const homePageobj=new HomePage(page);
  17 |     await page.waitForTimeout(3000);
  18 |     await homePageobj.addProductToCart("Nexus 6");
  19 |     await page.waitForTimeout(3000);
  20 |     await homePageobj.gotoCart();
  21 | 
  22 |     //Cartpage
  23 |     const cart=new CartPage(page);
  24 |     await page.waitForTimeout(3000);
  25 |     const status=await cart.checkProductInCart("Nexus 6");
  26 |     await page.waitForTimeout(3000);
  27 | 
  28 |     //PlaceOrder
  29 |     const order=new PlaceOrderPage(page);
  30 |     await order.clickOnPlaceOrder();
  31 |     await order.fillCustomerDetails('Anju','India','Kerala','12345467','12','2027');
> 32 |     await order.purchaseButton();
     |                 ^ TypeError: order.purchaseButton is not a function
  33 | 
  34 | })
  35 | 
  36 | 
```