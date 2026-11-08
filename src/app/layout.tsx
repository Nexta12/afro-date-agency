import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloating from "@/components/WhatsAppFloating";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "AFRO-DATE ORGANIZATION | Africa's #1 Matchmaking & Sugar Connection Agency",
  description:
    "AFRO-CONNECT AGENCY: Homes of Wonderful Connections. Connect with rich and wealthy sugar mummies, sugar daddies, and LGBT partners across Nigeria, Ghana, South Africa, UK, USA, and beyond.",
  keywords: [
    "Sugar Mummy Nigeria",
    "Sugar Mummy Ghana",
    "Sugar Daddy Abuja",
    "Afro Introductions",
    "Afro Date Organization",
    "Afro Connect Agency",
    "Matchmaking Africa",
    "Wealthy sugar mummies",
    "LGBT dating Africa",
  ],
  authors: [{ name: "Afro-Date Organization" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-zinc-950 text-white selection:bg-rose-900 selection:text-gold-200">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
        <WhatsAppFloating />
      </body>
    </html>
  );
}
