import { Hero } from "@/components/home/hero";
import { SpecialSections } from "@/components/home/special-section";
import { Categories } from "@/components/home/categories";
import { OurStore } from "@/components/home/our-store";
//import { shopifyClient } from "@/lib/shopify/client";

import FruitsBanner from "/public/home/fruits-banner.jpeg";
import Section1 from "/public/home/section-1.png";
import Section2 from "/public/home/section-2.png";
import Section3 from "/public/home/section-3.png";
import Section4 from "/public/home/section-4.png";
import Section5 from "/public/home/section-5.png";


const Home = async () => {

  const specialSectionImages = [
    {src: Section1, alt: "section 1"},
    {src: Section2, alt: "section 2"},
    {src: Section3, alt: "section 3"},
    {src: Section4, alt: "section 4"},
    {src: Section5, alt: "section 5"},
    {src: Section3, alt: "section 3"},
    {src: Section4, alt: "section 4"}
  ];
  const categories = [
    {
      handle: "bakery",
      imageSrc: "/home/categories/1.jpg",
      title: "Bakery"
    },
    {
      handle: "biscuits-cookies-rusk",
      imageSrc: "/home/categories/2.jpg",
      title: "Biscuits, Cookies, Rusk"
    },
    {
      handle: "packaged-food",
      imageSrc: "/home/categories/3.jpg",
      title: "Packaged Food"
    },
    {
      handle: "munchies",
      imageSrc: "/home/categories/4.jpg",
      title: "Munchies"
    },
    {
      handle: "dessert",
      imageSrc: "/home/categories/5.jpg",
      title: "Dessert"
    },
    {
      handle: "rice-atta",
      imageSrc: "/home/categories/6.jpg",
      title: "Rice & Atta"
    },
    {
      handle: "essentials",
      imageSrc: "/home/categories/7.jpg",
      title: "Essentials"
    },
    {
      handle: "oils",
      imageSrc: "/home/categories/8.jpg",
      title: "Oils"
    },
  ];

  return (
    <div className="w-full flex justify-center">
      <main className="container flex flex-col justify-start items-start pt-10">
        <Hero imageSrc={FruitsBanner} altText="Hero banner" />
        <Categories title="Explore Categories" categories={categories} />
        <OurStore />
      </main>
    </div>
  );
}

export default Home;