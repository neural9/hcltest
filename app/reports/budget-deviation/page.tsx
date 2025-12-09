import Link from "next/link";
import Image from "next/image";

export default function BudgetDeviationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50">
      <div className="mx-auto max-w-7xl px-8 py-16">
        {/* Header */}
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">
              Budget Deviation Alerts
            </h1>
            <p className="mt-2 text-gray-600">
              Stay on budget with intelligent spending alerts and warnings
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
        <div className="mb-8 rounded-lg border border-red-100 bg-white p-8 shadow-sm">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            Overview
          </h2>
          <p className="text-gray-600">
            Compare your actual spending against a lightweight budget and
            receive instant notifications when you exceed spending thresholds.
            Set up custom alerts for different categories to stay within your
            financial limits and achieve your savings goals.
          </p>
        </div>

        {/* Implementation Tasks */}
        <div className="rounded-lg border border-red-100 bg-white p-8 shadow-sm">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            Your Tasks
          </h2>
          <p className="mb-6 text-gray-600">
            Build this feature by completing these steps. Everything can be done on this single page!
          </p>
          <ol className="space-y-4 text-gray-700">
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-medium text-red-600">1</span>
              <span><strong>Create budget limits for each category</strong> — Make an object with budget amounts for categories like: Groceries: £300, Dining: £150, Shopping: £200, Entertainment: £100, etc.</span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-medium text-red-600">2</span>
              <span><strong>Fetch transactions and calculate actual spending</strong> — Load transactions from the database (see /transactions page). Group by category and sum up the amounts spent this month.</span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-medium text-red-600">3</span>
              <span><strong>Display budget vs actual for each category</strong> — Show each category with its budget limit and actual spend. Use a progress bar to visualise how much of the budget is used.</span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-medium text-red-600">4</span>
              <span><strong>Colour-code based on status</strong> — Green if under 75% of budget, orange/yellow if 75-100%, red if over budget. This gives instant visual feedback.</span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-medium text-red-600">5</span>
              <span><strong>Show alerts for over-budget categories</strong> — Display a warning message at the top listing any categories where spending exceeds the budget.</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
