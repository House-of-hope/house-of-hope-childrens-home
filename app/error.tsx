"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertCircle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-md w-full text-center">
        <div className="flex justify-center mb-6">
          <AlertCircle size={64} className="text-red-500" />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Something went wrong!
        </h1>

        <p className="text-gray-700 mb-8">
          We encountered an unexpected error. Please try again or contact us for assistance.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition"
          >
            Try again
          </button>

          <Link
            href="/"
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-full font-semibold transition"
          >
            Go home
          </Link>
        </div>
      </div>
    </main>
  );
}
