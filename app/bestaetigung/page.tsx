export default function Bestaetigung() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-6 text-center">
      <div className="text-6xl mb-6">🛡️</div>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Alles bereit!</h1>
      <p className="text-xl text-gray-500 max-w-md mb-8">
        Ihre Nummer wird ab sofort überwacht. Wir senden Ihnen Nachrichten zu Ihren Anrufen direkt an Ihre E-Mail-Adresse.
      </p>
      <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 max-w-sm w-full text-left space-y-3 mb-8">
        <div className="flex items-start gap-3">
          <span className="text-green-500 text-xl">✓</span>
          <p className="text-gray-700 text-sm">Telefonnummer gespeichert</p>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-green-500 text-xl">✓</span>
          <p className="text-gray-700 text-sm">E-Mail-Adresse hinterlegt</p>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-green-500 text-xl">✓</span>
          <p className="text-gray-700 text-sm">Schutz ist aktiv</p>
        </div>
      </div>
      <a href="/" className="text-blue-600 text-sm hover:underline">Zurück zur Startseite</a>
    </main>
  );
}
