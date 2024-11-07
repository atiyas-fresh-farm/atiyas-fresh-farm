import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider"
import { CartProvider } from "@/components/cart/cart-context";
import { cookies } from 'next/headers';
import { getCart } from "@/lib/shopify";
import { Toaster } from "@/components/ui/sonner"
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

export const metadata: Metadata = {
  title: "Atiyas Fresh Farm",
  description: "Indian grocery store in the heart of Scarborough",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cartId = (await cookies()).get('cartId')?.value;
  // Don't await the fetch, pass the Promise to the context provider
  const cart = getCart(cartId);

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <CartProvider cartPromise={cart}>
            <div className="flex flex-col justify-start items-start">
              <Header />
              <div className="w-full min-h-screen flex flex-col justify-between pt-36">
                {children}
                <Footer />
              </div>
            </div>
            <Toaster closeButton />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
