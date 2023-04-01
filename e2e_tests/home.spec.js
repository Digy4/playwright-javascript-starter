//const { test, expect } = require("@playwright/test");
const { HomePage } = require("./page-objects/HomePage");
const { consoleLogPage } = require("./digy-test-base");
const { test, expect } = require("./digy-test-base");

test.describe("Home Tests", () => {

  test.describe.configure({ mode: 'parallel' });

  test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigate();
  });

  test("Verify Home page title", async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.pageTitle();
  });

  test("Verify Logo on Home page", async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.logo();
  });

  test("Verify top navigation on Home page", async ({ page }) => {
    const homePage = new HomePage(page);
    await expect(homePage.topNavLinksLoc).toHaveText([
      "All",
      "New Arrivals",
      "Featured",
    ]);
  });

});
