import { H2 } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from 'next/link';
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
      <main className="container min-h-screen flex flex-col justify-start items-start pt-10 px-2 lg:px-0">
        <div className="w-full flex flex-col md:flex-row flex-wrap justify-between">
          <H2>Flyer page</H2>
          <Button>Download the latest flyer</Button>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-start items-start my-4">
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

const FlyerCard = ({ title, imgSrc, imgAlt, fileSrc }:
{
  title: string;
  imgSrc: string;
  imgAlt: string;
  fileSrc: string;
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{ title }</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative aspect-[2/3] w-full">
          <Image src={imgSrc} className="object-contain" fill={true} alt={imgAlt} />
        </div>
        <div className="flex justify-between underline mt-2">
          <Link href={fileSrc} target="_blank">View</Link>
          <Link href={fileSrc} download target="_blank">Download</Link>
        </div>
      </CardContent>
    </Card>
  );
}

export default Flyer;