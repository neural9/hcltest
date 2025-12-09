import Link from "next/link";
import Image from "next/image";

export default function ReportsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="mx-auto max-w-7xl px-8 py-16">
        {/* Header */}
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Reports</h1>
            <p className="mt-2 text-gray-600">
              Financial insights and analytics at a glance
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/dashboard"
              className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
            >
              ← Back to Dashboard
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

        {/* Report Categories Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Transaction Categorisation */}
          <Link href="/reports/categorisation">
            <div className="group cursor-pointer overflow-hidden rounded-lg border border-blue-100 bg-white p-8 shadow-sm transition-all hover:border-blue-300 hover:shadow-md">
              <div className="flex flex-col gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 transition-colors group-hover:bg-blue-200">
                  <svg
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Transaction Categorisation
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Parse recent transactions and auto-categorise them into
                    spending groups
                  </p>
                </div>
                <div className="flex items-center text-sm font-medium text-blue-600">
                  View Report
                  <svg
                    className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          {/* Savings Goal Planner */}
          <Link href="/reports/savings-goals">
            <div className="group cursor-pointer overflow-hidden rounded-lg border border-green-100 bg-white p-8 shadow-sm transition-all hover:border-green-300 hover:shadow-md">
              <div className="flex flex-col gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 transition-colors group-hover:bg-green-200">
                  <svg
                    className="h-6 w-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Savings Goal Planner
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Define goals and project whether current spending patterns
                    allow you to reach them
                  </p>
                </div>
                <div className="flex items-center text-sm font-medium text-green-600">
                  View Report
                  <svg
                    className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          {/* Monthly Spend Summary */}
          <Link href="/reports/monthly-summary">
            <div className="group cursor-pointer overflow-hidden rounded-lg border border-purple-100 bg-white p-8 shadow-sm transition-all hover:border-purple-300 hover:shadow-md">
              <div className="flex flex-col gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 transition-colors group-hover:bg-purple-200">
                  <svg
                    className="h-6 w-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Monthly Spend Summary
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Concise summary of your spending for the month, including
                    key changes
                  </p>
                </div>
                <div className="flex items-center text-sm font-medium text-purple-600">
                  View Report
                  <svg
                    className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          {/* Cash Flow Forecast */}
          <Link href="/reports/cash-flow-forecast">
            <div className="group cursor-pointer overflow-hidden rounded-lg border border-indigo-100 bg-white p-8 shadow-sm transition-all hover:border-indigo-300 hover:shadow-md">
              <div className="flex flex-col gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 transition-colors group-hover:bg-indigo-200">
                  <svg
                    className="h-6 w-6 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Cash Flow Forecast
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Forecast your account balance over the next thirty days and
                    highlight dips
                  </p>
                </div>
                <div className="flex items-center text-sm font-medium text-indigo-600">
                  View Report
                  <svg
                    className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          {/* Bill Detection and Reminders */}
          <Link href="/reports/bill-detection">
            <div className="group cursor-pointer overflow-hidden rounded-lg border border-orange-100 bg-white p-8 shadow-sm transition-all hover:border-orange-300 hover:shadow-md">
              <div className="flex flex-col gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 transition-colors group-hover:bg-orange-200">
                  <svg
                    className="h-6 w-6 text-orange-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Bill Detection & Reminders
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Detect recurring bills and set alerts for upcoming due dates
                  </p>
                </div>
                <div className="flex items-center text-sm font-medium text-orange-600">
                  View Report
                  <svg
                    className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          {/* Merchant Insights */}
          <Link href="/reports/merchant-insights">
            <div className="group cursor-pointer overflow-hidden rounded-lg border border-pink-100 bg-white p-8 shadow-sm transition-all hover:border-pink-300 hover:shadow-md">
              <div className="flex flex-col gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 transition-colors group-hover:bg-pink-200">
                  <svg
                    className="h-6 w-6 text-pink-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Merchant Insights
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    View merchant profiles with spend trends, average size, and
                    frequency
                  </p>
                </div>
                <div className="flex items-center text-sm font-medium text-pink-600">
                  View Report
                  <svg
                    className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          {/* Budget Deviation Alerts */}
          <Link href="/reports/budget-deviation">
            <div className="group cursor-pointer overflow-hidden rounded-lg border border-red-100 bg-white p-8 shadow-sm transition-all hover:border-red-300 hover:shadow-md">
              <div className="flex flex-col gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 transition-colors group-hover:bg-red-200">
                  <svg
                    className="h-6 w-6 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Budget Deviation Alerts
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Compare actual spending against budget and get notified when
                    thresholds are exceeded
                  </p>
                </div>
                <div className="flex items-center text-sm font-medium text-red-600">
                  View Report
                  <svg
                    className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          {/* Subscription Tracker */}
          <Link href="/reports/subscriptions">
            <div className="group cursor-pointer overflow-hidden rounded-lg border border-teal-100 bg-white p-8 shadow-sm transition-all hover:border-teal-300 hover:shadow-md">
              <div className="flex flex-col gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 transition-colors group-hover:bg-teal-200">
                  <svg
                    className="h-6 w-6 text-teal-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Subscription Tracker
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Identify subscription transactions and estimate annual cost
                    with tracking toggles
                  </p>
                </div>
                <div className="flex items-center text-sm font-medium text-teal-600">
                  View Report
                  <svg
                    className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Info Section */}
        <div className="mt-12 rounded-lg border border-blue-100 bg-blue-50 p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
              <svg
                className="h-5 w-5 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">
                Explore Our Reports
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Click on any report above to learn more about the features we're
                building. Each report is designed to provide valuable insights
                into your financial data and help you make better money
                decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
