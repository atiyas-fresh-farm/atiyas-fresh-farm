import { Button } from "@/components/ui/button";
import { H2, H3, Large, P } from "@/components/ui/typography";

const Product = () => {
  return (
    <div className="w-full flex justify-center">
      <main className="container flex flex-col justify-start items-start pt-10">

        <div className="w-full flex flex-row justify-center md:space-x-4 items-start">
          <div className="w-[550px] h-full aspect-square bg-neutral-300 rounded-md"></div>
          <div className="w-[550px] h-full aspect-square flex flex-col justify-start items-start">
            <span>bread crumbs...</span>
            <H2>Swaroski Necklace</H2>
            <H3>$25.00</H3>
            <Button>Add to Cart</Button>
            <div>
              <Large>Product Description</Large>
              <P>
                slkfjlskadj 
                f lkjasf lkjasf lksfjaklsf
                lkjjkl asf
              </P>
            </div>
          </div>
        </div>

        <H2>Related Products</H2>
        <div className="w-full flex flex-row flex-wrap justify-center items-start">
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

export default Product;