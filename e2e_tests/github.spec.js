const test = require("@digy4/digyrunner-playwright/DigyWebTest");

test.describe("Github Tests", () => {

  test.describe.configure({ mode: 'parallel' });

  test("Test Github", async ({
    page,
  }) => {
    await page.goto('https://github.com/');
  });
});
