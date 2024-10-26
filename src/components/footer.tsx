import Link from "next/link";
import Image from "next/image";
import { InstagramIcon, FacebookIcon, TwitterIcon, LinkedinIcon } from "lucide-react"; 
import { Large } from "@/components/ui/typography";

const Footer = () => {
  return (
    <footer className="w-full h-full flex flex-row justify-center border-t">
      <div className="container flex flex-row flex-wrap justify-between items-center px-4 xl:px-0 py-8">
        <div className="w-full md:w-auto flex flex-col justify-start items-center space-y-8">
          <Link href="/">
            <Image src="/logo.png" width={200} height={90} alt="Atiyas Fresh Farm Logo" />
          </Link>
          <div className="w-48 flex flex-row justify-between items-center">
            <Link href="/">
              <InstagramIcon className="text-neutral-700 dark:text-neutral-50" size={24} />
            </Link>
            <Link href="/">
              <FacebookIcon className="text-neutral-700 dark:text-neutral-50" size={24} />
            </Link>
            <Link href="/">
              <TwitterIcon className="text-neutral-700 dark:text-neutral-50" size={24} />
            </Link>
            <Link href="/">
              <LinkedinIcon className="text-neutral-700 dark:text-neutral-50" size={24} />
            </Link>
          </div>
          <Large>&copy; Atiyas Fresh Farm Ltd.</Large>
        </div>

        <div className="w-full md:w-auto flex flex-col justify-start items-center md:items-start mt-4 md:mt-0 space-y-4">
          <Link href="/">Home</Link>
          <Link href="/categories">Categories</Link>
          <Link href="/flyer">Flyer</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>        
      </div>
    </footer>
  );
}

export { Footer };