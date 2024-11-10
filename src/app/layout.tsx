import type { Metadata } from "next";
import { Noto_Sans } from 'next/font/google';
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider"
import { CartProvider } from "@/components/cart/cart-context";
import { cookies } from 'next/headers';
import { getCart } from "@/lib/shopify";
import { Toaster } from "@/components/ui/sonner"
import "./globals.css";


const notoSans = Noto_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Atiyas Fresh Farm",
  description: "Indian grocery store in the heart of Scarborough",
};

interface AuthenticationParams {
  code: string;
  state?: string;
}

export default async function RootLayout({
  children,
  searchParams
}: Readonly<{
  children: React.ReactNode;
  searchParams: AuthenticationParams;
}>) {
  const cartId = (await cookies()).get('cartId')?.value;
  // Don't await the fetch, pass the Promise to the context provider
  const cart = getCart(cartId);

  console.log(searchParams?.code);

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${notoSans.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <CartProvider cartPromise={cart}>
            <div className="flex flex-col justify-start items-start">
              <Header customerAccessCode={searchParams?.code ?? null} />
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
