// tests/ui/test_login.spec.js
const { test, expect } = require('@playwright/test');
// const { LoginPage } = require('../../pageObjects/loginPage');
const testData = require('../../data/users.json');
const { login } = require('../../helpers/helper');


test.describe('Login Flow', () => {
  test('should log in successfully with valid credentials', async ({ page }) => {
    // const loginPage = new LoginPage(page);
    // await page.goto('/');
    // await loginPage.login(testData.validUser.email,testData.validUser.password);
 
    await login(page, testData.validUser.email,testData.validUser.password);
    
    const currentUrl = page.url();
    await expect(page).toHaveURL(/\/dashboard/);
  });
});