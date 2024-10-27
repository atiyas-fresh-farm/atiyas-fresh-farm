import { ProductCard } from "@/components/product-card";
import { StaticImageData } from "next/image";
//import { shopifyClient } from "@/lib/shopify/client";
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
  handle: string,
  title: string,
  categoryHandle: string,
  subcategories: Array<string>,
  price: number | {
    current: number,
    original: number
  },
  image: {
    src: string|StaticImageData,
    alt: string
  }
}

const Category = async ({ params, searchParams }: CategoryProps) => {

  const products = [
    {
      handle: "apple-gala",
      title: "Apple Gala 4pc",
      categoryHandle: "fruits-vegetables",
      subcategories: ["fruit"],
      price: 4.25,
      image: {
        src: "/fruits-vegetables/apple-gala.jpeg",
        alt: "apple gala"
      }
    },
    {
      handle: "baby-orange",
      title: "Baby Orange 4pc",
      categoryHandle: "fruits-vegetables",
      subcategories: ["fruit"],
      price: 3.25,
      image: {
        src: "/fruits-vegetables/baby-orange.jpeg",
        alt: "baby orange"
      }
    },
    {
      handle: "banana",
      title: "Banana 100g",
      categoryHandle: "fruits-vegetables",
      subcategories: ["fruit"],
      price: 2.5,
      image: {
        src: "/fruits-vegetables/banana.jpeg",
        alt: "banana"
      }
    },
    {
      handle: "blue-berries",
      title: "Blue Berries 100g",
      categoryHandle: "fruits-vegetables",
      subcategories: ["fruit"],
      price: 2.5,
      image: {
        src: "/fruits-vegetables/blue-berry.jpg",
        alt: "blue berries"
      }
    },
    {
      handle: "coconut",
      title: "Coconut 100g",
      categoryHandle: "fruits-vegetables",
      subcategories: ["fruit", "protein"],
      price: 2.5,
      image: {
        src: "/fruits-vegetables/coconut.jpeg",
        alt: "coconut"
      }
    },
    {
      handle: "dragon fruit",
      title: "Dragon Fruit 100g",
      categoryHandle: "fruits-vegetables",
      subcategories: ["fruit"],
      price: 2.5,
      image: {
        src: "/fruits-vegetables/drangon-fruit.jpeg",
        alt: "dragon fruit"
      }
    },
    {
      handle: "garlic",
      title: "Garlic 100g",
      categoryHandle: "fruits-vegetables",
      subcategories: ["vegetable"],
      price: 2.5,
      image: {
        src: "/fruits-vegetables/garlic.jpeg",
        alt: "garlic"
      }
    },
    {
      handle: "ginger",
      title: "Ginger 100g",
      categoryHandle: "fruits-vegetables",
      subcategories: ["vegetable"],
      price: 2.5,
      image: {
        src: "/fruits-vegetables/ginger.jpeg",
        alt: "ginger"
      }
    },
    {
      handle: "kiwi",
      title: "Kiwi 100g",
      categoryHandle: "fruits-vegetables",
      subcategories: ["fruit"],
      price: 2.5,
      image: {
        src: "/fruits-vegetables/kiwi.jpeg",
        alt: "kiwi"
      }
    },
    {
      handle: "mosambi",
      title: "Mosambi 100g",
      categoryHandle: "fruits-vegetables",
      subcategories: ["fruit"],
      price: 2.5,
      image: {
        src: "/fruits-vegetables/mosambi.jpeg",
        alt: "mosambi"
      }
    },
    {
      handle: "onion",
      title: "Onion 100g",
      categoryHandle: "fruits-vegetables",
      subcategories: ["vegetable"],
      price: 2.5,
      image: {
        src: "/fruits-vegetables/onion.jpeg",
        alt: "onion"
      }
    },
    {
      handle: "pomegranate",
      title: "Pomegranate 100g",
      categoryHandle: "fruits-vegetables",
      subcategories: ["fruit"],
      price: 2.5,
      image: {
        src: "/fruits-vegetables/pomegranate.jpeg",
        alt: "pomegranate"
      }
    },
    {
      handle: "potatoes",
      title: "Potatoes 100g",
      categoryHandle: "fruits-vegetables",
      subcategories: ["vegetable"],
      price: 2.5,
      image: {
        src: "/fruits-vegetables/potatoes.jpeg",
        alt: "potatoes"
      }
    },
  ];

  const subcategories = [
    "Fruit",
    "Vegetable",
    "Grain",
    "Dairy",
    "Protein",
  ];

  return (
    <div className="w-full flex justify-center">
      <main className="container flex flex-row justify-start items-start">

        <div className="min-w-96">
          <Link href={`/${params.category}`}>
            <div className={`
              w-64 h-14 flex flex-row justify-start items-center
              p-8 bg-background hover:bg-accent border-r
              ${searchParams?.filter ? `` : `bg-neutral-300`}
            `}>
              All
            </div>
          </Link>
          {
            subcategories.map((subcategory: string) => (
              <Link key={subcategory} href={`/${params.category}?filter=${subcategory}`}>
                <div className={`
                  w-64 h-14 flex flex-row justify-start items-center
                  p-8 bg-background hover:bg-accent border-r
                  ${searchParams?.filter?.toLowerCase() === subcategory.toLowerCase() ? `bg-neutral-300` : ``}
                `}>
                  {subcategory}
                </div>
              </Link>
            ))
          }
        </div>

        <div className="w-full flex flex-row flex-wrap justify-center items-start">
          {
            products.map((product: ProductType) => {
              if (searchParams && searchParams.filter && subcategories.includes(searchParams.filter)) {
                if (product.subcategories.includes(searchParams.filter.toLowerCase())) {
                  return (
                    <ProductCard
                      key={product.handle}
                      category={product.categoryHandle}
                      handle={product.handle}
                      name={product.title}
                      count="1 pack"
                      image={product.image ? product.image.src : "/bread.png"}
                      price={typeof product.price === "number" ? product.price : product.price.current}
                    />
                  )
                }
              } else {
                return (
                  <ProductCard
                    key={product.handle}
                    category={product.categoryHandle}
                    handle={product.handle}
                    name={product.title}
                    count="1 pack"
                    image={product.image ? product.image.src : "/bread.png"}
                    price={typeof product.price === "number" ? product.price : product.price.current}
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