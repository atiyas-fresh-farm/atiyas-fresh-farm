import { Button } from "@/components/ui/button";
import { H2, H4, Large, Small, P } from "@/components/ui/typography";
import { shopifyClient } from "@/lib/shopify/client";
import { ProductCard } from "@/components/product-card";
import Image from "next/image";

interface ParamsType {
  category: string;
  product: string;
}
interface ProductType {
  handle: string;
  featuredImage: {
    url: string;
  };
  title: string;
  priceRange: {
    maxVariantPrice: {
      amount: string;
    };
  };
}
interface RelatedProductType {
  handle: string;
  image: string;
  title: string;
  price: string;
}

const Product = async ({ params }: { params: ParamsType }) => {

  const productQuery = `
    query productQuery($product: String!) {
      productByHandle(handle: $product) {
        collections(first: 10) {
          nodes {
            handle
            title
          }
        }
        description
        featuredImage {
          url
        }
        title
        priceRange {
          maxVariantPrice {
            amount
          }
        }
      }
    }
  `;
  const relatedProductsQuery = `
    query relatedProductsQuery($category: String!) {
      collectionByHandle(handle: $category) {
        products(first: 10) {
          nodes {
            handle
            featuredImage {
              url
            }
            title
            priceRange {
              maxVariantPrice {
                amount
              }
            }
          }
        }
      }
    }
  `;

  //TODO: error handling
  const { data, errors } = await shopifyClient.request(productQuery, {
    variables: {
      product: params.product
    }
  });

  let validCategory = false;
  const currentCollection = {
    title: "",
    handle: ""
  };
  data.productByHandle.collections.nodes.map((collection: { handle: string, title: string }) => {
    if (collection.handle === params.category) {
      currentCollection.title = collection.title;
      currentCollection.handle = collection.handle;
      validCategory = true
    } 
  });
  if (!validCategory) {
    return <>Error</>;
    //throw an error and redirect to 404
  }

  const { data: relatedProductsData, errors: relatedProductsErrors } = await shopifyClient.request(relatedProductsQuery, {
    variables: {
      category: params.category
    }
  });
  const relatedProducts: Array<RelatedProductType> = [];
  relatedProductsData.collectionByHandle.products.nodes.map((prod: ProductType) => {
    if (prod.handle !== params.product) {
      relatedProducts.push({
        handle: prod.handle,
        image: prod.featuredImage?.url,
        title: prod.title,
        price: prod.priceRange.maxVariantPrice.amount
      });
    }
  });

  return (
    <div className="w-full flex justify-center">
      <main className="container flex flex-col justify-start items-start pt-10">

        <div className="w-full flex flex-row justify-center md:space-x-4 items-start">
          <div className="w-[550px] h-full aspect-square border rounded-md relative">
            <Image src={data.productByHandle.featuredImage.url} fill={true} alt={data.productByHandle.title} />
          </div>
          <div className="w-[550px] h-full aspect-square flex flex-col justify-start items-start">
            <Small>
              Home / {currentCollection.title} / {data.productByHandle.title}
            </Small>
            <H2>{data.productByHandle.title}</H2>
            <H4>${data.productByHandle.priceRange.maxVariantPrice.amount}</H4>

            <br /><br /><br />
            <Button>Add to Cart</Button>
            <div className="mt-4">
              <Large>Product Description</Large>
              <P>{data.productByHandle.description}</P>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col justify-start items-start my-8 space-y-4">
          <H2>Related Products</H2>
          <div className="w-full flex flex-row flex-wrap justify-evenly items-start">
            {
              relatedProducts.map((product: RelatedProductType) => (
                <ProductCard
                  key={product.handle}
                  category={params.category}
                  handle={product.handle}
                  name={product.title}
                  count="1 pack"
                  image={product.image ?? "/bread.png"}
                  price={product.price}
                />
              ))
            }
          </div>
        </div>

      </main>
    </div>
  );
}

export default Product;