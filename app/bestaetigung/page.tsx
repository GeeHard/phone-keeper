export default function Bestaetigung() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 max-w-2xl mx-auto">
      <div className="text-center mb-10">
        <div className="text-6xl mb-4">🛡️</div>
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Fast fertig!</h1>
        <p className="text-gray-500 text-lg">
          Ein letzter Schritt: Richten Sie die Rufumleitung auf Ihrem Handy ein –
          dann ist der Schutz aktiv.
        </p>
      </div>

      {/* Schritt 1 */}
      <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
          <h2 className="font-bold text-gray-900 text-lg">Öffnen Sie die Telefon-App</h2>
        </div>
        <p className="text-gray-600 text-sm">
          Öffnen Sie die normale Telefon-App auf Ihrem Handy und tippen Sie auf das Tastenfeld (die Zifferntasten).
        </p>
      </div>

      {/* Schritt 2 Android */}
      <div className="bg-green-50 border border-green-100 rounded-2xl p-6 mb-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">2a</div>
          <h2 className="font-bold text-gray-900 text-lg">Android-Handy</h2>
        </div>
        <p className="text-gray-600 text-sm mb-3">
          Geben Sie exakt diese Nummer ein und drücken Sie auf „Anrufen":
        </p>
        <div className="bg-white border border-green-200 rounded-xl px-5 py-4 text-center">
          <p className="font-mono text-2xl font-bold text-green-700 tracking-wider">
            **21*+18319205159#
          </p>
        </div>
        <p className="text-xs text-gray-400 mt-2">
          Sie erhalten eine kurze Bestätigung — dann ist die Umleitung aktiv.
        </p>
      </div>

      {/* Schritt 2 iPhone */}
      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-gray-700 text-white rounded-full flex items-center justify-center font-bold">2b</div>
          <h2 className="font-bold text-gray-900 text-lg">iPhone</h2>
        </div>
        <p className="text-gray-600 text-sm mb-3">
          Geben Sie exakt diese Nummer ein und drücken Sie auf „Anrufen":
        </p>
        <div className="bg-white border border-gray-300 rounded-xl px-5 py-4 text-center">
          <p className="font-mono text-2xl font-bold text-gray-800 tracking-wider">
            *21*+18319205159#
          </p>
        </div>
        <p className="text-xs text-gray-400 mt-2">
          Sie erhalten eine kurze Bestätigung — dann ist die Umleitung aktiv.
        </p>
      </div>

      {/* Was passiert dann */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6 mb-6">
        <h2 className="font-bold text-gray-900 mb-4">✅ Was dann passiert:</h2>
        <div className="space-y-3">
          {[
            { icon: "📞", text: "Jemand ruft Sie an" },
            { icon: "🤖", text: "Telefonwächter nimmt den Anruf zuerst entgegen" },
            { icon: "🧠", text: "Der Agent erkennt ob es ein Mensch oder KI-Werbung ist" },
            { icon: "✅", text: "Echter Anrufer → wird sofort zu Ihnen weitergeleitet" },
            { icon: "🚫", text: "Werbeanruf → still beendet, Sie werden nicht gestört" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-3">
              <span className="text-xl">{item.icon}</span>
              <p className="text-gray-600 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Umleitung aufheben */}
      <div className="bg-yellow-50 border border-yellow-100 rounded-2xl p-5 mb-8">
        <p className="text-sm text-yellow-800">
          <span className="font-semibold">Umleitung aufheben:</span> Tippen Sie{" "}
          <span className="font-mono font-bold">##21#</span> ein und drücken Sie „Anrufen" —
          dann ist alles wieder wie vorher.
        </p>
      </div>

      <div className="text-center">
        <a href="/" className="text-blue-600 text-sm hover:underline">
          Zurück zur Startseite
        </a>
      </div>
    </main>
  );
}
