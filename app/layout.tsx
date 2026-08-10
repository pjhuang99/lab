import type { Metadata } from "next";
import {
  Inter,
  JetBrains_Mono,
  Noto_Sans_SC,
  Noto_Serif_SC
} from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap"
});

const notoSansSC = Noto_Sans_SC({
  weight: ["400", "500", "700"],
  variable: "--font-noto",
  display: "swap",
  preload: false
});

const notoSerifSC = Noto_Serif_SC({
  weight: ["600", "700"],
  variable: "--font-noto-serif",
  display: "swap",
  preload: false
});

export const metadata: Metadata = {
  title: {
    default: "AI赋能采编· 案例与实战",
    template: "%s — AI赋能采编· 案例与实战"
  },
  description:
    "记录我如何用 AI，从一个想法出发，做出真正能用的东西。从写作、作图，到编程和采编工具。",
  openGraph: {
    title: "AI赋能采编· 案例与实战",
    description:
      "记录我如何用 AI，从一个想法出发，做出真正能用的东西。",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${inter.variable} ${jetbrainsMono.variable} ${notoSansSC.variable} ${notoSerifSC.variable}`}
    >
      <body className="min-h-screen bg-paper text-ink">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
