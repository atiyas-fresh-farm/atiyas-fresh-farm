import Link from "next/link";
import Image from "next/image";
import { InstagramIcon, FacebookIcon } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/icons";
import { H4, Large, P } from "@/components/ui/typography";
import { PageContainer } from "@/components/page-container";

const Footer = () => {

  //const textHoverEffect = "text-neutral-200 hover:text-neutral-50 dark:text-neutral-50 dark:hover:text-neutral-300";
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
      handle: "household-laundry",
      title: "Household & Laundry"
    },
    {
      handle: "dairy",
      title: "Dairy"
    },
    {
      handle: "frozen",
      title: "Frozen"
    },
  ];

  return (
    <footer id="footer" className="w-full h-full flex flex-col justify-center items-center border-t bg-brand text-neutral-50">
      <PageContainer className="flex flex-col justify-center items-center px-4 xl:px-0 py-8">

        <div className="w-full flex flex-col lg:grid lg:grid-cols-3 justify-between items-center lg:items-start">

          <div className="w-full max-w-96 col-span-1 flex flex-col justify-start items-center lg:items-start space-y-8">
            <Link href="/">
              <Image src="/logo-white-black.png" width={200} height={90} alt="Atiyas Fresh Farm Logo" />
            </Link>
            <P className="text-center lg:text-justify">
              Atiya&apos;s Fresh Farm is a fresh addition in the mosaic of the Canadian Grocery world with a presence 22,000 Sq.
              Feet store area. Its meet section consists of 5,000 Sq. Feet. We are serving nothing but 100% Halal items in our store.
            </P>
            <div className="flex flex-row justify-start items-center space-x-8">
              <Link href="/">
                <FacebookIcon className="text-neutral-50 dark:text-neutral-50" size={24} />
              </Link>
              <Link href="/">
                <InstagramIcon className="text-neutral-50 dark:text-neutral-50" size={24} />
              </Link>
              <Link href="/">
                <WhatsAppIcon />
              </Link>
            </div>
          </div>

          <div className="col-span-1 flex flex-col justify-start items-center mt-16 lg:mt-4 px-2">
            <H4>Categories</H4>
            <div className="flex flex-col lg:flex-row items-center lg:space-x-6 lg:items-start justify-end">
              <div className="flex flex-col justify-start items-center mt-4 space-y-4">
                {
                  categories.slice(0, 5).map((category, index) => (
                    <Link href={`/${category.handle}`} className="text-center" key={category.handle + index}>
                      {category.title}
                    </Link>
                  ))
                }
              </div>
              <div className="flex flex-col justify-start items-center mt-4 space-y-4">
                {
                  categories.slice(5, 10).map((category, index) => (
                    <Link href={`/${category.handle}`} className="text-center" key={category.handle + index}>
                      {category.title}
                    </Link>
                  ))
                }
              </div>
              <div className="flex flex-col justify-start items-center mt-4 space-y-4">
              {
                categories.slice(10, 15).map((category, index) => (
                  <Link href={`/${category.handle}`} className="text-center" key={category.handle + index}>
                    {category.title}
                  </Link>
                ))
              }
              </div>
            </div>
          </div>
          
          <div id="contact" className="col-span-1 flex flex-col justify-start items-center lg:items-end">
            <div className="mt-16 lg:mt-4 space-y-4">
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

      </PageContainer>
    </footer>
  );
}

export { Footer };