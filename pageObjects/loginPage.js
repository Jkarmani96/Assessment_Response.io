// pageObjects/loginPage.js
class LoginPage {
    constructor(page) {
      this.page = page;
      this.emailInput = page.locator('input[placeholder="Email address"]');
      this.passwordInput = page.locator('input[placeholder="Password"]');
      this.loginButton = page.locator('button[type="submit"]');
    }
  
    async login(email, password) {
      await this.emailInput.fill(email);
      await this.passwordInput.fill(password);
      await this.loginButton.click();
    }
  }
  
  module.exports = { LoginPage };