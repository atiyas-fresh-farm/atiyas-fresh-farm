import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Hero = ({imageSrc, altText="hero banner"}: {imageSrc: StaticImport|string, altText: string}) => {
  return (
    <div className="w-full h-[650px] max-h-screen border mb-14">
      <Carousel className="w-full h-[650px]">
        <CarouselContent>
          <CarouselItem className="w-full h-[650px] max-h-screen relative">
            <Image src="/home/home-banner.png" fill={true} objectFit="cover" alt={altText} />
          </CarouselItem>
          <CarouselItem className="w-full h-[650px] max-h-screen relative">
            <Image src={imageSrc} fill={true} alt={altText} />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="hidden xl:inline-flex" />
        <CarouselNext className="hidden xl:inline-flex" />
      </Carousel>
    </div>
  )
}

export { Hero };