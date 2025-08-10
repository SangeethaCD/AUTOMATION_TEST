import { utility } from "../utils/utility";
import { page } from "../support/hooks";


export async function navigateToPage()
{
    await page.goto("https://sandbox.skillsmax.ai/login");
    await utility.logins(page);
    await utility.validateNavigationUrl(page,"https://admin.sandbox.skillsmax.ai/admindashboard");
    await page.locator("//p[text()='Organization']").click();
}