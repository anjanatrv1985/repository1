const { test,expect } = require("@playwright/test");
var emp_data=require('../../testData.json');

test.describe('data driven test',()=>
{   
    emp_data.forEach(data=>
        {
            test(`Create user ${data.FirstName}`, async ({ page }) =>
            {
                await page.goto('https://demoqa.com/webtables');
                await expect(page).toHaveTitle(/demosite/i);
                await page.getByRole('button',{name:'Add'}).click();
                await page.getByPlaceholder('First Name').fill(data.FirstName);
                await page.getByPlaceholder('Last Name').fill(data.LastName);
                await page.getByPlaceholder('name@example.com').fill(data.EmailAddress);
                await page.getByPlaceholder('Age').fill(data.Age);
                await page.getByPlaceholder('Salary').fill(data.Salary);
                await page.getByPlaceholder('Department').fill(data.Depart);
                await page.getByRole('button',{name:'Submit'}).click();

            });
        });
    
});