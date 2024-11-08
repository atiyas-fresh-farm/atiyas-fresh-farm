import { Hero } from "@/components/home/hero";
import { Categories } from "@/components/home/categories";
import { OurStore } from "@/components/home/our-store";

import FruitsBanner from "/public/home/fruits-banner.jpeg";

const Home = async () => {

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

    {
      handle: "spices",
      imageSrc: "/home/categories/1.jpg",
      title: "Spices"
    },
    {
      handle: "lentils-flour",
      imageSrc: "/home/categories/2.jpg",
      title: "Lentils & Flour"
    },
    {
      handle: "drinks",
      imageSrc: "/home/categories/3.jpg",
      title: "Drinks"
    },
    {
      handle: "coffee-tea",
      imageSrc: "/home/categories/4.jpg",
      title: "Coffee & Tea"
    },
    {
      handle: "dairy",
      imageSrc: "/home/categories/5.jpg",
      title: "Dairy"
    },
    {
      handle: "frozen",
      imageSrc: "/home/categories/6.jpg",
      title: "Frozen"
    },
    {
      handle: "household-laundry",
      imageSrc: "/home/categories/7.jpg",
      title: "Household & Laundry"
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