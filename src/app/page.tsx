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
    {src: Section4, alt: "section4"}
  ];
  const categories = [
    {
      handle: "atta-rice-oil-daal",
      imageSrc: "/home/categories/category-atta-rice-oil-daal.png",
      altText: "Atta, Rice, Oil & Daal"
    },
    {
      handle: "fruits-vegetables",
      imageSrc: "/home/categories/category-fruit-veg.png",
      altText: "Fruits & Vegetables"
    },
    {
      handle: "masala-dry-fruits",
      imageSrc: "/home/categories/category-masala-dry-fruits.png",
      altText: "Masala & Dry Fruits"
    },
    {
      handle: "apparel-lifestyle",
      imageSrc: "/home/categories/category-apparel-lifestyle.png",
      altText: "Apparel & Lifestyle"
    },
    {
      handle: "jewellery-accessories",
      imageSrc: "/home/categories/category-jewellery-accessories.jpeg",
      altText: "Jewellery & Accessories"
    },
    {
      handle: "packaged-food",
      imageSrc: "/home/categories/category-packed-food.png",
      altText: "Packaged Food"
    },
    {
      handle: "toys-sports",
      imageSrc: "/home/categories/category-toys-sport.png",
      altText: "Toys & Sports"
    },
    {
      handle: "sweets",
      imageSrc: "/home/categories/category-sweets.jpeg",
      altText: "Sweets"
    },
    {
      handle: "ice-creams-more",
      imageSrc: "/home/categories/category-ice-creams-more.png",
      altText: "Ice Creams & More"
    },
    {
      handle: "frozen-food",
      imageSrc: "/home/categories/category-frozen-food.png",
      altText: "Frozen Food"
    }
  ];

  return (
    <div className="w-full flex justify-center">
      <main className="container flex flex-col justify-start items-start pt-10">
        <Hero imageSrc={FruitsBanner} altText="Hero banner" />
        <SpecialSections images={specialSectionImages} />
        <Categories title="Explore Categories" categories={categories} />
        <OurStore />
      </main>
    </div>
  );
}

export default Home;