import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "safar-book",
  description: "سفر به دور دنیا با کمترین هزینه و بالاترین امکانات",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Navbar />
        <main className="relative overflow-hidden">
          {children}
          </main>
        <Footer />
      </body>
    </html>
  );
}
