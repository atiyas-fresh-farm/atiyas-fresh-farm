import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const Hero = ({imageSrc, altText="hero banner"}: {imageSrc: StaticImport|string, altText: string}) => {
  return (
    <div className="w-full h-[550px] relative bg-neutral-300 border mb-16">
      <Image src={imageSrc} fill={true} alt={altText} />
    </div>
  )
}

export { Hero };