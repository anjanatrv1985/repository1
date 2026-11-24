const { test,expecte } = require("@playwright/test");

test('Web Table',async({page})=>
    {
        await page.goto('https://testautomationpractice.blogspot.com/');
        const myTable=await page.locator("//table[@name='BookTable']")
        const row=await myTable.locator('tbody tr');
        const rows_count=await row.count();
        console.log(rows_count);
        const cols=await myTable.locator('tbody tr th');
        const cols_count=await cols.count();
        console.log(cols_count);
        const Selenium_row=row.filter({hasText:"Master In Selenium"});
        const all_tds=await Selenium_row.locator("td");
        const bookname=await all_tds.nth(0).textContent();
        //console.log(bookname);
        const author=await all_tds.nth(1).textContent();
        //console.log(author);
        const price=await all_tds.nth(3).textContent();
        console.log(bookname,author,price);

    });
    //th - table heading 
    //td - t body 