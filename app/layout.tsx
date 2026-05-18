import type { Metadata } from "next";
import { Bebas_Neue, Montserrat } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas"
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat"
});

export const metadata: Metadata = {
  title: "Uvolv | AI Automation, Websites, Funnels, and Business Systems",
  description:
    "Uvolv builds AI automations, custom software, websites, funnels, and business systems for SMEs, startups, and contractors."
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${bebas.variable} ${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}
