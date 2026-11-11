import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "HLA Twin",
  description: "Socle technique du démonstrateur HLA Twin",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
