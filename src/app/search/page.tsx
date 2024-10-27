import { Large, Small } from '@/components/ui/typography';
import { ProductCard } from "@/components/product-card";
import { StaticImageData } from 'next/image';

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

const Search = () => {

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

  return (
    <div className="w-full flex justify-center">
      <main className="container flex flex-col justify-start items-start pt-6">
        <Large>Search Results</Large>
        <Small>Showing 1-20 of 100 results</Small>
        <br />
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-2 justify-start items-start mb-6">
          
          {
            products.map((product: ProductType) => {
              return (
                <div key={product.handle} className="col-span-1 flex justify-center">
                  <ProductCard
                    category={product.categoryHandle}
                    handle={product.handle}
                    name={product.title}
                    count="1 pack"
                    image={product.image ? product.image.src : "/bread.png"}
                    price={typeof product.price === "number" ? product.price : product.price.current}
                  />
                </div>
              )
            })
          }

        </div>
      </main>
    </div>
  );
}

export default Search;