import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SynergyProvider } from "@/context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Synergy Financial Advisers",
  description: "https://synergy.com.sg/",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SynergyProvider>{children}</SynergyProvider>
      </body>
    </html>
  );
}
