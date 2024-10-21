import { ProductCard } from "@/components/product-card";
import { shopifyClient } from "@/lib/shopify/client";
import Link from "next/link";

interface CategoryProps {
  params: {
    category: string;
  }
  searchParams?: {
    filter: string;
  }
  category: string;
};

interface ProductType {
  id: string
  handle: string
  title: string
  priceRange: {
    maxVariantPrice: {
      amount: string
    }
  }
  images: {
    nodes: [
      {
        url: string
      }
    ]
  }
}

const Category = async ({ params, searchParams }: CategoryProps) => {

  /**
   * TODO:
   * x get the category from the URL
   * x check if the category is valid
   *  - if not, show a 404 page
   * x query the category details
   * x query list of products in the category
   * - query list of subcategories
   * - show a generic image if product image is not available
   */


  /*
  const categoryCount = `
    query collectionCount($category: String) {
      collectionsCount(query: $category) {
        count
      }
    }
  `;*/

  // TODO: check to see if subcategory is in the category metaobject

  // If the category is valid, query the category details
  //TODO: use 'featuredImage' instead of 'image' for the category image
  //TODO: use collectionByHandle instead of collections
  const categoryProductQuery = `
    query categoryQuery($category: String) {
      collections(query: $category, first: 1) {
        edges {
          node {
            title
            id
            image {
              url
              altText
            }
            handle
            products(first: 20) {
              nodes {
                id
                handle
                title
                priceRange {
                  maxVariantPrice {
                    amount
                  }
                }
                images(first: 1) {
                  nodes {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  `;
  const subcategoryQuery = `
    query subcategoryQuery($category: String!) {
      metaobject(handle: {handle: $category, type: "categories"}) {
        fields {
          references(first: 10) {
            nodes {
              ... on Collection {
                title
                handle
              }
            }
          }
        }
      }
    }
  `;

  const { data: subcategoryData, errors: subcategoryErrors } = await shopifyClient.request(subcategoryQuery, {
    variables: {
      category: params.category
    }
  });

  const subcategories = subcategoryData.metaobject.fields[0].references.nodes;
  const isFilterValid = () => {
    return subcategories.find((e: {title:string, handle:string}) => e.handle===searchParams?.filter);
  }

  let queryCategory: string|undefined = params.category;
  if (isFilterValid() !== undefined) {
    queryCategory = searchParams?.filter;
  }

  const { data, errors } = await shopifyClient.request(categoryProductQuery, {
    variables: {
      category: queryCategory
    }
  });

  


  console.log(data.collections.edges[0]);
  console.error(subcategoryErrors);
  //TODO: change this to check that it is a valid category, not just that a collection exists with this name.
  // for example, 'home' is a collection, but not a category
  const isCategoryValid = data.collections.edges.length === 1;

  if (!isCategoryValid) {
    // redirect to 404 page
    return (
      <div>
        <h1>404</h1>
        <p>Category not found</p>
      </div>
    );
  }

  const categoryHandle = data.collections.edges[0].node.handle;
  const productList = data.collections.edges[0].node.products.nodes;



  return (
    <div className="w-full flex justify-center">
      <main className="container flex flex-row justify-start items-start pt-10">

        <div className="min-w-96 ">
          <Link href={`/${params.category}`}>
            <div className="w-64 h-20 flex flex-row justify-start items-center p-8 bg-white">
              All
            </div>
          </Link>
          {
            subcategories.map((subcategory: { title: string, handle: string }) => {
              if (params.category!==subcategory.handle) return (
                <Link key={subcategory.handle} href={`/${params.category}?filter=${subcategory.handle}`}>
                  <div className="w-64 h-20 flex flex-row justify-start items-center p-8 bg-white">
                    { subcategory.title }
                  </div>
                </Link>
              )
            })
          }
        </div>

        <div className="w-full flex flex-row flex-wrap justify-center items-start">
          {
            productList.map((product: ProductType) => (
              <ProductCard
                key={product.handle}
                category={categoryHandle}
                handle={product.handle}
                name={product.title}
                count="1 pack"
                image={product.images.nodes.length ? product.images.nodes[0].url : "/bread.png"}
                price={product.priceRange.maxVariantPrice.amount}
              />
            ))
          }
        </div>

      </main>
    </div>
  );
}

export default Category;