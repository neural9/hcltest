import Link from "next/link";
import Image from "next/image";

export default function MerchantInsightsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
      <div className="mx-auto max-w-7xl px-8 py-16">
        {/* Header */}
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">
              Merchant Insights
            </h1>
            <p className="mt-2 text-gray-600">
              Understand your spending patterns at each merchant
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
        <div className="mb-8 rounded-lg border border-pink-100 bg-white p-8 shadow-sm">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            Overview
          </h2>
          <p className="text-gray-600">
            Get detailed profiles for each merchant you spend money with,
            including spend trends, average transaction size, and visit
            frequency. This feature helps you understand where your money goes
            and identify opportunities to save.
          </p>
        </div>

        {/* Implementation Tasks */}
        <div className="rounded-lg border border-pink-100 bg-white p-8 shadow-sm">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            Your Tasks
          </h2>
          <p className="mb-6 text-gray-600">
            Build this feature by completing these steps. Everything can be done on this single page!
          </p>
          <ol className="space-y-4 text-gray-700">
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-pink-100 text-sm font-medium text-pink-600">1</span>
              <span><strong>Fetch transactions from the database</strong> — Look at how /transactions page loads data. Copy that pattern here. The "description" field contains the merchant name (like "Tesco", "Amazon", "Costa Coffee").</span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-pink-100 text-sm font-medium text-pink-600">2</span>
              <span><strong>Group transactions by merchant</strong> — Create an object or Map that groups all transactions by their description field. This lets you calculate stats for each merchant.</span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-pink-100 text-sm font-medium text-pink-600">3</span>
              <span><strong>Display a card for each merchant</strong> — Show the merchant name, total amount spent there, and number of visits (transaction count).</span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-pink-100 text-sm font-medium text-pink-600">4</span>
              <span><strong>Calculate and show average spend</strong> — For each merchant, divide total spend by number of visits to get the average transaction size.</span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-pink-100 text-sm font-medium text-pink-600">5</span>
              <span><strong>Sort merchants by total spend</strong> — Show the merchants you spend the most at first. The top spender should be at the top of the list.</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
