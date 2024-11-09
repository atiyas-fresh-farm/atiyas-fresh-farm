import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

type HeroProps = Array<{
  src: StaticImport|string,
  alt: string
}>

//TODO: make the props required
const Hero = ({ images }: { images?: HeroProps }) => {

  console.log(images);

  return (
    <div className="w-full h-[350px] lg:h-[650px] max-h-screen border mb-12">
      <Carousel className="w-full h-[350px] lg:h-[650px]">
        <CarouselContent>
          <CarouselItem className="w-full h-[350px] lg:h-[650px] max-h-screen relative">
            <Image src="/home/welcome-banner.png" fill={true} objectFit="cover" alt="Welcome banner" />
          </CarouselItem>
          <CarouselItem className="w-full h-[350px] lg:h-[650px] max-h-screen relative">
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