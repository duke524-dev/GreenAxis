import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "GreenAxis — Software Development",
  description:
    "GreenAxis builds reliable software that scales. Custom development, cloud solutions, and digital products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="min-h-screen font-sans antialiased bg-[var(--greenaxis-bg)] text-[var(--greenaxis-foreground)]">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
