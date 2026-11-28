# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: faker.spec.js >> Generate random user data
- Location: tests\faker.spec.js:4:1

# Error details

```
TypeError: name.toBeTruthy is not a function
```

# Test source

```ts
  1  | const{test,expect}=require('@playwright/test');
  2  | import { faker } from "@faker-js/faker";
  3  | 
  4  | test('Generate random user data',async({page})=>
  5  | {
  6  |     const name=faker.person.fullName();
  7  |     const email=faker.internet.email();
  8  |     const city=faker.location.city();
  9  |     console.log("name",name);
  10 |     console.log("email",email);
  11 |     console.log("city",city);
> 12 |     expect(name.toBeTruthy());
     |                 ^ TypeError: name.toBeTruthy is not a function
  13 |     expect(email.toContain("@"));
  14 | 
  15 | });
  16 | 
```