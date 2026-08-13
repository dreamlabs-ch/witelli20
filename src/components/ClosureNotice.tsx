import Image from 'next/image';

export function ClosureNotice() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center py-16">
        <Image
          src="/woko-logo.svg"
          alt="WOKO – Studentische Wohngenossenschaft"
          width={172}
          height={52}
          className="h-12 w-auto mx-auto mb-10"
          priority
        />
        <h1 className="text-2xl font-semibold text-gray-900 mb-3">
          This website has been closed
        </h1>
        <p className="text-gray-600 mb-4">
          Witelli20 was built by students, for the students of
          Witellikerstrasse 20. At the request of WOKO, it has been taken
          offline.
        </p>
        <p className="text-gray-600 mb-8">
          For room reservations, repairs and any other housing matters,
          please contact WOKO directly.
        </p>
        <a
          href="https://www.woko.ch"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-5 py-2 text-gray-900 font-medium hover:bg-gray-100 transition-colors"
        >
          Visit woko.ch
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </a>
        <p className="mt-10 text-sm text-gray-400">
          Thank you to everyone who used and contributed to this site. ❤️
        </p>
      </div>
    </main>
  );
}
