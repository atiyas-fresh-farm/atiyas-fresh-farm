import Image from 'next/image';
import { Large, P, Muted } from '@/components/ui/typography';
import { Button } from '@/components/ui/button';

const ProductCard = ({ image="#", name="Image of a product", count, price }:
  {
    image?: string,
    name?: string,
    count?: string,
    price?: string
  }
) => {
  return (
    <div className="w-48 mx-3 mb-6 rounded-md">
      <div className="w-full aspect-square border rounded-t-md relative">
        <Image src={image} fill={true} alt={name} />
      </div>
      <div className="py-2">
        <p className="font-semibold truncate">{name}</p>
        <Muted>{count}</Muted>
        <P>{price}</P>
      </div>
      <div>
        <Button className="w-full p-2 bg-primary text-white rounded-t-none rounded-b-md">Add to Cart</Button>
        {/*<div className="grid grid-cols-4 w-full h-10">
          <button className="col-span-1 rounded-bl-md border px-2 hover:bg-secondary font-semibold">-</button>
          <input type="text" className="col-span-2 outline-none border-y p-2 text-center" defaultValue={1} />
          <button className="rounded-br-md border px-2 col-span-1 hover:bg-secondary font-semibold">+</button>
        </div>*/}
      </div>
    </div>
  );
}

export { ProductCard };