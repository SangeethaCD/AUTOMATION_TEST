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
  }

  async creationUser() {
    await this.page.locator('//*[@id="organization-select"]').click();
    await this.page.locator('//*[@id="organization-select-option-15"]').click();
    await this.page.locator("//input[@type='file']").setInputFiles('/home/Sangeetha/Documents/testing-training/assets/bulk-sample-user.csv');
    const nextButton =this.page.locator('button:has-text("Next")');
    await nextButton.waitFor({ state: 'visible' });
    await nextButton.click();
    
  }

  async clickConfirm() {
    await this.page.locator('//p[text()="Next"]').click();
    await utility.clickable(this.page, "//p[contains(text(), 'Confirm & Create')]");
  }

  async successMessage() {
    await utility.checkVisibility(this.page, "//p[contains(text(), 'successfully') or contains(text(), 'created')]");
  }
}

