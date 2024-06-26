import type { Metadata } from "next";

import "./globals.css";
import { Rubik as FontSans } from "next/font/google";
import { cn } from "./lib/utils";
import Providers from "../config/Providers";
import { Provider } from "react-redux";

import { store } from "../store/store";
import CombinedProviders from "../config/CombinedProviders";
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "ThinkMate AI",
  description: "Teman Diskusi untuk Melatih Berpikir Kritis dan Pemahaman Membaca Siswa",
  // icons: [
  //   {
  //     url: "/favicon.png",
  //     // href: "/favicon.png",
  //     rel: "icon",
  //     type: "image/png",
  //   }
  // ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <CombinedProviders>{children}</CombinedProviders>
      </body>
    </html>
  );
}
