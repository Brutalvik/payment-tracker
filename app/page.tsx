import { title, subtitle } from "@/components/primitives";
import { Button } from "@heroui/button";
import NextLink from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-8 py-8 md:py-10">
      <div className="flex flex-col items-center gap-2 text-center select-none">
        <h1 className={title()}>Konnect - Your Payment Partner</h1>
        <p className={subtitle()}>
          Track your payments with ease and gain control over your finances.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl">
        <div className="group flex flex-col items-center p-6 rounded-lg shadow-md bg-default-100 cursor-pointer select-none transition-all duration-300 hover:scale-[1.02] hover:shadow-blue-700 hover:bg-default-200">
          <svg
            className="w-12 h-12 text-primary mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <h3 className="font-semibold text-xl text-foreground mb-2">
            Effortless Tracking
          </h3>
          <p className="text-sm text-default-600 text-center">
            Automatically log and categorize your income and expenses. Say
            goodbye to manual spreadsheets!
          </p>
        </div>

        <div className="group flex flex-col items-center p-6 rounded-lg shadow-md bg-default-100 cursor-pointer select-none transition-all duration-300 hover:scale-[1.02] hover:shadow-blue-700 hover:bg-default-200">
          <svg
            className="w-12 h-12 text-success mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0 8c1.11 0 2.08-.402 2.599-1M12 8V16m-4 4h8m2-10h.01M5 12h.01M21 12h.01M3 8h.01M16.636 18.755A11.916 11.916 0 0112 21c-2.036 0-3.983-.632-5.636-1.755M16.636 18.755A11.916 11.916 0 0121 12c0-2.036-.632-3.983-1.755-5.636M16.636 18.755A11.916 11.916 0 0115 13.266M5.364 5.245A11.916 11.916 0 0112 3c2.036 0 3.983.632 5.636 1.755M5.364 5.245A11.916 11.916 0 013 12c0 2.036.632 3.983 1.755 5.636m-2.99 1.348A11.969 11.969 0 0115 13.266m3.364 1.348m-3.364-1.348A11.969 11.969 0 019 10.734M5.364 5.245A11.916 11.916 0 019 10.734m-2.99-1.348A11.969 11.969 0 019 10.734"
            />
          </svg>
          <h3 className="font-semibold text-xl text-foreground mb-2">
            Clear Insights
          </h3>
          <p className="text-sm text-default-600 text-center">
            Visualize your spending habits with intuitive charts and reports.
            Understand where your money is going.
          </p>
        </div>

        <div className="group flex flex-col items-center p-6 rounded-lg shadow-md bg-default-100 cursor-pointer select-none transition-all duration-300 hover:scale-[1.02] hover:shadow-blue-700 hover:bg-default-200">
          <svg
            className="w-12 h-12 text-warning mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
          <h3 className="font-semibold text-xl text-foreground mb-2">
            Secure & Private
          </h3>
          <p className="text-sm text-default-600 text-center">
            Your financial data is encrypted and protected. We prioritize your
            privacy and security above all else.
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <Button as={NextLink} href="/signup" size="lg" color="primary">
          Get Started for Free
        </Button>
      </div>
    </section>
  );
}
