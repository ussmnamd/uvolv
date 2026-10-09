import type { Metadata } from "next";
import "@fontsource/bebas-neue/latin-400.css";
import "@fontsource/montserrat/latin-400.css";
import "@fontsource/montserrat/latin-500.css";
import "@fontsource/montserrat/latin-600.css";
import "./globals.css";
import { site } from "@/content/site";
import { SiteNav } from "@/components/site-nav";
import { Ticker, ClosingCTA, SiteFooter } from "@/components/site-shell";
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "UVOLV — Digital presence. Connected operations.", template: "%s | UVOLV" },
  description: site.description,
  openGraph: { type: "website", siteName: "UVOLV", title: "UVOLV — Build the system behind the sale.", description: site.description, images: ["/opengraph-image"] },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};
function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body id="top"><a href="#main-content" className="skip-link">Skip to content</a><Ticker /><div className="site-canvas"><SiteNav /><main id="main-content">{children}</main><ClosingCTA /><SiteFooter /></div></body></html>;
}
export { RootLayout as default };
