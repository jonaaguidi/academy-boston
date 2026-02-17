import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

const siteUrl = "https://academyboston.com";

export const metadata = {
  title: {
    default: "Academy Boston | Event Space in Harvard Square",
    template: "%s | Academy Boston",
  },
  description:
    "8,500 sq ft event space in the heart of Harvard Square — 33 Dunster St, Cambridge. Custom Martin Audio sound system, full bar, VIP tables & commercial kitchen. Book your private event today.",
  keywords: [
    "Academy Boston",
    "event space",
    "Harvard Square",
    "Cambridge",
    "private events",
    "VIP tables",
    "nightlife",
    "corporate events",
    "venue rental",
    "33 Dunster St",
  ],
  authors: [{ name: "Academy Boston" }],
  creator: "Academy Boston",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Academy Boston",
    title: "Academy Boston | Event Space in Harvard Square",
    description:
      "8,500 sq ft event space in the heart of Harvard Square — Custom Martin Audio sound system, full bar, VIP tables & commercial kitchen.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Academy Boston — Event Space in Harvard Square",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Academy Boston | Event Space in Harvard Square",
    description:
      "8,500 sq ft event space in the heart of Harvard Square — Custom Martin Audio sound system, full bar, VIP tables & commercial kitchen.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${plusJakarta.variable} ${inter.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
