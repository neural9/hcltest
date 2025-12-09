import {
  sqliteTable,
  text,
  integer,
  real,
  index,
} from "drizzle-orm/sqlite-core";

export const transactions = sqliteTable(
  "transactions",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    date: text("date").notNull(),
    description: text("description").notNull(),
    category: text("category").notNull(),
    amount: real("amount").notNull(),
    type: text("type", { enum: ["debit", "credit"] }).notNull(),
  },
  (table) => ({
    dateIdx: index("idx_transactions_date").on(table.date),
  })
);

export type Transaction = typeof transactions.$inferSelect;
export type NewTransaction = typeof transactions.$inferInsert;
