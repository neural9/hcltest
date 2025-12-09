import Link from "next/link";
import Image from "next/image";

export default function MonthlySummaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      <div className="mx-auto max-w-7xl px-8 py-16">
        {/* Header */}
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">
              Monthly Spend Summary
            </h1>
            <p className="mt-2 text-gray-600">
              Get a comprehensive overview of your monthly spending patterns
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/reports"
              className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
            >
              ← Back to Reports
            </Link>
            <Image
              src="/hcltech.svg"
              alt="HCLTech logo"
              width={120}
              height={22}
              priority
            />
          </div>
        </div>

        {/* Overview Section */}
        <div className="mb-8 rounded-lg border border-purple-100 bg-white p-8 shadow-sm">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            Overview
          </h2>
          <p className="text-gray-600">
            Generate a concise, human-readable summary of your spending for each
            month. This report highlights key changes, identifies unusual
            spending patterns, and compares your current month to previous
            months to help you understand your financial trends.
          </p>
        </div>

        {/* Implementation Tasks */}
        <div className="rounded-lg border border-purple-100 bg-white p-8 shadow-sm">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            Your Tasks
          </h2>
          <p className="mb-6 text-gray-600">
            Build this feature by completing these steps. Everything can be done on this single page!
          </p>
          <ol className="space-y-4 text-gray-700">
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-100 text-sm font-medium text-purple-600">1</span>
              <span><strong>Fetch transactions from the database</strong> — Look at how /transactions page loads data. Copy that pattern here. Filter to only show the current month's transactions using the date field.</span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-100 text-sm font-medium text-purple-600">2</span>
              <span><strong>Calculate and display total spending</strong> — Add up all debit transaction amounts and show the total at the top. Something like "Total Spent: £1,234.56".</span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-100 text-sm font-medium text-purple-600">3</span>
              <span><strong>Group spending by category</strong> — Calculate totals for each category (Groceries, Dining, Shopping, etc.) and display them as a simple breakdown list.</span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-100 text-sm font-medium text-purple-600">4</span>
              <span><strong>Find the biggest expense</strong> — Loop through the transactions to find the largest single debit and highlight it with a message like "Biggest purchase: £500 at John Lewis".</span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-100 text-sm font-medium text-purple-600">5</span>
              <span><strong>Write a simple summary sentence</strong> — Generate a human-readable sentence like "You spent most on Groceries (£350) this month. Your biggest single purchase was £500."</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
