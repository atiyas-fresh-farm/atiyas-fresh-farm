import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const SpecialSections = ({ images }: { images: Array<{src: StaticImport|string, alt: string}>}) => {
  return (
    <div className="w-full flex flex-row justify-center items-center">
      <Carousel className="w-full">
        <CarouselContent>
          {
            images.map((image, index) => (              
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="w-64 h-40 relative rounded-md">
                  <Image src={image.src} fill={true} alt={image.alt} />
                </div>
              </CarouselItem>
            ))
          }
        </CarouselContent>
        <CarouselPrevious className="hidden xl:inline" />
        <CarouselNext className="hidden xl:inline" />
      </Carousel>
    </div>
  )
}

export { SpecialSections };