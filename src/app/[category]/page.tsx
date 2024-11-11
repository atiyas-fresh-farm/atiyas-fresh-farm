import { ProductCard } from "@/components/product-card";
import { Large } from "@/components/ui/typography";
import { getCollectionProducts, getCollectionSubcategories } from "@/lib/shopify";
import { Product } from "@/lib/shopify/types";
import Link from "next/link";

interface CategoryProps {
  params: {
    category: string;
  }
  searchParams?: {
    filter?: string;
  }
};


const Category = async ({ params, searchParams }: CategoryProps) => {

  const categories = [
    {
      handle: "bakery",
      title: "Bakery"
    },
    {
      handle: "biscuits-cookies-rusk",
      title: "Biscuits, Cookies, Rusk"
    },
    {
      handle: "packaged-food",
      title: "Packaged Food"
    },
    {
      handle: "munchies",
      title: "Munchies"
    },
    {
      handle: "dessert",
      title: "Dessert"
    },
    {
      handle: "rice-atta",
      title: "Rice & Atta"
    },
    {
      handle: "essentials",
      title: "Essentials"
    },
    {
      handle: "oils",
      title: "Oils"
    },
    {
      handle: "spices",
      title: "Spices"
    },
    {
      handle: "lentils-flour",
      title: "Lentils & Flour"
    },
    {
      handle: "drinks",
      title: "Drinks"
    },
    {
      handle: "coffee-tea",
      title: "Coffee & Tea"
    },
    {
      handle: "household-laundry",
      title: "Household & Laundry"
    },
    {
      handle: "dairy",
      title: "Dairy"
    },
    {
      handle: "frozen",
      title: "Frozen"
    },
  ];
  const currentCategory = categories.filter(cat => cat.handle === params.category)[0];

  const products = await getCollectionProducts({
    collection: params.category,
    reverse: false,
    sortKey: "CREATED_AT",
  });
  const subcategories = await getCollectionSubcategories(params.category);

  return (
    <div className="w-full flex justify-center">
      <main className="container flex flex-row justify-start items-start">

        <div className="w-18 md:min-w-64 h-full border-r pt-6">
          <Large className="mb-4">{currentCategory.title}</Large>
          <Link href={`/${params.category}`}>
            <div className={`
              w-full h-14 flex flex-row justify-center md:justify-start items-center
              p-1 md:p-8 bg-background hover:bg-lime-100
              text-sm md:text-base
              ${searchParams?.filter ? `` : `bg-lime-200 border-r-4 border-lime-600`}
            `}>
              All
            </div>
          </Link>
          {
            subcategories?.map((subcategory: string) => (
              <Link key={subcategory} href={`/${params.category}?filter=${subcategory}`}>
                <div className={`
                  w-full h-14 flex flex-row justify-center md:justify-start items-center
                  p-1 md:p-8 bg-background hover:bg-lime-100
                  text-sm md:text-base
                  ${searchParams?.filter?.toLowerCase() === subcategory.toLowerCase() ? `bg-lime-200 border-r-4 border-lime-600` : ``}
                `}>
                  {subcategory}
                </div>
              </Link>
            ))
          }

          <hr /><br />

          {
            categories.filter(cat => cat.handle !== params.category).map((category: {handle: string, title: string}) => (
              <Link key={category.handle} href={`/${category.handle}`}>
                <Large className="mb-4 text-neutral-500 hover:text-primary">{category.title}</Large>
              </Link>
            ))
          }
        </div>

        <div className="w-full flex flex-row flex-wrap justify-center items-start mb-16 pt-6">
          {
            // TODO: Filter products by subcategory
            products.map((product: Product) => {
              if (searchParams && searchParams.filter &&
                  subcategories?.includes(searchParams.filter.charAt(0).toUpperCase() + searchParams.filter.slice(1))
                ) { // is a valid filter being applied?
                if (product.tags.includes(searchParams.filter.charAt(0).toUpperCase() + searchParams.filter.slice(1))) {
                  return (
                    <ProductCard
                      key={product.handle}
                      category={params.category}
                      product={product}
                    />
                  )
                }
              } else {
                return (
                  <ProductCard
                    key={product.handle}
                    category={params.category}
                    product={product}
                  />
                )
              }
            })
          }
        </div>

      </main>
    </div>
  );
}

export default Category;