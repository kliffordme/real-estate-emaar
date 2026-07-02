import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Emaar Beachfront Dubai | Luxury Waterfront Homes for Sale & Lease",
  description:
    "Buy or lease premium beachfront residences at Emaar Beachfront, Dubai. Private beach access, marina views, and world-class amenities between Dubai Marina and Palm Jumeirah.",
  keywords: [
    "Emaar Beachfront",
    "Dubai real estate",
    "beachfront apartments Dubai",
    "Dubai Harbour",
    "luxury property Dubai",
  ],
  openGraph: {
    title: "Emaar Beachfront Dubai | Luxury Waterfront Homes",
    description:
      "Own the beachfront. Live the view. Premium residences for sale and lease at Emaar Beachfront, Dubai.",
    type: "website",
    locale: "en_AE",
    images: [
      {
        url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&h=630&fit=crop&q=80",
        width: 1200,
        height: 630,
        alt: "Dubai skyline and waterfront at Emaar Beachfront",
      },
    ],
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
      className={`${geistSans.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
