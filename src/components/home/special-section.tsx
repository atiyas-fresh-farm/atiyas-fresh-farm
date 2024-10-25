import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const SpecialSections = ({ images }: { images: Array<{src: StaticImport|string, alt: string}>}) => {
  return (
    <div className="w-full flex flex-row justify-between items-center">
      {
        images.map((image, index) => (
          <div key={index} className="w-64 h-40 relative rounded-md">
            <Image src={image.src} fill={true} alt={image.alt} />
          </div>
        ))
      }
    </div>
  )
}

export { SpecialSections };