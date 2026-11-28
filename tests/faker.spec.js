const{test,expect}=require('@playwright/test');
import { faker } from "@faker-js/faker";

test('Generate random user data',async({page})=>
{
    const name=faker.person.fullName();
    const email=faker.internet.email();
    const city=faker.location.city();
    console.log("name",name);
    console.log("email",email);
    console.log("city",city);
    expect(name).toBeTruthy();
    expect(email).toContain("@");

});
