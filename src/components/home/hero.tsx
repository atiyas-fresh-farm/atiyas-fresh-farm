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

  return (
    <div className="w-full h-[350px] lg:h-[650px] max-h-[65vh] border mb-12">
      <Carousel className="w-full h-[350px] lg:h-[650px]">
        <CarouselContent>
          <CarouselItem className="w-full h-[350px] lg:h-[650px] max-h-[65vh] relative">
            <Image src="/home/welcome-banner.png" style={{ objectFit: 'cover' }} fill={true} priority={true} alt="Welcome banner" />
          </CarouselItem>
          <CarouselItem className="w-full h-[350px] lg:h-[650px] max-h-[65vh] relative">
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