import type { Metadata } from "next";
import { Montserrat } from "next/font/google"
import "./globals.css";

export const metadata: Metadata = {
  title: "PortfolioFelipe",
  description: "Portfolio de de projetos de desenvolvimento web",
};

const fonte = Montserrat({
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fonte.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
