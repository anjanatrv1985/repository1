# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: flaky.spec.js >> Flaky test 2
- Location: tests\flaky.spec.js:16:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('h4', { name: 'Hello World!' })
Expected: visible
Timeout: 6000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByRole('h4', { name: 'Hello World!' }) with timeout 6000ms
  - waiting for getByRole('h4', { name: 'Hello World!' })

```

```yaml
- paragraph:
  - link "PMP Practice":
    - /url: https://pmp.expandtesting.com/
  - text: "| Free PMP Certification Mock Exam Test +900 Questions & Quizzes"
  - link "Try Dev Tools":
    - img
    - text: Try Dev Tools
- banner:
  - navigation "Main navigation":
    - link "SUT":
      - /url: /
      - 'img "Best Website for Practice Automation Testing: Free UI and REST API Examples and Apps. Using Cypress, Playwright, Selenium, WebdriverIO and Postman."'
      - text: Practice
    - list:
      - listitem:
        - button "Demos"
      - listitem:
        - link "Tools":
          - /url: /#tools
      - listitem:
        - link "Tips":
          - /url: /tips
      - listitem:
        - link "Test Cases":
          - /url: /test-cases
      - listitem:
        - link "API Testing":
          - /url: /notes/api/api-docs/
      - listitem:
        - link "About":
          - /url: /about
    - list
    - link "Free ISTQB Mock Exams":
      - /url: https://istqb.expandtesting.com/
- main:
  - insertion:
    - iframe
  - paragraph:
    - text: Do you enjoy this platform? ❤️
    - link "Buy us a coffee":
      - /url: https://www.buymeacoffee.com/expandtesting
  - insertion:
    - heading "These are topics related to the article that might interest you" [level=2]: Discover more
    - link "Learn to Code"
    - link "Try Dev Tools"
    - link "Try Cloud Tools"
    - link "Source Robotics"
    - link "Prep for Tests"
    - link "Try Web Tools"
    - link "Find Study Aids"
    - link "Find Schools"
  - navigation "breadcrumb mb-2":
    - list:
      - listitem:
        - link "Home":
          - /url: /
      - listitem:
        - text: /
        - link "Dynamically Loaded Page Elements":
          - /url: /dynamic-loading
      - listitem: "/ Example 2: Element rendered after the fact"
  - 'heading "Example 2: Element rendered after the fact" [level=1]'
  - heading "Hello World!" [level=4]
  - insertion:
    - heading "These are topics related to the article that might interest you" [level=2]: Discover more
    - link "Compare Browsers"
    - link "Explore Web Apps"
    - link "Find Tech Jobs"
    - link "Get Certified"
    - link "Automation practice website"
    - link "Software Testing Resources"
    - link "Automation Testing Tools"
    - link "QA Training Courses"
- contentinfo:
  - heading "Practice Test Automation WebSite for Web UI and Rest API" [level=4]
  - paragraph:
    - text: "Version: e64cd80e | Copyright"
    - link "Expand Testing":
      - /url: https://expandtesting.com/
    - text: "2026"
    - link "Try Dev Tools":
      - img
      - text: Try Dev Tools
- img
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | const { TIMEOUT } = require('node:dns');
  3  | 
  4  | test.skip('Flaky test',async({page})=>
  5  | {   
  6  |     await page.goto('https://testautomationpractice.blogspot.com/.');
  7  |     const btn= page.locator('.start');
  8  |     
  9  |     await btn.waitFor({state:'visible'});
  10 |     await btn.click();
  11 |     await page.waitForTimeout(5000);
  12 |     
  13 | 
  14 | });
  15 | 
  16 | test('Flaky test 2',async({page})=>
  17 | {   
  18 |     await page.goto('https://practice.expandtesting.com/dynamic-loading/2');
  19 |     const btn=await page.getByRole('button',{name:'start'})
  20 |        
  21 |     await btn.waitFor({state:'visible'});
  22 |     await btn.click();
> 23 |     await expect(page.getByRole('h4',{name:'Hello World!'})).toBeVisible({TIMEOUT:10000});
     |                                                              ^ Error: expect(locator).toBeVisible() failed
  24 |     
  25 | 
  26 | });
```