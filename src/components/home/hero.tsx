"use client"

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

//TODO: make the props required
const Hero = () => {

  const heightStyling = `h-[250px] md:h-[400px] lg:h-[500px] xl:h-[650px] 2xl:h-[800px] max-h-[65vh]`;

  return (
    <div className={`w-full ${heightStyling} border mb-12`}>
      <Carousel className={`w-full ${heightStyling}`}>
        <CarouselContent>
          <CarouselItem className={`w-full ${heightStyling} relative`}>
            <Image src="/home/welcome-banner.png" style={{ objectFit: 'cover' }} fill={true} priority={true} alt="Welcome banner" />
          </CarouselItem>
          <CarouselItem className={`w-full ${heightStyling} relative"`}>
            <Image src="/home/home-banner.png" fill={true} objectFit="cover" alt="Home banner" />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="hidden xl:inline-flex" />
        <CarouselNext className="hidden xl:inline-flex" />
      </Carousel>
    </div>
  )
}

export { Hero };