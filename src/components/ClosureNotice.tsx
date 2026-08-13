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
        <p className="text-gray-600 mb-8">
          At the request of WOKO, the Witellikerstrasse 20 community website
          is no longer available.
        </p>
        <a
          href="https://www.woko.ch"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline font-medium"
        >
          woko.ch
        </a>
      </div>
    </main>
  );
}
