import { ProductCard } from "@/components/product-card";

const Category = () => {
  return (
    <div className="w-full flex justify-center">
      <main className="container flex flex-row justify-start items-start pt-10">
        <div className="min-w-96 ">
          <div className="w-64 h-20 flex flex-row justify-start items-center p-8 bg-neutral-300">
            All
          </div>
          <div className="w-64 h-20 flex flex-row justify-start items-center p-8 bg-white">
            Necklace
          </div>
          <div className="w-64 h-20 flex flex-row justify-start items-center p-8 bg-white">
            Rings
          </div>
          <div className="w-64 h-20 flex flex-row justify-start items-center p-8 bg-white">
            Pendant
          </div>
        </div>
        <div className="w-full flex flex-row flex-wrap justify-center items-start">
          <ProductCard name="Dempster White Bread" count="1 pack" price="$3.29" />
          <div className="w-48 h-72 bg-neutral-300 mx-3 mb-6 rounded-md"></div>
          <div className="w-48 h-72 bg-neutral-300 mx-3 mb-6 rounded-md"></div>
          <div className="w-48 h-72 bg-neutral-300 mx-3 mb-6 rounded-md"></div>
          <div className="w-48 h-72 bg-neutral-300 mx-3 mb-6 rounded-md"></div>

          <div className="w-48 h-72 bg-neutral-300 mx-3 mb-6 rounded-md"></div>
          <div className="w-48 h-72 bg-neutral-300 mx-3 mb-6 rounded-md"></div>
          <div className="w-48 h-72 bg-neutral-300 mx-3 mb-6 rounded-md"></div>
          <div className="w-48 h-72 bg-neutral-300 mx-3 mb-6 rounded-md"></div>
          <div className="w-48 h-72 bg-neutral-300 mx-3 mb-6 rounded-md"></div>

          <div className="w-48 h-72 bg-neutral-300 mx-3 mb-6 rounded-md"></div>
          <div className="w-48 h-72 bg-neutral-300 mx-3 mb-6 rounded-md"></div>
          <div className="w-48 h-72 bg-neutral-300 mx-3 mb-6 rounded-md"></div>
          <div className="w-48 h-72 bg-neutral-300 mx-3 mb-6 rounded-md"></div>
          <div className="w-48 h-72 bg-neutral-300 mx-3 mb-6 rounded-md"></div>
        </div>
      </main>
    </div>
  );
}

export default Category;