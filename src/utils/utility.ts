import { expect, Page } from "@playwright/test";

export class utility
{
   static async fillDetails(page:Page,Locator:string,details:string)
   {
      await page.locator(Locator).fill(details);
   }

   static async checkVisibility(page:Page,Locator:string)
   {
      await expect(page.locator(Locator)).toBeVisible({timeout:5000});
   }

   static async validateNavigationUrl(page:Page,Locator:string)
   {
     await expect(page).toHaveURL(Locator,{timeout:15000});
   }
}