import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const themeScript = `
(function() {
  var k = 'theme';
  var v = localStorage.getItem(k);
  var d = !v && window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (v === 'dark' || d) document.documentElement.classList.add('dark');
  else document.documentElement.classList.remove('dark');
})();
`;

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
        <script
          dangerouslySetInnerHTML={{ __html: themeScript }}
          suppressHydrationWarning
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
