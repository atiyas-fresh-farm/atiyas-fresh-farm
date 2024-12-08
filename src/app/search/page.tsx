import { H4, Small } from '@/components/ui/typography';
import { ProductCard } from "@/components/product-card";
import { Product } from '@/lib/shopify/types';
import { getProducts } from '@/lib/shopify';
import { PageContainer } from "@/components/page-container";
import Link from 'next/link';


const Search = async ({ searchParams }: { searchParams?: { query?: string} }) => {

  // TODO: make a query based on the query string from the searchParams
  // - update the showing x results text

  const products = searchParams?.query ? await getProducts({ query: searchParams?.query }) : [];

  return (
    <div className="w-full flex justify-center">
      <PageContainer className="flex flex-col justify-start items-start pt-6">
        <H4>
          {
            searchParams?.query ? `Search Results for "${searchParams.query}"` : `Start typing to search for products`
          }
        </H4>
        <Small>Showing 1-20 of 100 results</Small>
        <br />
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 3xl:grid-cols-7 gap-2 justify-start items-start mb-6">
          
          {
            products.length !== 0 ?
              products.map((product: Product) => {
                return (
                  <div key={product.handle} className="col-span-1 flex justify-center">
                    <ProductCard
                      key={product.handle}
                      category={product.collections[0].handle}
                      product={product}
                    />
                  </div>
                )
              }) :
              <div className="col-span-7 w-full flex justify-center items-center text-center">
                <H4>
                  Start typing to search for products
                  <br/> or <br />
                  <Link href="/" className="underline">Click here to go home.</Link>
                </H4>
              </div>
          }

        </div>
      </PageContainer>
    </div>
  );
}

export default Search;