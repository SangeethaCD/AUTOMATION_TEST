import { page } from "../support/hooks";
import { utility } from "../utils/utility";

export async function navigateToUserPage(){
    await page.goto("https://sandbox.skillsmax.ai/login");
    await utility.logins(page);
    await utility.validateNavigationUrl(page,"https://admin.sandbox.skillsmax.ai/admindashboard");
    await page.locator("//p[text()='User']").click();
}