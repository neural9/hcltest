# Drizzle ORM Migration Guide

This project has been successfully migrated from raw `bun:sqlite` to **Drizzle ORM**.

## What Changed

### Dependencies
- ✅ Added `drizzle-orm` for database operations
- ✅ Added `drizzle-kit` for tooling and migrations
- ✅ Added `@types/bun` for TypeScript support

### Files Updated

#### 1. `db/schema.ts` (NEW)
Defines the database schema with full TypeScript types:
- `transactions` table with proper column definitions
- Type-safe exports: `Transaction` and `NewTransaction`
- Index on date field for performance

#### 2. `lib/db.ts`
Changed from raw SQLite to Drizzle:
- Uses `drizzle()` wrapper for type-safe queries
- Still uses `bun:sqlite` under the hood
- Exports schema-aware database instance

#### 3. `app/api/transactions/route.ts`
Updated POST endpoint:
- Uses `db.insert(transactions).values()` instead of prepared statements
- Type-safe inserts with validation

#### 4. `app/transactions/page.tsx`
Updated transactions page:
- Uses `db.select().from(transactions)` instead of raw SQL
- Uses `orderBy()` with `asc()` for sorting
- Full type safety throughout

#### 5. `scripts/init-db.ts`
Updated to use Drizzle SQL builder:
- Uses `sql` template tag for table creation
- Uses `await db.run()` for execution

#### 6. `scripts/seed-db.ts`
Updated to use Drizzle ORM:
- Uses `db.delete(transactions)` to clear data
- Uses `db.insert(transactions).values()` for bulk inserts

#### 7. `drizzle.config.ts` (NEW)
Drizzle Kit configuration file for tooling support

#### 8. `package.json`
Added new scripts:
- `bun run db:studio` - Opens Drizzle Studio UI
- `bun run db:init` - Initialize database
- `bun run db:seed` - Seed database with data

#### 9. `tsconfig.json`
Added Bun types for TypeScript support

## Benefits for Teaching "Vibe Coding"

1. **Type Safety**: Students get autocomplete and type checking
2. **Better AI Assistance**: AI can understand the schema and provide better suggestions
3. **Modern Patterns**: Industry-standard ORM approach
4. **Less Boilerplate**: Cleaner, more readable code
5. **Better Tooling**: Drizzle Studio for visual database browsing

## How to Use

### Run Database Scripts
```bash
bun run db:init    # Initialize database tables
bun run db:seed    # Seed with sample data
```

### Open Drizzle Studio
```bash
bun run db:studio  # Opens visual database browser at https://local.drizzle.studio
```

### Query Examples

**Select all transactions:**
```typescript
const allTransactions = db.select().from(transactions).all();
```

**Insert a transaction:**
```typescript
await db.insert(transactions).values({
  date: "2025-12-09",
  description: "Coffee Shop",
  category: "Dining",
  amount: 4.50,
  type: "debit",
});
```

**Query with filters:**
```typescript
import { eq, and, gte } from "drizzle-orm";

const recentDebits = db
  .select()
  .from(transactions)
  .where(
    and(
      eq(transactions.type, "debit"),
      gte(transactions.amount, 100)
    )
  )
  .all();
```

## Migration Complete! ✅

All code now uses Drizzle ORM for type-safe, modern database operations.
