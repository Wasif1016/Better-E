import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BetterE | De Universele Laadlimiet",
  description: "BetterE is een universele slimme laadadapter voor e‑bikes, e-steps en e-scooters. Verdubbel de acculevensduur, verlaag brandrisico en laad zonder gedoe.",
  icons: {
    icon: [
      { url: "/BetterE_LOGO7 (2).png", sizes: "any" },
      { url: "/BetterE_LOGO7 (2).png", type: "image/png" },
    ],
    apple: "/BetterE_LOGO7 (2).png",
    shortcut: "/BetterE_LOGO7 (2).png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}