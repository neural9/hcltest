import { migrate } from "drizzle-orm/bun-sqlite/migrator";
import db from "../lib/db";
import { sql } from "drizzle-orm";

// Create transactions table using Drizzle
const createTableSQL = sql`
  CREATE TABLE IF NOT EXISTS transactions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    date TEXT NOT NULL,
    description TEXT NOT NULL,
    category TEXT NOT NULL,
    amount REAL NOT NULL,
    type TEXT NOT NULL CHECK(type IN ('debit', 'credit'))
  )
`;

await db.run(createTableSQL);

console.log("✅ Transactions table created successfully");

// Create index on date for faster queries
const createIndexSQL = sql`
  CREATE INDEX IF NOT EXISTS idx_transactions_date ON transactions(date)
`;

await db.run(createIndexSQL);

console.log("✅ Database indexes created");

process.exit(0);
