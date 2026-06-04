import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Laithy Horses 🐎",
  description:
    "Luxury horseback riding experiences through Egypt’s most iconic landscapes.",
  keywords: [
    "Horse Riding Egypt",
    "Pyramids Horse Riding",
    "Luxury Horse Tours",
    "Laithy Horses",
    "Horseback Experience",
  ],

  authors: [
    {
      name: "Yousef Saad",
    },
  ],

  creator: "Yousef Saad",

  openGraph: {
    title: "Laithy Horses 🐎",
    description:
      "Experience premium horseback adventures across Egypt.",
    url: "https://laithy-horses.vercel.app",
    siteName: "Laithy Horses",
    locale: "en_US",
    type: "website",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-black text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}