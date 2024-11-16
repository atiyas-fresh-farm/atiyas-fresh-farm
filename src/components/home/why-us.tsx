import { H2, H3, P } from "@/components/ui/typography";
import Image from "next/image";

const WhyUs = () => {

  const sections = [
    {
      image: "/halal.jpg",
      title: "Organic, Local, Fresh & Halal",
      description: "We Beleive that what we eat come from sources as close as possible to remain fresh. Our all products are 100% halal ; shopping with Atiya's means you're supporting your local food community."
    },
    {
      image: "/dollar.jpg",
      title: "How are we different",
      description: "We differentiate from others with our competitive prices and a vast collection of different brand items in all the categories of the food supplies. Customer satisfaction is our prime priority."
    },
    {
      image: "/approved.jpg",
      title: "Favorite Brands",
      description: "We believe getting your all favorite brands should be easy and we make this possible through our carefully chosen suppliers, halal meat, and dedicated staff and management. So, all you need to worry about is how to enjoy your favorite foods."
    },
  ];

  return (
    <div id="why-us" className="flex flex-row justify-center items-center w-full">
      <div className="flex flex-col justify-center items-center w-full p-5 mt-6 mb-14 text-primary rounded-xl mx-2 xl:mx-0">
        
        <H2>Why Choose Us</H2>
        <div className="w-full flex flex-col lg:flex-row">
          {
            sections.map((section, index) => (
              <div key={section.title + index} className="w-full lg:w-1/3 flex flex-col justify-start items-center m-0 lg:m-4">
                <div className="w-32 h-32 relative rounded-md mx-2 mt-2 mb-8 overflow-hidden">
                  <Image src={section.image} fill={true} alt={section.title}
                    className={`rounded-xl object-contain`}
                  />
                </div>
                <H3>{section.title}</H3>
                <P className="text-justify">{section.description}</P>
              </div>
            ))
          }
        </div>

      </div>
    </div>
  )
}

export { WhyUs };