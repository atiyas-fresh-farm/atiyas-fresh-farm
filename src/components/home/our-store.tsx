import { H2, P } from "@/components/ui/typography";

const OurStore = () => {
  return (
    <div id="our-store" className="flex flex-row justify-center items-center w-full">
      <div className="flex flex-col justify-center items-center flex-wrap w-full p-5 my-10 bg-lightGray dark:bg-neutral-800 text-primary rounded-xl mx-2 xl:mx-0">
        
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
        <iframe
          width="100%"
          height="550"
          className="b-0 mt-8"
          loading="lazy"
          allowFullScreen={true}
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_MAPS_API_KEY}
            &q=Atiya's+Fresh+Farm`}>
        </iframe>

      </div>
    </div>
  )
}

export { OurStore };