import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Nav } from "@/components/Nav";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Deadhead — the Grateful Dead show concierge",
  description:
    "Tell us how you're feeling. We'll tell you what Dead show to listen to.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-cream-dark py-6 mt-12">
          <div className="max-w-page mx-auto px-4 sm:px-6 text-xs text-muted">
            Deadhead · a Grateful Dead show concierge
          </div>
        </footer>
      </body>
    </html>
  );
}
