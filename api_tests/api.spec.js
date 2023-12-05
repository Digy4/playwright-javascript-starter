const { test, expect } = require("@playwright/test");

test.describe("API Tests", () => {

  test.describe.configure({ mode: 'parallel' });

  test("Test Put ReqRes", async ({
    request,
  }) => {
    const req = {
      name: "Das",
      job: "QA"
    };
    const response = await request.put('https://reqres.in/api/users/2', {data: JSON.stringify(req)});
    expect(response.ok()).toBeTruthy();
  });

  test("Test Get ReqRes", async ({
                                   request,
                                 }) => {
    const response = await request.get('https://reqres.in/api/users?page=2');
    expect(response.ok()).toBeTruthy();
  });

  test("Test Delete ReqRes", async ({
                                   request,
                                 }) => {
    const response = await request.delete('https://reqres.in/api/users/2');
    expect(response.status()).toBe(204);
  });
});
