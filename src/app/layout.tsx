import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

// ... existing imports ...

export const metadata: Metadata = {
  title: "Kemitraan Sam Deni Homemade - Double Income di 2026",
  description: "Bergabunglah dengan Kemitraan Sam Deni Homemade. Garansi Balik Modal! Dimsum, Gyoza, Wonton enak dan menguntungkan.",
};

import { Navbar } from "@/components/Navbar";


// ... existing code ...

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
      >
        <Navbar />
        {children}

      </body>
    </html>
  );
}
