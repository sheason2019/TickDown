import { getLoginCode } from "@/app/api/services/login/send-login-code";
import { test, expect } from "@playwright/test";

test("生成六位纯数字验证码", async ({ page }) => {
  const code = await getLoginCode();
  expect(code).toMatch(/\d{6}/);
});
