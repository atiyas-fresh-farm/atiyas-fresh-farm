import Image from "next/image";
import { H2, P } from "@/components/ui/typography";

const OurStore = () => {
  return (
    <div id="our-store" className="flex flex-row flex-wrap w-full my-10">
      <div className="w-1/2 min-w-[400px] max-w-full h-96 relative">
        <Image src="/home/map.png" className="rounded-lg" fill={true} alt="category" />
      </div>
      <div className="w-1/2 min-w-[400px] max-w-full h-96 relative px-8 py-4">
        <H2>Our Store</H2>
        <P>
          Come visit us at <br />
          1225 Kennedy Rd unit D & E,
          Scarborough,
          Ontario - M1P 4Y1
        </P>
      </div>
    </div>
  )
}

export { OurStore };