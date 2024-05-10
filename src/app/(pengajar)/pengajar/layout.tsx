import type { Metadata } from "next";

// import "@../../globals.css";
import { Rubik as FontSans } from "next/font/google";
import { cn } from "../../lib/utils";
import Providers from "../../../config/Providers";
import { Provider } from "react-redux";

// import { store } from "../store/store";
import CombinedProviders from "../../../config/CombinedProviders";
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "ThinkMate AI",
  description: "Teman Diskusi untuk Melatih Berpikir Kritis dan Pemahaman Membaca Siswa",
  icons: [
    {
      url: "/favicon.png",
      rel: "icon",
      type: "png",
    },
  ],
};

export default function PengajarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="app-layout">
      <CombinedProviders>{children}</CombinedProviders>
    </div>
  );
}
