const test = require("@digy4/digyrunner-playwright/DigyWebTest");
const { SearchPage } = require("./page-objects/SearchPage");
const { HomePage } = require("./page-objects/HomePage");
const { CartPage } = require("./page-objects/CartPage");

test.describe("Cart Tests", () => {

  test.describe.configure({ mode: 'parallel' });

  test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigate();
    await homePage.pageTitle();
  });

  test("Verify user is able to add product to Cart", async ({ page }) => {
    const searchPage = new SearchPage(page);
    await searchPage.navigatetoProductDetailPage();
    await searchPage.pageHeader();

    const cartPage = new CartPage(page);
    // await cartPage.selectColour();
    await cartPage.selectSize();
    await cartPage.addToCart();
    // await page.waitForLoadState();
    await page.waitForTimeout(2000);
    await cartPage.productInCart();
  });
});
