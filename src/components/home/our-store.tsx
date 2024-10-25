import Image from "next/image";
import { H2, P } from "@/components/ui/typography";

const OurStore = () => {
  return (
    <div id="our-store" className="flex flex-row flex-wrap w-full p-5 my-10 bg-lime-700 text-primary-foreground rounded-xl">
      <div className="w-1/2 min-w-[400px] max-w-full h-[420px] relative">
        <Image src="/store-front.jpg" className="rounded-xl aspect-video" fill={true} alt="category" />
      </div>
      <div className="w-1/2 min-w-[400px] max-w-full h-96 relative px-8">
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
  )
}

export { OurStore };