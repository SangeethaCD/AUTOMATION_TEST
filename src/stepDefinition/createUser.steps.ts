import { When,Given,Then } from "@cucumber/cucumber";
import { navigateToUserPage } from "../pageAction/createUser";
import { createUser } from "../stepObjects/createUser";
import { page } from "../support/hooks";

let userPage:createUser;

Given('the user is on the user creation page',async()=>{
    userPage= new createUser(page);
    await navigateToUserPage();
})

When('the user clicks the "User Creation" button',async()=>{
    await userPage.clickCreateButton();
})

Then('the user should see the user creation side tray',async()=>{
    await userPage.showSideTray();
})

When('the user clicks the "Bulk User Creation" button',async()=>{
    await userPage.clickBulkUser();
})

When('the user clicks the "Next" button',async()=>{
    await userPage.clickNextButton();
})

Then('the user should be prompted to upload the user creation files',async()=>{
    await userPage.creationUser();
})

When('the user clicks the "Confirm and Create" button',async()=>{
    await userPage.clickConfirm();
})

Then('the users should be successfully created',async()=>{
    await userPage.successMessage();
})

