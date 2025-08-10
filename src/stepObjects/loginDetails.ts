import { Page, expect } from "@playwright/test";
import { utility } from "../utils/utility";

export class LoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async validateUser(username: string, password: string) {
    await utility.fillDetails(this.page,"//input[@placeholder='Email']",username);
    await utility.fillDetails(this.page,"//input[@placeholder='Password']",password);
  }

  async login() {
    await this.page.locator("//button[text()='Login']").click();
  }

  async validateNavigation() {
    await utility.validateNavigationUrl(this.page,"https://admin.sandbox.skillsmax.ai/admindashboard");
  }

  async showErrorMessage(){
    await utility.checkVisibility(this.page,"//p[text()='Incorrect email or password']");
  }

  async validateURL(){
    await utility.validateNavigationUrl(this.page,"https://sandbox.skillsmax.ai/login");
  }
  async validateErrorMessage() {
    await utility.checkVisibility(this.page,"//p[text()='Email is required']");
    await utility.checkVisibility(this.page,"//p[text()='Password is required.']");
  }
}




