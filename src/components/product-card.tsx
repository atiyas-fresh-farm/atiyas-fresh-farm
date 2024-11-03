import Image from 'next/image';
import { P } from '@/components/ui/typography';
import { AddToCart } from '@/components/product-button';
import { Product } from '@/lib/shopify/types';
import Link from 'next/link';

const ProductCard = ({ category, product }:
  {
    category: string,
    product: Product
  }
) => {

  const {
    //id,
    title,
    //description,
    handle,
    //variants,
    featuredImage: image,
    priceRange,
    //seo,
    //tags
  } = product;
  
  return (
    <div className="w-40 md:w-48 mx-1 md:mx-3 mb-6 rounded-md">
      <Link href={`/${category}/${handle}`}>
        <div className="w-full aspect-square border rounded-t-md relative">
          <Image src={image ? image.url : '/bread.png'} className="rounded-t-md" fill={true} alt={title} />
        </div>
      </Link>
      <Link href={`/${category}/${handle}`}>
        <div className="py-2">
          <p className="font-semibold truncate">{title}</p>
          <P>${priceRange.maxVariantPrice.amount}</P>
        </div>
      </Link>
      <div>
        <AddToCart product={product} />
      </div>
    </div>
  );
}

export { ProductCard };