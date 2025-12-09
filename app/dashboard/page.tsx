import Link from "next/link";
import Image from "next/image";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="mx-auto max-w-7xl px-8 py-16">
        {/* Header */}
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Dashboard</h1>
            <p className="mt-2 text-gray-600">
              Welcome to your financial management dashboard
            </p>
          </div>
          <Image
            src="/hcltech.svg"
            alt="HCLTech logo"
            width={120}
            height={22}
            priority
          />
        </div>

        {/* Main Content - Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Transactions Card */}
          <Link href="/transactions">
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
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Transactions
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    View and manage your complete transaction history with
                    balance tracking
                  </p>
                </div>
                <div className="flex items-center text-sm font-medium text-blue-600">
                  View Transactions
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

          {/* Reports Card */}
          <Link href="/reports">
            <div className="group cursor-pointer overflow-hidden rounded-lg border border-blue-100 bg-white p-8 shadow-sm transition-all hover:border-blue-300 hover:shadow-md">
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
                    Reports
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Explore financial reports and analytics dashboards
                  </p>
                </div>
                <div className="flex items-center text-sm font-medium text-purple-600">
                  View Reports
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

          <div className="overflow-hidden rounded-lg border border-gray-200 bg-white p-8 shadow-sm opacity-60">
            <div className="flex flex-col gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                <svg
                  className="h-6 w-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Settings
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Coming soon: Configure your preferences and account settings
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
