import { test, expect } from '@playwright/test';
import { readCSV } from './utils/csvReader';
import path from 'path';

const csvData = readCSV(
  path.join(__dirname, '../testDataCsv/formcsvData.csv')
);

csvData.forEach((data) => {
  test(`FormValidation-${data.FirstName}`, async({page}) => {

        await page.goto('https://automationpracticehubapp.netlify.app');
        await page.getByLabel('Username').fill('Admin');
        await page.getByLabel('Password', {exact:true}).fill('Hello@123');
        await page.getByRole('button', {name:"Sign In"}).click();

        await page.getByPlaceholder('Enter your first name').fill(data.FirstName);
        await page.getByPlaceholder('Enter your last name').fill(data.LastName);
        await page.getByPlaceholder('Enter your email').fill(data.Email);
        await page.getByPlaceholder('Enter your password').fill(data.Password);
        await page.getByPlaceholder('Enter your feedback here...').fill(data.Feedback);
        await page.getByRole('button', {name:"Submit"}).first().click();

    })
});