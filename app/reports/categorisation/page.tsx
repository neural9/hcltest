import Link from "next/link";
import Image from "next/image";

export default function TransactionCategorisationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="mx-auto max-w-7xl px-8 py-16">
        {/* Header */}
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">
              Transaction Categorisation
            </h1>
            <p className="mt-2 text-gray-600">
              Automatically categorise your transactions into spending groups
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
        <div className="mb-8 rounded-lg border border-blue-100 bg-white p-8 shadow-sm">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            Overview
          </h2>
          <p className="text-gray-600">
            This feature automatically parses your recent transactions and
            categorises them into meaningful spending groups such as Groceries,
            Entertainment, Transport, Utilities, and more. Review and adjust
            categories as needed to keep your finances organised.
          </p>
        </div>

        {/* Implementation Tasks */}
        <div className="rounded-lg border border-blue-100 bg-white p-8 shadow-sm">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            Your Tasks
          </h2>
          <p className="mb-6 text-gray-600">
            Build this feature by completing these steps. Everything can be done on this single page!
          </p>
          <ol className="space-y-4 text-gray-700">
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-medium text-blue-600">1</span>
              <span><strong>Fetch transactions from the database</strong> — Look at how /transactions page loads data. Copy that pattern to fetch transactions here. Each transaction has: id, date, description, category, amount, and type.</span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-medium text-blue-600">2</span>
              <span><strong>Display the transactions in a simple table</strong> — Show a list or table with columns for description, amount, date, and category. Use basic HTML table or styled divs.</span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-medium text-blue-600">3</span>
              <span><strong>Add a dropdown to change categories</strong> — Let users pick a different category from a dropdown menu. Categories include: Groceries, Dining, Transport, Shopping, Utilities, Entertainment, etc.</span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-medium text-blue-600">4</span>
              <span><strong>Show a spending summary by category</strong> — Group transactions by category and add up the totals. Display them as a simple list like "Groceries: £150".</span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-medium text-blue-600">5</span>
              <span><strong>Add a pie chart or bar chart</strong> — Use the Recharts library (already installed) to visualise spending by category. Check the /transactions page for chart examples.</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
