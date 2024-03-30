import type { Metadata } from "next";

import "./globals.css";
import { Rubik as FontSans } from "next/font/google";
import { cn } from "./lib/utils";
import Providers from "../config/Providers";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "ThinkMate AI",
  description: "Teman Diskusi untuk Melatih Berpikir Kritis dan Pemahaman Membaca Siswa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
