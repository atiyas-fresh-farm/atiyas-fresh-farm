"use client";

import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider"
import { ShopifyProvider } from '@shopify/hydrogen-react';
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

/*export const metadata: Metadata = {
  title: "Atiyas Fresh Farm",
  description: "Indian grocery store in the heart of Scarborough",
};*/

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ShopifyProvider
            storeDomain={process.env.SHOPIFY_STORE_DOMAIN ?? ""}
            storefrontToken={ process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN ?? ""}
            storefrontApiVersion="2024-10"
            countryIsoCode="CA"
            languageIsoCode="EN"
          >
            <div className="flex flex-col justify-start items-start">
              <Header />
              <div className="w-full min-h-screen flex flex-col justify-between">
                {children}
                <Footer />
              </div>
            </div>
          </ShopifyProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
