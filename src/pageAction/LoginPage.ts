import { page } from "../support/hooks"


export async function navigateToUrl(){
    await page.goto("https://sandbox.skillsmax.ai/login");
}

