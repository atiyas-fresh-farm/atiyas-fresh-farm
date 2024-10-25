import Image from 'next/image';
import { P, Muted } from '@/components/ui/typography';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const ProductCard = ({ image="#", category, handle, name="Image of a product", count, price }:
  {
    image?: string,
    category?: string,
    handle?: string,
    name?: string,
    count?: string,
    price?: string
  }
) => {
  return (
    <div className="w-48 mx-3 mb-6 rounded-md">
      <Link href={`/${category}/${handle}`}>
        <div className="w-full aspect-square border rounded-t-md relative">
          <Image src={image} className="rounded-t-md" fill={true} alt={name} />
        </div>
      </Link>
      <Link href={`/${category}/${handle}`}>
        <div className="py-2">
          <p className="font-semibold truncate">{name}</p>
          <Muted>{count}</Muted>
          <P>${price}</P>
        </div>
      </Link>
      <div>
        <Button className="w-full p-2 bg-lime-700 hover:bg-lime-600 text-primary-foreground rounded-t-none rounded-b-md">Add to Cart</Button>
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