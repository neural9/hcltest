import db from "@/lib/db";
import { transactions as transactionsTable } from "@/db/schema";
import { asc } from "drizzle-orm";
import TransactionsClient from "./TransactionsClient";
import TransactionRow from "./TransactionRow";
import BalanceChart from "./BalanceChart";

interface Transaction {
  id: number;
  date: string;
  description: string;
  category: string;
  amount: number;
  type: "debit" | "credit";
}

interface TransactionWithBalance extends Transaction {
  balance: number;
}

export default function TransactionsPage() {
  // Query all transactions ordered by date ascending (oldest first) for balance calculation
  const allTransactions = db
    .select()
    .from(transactionsTable)
    .orderBy(asc(transactionsTable.date), asc(transactionsTable.id))
    .all();

  // Calculate running balance for all transactions
  const STARTING_BALANCE = 0;
  let runningBalance = STARTING_BALANCE;
  const transactionsWithBalance: TransactionWithBalance[] = allTransactions.map(
    (t) => {
      if (t.type === "credit") {
        runningBalance += t.amount;
      } else {
        runningBalance -= t.amount;
      }
      return {
        ...t,
        balance: Math.round(runningBalance * 100) / 100,
      };
    }
  );

  // Reverse for display (most recent first)
  const transactions = [...transactionsWithBalance].reverse();

  // Get summary stats
  const totalDebits = allTransactions
    .filter((t) => t.type === "debit")
    .reduce((sum, t) => sum + t.amount, 0);
  const totalCredits = allTransactions
    .filter((t) => t.type === "credit")
    .reduce((sum, t) => sum + t.amount, 0);
  const currentBalance =
    transactionsWithBalance.length > 0
      ? transactionsWithBalance[transactionsWithBalance.length - 1].balance
      : STARTING_BALANCE;

  const stats = {
    total_debits: totalDebits,
    total_credits: totalCredits,
    current_balance: currentBalance,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Transactions</h1>
            <p className="mt-2 text-gray-600">
              View your complete transaction history
            </p>
          </div>
          <TransactionsClient />
        </div>

        {/* Summary Cards */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-gray-500">Current Balance</p>
            <p
              className={`mt-2 text-3xl font-bold ${
                (stats?.current_balance ?? 0) >= 0
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              £{stats?.current_balance.toFixed(2)}
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-gray-500">Total Credits</p>
            <p className="mt-2 text-3xl font-bold text-green-600">
              £{stats?.total_credits.toFixed(2)}
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-gray-500">Total Debits</p>
            <p className="mt-2 text-3xl font-bold text-red-600">
              £{stats?.total_debits.toFixed(2)}
            </p>
          </div>
        </div>

        {/* Balance Chart */}
        <div className="mb-8">
          <BalanceChart
            transactions={allTransactions}
            startingBalance={STARTING_BALANCE}
          />
        </div>

        {/* Transactions Table */}
        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Description
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Category
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500">
                    Balance
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {transactions.map((transaction) => (
                  <TransactionRow
                    key={transaction.id}
                    transaction={transaction}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-4 text-center text-sm text-gray-500">
          Showing {transactions.length} transactions
        </div>
      </div>
    </div>
  );
}
