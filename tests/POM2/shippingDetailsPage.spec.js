class ShippingDetails
{
    constructor(page)
    {
        this.page=page;
        this.firstname=page.locator('#first-name');
        this.lastname=page.locator('#last-name');
        this.zip=page.locator('#postal-code');
        this.continueButton=page.locator('#continue');

    }
    async shipment(firstname,lastname,zip)
    {
        await this.firstname.fill(firstname);
        await this.lastname.fill(lastname);
        await this.zip.fill(zip);

    }
    async submitShipping()
    {
        await this.continueButton.click();
    }
}
module.exports=ShippingDetails;