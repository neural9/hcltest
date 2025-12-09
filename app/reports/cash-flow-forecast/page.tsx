import Link from "next/link";
import Image from "next/image";

export default function CashFlowForecastPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      <div className="mx-auto max-w-7xl px-8 py-16">
        {/* Header */}
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">
              Cash Flow Forecast
            </h1>
            <p className="mt-2 text-gray-600">
              Predict your account balance and avoid financial surprises
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
        <div className="mb-8 rounded-lg border border-indigo-100 bg-white p-8 shadow-sm">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            Overview
          </h2>
          <p className="text-gray-600">
            Use simple heuristics and historical patterns to forecast your
            account balance over the next thirty days. This feature highlights
            potential balance dips, helping you avoid overdrafts and plan ahead
            for upcoming expenses.
          </p>
        </div>

        {/* Implementation Tasks */}
        <div className="rounded-lg border border-indigo-100 bg-white p-8 shadow-sm">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            Your Tasks
          </h2>
          <p className="mb-6 text-gray-600">
            Build this feature by completing these steps. Everything can be done on this single page!
          </p>
          <ol className="space-y-4 text-gray-700">
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-sm font-medium text-indigo-600">1</span>
              <span><strong>Set up your starting balance</strong> — Create a variable for the current account balance (e.g., £2,500). Display this prominently at the top of the page.</span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-sm font-medium text-indigo-600">2</span>
              <span><strong>Create upcoming bills data</strong> — Make an array of expected expenses for the next 30 days. Include things like "Rent" on the 1st, "Netflix" on the 15th, with amounts and dates.</span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-sm font-medium text-indigo-600">3</span>
              <span><strong>Display a list of upcoming bills</strong> — Show each bill with its name, amount, and due date in a simple list or table format.</span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-sm font-medium text-indigo-600">4</span>
              <span><strong>Calculate the projected balance</strong> — Subtract all upcoming bills from the starting balance. Show what the balance will be after all bills are paid.</span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-sm font-medium text-indigo-600">5</span>
              <span><strong>Show a warning if balance goes low</strong> — If the projected balance drops below £100 (or goes negative), display a red warning message to alert the user.</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
