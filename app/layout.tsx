import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Red_Hat_Display } from "next/font/google";

const Red = Red_Hat_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-red-hat-display',
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${Red.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
