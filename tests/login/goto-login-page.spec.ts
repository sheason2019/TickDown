import { test, expect } from "@playwright/test";

test("前往登录页面", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  await page.click("text=登录");

  await expect(page).toHaveURL("http://localhost:3000/login");
});
