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

export const metadata = {
  title: "Academy Boston | Event Space in Harvard Square",
  description: "33 Dunster St - An Event Space in the heart of Harvard Square",
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
