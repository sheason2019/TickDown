"use server";

export default async function sendLoginCode(phone: string) {
  const code = await getLoginCode();
  console.log(phone, code);
}

export async function getLoginCode() {
  // 计算六位 code
  const codeArray: number[] = [0, 0, 0, 0, 0, 0];
  for (let i = 0; i < codeArray.length; i++) {
    codeArray[i] = Math.floor(Math.random() * 9);
  }
  return codeArray.join("");
}
