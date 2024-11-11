import { Hero } from "@/components/home/hero";
import { Categories } from "@/components/home/categories";
import { OurStore } from "@/components/home/our-store";
import { Reviews } from "@/components/home/reviews";
import { WhyUs } from "@/components/home/why-us";

import Category1 from "/public/home/categories/1.jpg";
import Category2 from "/public/home/categories/2.jpg";
import Category3 from "/public/home/categories/3.jpg";
import Category4 from "/public/home/categories/4.jpg";
import Category5 from "/public/home/categories/5.jpg";
import Category6 from "/public/home/categories/6.jpg";
import Category7 from "/public/home/categories/7.jpg";
import Category8 from "/public/home/categories/8.jpg";
import Category9 from "/public/home/categories/9.jpg";
import Category10 from "/public/home/categories/10.jpg";
import Category11 from "/public/home/categories/11.jpg";
import Category12 from "/public/home/categories/12.jpg";
import Category13 from "/public/home/categories/13.jpg";
import Category14 from "/public/home/categories/14.jpg";
import Category15 from "/public/home/categories/15.jpg";


const Home = () => {

  const categories = [
    {
      handle: "bakery",
      imageSrc: Category1,
      title: "Bakery"
    },
    {
      handle: "biscuits-cookies-rusk",
      imageSrc: Category2,
      title: "Biscuits, Cookies, Rusk"
    },
    {
      handle: "packaged-food",
      imageSrc: Category3,
      title: "Packaged Food"
    },
    {
      handle: "munchies",
      imageSrc: Category4,
      title: "Munchies"
    },
    {
      handle: "dessert",
      imageSrc: Category5,
      title: "Dessert"
    },
    {
      handle: "rice-atta",
      imageSrc: Category6,
      title: "Rice & Atta"
    },
    {
      handle: "essentials",
      imageSrc: Category7,
      title: "Essentials"
    },
    {
      handle: "oils",
      imageSrc: Category8,
      title: "Oils"
    },
    {
      handle: "spices",
      imageSrc: Category9,
      title: "Spices"
    },
    {
      handle: "lentils-flour",
      imageSrc: Category10,
      title: "Lentils & Flour"
    },
    {
      handle: "drinks",
      imageSrc: Category11,
      title: "Drinks"
    },
    {
      handle: "coffee-tea",
      imageSrc: Category12,
      title: "Coffee & Tea"
    },
    {
      handle: "household-laundry",
      imageSrc: Category13,
      title: "Household & Laundry"
    },
    {
      handle: "dairy",
      imageSrc: Category14,
      title: "Dairy"
    },
    {
      handle: "frozen",
      imageSrc: Category15,
      title: "Frozen"
    },
  ];

  return (
    <div className="w-full flex justify-center">
      <main className="container flex flex-col justify-start items-start pt-8">
        <Hero />
        <Categories title="Explore Categories" categories={categories} />
        <OurStore />
        <Reviews />
        <WhyUs />
      </main>
    </div>
  );
}

export default Home;