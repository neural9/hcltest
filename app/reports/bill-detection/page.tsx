import Link from "next/link";
import Image from "next/image";

export default function BillDetectionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <div className="mx-auto max-w-7xl px-8 py-16">
        {/* Header */}
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">
              Bill Detection & Reminders
            </h1>
            <p className="mt-2 text-gray-600">
              Never miss a bill payment with automatic detection and alerts
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
        <div className="mb-8 rounded-lg border border-orange-100 bg-white p-8 shadow-sm">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            Overview
          </h2>
          <p className="text-gray-600">
            Automatically detect recurring bills from your transaction data and
            set up intelligent alerts for upcoming due dates. Never worry about
            late payments or missed bills again with proactive reminders and a
            comprehensive bill calendar.
          </p>
        </div>

        {/* Implementation Tasks */}
        <div className="rounded-lg border border-orange-100 bg-white p-8 shadow-sm">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            Your Tasks
          </h2>
          <p className="mb-6 text-gray-600">
            Build this feature by completing these steps. Everything can be done on this single page!
          </p>
          <ol className="space-y-4 text-gray-700">
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm font-medium text-orange-600">1</span>
              <span><strong>Create a list of recurring bills</strong> — Make an array of 5-6 bills like "Rent", "Electricity", "Internet", "Phone". Include the amount, due date (day of month), and whether it's been paid this month.</span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm font-medium text-orange-600">2</span>
              <span><strong>Display all bills in a list</strong> — Show each bill with its name, amount, and due date. Use simple cards or a table layout.</span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm font-medium text-orange-600">3</span>
              <span><strong>Add a "paid" checkbox or toggle</strong> — Let users mark each bill as paid or unpaid. Use React useState to track the status of each bill.</span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm font-medium text-orange-600">4</span>
              <span><strong>Highlight bills due soon</strong> — If a bill is due within the next 7 days and hasn't been paid, show it in orange or red to grab attention.</span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm font-medium text-orange-600">5</span>
              <span><strong>Show total bills due this month</strong> — Add up all unpaid bills and display the total amount still to pay, like "Outstanding: £450".</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
