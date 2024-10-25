import { H2, P } from "@/components/ui/typography";
import { shopifyClient } from "@/lib/shopify/client";
import Image from "next/image";
import FruitsBanner from "/public/home/fruits-banner.jpeg";
import Section1 from "/public/home/section-1.png";
import Section2 from "/public/home/section-2.png";
import Section3 from "/public/home/section-3.png";
import Section4 from "/public/home/section-4.png";
import Section5 from "/public/home/section-5.png";

const Home = async () => {

  /**
   * TODO:
   * - query list of all categories
   * - query list of special collections
   * - query list of banners
   */

  /*
  const productQuery = `
    query ProductQuery {
      products(first: 1) {
        edges{
          node {
            title
          }
        }
      }
    }
  `;*/

  const collectionQuery = `
    query {
      collections(first: 10) {
        edges {
          node {
            title
            id
            image {
              url
              altText
            }
          }
        }
      }
    }
  `;

const {data: collectionData, errors, extensions} = await shopifyClient.request(collectionQuery);

console.log(collectionData.collections.edges);
console.error(errors);
console.log(extensions);


  return (
    <div className="w-full flex justify-center">
      <main className="container flex flex-col justify-start items-start pt-10">

        <div className="w-full h-[550px] relative bg-neutral-300 rounded-md mb-10">
          <Image src={FruitsBanner} fill={true} alt="banner" />
        </div>
        <div className="w-full flex flex-row justify-between items-center">
          <div className="w-64 h-40 relative rounded-md">
            <Image src={Section1} fill={true} alt="banner" />
          </div>
          <div className="w-64 h-40 relative rounded-md">
            <Image src={Section2} fill={true} alt="banner" />
          </div>
          <div className="w-64 h-40 relative rounded-md">
            <Image src={Section3} fill={true} alt="banner" />
          </div>
          <div className="w-64 h-40 relative rounded-md">
            <Image src={Section4} fill={true} alt="banner" />
          </div>
          <div className="w-64 h-40 relative rounded-md">
            <Image src={Section5} fill={true} alt="banner" />
          </div>
        </div>
        
        <div id="explore-categories" className="my-10">
          <H2>Explore Categories</H2>
          <div className="w-full flex flex-row flex-wrap justify-center items-center my-4">

            <div className="w-96 h-72 relative rounded-md m-2">
              <Image src="/home/categories/category-atta-rice-oil-daal.png" fill={true} alt="category" />
            </div>
            <div className="w-96 h-72 relative rounded-md m-2">
              <Image src="/home/categories/category-fruit-veg.png" fill={true} alt="category" />
            </div>
            <div className="w-96 h-72 relative rounded-md m-2">
              <Image src="/home/categories/category-masala-dry-fruits.png" fill={true} alt="category" />
            </div>

            <div className="w-52 h-72 relative rounded-md m-2">
              <Image src="/home/categories/category-apparel-lifestyle.png" fill={true} alt="category" />
            </div>
            <div className="w-52 h-72 relative rounded-md m-2">
              <Image src="/home/categories/category-jewellery-accessories.jpeg" fill={true} alt="category" />
            </div>
            <div className="w-52 h-72 relative rounded-md m-2">
              <Image src="/home/categories/category-packed-food.png" fill={true} alt="category" />
            </div>
            <div className="w-52 h-72 relative rounded-md m-2">
              <Image src="/home/categories/category-toys-sport.png" fill={true} alt="category" />
            </div>
            <div className="w-52 h-72 relative rounded-md m-2">
              <Image src="/home/categories/category-sweets.jpeg" fill={true} alt="category" />
            </div>
            <div className="w-52 h-72 relative rounded-md m-2">
              <Image src="/home/categories/category-ice-creams-more.png" fill={true} alt="category" />
            </div>
            <div className="w-52 h-72 relative rounded-md m-2">
              <Image src="/home/categories/category-frozen-food.png" fill={true} alt="category" />
            </div>
            
          </div>
        </div>

        <div id="our-store" className="flex flex-row flex-wrap w-full my-10">
          <div className="w-1/2 min-w-[400px] max-w-full h-96 relative">
            <Image src="/home/map.png" className="rounded-lg" fill={true} alt="category" />
          </div>
          <div className="w-1/2 min-w-[400px] max-w-full h-96 relative px-8 py-4">
            <H2>Our Store</H2>
            <P>
              Come visit us at <br />
              1225 Kennedy Rd unit D & E,
              Scarborough,
              Ontario - M1P 4Y1
            </P>
          </div>
        </div>

      </main>
    </div>
  );
}

export default Home;