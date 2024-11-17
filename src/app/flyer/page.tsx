import { H2, P } from "@/components/ui/typography";
import Link from "next/link";

const Flyer = () => {
  return (
    <div className="w-full flex justify-center">
      <main className="container flex flex-col justify-start items-start pt-10 px-2 lg:px-0">
        <H2>Flyer page</H2>
        <div className="w-full flex flex-row flex-wrap justify-between items-center mb-4">
          <P>This is the Flyer page.</P>
        </div>
        <div className="flex flex-row space-x-4 mb-8">
          <Link href="/" className="underline">Continue shopping</Link>
          <Link href="/order-history" className="underline">Order History</Link>
        </div>
      </main>
    </div>
  );
}

export default Flyer;