import { test, expect } from "@playwright/test";

test("点击发送验证码按钮", async ({ page }) => {
  await page.goto("http://localhost:3000/login");

  await page.click("id=send-login-code");

  await expect(page.locator('id=send-login-code')).toContainText(/获取验证码（\d+）/)
});
