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
      <div className="flex flex-row items-center">

        <div className="w-28">
          <ItemCountBtn count={count} />
        </div>

        <p> x ${product.price} = ${product.price * count}</p>
        <TrashIcon className="ml-4" size={24} />

      </div>
    </div>
  );
}

export { CartRow };