import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Telefonwächter – Schutz vor KI-Werbeanrufen",
  description:
    "Intelligenter Schutz für ältere Menschen. Telefonwächter erkennt KI-Vertriebsanrufe automatisch und blockiert sie – bevor das Telefon klingelt.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="antialiased">{children}</body>
    </html>
  );
}
