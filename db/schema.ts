import { date, integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const userTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 32 }).notNull(),
  phone: varchar({ length: 32 }).notNull().unique(),
  passwordHash: varchar({ length: 48 }).notNull(), // sha256 + base64 长度为 48
  passwordSalt: varchar({ length: 16 }).notNull(),
  createdAt: date().defaultNow().notNull(),
});

export const loginRequestTable = pgTable("login_request", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  phone: varchar({ length: 32 }).notNull(),
  code: varchar({ length: 6 }).notNull(),
  createdAt: date().defaultNow().notNull(),
});
