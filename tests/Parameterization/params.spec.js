const { test,expect } = require("@playwright/test");

test.describe('data driven test',()=>
{   
    const users_data= 
    [
        ["First1","Last1","test1@tsst.com","25","45637","Eng"],
        ["First2","Last2","test2@tsst.com","28","45737","IT"],
        ["First3","Last3","test3@tsst.com","34","67637","Mal"],
    ];
    users_data.forEach(data=>
        {
            test(`Create user ${data[0]}`, async ({ page }) =>
            {
                await page.goto('https://demoqa.com/webtables');
                await expect(page).toHaveTitle(/demosite/i);
                await page.getByRole('button',{name:'Add'}).click();
                await page.getByPlaceholder('First Name').fill(data[0]);
                await page.getByPlaceholder('Last Name').fill(data[1]);
                await page.getByPlaceholder('name@example.com').fill(data[2]);
                await page.getByPlaceholder('Age').fill(data[3]);
                await page.getByPlaceholder('Salary').fill(data[4]);
                await page.getByPlaceholder('Department').fill(data[5]);
                await page.getByRole('button',{name:'Submit'}).click();

    });
        });
    
});