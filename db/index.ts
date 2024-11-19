import { drizzle } from "drizzle-orm/node-postgres";
import "@/utils/load-env";

const db = drizzle(process.env.DATABASE_URL!);
