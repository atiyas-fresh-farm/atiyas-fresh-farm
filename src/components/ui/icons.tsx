import Image from 'next/image';
import StarEmptyImage from '/public/icons/star-empty.svg';
import StarHalfImage from '/public/icons/star-half.svg';
import StarFullImage from '/public/icons/star-full.svg';
import WhatsAppImage from '/public/icons/wa-icon.svg';

const StarEmpty = ({ className }: { className?: string }) => {

  const size = className ? className : "h-8 w-8";
  return (
    <span className={`relative ${size} ${className}`}>
      <Image src={StarEmptyImage} fill={true} alt="Image of empty golden star" />
    </span>
  );
};

const StarHalf = ({ className }: { className?: string }) => {

  const size = className ? className : "h-8 w-8";
  return (
    <span className={`relative ${size} ${className}`}>
      <Image src={StarHalfImage} fill={true} alt="Image of half-filled golden star" />
    </span>
  );
};

const StarFull = ({ className }: { className?: string }) => {

  const size = className ? className : "h-8 w-8";
  return (
    <span className={`relative ${size} ${className}`}>
      <Image src={StarFullImage} fill={true} alt="Image of filled golden star" />
    </span>
  );
};

const WhatsAppIcon = ({ className }: { className?: string }) => {

  const size = className ? className : "h-8 w-8";
  return (
    <span className={`relative ${size} ${className}`}>
      <Image src={WhatsAppImage} fill={true} alt="WhatsApp's logo" />
    </span>
  );
};

export { StarEmpty, StarHalf, StarFull, WhatsAppIcon };