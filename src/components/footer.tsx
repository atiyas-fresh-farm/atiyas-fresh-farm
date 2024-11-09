import Link from "next/link";
import Image from "next/image";
import { InstagramIcon, FacebookIcon } from "lucide-react"; 
import { H4, Large, P } from "@/components/ui/typography";

const Footer = () => {
  return (
    <footer className="w-full h-full flex flex-col justify-center items-center border-t bg-lime-700 text-white">
      <div className="container flex flex-col justify-center items-center px-4 xl:px-0 py-8">

        <div className="w-full flex flex-col lg:flex-row justify-between items-center lg:items-start">

          <div className="w-96 flex flex-col justify-start items-center lg:items-start space-y-8">
            <Link href="/">
              <Image src="/logo.png" width={200} height={90} alt="Atiyas Fresh Farm Logo" />
            </Link>
            <P className="text-center lg:text-left">
              Atiya&apos;s Fresh Farm is a fresh addition in the mosaic of the Canadian Grocery world with a presence 22,000 Sq.
              Feet store area. Its meet section consists of 5,000 Sq. Feet. We are serving nothing but 100% Halal items in our store.
            </P>
            <div className="flex flex-row justify-start items-center space-x-8">
              <Link href="/">
                <InstagramIcon className="text-neutral-50 dark:text-neutral-50" size={24} />
              </Link>
              <Link href="/">
                <FacebookIcon className="text-neutral-50 dark:text-neutral-50" size={24} />
              </Link>
            </div>
          </div>

          <div className="w-full h-full flex flex-col lg:flex-row lg:space-x-16 items-center lg:items-start justify-end">

            <div className="flex flex-col justify-start items-center lg:items-start mt-16 lg:mt-4 space-y-4">
              <H4>Navigation Links</H4>
              <Link href="/">Home</Link>
              <Link href="/categories">Categories</Link>
              <Link href="/flyer">Flyer</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </div>
            <div className="flex flex-col justify-start items-center lg:items-start mt-16 lg:mt-4 space-y-4">
              <H4>Contact Details</H4>
              <P>+1 416-901-1333</P>
              <P>info@atiyasfreshfarm.com</P>

              <H4>Store Address</H4>
              <P>1225 Kennedy Rd unit D & E</P>
              <P>Scarborough, Ontario</P>
              <P>Canada - M1P 4Y1</P>
            </div>

          </div>
        </div>

        <div className="w-full flex justify-center items-center pt-16 lg:pt-2">
          <Large>&copy; Atiyas Fresh Farm Ltd.</Large>
        </div>

      </div>
    </footer>
  );
}

export { Footer };