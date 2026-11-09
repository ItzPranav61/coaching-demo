import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileContactBar from "@/components/MobileContactBar";
import { site } from "@/data/site";

export const metadata: Metadata = site.metadata;
const headline = Fraunces({ subsets: ["latin"], variable: "--font-headline", display: "swap", weight: ["400", "500", "600"] });
const body = DM_Sans({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${headline.variable} ${body.variable}`}><body><a className="skip-link" href="#main">{site.labels.skip}</a><Navbar />{children}<Footer /><MobileContactBar /></body></html>;
}
