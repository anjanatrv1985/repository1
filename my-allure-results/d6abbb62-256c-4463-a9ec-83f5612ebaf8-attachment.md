# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: faker2.spec.js >> Generate data using website
- Location: tests\faker2.spec.js:4:1

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('#output').locator('#curAddress')
Expected substring: "931 Wolf Forest"
Timeout: 6000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" locator('#output').locator('#curAddress') with timeout 6000ms
  - waiting for locator('#output').locator('#curAddress')

```

```yaml
- banner:
  - link:
    - /url: https://demoqa.com
    - img
- img
- text: Elements
- img
- list:
  - listitem:
    - link "Text Box":
      - /url: /text-box
      - img
      - text: Text Box
  - listitem:
    - link "Check Box":
      - /url: /checkbox
      - img
      - text: Check Box
  - listitem:
    - link "Radio Button":
      - /url: /radio-button
      - img
      - text: Radio Button
  - listitem:
    - link "Web Tables":
      - /url: /webtables
      - img
      - text: Web Tables
  - listitem:
    - link "Buttons":
      - /url: /buttons
      - img
      - text: Buttons
  - listitem:
    - link "Links":
      - /url: /links
      - img
      - text: Links
  - listitem:
    - link "Broken Links - Images":
      - /url: /broken
      - img
      - text: Broken Links - Images
  - listitem:
    - link "Upload and Download":
      - /url: /upload-download
      - img
      - text: Upload and Download
  - listitem:
    - link "Dynamic Properties":
      - /url: /dynamic-properties
      - img
      - text: Dynamic Properties
- img
- text: Forms
- img
- img
- text: Alerts, Frame & Windows
- img
- img
- text: Widgets
- img
- img
- text: Interactions
- img
- img
- text: Book Store Application
- img
- heading "Text Box" [level=1]
- text: Full Name
- textbox "Full Name": Rosa Mann
- text: Email
- textbox "name@example.com": Friedrich.Schowalter@gmail.com
- text: Current Address
- textbox "Current Address": 931 Wolf Forest
- text: Permanent Address
- textbox: Gerardobury
- button "Submit"
- paragraph: Name:Rosa Mann
- paragraph: Email:Friedrich.Schowalter@gmail.com
- paragraph: Current Address :931 Wolf Forest
- paragraph: Permananet Address :Gerardobury
- contentinfo: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
  1  | const{test,expect}=require('@playwright/test');
  2  | import { faker } from "@faker-js/faker";
  3  | 
  4  | test('Generate data using website',async({page})=>
  5  | {
  6  |     const name=faker.person.fullName();
  7  |     const email=faker.internet.email();
  8  |     const curAddress=faker.location.streetAddress();
  9  |     const permAddress=faker.location.city();
  10 | 
  11 |     console.log("name",name);
  12 |     console.log("email",email);
  13 |     console.log("Current Address",curAddress);
  14 |     console.log("Permanent Address",permAddress);
  15 | 
  16 |     await page.goto('https://demoqa.com/text-box');
  17 |     await page.fill('#userName',name);
  18 |     await page.fill('#userEmail',email);
  19 |     await page.fill('#currentAddress',curAddress);
  20 |     await page.fill('#permanentAddress',permAddress);
  21 | 
  22 |     
  23 | 
  24 | // Submit (scroll first, because ads can overlap the button)
  25 |   await page.locator('#submit').scrollIntoViewIfNeeded();
  26 |   await page.locator('#submit').click();
  27 | 
  28 |   const output=page.locator('#output');
  29 |   await expect(output.locator('#name')).toContainText(name);
  30 | await expect(output.locator('#email')).toContainText(email);
> 31 | await expect(output.locator('#curAddress')).toContainText(curAddress);
     |                                             ^ Error: expect(locator).toContainText(expected) failed
  32 | await expect(output.locator('#permAddress')).toContainText(permAddress);
  33 | 
  34 | 
  35 | });
```