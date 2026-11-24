const {test,expect}=require('@playwright/test');
class Summary
{
    constructor(page)
    {
        this.page=page;
        this.subTotal=page.locator('.summary_subtotal_label');
        this.finishButton=page.locator('#finish');

    }
    async summaryDetails()
    {
        const itemTotal=await this.subTotal.textContent();
        //const itemTotal1="Item total: $29.99";
        console.log(itemTotal);
        await expect(itemTotal).toContain('Item total: $29.99');
    }
    async clickFinish()
    {
        await this.finishButton.click();
    }
}
module.exports=Summary;