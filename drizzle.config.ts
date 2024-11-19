import { defineConfig } from "drizzle-kit";
import "@/utils/load-env";

console.log("url", process.env.DATABASE_URL);

export default defineConfig({
  out: "./drizzle",
  schema: "./db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
