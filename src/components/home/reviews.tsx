import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card";
import { P, Large, H2 } from "@/components/ui/typography";
import { StarFull, StarHalf, StarEmpty } from "@/components/ui/icons";
/*import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";*/

const Reviews = () => {

  /*const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )*/

  const reviews = [
    {
      name: "Zack",
      review: "The store has unique variety of products and best customer support. Many donation centers are benefited by the lowest prices of the store",
      rating: 5
    },
    {
      name: "Mujeeb",
      review: "One of the best and clean store I found so far. Staff at Atiya's were super friendly and helpful. If you are looking for Hyderabadi spices, Asli ghee, cookies and or other stuff I think this is the place to be.",
      rating: 5
    },
    {
      name: "Sameeha",
      review: "Always had a good experience shopping in here. Friendly staff, and good deals.",
      rating: 5
    },
    {
      name: "Sameeha",
      review: "Always had a good experience shopping in here. Friendly staff, and good deals.",
      rating: 5
    }
  ];

  //TODO: add autoplay plugin
  //"use client"
  //plugins={[plugin.current]}
  return (
    <div id="our-store" className="flex flex-col justify-center items-center w-full my-16">
      <H2>Customer Reviews</H2>
      <Carousel className="w-full mt-8">
        <CarouselContent>
          {
            reviews.map((review, index) => (
              <CarouselItem className="basis-1/2" key={index}>
                <div className="h-full w-full flex justify-center items-center">
                  <Card className="w-full lg:w-1/2">
                    <CardContent className="flex flex-col h-96 w-full items-center justify-center p-6">
                      <ReviewStars rating={review.rating} />
                      <P className="text-center">{review.review}</P>
                      <Large>{review.name}</Large>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))
          }
        </CarouselContent>
        <CarouselPrevious className="hidden xl:inline-flex" />
        <CarouselNext className="hidden xl:inline-flex" />
      </Carousel>
    </div>
  );
}

const ReviewStars = ({ rating }: { rating: number }) => {

  const shouldPrintHalfStar = rating % 1 !== 0;

  return (
    <div className="flex flex-row space-x-2">
      {
        Array.from({ length: rating }).map((_, i) => (
          <StarFull key={i} />
        ))
      }
      {
        shouldPrintHalfStar ? <StarHalf /> : null
      }
      {
        Array.from({ length: 5-rating }).map((_, i) => (
          <StarEmpty key={i} />
        ))
      }
    </div>
  );
}

export { Reviews };