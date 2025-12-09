import Link from "next/link";
import Image from "next/image";

export default function SubscriptionTrackerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50">
      <div className="mx-auto max-w-7xl px-8 py-16">
        {/* Header */}
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">
              Subscription Tracker
            </h1>
            <p className="mt-2 text-gray-600">
              Manage and track all your recurring subscriptions in one place
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
        <div className="mb-8 rounded-lg border border-teal-100 bg-white p-8 shadow-sm">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            Overview
          </h2>
          <p className="text-gray-600">
            Automatically identify subscription-like transactions from your
            payment history and estimate your total annual subscription cost.
            Keep track of all your recurring payments with toggles to mark
            active subscriptions and get insights into your subscription
            spending.
          </p>
        </div>

        {/* Implementation Tasks */}
        <div className="rounded-lg border border-teal-100 bg-white p-8 shadow-sm">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            Your Tasks
          </h2>
          <p className="mb-6 text-gray-600">
            Build this feature by completing these steps. Everything can be done on this single page!
          </p>
          <ol className="space-y-4 text-gray-700">
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-100 text-sm font-medium text-teal-600">1</span>
              <span><strong>Fetch transactions from the database</strong> — Load transactions from the database (see /transactions page). Look for merchants that appear multiple times with similar amounts — these are likely subscriptions.</span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-100 text-sm font-medium text-teal-600">2</span>
              <span><strong>Find recurring payments</strong> — Group transactions by description (merchant name). If a merchant appears monthly with similar amounts (like Netflix, Spotify, gym), it's probably a subscription.</span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-100 text-sm font-medium text-teal-600">3</span>
              <span><strong>Display detected subscriptions</strong> — Show each subscription with its name, monthly cost, and when it was last paid. Use simple cards for each subscription.</span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-100 text-sm font-medium text-teal-600">4</span>
              <span><strong>Calculate annual cost</strong> — Multiply each monthly subscription by 12. Show the total annual cost at the top, like "Total yearly: £1,200".</span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-100 text-sm font-medium text-teal-600">5</span>
              <span><strong>Add an "active" toggle</strong> — Let users mark subscriptions as active or cancelled. Use React useState to track which ones are active and update the totals accordingly.</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
