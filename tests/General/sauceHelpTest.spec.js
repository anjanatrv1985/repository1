const{test,expect}=require('@playwright/test');
import {login} from './utils/login.js';
import { openInventory } from './utils/navigation';

test("Login and navigate",async({page})=>
{
    await login(page,'standard_user','secret_sauce');
    await expect(page).toHaveURL(/inventory/);
    await openInventory(page);
    await expect(page.locator('.title')).toHaveText('Products');
    

});