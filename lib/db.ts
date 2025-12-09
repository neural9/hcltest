import { drizzle } from "drizzle-orm/bun-sqlite";
import { Database } from "bun:sqlite";
import path from "path";
import * as schema from "../db/schema";

const dbPath = path.join(process.cwd(), "db", "bank.db");
const sqlite = new Database(dbPath, { create: true });

// Enable WAL mode for better performance
sqlite.exec("PRAGMA journal_mode = WAL");

export const db = drizzle(sqlite, { schema });
export default db;
