"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, email }),
      });
      if (!res.ok) throw new Error("Fehler beim Speichern");
      router.push("/bestaetigung");
    } catch {
      setError("Etwas ist schiefgelaufen. Bitte versuche es erneut.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-5xl mx-auto">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🛡️</span>
          <span className="font-semibold text-gray-900 text-lg">Telefonwächter</span>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          Jetzt starten
        </button>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-24 text-center">
        <div className="inline-block bg-blue-50 text-blue-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          Schutz vor KI-Werbeanrufen
        </div>
        <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
          Das Telefon klingelt nur noch,<br />
          wenn es wirklich wichtig ist.
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10">
          Telefonwächter erkennt automatisch KI-Vertriebsanrufe und blockiert sie –
          bevor Sie überhaupt abheben müssen. Kein Einrichten, kein Lernen, kein Stress.
        </p>

        {!showForm ? (
          <button
            onClick={() => setShowForm(true)}
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-colors shadow-md"
          >
            Jetzt starten →
          </button>
        ) : (
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 max-w-md mx-auto text-left">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Fast geschafft!</h2>
            <p className="text-gray-500 text-sm mb-6">
              Gib deine Daten ein – der Agent kümmert sich um den Rest.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Deine Telefonnummer
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+49 170 1234567"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p className="text-xs text-gray-400 mt-1">
                  Die Nummer, die vom Agenten überwacht werden soll.
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Deine E-Mail-Adresse
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ihre@email.de"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p className="text-xs text-gray-400 mt-1">
                  Hierhin sendet der Agent Nachrichten zu deinen Anrufen.
                </p>
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50"
              >
                {loading ? "Wird gespeichert…" : "Jetzt schützen lassen →"}
              </button>
            </form>
          </div>
        )}
        <p className="text-sm text-gray-400 mt-4">Kostenlos · Kein Spam · Jederzeit abmeldbar</p>
      </section>

      {/* Problem */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Kennen Sie das?</h2>
          <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">
            Immer mehr Menschen werden täglich von KI-Sprachagenten angerufen – und wissen oft nicht, dass am anderen Ende gar kein Mensch spricht.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "📞", title: "Täglich bis zu 10 Anrufe", text: "Werbezentralen rufen von immer neuen Nummern an – Blocklisten helfen kaum." },
              { icon: "😰", title: "Angst vor dem Klingeln", text: "Viele meiden ihr Telefon ganz – und verpassen Anrufe von Familie oder Arzt." },
              { icon: "📝", title: "Ungewollte Verträge", text: "KI-Agenten klingen täuschend menschlich und setzen unter Druck." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 border border-gray-100">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">So funktioniert es</h2>
        <p className="text-gray-500 text-center mb-14 max-w-xl mx-auto">
          Telefonwächter arbeitet unsichtbar im Hintergrund – Sie merken nichts davon.
        </p>
        <div className="space-y-8">
          {[
            { step: "1", title: "Anruf kommt an", text: "Bevor Ihr Telefon klingelt, nimmt Telefonwächter den Anruf automatisch entgegen." },
            { step: "2", title: "KI-Erkennung", text: "In Sekunden analysiert das System Sprache, Gesprächsmuster und Absicht – und erkennt, ob es ein KI-Agent ist." },
            { step: "3", title: "Schutz oder Durchstellen", text: "Werbeanruf? Still beendet, Nummer gesperrt, automatisch gemeldet. Echte Person? Wird sofort durchgestellt." },
          ].map((item) => (
            <div key={item.step} className="flex gap-6 items-start">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                {item.step}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg mb-1">{item.title}</h3>
                <p className="text-gray-500">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* For who */}
      <section className="bg-blue-50 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Für jeden, der in Ruhe telefonieren möchte</h2>
          <p className="text-gray-500 mb-12 max-w-xl mx-auto">
            Ob jung oder alt – unerwünschte Werbeanrufe nerven alle. Telefonwächter schützt Sie zuverlässig und ohne Aufwand.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              { icon: "🧓", title: "Ältere Menschen", text: "Kein Einrichten, kein Lernen. Der Schutz ist einfach aktiv – das Telefon klingelt wieder nur, wenn es wirklich jemand ist." },
              { icon: "🏠", title: "Menschen zuhause", text: "Wer viel Zeit zuhause verbringt, wird besonders häufig angerufen. Telefonwächter gibt Ihnen Ihren Alltag zurück." },
              { icon: "📱", title: "Alle Telefonnutzer", text: "Festnetz oder Smartphone – Telefonwächter schützt Sie auf beiden Geräten, ohne dass Sie etwas tun müssen." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 border border-blue-100">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 text-center text-sm text-gray-400">
        <p>© 2025 Telefonwächter · <a href="#" className="hover:text-gray-600">Datenschutz</a> · <a href="#" className="hover:text-gray-600">Impressum</a></p>
      </footer>
    </main>
  );
}
