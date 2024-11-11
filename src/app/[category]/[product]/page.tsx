import { H2, H4, Large, Small } from "@/components/ui/typography";
import { ProductCard } from "@/components/product-card";
import { AddToCart } from '@/components/product-button';
import { Product } from "@/lib/shopify/types";
import { getProduct, getProductRecommendations } from "@/lib/shopify";
import Image from "next/image";
import Link from "next/link";

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
      <main className="container flex flex-col justify-start items-start pt-10 px-2 xl:px-0">

        <div className="w-full flex flex-col md:flex-row justify-center md:space-x-4 items-start">

          <div className="w-[550px] max-w-full h-full aspect-square border rounded-md relative">
            <Image src={product?.featuredImage?.url ?? "/bread.png"} fill={true} alt={product?.featuredImage?.altText ?? ""} />
          </div>
          
          <div className="w-[550px] max-w-full h-full flex flex-col justify-start items-start pt-4 md:pt-0">
            <Small>
              Home / {params.category.charAt(0).toUpperCase() + params.category.slice(1)} / {product?.title}
            </Small>
            <H2 className="mt-2">{product?.title}</H2>
            <H4>${product?.priceRange.maxVariantPrice.amount}</H4>
            {
              product &&
              <div className="w-full mt-4 md:mt-16">
                <AddToCart rounded="full" product={product} />
              </div>
            }
            <div className="mt-8">
              <Large>Share Via</Large>
              <div className="flex flex-row justify-start items-center space-x-8 mt-4">
                <Link href="/">
                  <Image src="/icons/fb.png" width={40} height={40} alt="Facebook icon" />
                </Link>
                <Link href="/">
                  <Image src="/icons/insta.svg" width={40} height={40} alt="Facebook icon" />
                </Link>
                <Link href="/">
                  <Image src="/icons/wa-dark-green.svg" width={40} height={40} alt="Facebook icon" />
                </Link>
              </div>
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