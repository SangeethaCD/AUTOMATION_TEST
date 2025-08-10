import { expect, Page } from "@playwright/test";
import { LoginPage } from "../stepObjects/loginDetails";
require('dotenv').config();

export class utility
{
   static async fillDetails(page:Page,Locator:string,details:string)
   {
      await page.locator(Locator).fill(details);
   }

   static async checkVisibility(page:Page,Locator:string)
   {
      await expect(page.locator(Locator)).toBeVisible({timeout:2000});
   }

   static async validateNavigationUrl(page:Page,Locator:string)
   {
     await expect(page).toHaveURL(Locator,{timeout:30000});
   }
   
   static async clickable(page:Page,Locator:string)
   {
      await page.locator(Locator).click();
   }

   static async logins(page: Page)
   {
      let loginpage:LoginPage;
      loginpage = new LoginPage(page);
      await loginpage.validateURL();
      await loginpage.validateUser(process.env.TEST_USERNAME,process.env.PASSWORD);
      await loginpage.login();
   }
}