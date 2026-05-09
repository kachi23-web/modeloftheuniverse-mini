import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-var",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Model of the Universe 2026 — Coming Soon",
  description:
    "The Model of the Universe 2026 competition is launching soon.",
  icons: {
    icon: "/logo-modelofuniverse.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={playfair.variable}>
      <body>{children}</body>
    </html>
  );
}
