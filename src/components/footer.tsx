import Link from "next/link";
import Image from "next/image";
import { InstagramIcon, FacebookIcon } from "lucide-react"; 
import { H4, Large, P } from "@/components/ui/typography";

const Footer = () => {

  const textHoverEffect = "text-neutral-200 hover:text-neutral-50 dark:text-neutral-50 dark:hover:text-neutral-300";
  const categories = [
    {
      handle: "bakery",
      title: "Bakery"
    },
    {
      handle: "biscuits-cookies-rusk",
      title: "Biscuits, Cookies, Rusk"
    },
    {
      handle: "packaged-food",
      title: "Packaged Food"
    },
    {
      handle: "munchies",
      title: "Munchies"
    },
    {
      handle: "dessert",
      title: "Dessert"
    },
    {
      handle: "rice-atta",
      title: "Rice & Atta"
    },
    {
      handle: "essentials",
      title: "Essentials"
    },
    {
      handle: "oils",
      title: "Oils"
    },
    {
      handle: "spices",
      title: "Spices"
    },
    {
      handle: "lentils-flour",
      title: "Lentils & Flour"
    },

    {
      handle: "drinks",
      title: "Drinks"
    },
    {
      handle: "coffee-tea",
      title: "Coffee & Tea"
    },
    {
      handle: "dairy",
      title: "Dairy"
    },
    {
      handle: "frozen",
      title: "Frozen"
    },
    {
      handle: "household-laundry",
      title: "Household & Laundry"
    },
  ];

  return (
    <footer className="w-full h-full flex flex-col justify-center items-center border-t bg-lime-700 text-neutral-50">
      <div className="container flex flex-col justify-center items-center px-4 xl:px-0 py-8">

        <div className="w-full flex flex-col lg:flex-row justify-between items-center lg:items-start">

          <div className="w-96 flex flex-col justify-start items-center lg:items-start space-y-8">
            <Link href="/">
              <Image src="/logo-white-black.png" width={200} height={90} alt="Atiyas Fresh Farm Logo" />
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
              {
                categories.splice(0, 5).map((category, index) => (
                  <Link className={textHoverEffect} href={`/${category.handle}`} key={category.handle + index}>
                    {category.title}
                  </Link>
                ))
              }
            </div>
            <div className="flex flex-col justify-start items-center lg:items-start mt-16 lg:mt-4 space-y-4">
              <Link className={textHoverEffect} href="/">Home</Link>
              <Link className={textHoverEffect} href="/categories">Categories</Link>
              <Link className={textHoverEffect} href="/flyer">Flyer</Link>
              <Link className={textHoverEffect} href="/about">About</Link>
              <Link className={textHoverEffect} href="/contact">Contact</Link>
            </div>
            <div className="flex flex-col justify-start items-center lg:items-start mt-16 lg:mt-4 space-y-4">
              <Link className={textHoverEffect} href="/">Home</Link>
              <Link className={textHoverEffect} href="/categories">Categories</Link>
              <Link className={textHoverEffect} href="/flyer">Flyer</Link>
              <Link className={textHoverEffect} href="/about">About</Link>
              <Link className={textHoverEffect} href="/contact">Contact</Link>
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