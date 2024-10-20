import Image from 'next/image';
import { Large, P, Small } from '@/components/ui/typography';

const ProductCard = ({ image="#", name="Image of a product", count, price }:
  {
    image?: string,
    name?: string,
    count?: string,
    price?: string
  }
) => {
  return (
    <div className="w-48 h-72 border mx-3 mb-6 rounded-md">
      <div className="w-full aspect-square bg-neutral-300">
        <img src={image} width={192} height={192} alt={name} />
      </div>
      <Small className="truncate">{name}</Small>
      <Small>{count}</Small>
      <br />
      <P>{price}</P>
    </div>
  );
}

export { ProductCard };