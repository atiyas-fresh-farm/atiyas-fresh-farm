import { H2 } from "@/components/ui/typography";
import { shopifyClient } from "@/lib/shopify/client";

const Home = async () => {

  /**
   * TODO:
   * - query list of all categories
   * - query list of special collections
   * - query list of banners
   */

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
  `;
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

        <div className="w-full h-[500px] bg-neutral-300 rounded-md mb-10">
        </div>
        <div className="w-full flex flex-row justify-between items-center">
          <div className="w-64 h-40 bg-neutral-300 rounded-md"></div>
          <div className="w-64 h-40 bg-neutral-300 rounded-md"></div>
          <div className="w-64 h-40 bg-neutral-300 rounded-md"></div>
          <div className="w-64 h-40 bg-neutral-300 rounded-md"></div>
          <div className="w-64 h-40 bg-neutral-300 rounded-md"></div>
        </div>
        
        <div id="explore-categories" className="my-10">
          <H2>Explore Categories</H2>
          <div className="w-full flex flex-row flex-wrap justify-center items-center my-4">
            <div className="w-52 h-52 bg-neutral-300 rounded-md m-2"></div>
            <div className="w-52 h-52 bg-neutral-300 rounded-md m-2"></div>
            <div className="w-52 h-52 bg-neutral-300 rounded-md m-2"></div>
            <div className="w-52 h-52 bg-neutral-300 rounded-md m-2"></div>
            <div className="w-52 h-52 bg-neutral-300 rounded-md m-2"></div>
            <div className="w-52 h-52 bg-neutral-300 rounded-md m-2"></div>

            <div className="w-52 h-52 bg-neutral-300 rounded-md m-2"></div>
            <div className="w-52 h-52 bg-neutral-300 rounded-md m-2"></div>
            <div className="w-52 h-52 bg-neutral-300 rounded-md m-2"></div>
            <div className="w-52 h-52 bg-neutral-300 rounded-md m-2"></div>
            <div className="w-52 h-52 bg-neutral-300 rounded-md m-2"></div>
            <div className="w-52 h-52 bg-neutral-300 rounded-md m-2"></div>

            <div className="w-52 h-52 bg-neutral-300 rounded-md m-2"></div>
            <div className="w-52 h-52 bg-neutral-300 rounded-md m-2"></div>
            <div className="w-52 h-52 bg-neutral-300 rounded-md m-2"></div>
            <div className="w-52 h-52 bg-neutral-300 rounded-md m-2"></div>
            <div className="w-52 h-52 bg-neutral-300 rounded-md m-2"></div>
            <div className="w-52 h-52 bg-neutral-300 rounded-md m-2"></div>
          </div>
        </div>

      </main>
    </div>
  );
}

export default Home;