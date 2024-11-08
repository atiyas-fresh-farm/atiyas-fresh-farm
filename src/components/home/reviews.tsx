import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card";
import { P, Large } from "@/components/ui/typography";


const Reviews = () => {
  return (
    <div id="our-store" className="flex flex-row justify-center items-center w-full mb-8">
      <Carousel className="w-full">
        <CarouselContent>
          <CarouselItem>
            <div className="h-full w-full flex justify-center items-center">
              <Card className="w-1/2">
                <CardContent className="flex flex-col h-96 w-full items-center justify-center p-6">
                  <P className="text-center">The store has unique variety of products and best customer support. Many donation centers are benefited by the lowest prices of the store</P>
                  <Large>Zack</Large>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="h-full w-full flex justify-center items-center">
              <Card className="w-1/2">
                <CardContent className="flex flex-col h-96 w-full items-center justify-center p-6">
                  <P className="text-center">The store has unique variety of products and best customer support. Many donation centers are benefited by the lowest prices of the store</P>
                  <Large>Zack</Large>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="h-full w-full flex justify-center items-center">
              <Card className="w-1/2">
                <CardContent className="flex flex-col h-96 w-full items-center justify-center p-6">
                  <P className="text-center">The store has unique variety of products and best customer support. Many donation centers are benefited by the lowest prices of the store</P>
                  <Large>Zack</Large>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export { Reviews };