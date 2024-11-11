import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { H2, H3 } from "@/components/ui/typography";
import Link from "next/link";

const Categories = (
  { title, categories }:
  {
    title: string,
    categories: Array<{ handle: string, imageSrc: StaticImport|string, title: string }>
  }
) => {
  return (
    <div id="explore-categories" className="mb-10 px-2 xl:px-0">

      <H2 className="w-full text-center">{title}</H2>
      <div className="w-full flex flex-row flex-wrap justify-center items-center my-4">
        {
          categories.map((category, index) => (
            <Link href={`/${category.handle}`} key={category.handle + index} className="flex flex-col justify-center items-center mb-4">
              <div className="w-64 h-64 relative rounded-md m-2 overflow-hidden">
                <Image src={category.imageSrc} fill={true} alt={category.title}
                  className={`rounded-xl object-contain transition-transform duration-300 ease-in-out hover:scale-105 scale-100`}
                />
              </div>
              <H3>{category.title}</H3>
            </Link>
          ))
        }
      </div>

    </div>
  )
}

export { Categories };