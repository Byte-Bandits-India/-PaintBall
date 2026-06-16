import type { Metadata } from "next";
import { Barlow, Saira_Condensed, Chakra_Petch } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sairaCondensed = Saira_Condensed({
  variable: "--font-saira-condensed",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
});

const chakraPetch = Chakra_Petch({
  variable: "--font-chakra-petch",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Battle Grid Paintball | Southern California's Premier Arena",
  description: "Southern California's premier indoor & outdoor paintball destination. Professional fields, coaching, leagues, and tournaments under one roof.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${sairaCondensed.variable} ${chakraPetch.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#2D3139] text-slate-100 font-sans selection:bg-[#E11B22] selection:text-white">
        {children}
      </body>
    </html>
  );
}

