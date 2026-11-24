import{test,expect} from '@playwright/test';

test.describe("QA Brains Login Module",()=>
{   
    //runs before each test
    test.beforeEach(async({page})=>
    {
        await page.goto('https://practice.qabrains.com/ecommerce/login');
    });

    //smoke test
    test('@smoke @login verify valid login',async({page})=>
    {   
        await page.locator('#email').fill('test@qabrains.com');
        await page.locator('#password').fill('Password123');
        await page.getByRole('button',{name:'Login'}).click();
        await expect(page).toHaveTitle('QA Practice Site');

    });
    //Regression
    test('@regression @login verify invalid login',async({page})=>
    {   
        await page.locator('#email').fill('user@qabrains.com');
        await page.locator('#password').fill('Password123');
        await page.getByRole('button',{name:'Login'}).click();
        await expect(page.getByText('Username is incorrect.')).toBeVisible();

    });
    //sanity test
    test('@sanity @login Sanity test',async({page})=>
    {   
        await page.locator('#password').fill('Password123');
        await page.getByRole('button',{name:'Login'}).click();
        await expect(page.getByText('Email is a required field')).toBeVisible();

    });


});