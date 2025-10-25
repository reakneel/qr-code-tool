import dynamic from 'next/dynamic';

const QRToolsClient = dynamic(() => import('./components/QRToolsClient'), {
  ssr: false,
  loading: () => (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-10">
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    </div>
  ),
});

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3">
            QR Code Tools
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Generate and extract QR codes instantly
          </p>
        </div>

        <QRToolsClient />

        {/* Footer */}
        <div className="text-center mt-8 text-gray-500 dark:text-gray-400 text-sm">
          <p>Powered by Next.js, React, and Tailwind CSS</p>
        </div>
      </div>
    </main>
  );
}
