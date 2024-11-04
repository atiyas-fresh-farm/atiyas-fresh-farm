import { H2, H4, Large, Small, P } from "@/components/ui/typography";
import { ProductCard } from "@/components/product-card";
import { AddToCart } from '@/components/product-button';
import { Product } from "@/lib/shopify/types";
import { getProduct, getProductRecommendations } from "@/lib/shopify";
import Image from "next/image";

interface ParamsType {
  category: string;
  product: string;
}

const ProductPage = async ({ params }: { params: ParamsType }) => {

  // TODO: make sure the url is valid
  // let validCategory = false;
  // if (!validCategory) {
  //   return <>Error</>;
  //   //throw an error and redirect to 404
  // }

  const product = await getProduct(params.product);
  const recommendedProducts = product ? await getProductRecommendations(product?.id) : [];
  recommendedProducts.length = 7;

  return (
    <div className="w-full flex justify-center">
      <main className="container flex flex-col justify-start items-start pt-10">

        <div className="w-full flex flex-row justify-center md:space-x-4 items-start">
          <div className="w-[550px] h-full aspect-square border rounded-md relative">
            <Image src={product?.featuredImage?.url ?? "/bread.png"} fill={true} alt={product?.featuredImage?.altText ?? ""} />
          </div>
          <div className="w-[550px] h-full aspect-square flex flex-col justify-start items-start">
            <Small>
              Home / {params.category.charAt(0).toUpperCase() + params.category.slice(1)} / {product?.title}
            </Small>
            <H2>{product?.title}</H2>
            <H4>${product?.priceRange.maxVariantPrice.amount}</H4>

            <br /><br /><br />
            {
              product &&
              <AddToCart rounded="full" product={product} />
            }
            <div className="mt-4">
              <Large>Product Description</Large>
              <P>{product?.description}</P>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col justify-start items-start mt-16 mb-8 space-y-4">
          <H2>Related Products</H2>
          <div className="w-full flex flex-row flex-wrap justify-evenly items-start">
            {
              recommendedProducts.map((product: Product) => (
                <ProductCard
                  key={product.handle}
                  category={params.category}
                  product={product}
                />
              ))
            }
          </div>
        </div>

      </main>
    </div>
  );
}

export default ProductPage;