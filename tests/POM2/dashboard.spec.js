class dashboard{
    constructor(page)
    {
        this.page=page;
        this.products=page.locator('.inventory_item');
        this.productNames=page.locator('.inventory_item_name');
    }
    async printProducts()
    {
        await this.productNames.first().waitFor();
        
        const names=await this.productNames.allTextContents();
        const count=await this.productNames.count();

        console.log("Products listed",names);
        console.log("Product count",count);

    }
     async selectProduct(productName)
     {
        const item=this.products.filter({hasText:productName});
        await item.getByRole("button", { name: "Add to cart" }).click();
     }
}
module.exports=dashboard;