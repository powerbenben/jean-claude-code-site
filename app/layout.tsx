import type { Metadata } from "next";
import localFont from "next/font/local";
import { site } from "@/content/site";
import "./globals.css";

/* Les trois polices de la charte v10, servies par le site (sous-ensemble latin). */
const affiche = localFont({
  src: "./fonts/lilita-one-400.woff2",
  variable: "--font-affiche",
  weight: "400",
  display: "swap",
});

const texte = localFont({
  src: "./fonts/jost-variable.woff2",
  variable: "--font-texte",
  weight: "400 700",
  display: "swap",
});

const machine = localFont({
  src: [
    { path: "./fonts/courier-prime-400.woff2", weight: "400" },
    { path: "./fonts/courier-prime-700.woff2", weight: "700" },
  ],
  variable: "--font-machine",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.meta.url),
  title: site.meta.titre,
  description: site.meta.description,
  openGraph: {
    title: site.meta.titre,
    description: site.meta.description,
    url: site.meta.url,
    siteName: "Jean-Claude CODE",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.meta.titre,
    description: site.meta.description,
    creator: "@PowerBenben",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${affiche.variable} ${texte.variable} ${machine.variable}`}>
      <body>{children}</body>
    </html>
  );
}
