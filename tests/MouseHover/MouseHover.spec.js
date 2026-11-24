const { test,expect } = require("@playwright/test");

test.skip('Mouse Hover',async({page})=>
{
    await page.goto('https://the-internet.herokuapp.com/hovers');
    const user1 = page.locator("//img[@alt='User Avatar']").nth(0)
    const user2 = page.locator("//img[@alt='User Avatar']").nth(1)
    const user3 = page.locator("//img[@alt='User Avatar']").nth(2)


    await user1.hover();
    await page.waitForTimeout(2000)
    await user2.hover();
    page.close();
});

test.skip('Mouse action double click',async({page})=>
{
    await page.goto('https://qa-practice.netlify.app/double-click');
    const button=page.locator("#double-click-btn");
    await button.dblclick();
    await page.waitForTimeout(2000)


});

test.skip('Mouse action right click',async({page})=>
{
    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');
    const rightClick=page.locator("//span[@class='context-menu-one btn btn-neutral']");
    
    await rightClick.click({button: "right"});
    await page.waitForTimeout(2000);
    await page.close();


});

test('Mouse action drag drop',async({page})=>
{
    await page.goto('https://jqueryui.com/droppable/');
    const iFrame=await page.frameLocator(".demo-frame");
    const toDrag=await iFrame.locator("#draggable");
    const toDrop=await iFrame.locator("#droppable");
    await toDrag.dragTo(toDrop);
    
    
    await page.waitForTimeout(2000);
    


});
