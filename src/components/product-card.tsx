import Image from 'next/image';
import { P, Muted } from '@/components/ui/typography';
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
    compareAtPriceRange,
    priceRange,
    //seo,
    //tags
  } = product;

  const price = priceRange.maxVariantPrice.amount;
  const prevPrice = compareAtPriceRange.maxVariantPrice.amount;
  
  return (
    <div className="w-40 md:w-48 mx-1 md:mx-3 mb-6 rounded-md
      transition-shadow shadow-neutral-200 shadow-md hover:shadow-neutral-300 hover:shadow-lg">
      <Link href={`/${category}/${handle}`}>
        <div className="w-full aspect-square rounded-t-md relative">
          <Image src={image ? image.url : '/file-image.svg'} className="rounded-t-md" fill={true} alt={title} />
        </div>
      </Link>
      <Link href={`/${category}/${handle}`}>
        <div className="p-2">
          <p className="font-semibold truncate">{title}</p>
          <span className="flex flex-row items-center space-x-2">
            <P>${price}</P>
            {
              Number(prevPrice)!==0 &&
              <Muted className='line-through'>${prevPrice}</Muted>
            }
          </span>
        </div>
      </Link>
      <div>
        <AddToCart product={product} />
      </div>
    </div>
  );
}

export { ProductCard };