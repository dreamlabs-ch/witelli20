import Image from 'next/image';

export function ClosureNotice() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

      <div className="relative container mx-auto px-4 py-12 md:py-24 flex items-center justify-center min-h-[80vh]">
        <div className="max-w-2xl w-full text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Witelli<span className="text-blue-400">20</span>
          </h1>

          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl p-8 md:p-12">
            <div className="flex justify-center mb-8">
              <Image
                src="/woko-logo.svg"
                alt="WOKO – Studentische Wohngenossenschaft"
                width={220}
                height={67}
                className="h-14 md:h-16 w-auto"
                priority
              />
            </div>

            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
              This website has been closed
            </h2>

            <p className="text-white/80 leading-relaxed mb-8">
              At the request of WOKO, the Witellikerstrasse 20 community
              website is no longer available. For housing, repairs and any
              other concerns, please contact WOKO directly.
            </p>

            <a
              href="https://www.woko.ch"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-all duration-300 rounded-full px-6 py-3 text-white font-medium border border-white/20 hover:border-white/40"
            >
              Visit woko.ch
              <svg
                className="w-4 h-4"
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
          </div>

          <p className="mt-8 text-sm text-white/50">
            Thank you to everyone who used this site. ❤️
          </p>
        </div>
      </div>
    </main>
  );
}
