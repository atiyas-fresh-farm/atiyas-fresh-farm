import { ItemCountBtn, DeleteCartItem } from '@/components/product-button';
import { TrashIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartItem } from "@/lib/shopify/types";
import Image from "next/image";

interface CartRowType {
  index: number
  count: number
  product: {
    title: string
    imageURL: string
    altText: string
    price: number
  },
  editable?: boolean
  deleteRow?: (i: number) => void
}

const CartRow = ({ count, product, editable=true }: CartRowType) => {
  return (
    <div className="w-full flex flex-row justify-between items-center mt-8">
      <div className="flex flex-row items-center">
        <div className="w-16 aspect-square rounded relative">
          <Image src={product.imageURL} fill={true} alt={product.altText} className="rounded" />
        </div>
        <p className="ml-4">{ product.title }</p>
      </div>
      <div className={`grid ${editable ? "grid-cols-3" : "grid-cols-2"}`}>
        
        <div className="min-w-20 col-span-1 flex justify-center items-center">
          {
            editable ?
            <ItemCountBtn count={count} /> :
            count + " count"
          }
        </div>
        
        <div className="col-span-1 flex justify-end items-center">
          <p>${product.price * count}</p>
        </div>

        {
          editable &&
          <div className="col-span-1 flex justify-end items-center">
            <Button className="col-span-1" variant="outline" size="icon">
              <TrashIcon size={24} />
            </Button>
          </div>
        }

      </div>
    </div>
  );
}

const CartRowSm = ({ row }: { row: CartItem }) => {

  const image = row.merchandise.product.featuredImage;

  return (
    <div className="w-full flex flex-col justify-start items-start mt-8">

      <div className="w-full flex flex-row justify-between items-center">
        <div className="flex flex-row items-center">
          <div className="w-16 aspect-square rounded relative">
            <Image src={image ? image.url : "/bread.png"} fill={true} alt={image?.altText} className="rounded" />
          </div>
          <p className="ml-4 text-wrap text-sm lg:text-base pr-2">{ row.merchandise.product.title }</p>
        </div>
        <div className="flex justify-end items-center pr-2">
          <p className="text-sm lg:text-base">${ Number(row.cost.totalAmount.amount) }</p>
        </div>
      </div>
      
      <div className="w-full flex flex-row justify-between items-center">
        <DeleteCartItem variantID={row.merchandise.id} />
        <div className="lex justify-end items-center">
          <ItemCountBtn count={row.quantity} variantID={row.merchandise.id} />
        </div>
      </div>

    </div>
  );
}

export { CartRow, CartRowSm };