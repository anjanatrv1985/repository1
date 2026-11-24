class Cart
{
    constructor(page)
    {
        this.page=page;
        this.cartIcon=page.locator(".shopping_cart_link");
        this.cart=page.locator(".cart_item .inventory_item_name");
        this.checkOutButton=this.page.locator('#checkout');
    }
    async getChecked()
    {
        await this.cartIcon.click();

    }
    async checkOut()
    {
        await this.checkOutButton.click();

    }
}
module.exports=Cart;