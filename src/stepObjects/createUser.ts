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
     const nextButton = this.page.locator("//p[contains(text(), 'Next')]");

  const maxRetries = 10;
  const retryDelayMs = 500;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      await nextButton.waitFor({ state: 'visible', timeout: 5000 });

      const isEnabled = await nextButton.evaluate(
        (el) => !el.hasAttribute('disabled') && !el.classList.contains('disabled')
      );
      if (!isEnabled) throw new Error('Next button is disabled');

      await nextButton.click();
      return; 
    } catch (error) {
      if (attempt === maxRetries) throw error;
      await this.page.waitForTimeout(retryDelayMs);
    }
  }
  }

  async creationUser() {
    const input = this.page.locator("//label[contains(text(), 'Organization')]/following::input[1]");
    await input.fill("MyOrg");

    
    await this.page.locator("//input[@type='file']").setInputFiles('/home/Sangeetha/Documents/testing-training/assets/bulk-sample-user.csv');
  }

  async clickConfirm() {
   
    await utility.clickable(this.page, "//p[contains(text(), 'Confirm & Create')]");
  }

  async successMessage() {
    // Check visibility of the success message paragraph
    await utility.checkVisibility(this.page, "//p[contains(text(), 'successfully') or contains(text(), 'created')]");
  }
}

