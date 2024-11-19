import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const userTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  phone: varchar({ length: 255 }).notNull().unique(),
  passwordHash: varchar({ length: 48 }).notNull(), // sha256 + base64 长度为 48
  passwordSalt: varchar({ length: 16 }).notNull(),
});
