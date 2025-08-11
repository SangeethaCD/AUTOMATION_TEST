import { Page } from "@playwright/test";
import { utility } from "../utils/utility";
require('dotenv').config();

export class createUser {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async clickCreateButton() {
    await utility.clickable(this.page, "//button[contains(normalize-space(.), 'Create User')]");
  }

  async showSideTray() {
    await utility.checkVisibility(this.page, "//p[contains(text(), 'Create User')]");
  }

  async clickBulkUser() {
    await utility.clickable(this.page, "//p[contains(text(), 'Create Bulk User')]");
  }

  async clickNextButton() {
    await utility.clickable(this.page, "//p[contains(text(), 'Next')]");
  }

  async clickNextsButton(){
    await this.page.locator('//p[text()="Next"]').click();
    await this.page.locator('//p[text()="Next"]').click();
  }

  async creationUser() {
    const input = this.page.locator("//label[contains(text(), 'Organization')]/following::input[1]");
    await input.fill("MyOrg");
    await this.page.locator("//input[@type='file']").setInputFiles('/home/Sangeetha/Documents/testing-training/assets/bulk-sample-user.csv');
  }

  async clickConfirm() {
    await this.page.locator('//p[text()="Next"]').click();
    await utility.clickable(this.page, "//p[contains(text(), 'Confirm & Create')]");
  }

  async successMessage() {
    await utility.checkVisibility(this.page, "//p[contains(text(), 'successfully') or contains(text(), 'created')]");
  }
}

