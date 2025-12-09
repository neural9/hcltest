import Link from "next/link";
import Image from "next/image";

export default function SavingsGoalPlannerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <div className="mx-auto max-w-7xl px-8 py-16">
        {/* Header */}
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">
              Savings Goal Planner
            </h1>
            <p className="mt-2 text-gray-600">
              Set financial goals and track your progress towards achieving them
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
        <div className="mb-8 rounded-lg border border-green-100 bg-white p-8 shadow-sm">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            Overview
          </h2>
          <p className="text-gray-600">
            Define your financial goals and let the planner project whether your
            current spending patterns will allow you to reach them. Get insights
            on how much you need to save each month and receive personalised
            recommendations to help you stay on track.
          </p>
        </div>

        {/* Implementation Tasks */}
        <div className="rounded-lg border border-green-100 bg-white p-8 shadow-sm">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            Your Tasks
          </h2>
          <p className="mb-6 text-gray-600">
            Build this feature by completing these steps. Everything can be done on this single page!
          </p>
          <ol className="space-y-4 text-gray-700">
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm font-medium text-green-600">1</span>
              <span><strong>Create some sample savings goals</strong> — Make an array of 3-4 goals like "Holiday Fund", "Emergency Savings", or "New Laptop". Each goal needs a name, target amount, and current amount saved.</span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm font-medium text-green-600">2</span>
              <span><strong>Display each goal as a card</strong> — Show the goal name, target amount, and how much has been saved so far. Simple styled divs work great here.</span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm font-medium text-green-600">3</span>
              <span><strong>Add a progress bar to each goal</strong> — Calculate the percentage saved (current ÷ target × 100) and show it as a coloured bar. A div inside a div with a width percentage works perfectly.</span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm font-medium text-green-600">4</span>
              <span><strong>Add a button to "Add Money" to a goal</strong> — When clicked, increase the current amount by a fixed amount (like £50). Use React useState to track the updated values.</span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm font-medium text-green-600">5</span>
              <span><strong>Show a "Goal Reached!" message</strong> — When current amount equals or exceeds the target, display a celebratory message or change the card colour to green.</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
