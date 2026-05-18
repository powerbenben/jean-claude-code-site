import type { Metadata } from "next";
import { Press_Start_2P, Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const pressStart = Press_Start_2P({
  variable: "--font-press-start",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jeanclaudecode.fr"),
  title: "Jean-Claude CODE — Claude Code en entreprise",
  description:
    "Le dirigeant de PME français qui a poussé Claude Code plus loin que 99% des devs. Praticien, pas influenceur. Trois modules IA pour PME : Wiki d'entreprise, Assistant Direction, Studio d'agents métier.",
  openGraph: {
    title: "Jean-Claude CODE — Claude Code en entreprise",
    description:
      "Le dirigeant de PME français qui a poussé Claude Code plus loin que 99% des devs. Praticien, pas influenceur.",
    url: "https://jeanclaudecode.fr",
    siteName: "Jean-Claude CODE",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/banner-hero.jpg",
        width: 1500,
        height: 500,
        alt: "Jean-Claude CODE survolant sa ville pixelart",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jean-Claude CODE — Claude Code en entreprise",
    description: "Le dirigeant de PME français qui a poussé Claude Code plus loin que 99% des devs.",
    creator: "@PowerBenben",
    images: ["/banner-hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${pressStart.variable} ${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
