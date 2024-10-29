import { ItemCountBtn } from '@/components/product-button';
import { TrashIcon } from "lucide-react";
import Image from "next/image";

interface CartRowType {
  count: number,
  product: {
    title: string,
    imageURL: string,
    altText: string,
    price: number
  }
}

const CartRow = ({ count, product }: CartRowType) => {
  return (
    <div className="w-full flex flex-row justify-between items-center mt-8">
      <div className="flex flex-row items-center">
        <div className="w-16 aspect-square rounded relative">
          <Image src={product.imageURL} fill={true} alt={product.altText} className="rounded" />
        </div>
        <p className="ml-4">{ product.title }</p>
      </div>
      <div className="grid grid-cols-3">

        <div className="col-span-1 flex justify-center items-center">
          <ItemCountBtn count={count} />
        </div>
        
        <div className="col-span-1 flex justify-end items-center">
          <p>${product.price * count}</p>
        </div>
        <div className="col-span-1 flex justify-end items-center">
          <TrashIcon className="ml-4 col-span-1" size={24} />
        </div>

      </div>
    </div>
  );
}

const CartRowSm = ({ count, product }: CartRowType) => {
  return (
    <div className="w-full flex flex-col justify-start items-start mt-8">

      <div className="w-full flex flex-row justify-between items-center">
        <div className="flex flex-row items-center">
          <div className="w-16 aspect-square rounded relative">
            <Image src={product.imageURL} fill={true} alt={product.altText} className="rounded" />
          </div>
          <p className="ml-4 text-wrap text-sm lg:text-base pr-2">{ product.title }</p>
        </div>
        <div className="flex justify-end items-center pr-2">
          <p className="text-sm lg:text-base">${product.price * count}</p>
        </div>
      </div>
      
      <div className="w-full flex flex-row justify-between items-center">
        <div className="flex justify-start items-end underline cursor-pointer text-sm lg:text-base">
          Remove
        </div>
        <div className="lex justify-end items-center">
          <ItemCountBtn count={count} />
        </div>
      </div>

    </div>
  );
}

export { CartRow, CartRowSm };