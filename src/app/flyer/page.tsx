import { H2 } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import Image from 'next/image';

const Flyer = () => {

  const flyers = [
    {
      title: "November Flyer",
      imgSrc: "/flyer/november/thumbnail.jpg",
      imgAlt: "November flyer",
      fileSrc: "/flyer/november/november.pdf"
    },
    {
      title: "October Flyer",
      imgSrc: "/flyer/october/thumbnail.jpg",
      imgAlt: "October flyer",
      fileSrc: "/flyer/october/october.pdf"
    },
    {
      title: "September Flyer",
      imgSrc: "/flyer/september/thumbnail.jpg",
      imgAlt: "September flyer",
      fileSrc: "/flyer/september/september.pdf"
    },
  ];

  return (
    <div className="w-full flex justify-center">
      <main className="container min-h-screen flex flex-col justify-start items-start pt-10 px-4 xl:px-0">
        <div className="w-full flex flex-col md:flex-row flex-wrap justify-between">
          <H2>Flyer page</H2>
          <Button>Download the latest flyer</Button>
        </div>
        <div className="w-full flex flex-row flex-wrap justify-around lg:justify-between items-start my-8 md:my-4">
          {
            flyers.map((flyer) => (
              <FlyerCard key={flyer.title} {...flyer} />
            ))
          }
        </div>
      </main>
    </div>
  );
}

const FlyerCard = ({ imgSrc, imgAlt }:
{
  title: string;
  imgSrc: string;
  imgAlt: string;
  fileSrc: string;
}) => {
  return (
    <div className="relative aspect-[2/3] h-[750px] max-h-[80vh] mb-5 max-w-full">
        <Image src={imgSrc} className="object-contain" fill={true} alt={imgAlt}
          sizes="100vw, (min-width: 768px) 50vw, (min-width: 1024px) 25vw, (min-width: 1280px) 20vw" />
      </div>
  );
}

export default Flyer;