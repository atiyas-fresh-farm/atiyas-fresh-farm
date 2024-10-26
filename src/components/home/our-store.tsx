import Image from "next/image";
import { H2, P } from "@/components/ui/typography";

const OurStore = () => {
  return (
    <div id="our-store" className="flex flex-row justify-center items-center w-full">
      <div className="flex flex-row justify-center items-start flex-wrap w-full p-5 my-10 bg-lime-700 text-primary-foreground rounded-xl mx-2 xl:mx-0">
        <div className="w-full lg:w-1/2 max-w-full h-[420px] relative">
          <Image src="/store-front.jpg" className="rounded-xl aspect-video" fill={true} alt="category" />
        </div>
        <div className="w-full lg:w-1/2 max-w-full h-80 relative pt-8 lg:pt-0 px-8">
          <H2>Our Store</H2>
          <P>
            <b>Address</b>:
            1225 Kennedy Rd unit D & E,
            Scarborough,
            Ontario - M1P 4Y1
            <br />
            <b>Hours</b>:
            9:00 AM - 10:00 PM
          </P>
        </div>
      </div>
    </div>
  )
}

export { OurStore };