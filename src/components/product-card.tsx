import Image from 'next/image';
import { P, Muted } from '@/components/ui/typography';
import { AddToCart } from '@/components/add-to-cart';
import { StaticImageData } from "next/image";
import Link from 'next/link';

const ProductCard = ({ image="#", category, handle, name="Image of a product", count, price }:
  {
    image?: string|StaticImageData,
    category?: string,
    handle?: string,
    name?: string,
    count?: string,
    price?: string|number
  }
) => {
  return (
    <div className="w-40 md:w-48 mx-1 md:mx-3 mb-6 rounded-md">
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
        <AddToCart />
      </div>
    </div>
  );
}

export { ProductCard };