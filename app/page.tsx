import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <main className="flex flex-col items-center justify-center gap-12 px-8 py-16 text-center">
        <div className="flex flex-col items-center gap-8">
          <Image
            src="/hcltech.svg"
            alt="HCLTech logo"
            width={200}
            height={37}
            priority
            className="animate-fade-in"
          />
          <div className="flex flex-col gap-4">
            <h1 className="text-6xl font-bold tracking-tight text-gray-900 sm:text-7xl">
              Welcome to
            </h1>
            <h2 className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-5xl font-extrabold text-transparent sm:text-6xl">
              Vibe-a-thon
            </h2>
          </div>
        </div>

        <p className="max-w-2xl text-xl leading-relaxed text-gray-600">
          Innovation meets creativity. Let's build something extraordinary
          together.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <div className="rounded-lg border border-blue-100 bg-white px-8 py-4 shadow-sm">
            <p className="text-sm font-medium text-gray-500">Event Status</p>
            <p className="text-lg font-semibold text-blue-600">Live Now</p>
          </div>
        </div>
      </main>
    </div>
  );
}
