import { H2 } from "@/components/ui/typography";

const Home = () => {
  return (
    <div className="w-full flex justify-center">
      <main className="container flex flex-col justify-start items-start pt-10">

        <div className="w-full h-[500px] bg-neutral-300 rounded-md mb-10"></div>
        <div className="w-full flex flex-row justify-between items-center">
          <div className="w-64 h-40 bg-neutral-300 rounded-md"></div>
          <div className="w-64 h-40 bg-neutral-300 rounded-md"></div>
          <div className="w-64 h-40 bg-neutral-300 rounded-md"></div>
          <div className="w-64 h-40 bg-neutral-300 rounded-md"></div>
          <div className="w-64 h-40 bg-neutral-300 rounded-md"></div>
        </div>
        
        <div id="explore-categories" className="my-10">
          <H2>Explore Categories</H2>
          <div className="w-full flex flex-row flex-wrap justify-center items-center my-4">
            <div className="w-52 h-52 bg-neutral-300 rounded-md m-2"></div>
            <div className="w-52 h-52 bg-neutral-300 rounded-md m-2"></div>
            <div className="w-52 h-52 bg-neutral-300 rounded-md m-2"></div>
            <div className="w-52 h-52 bg-neutral-300 rounded-md m-2"></div>
            <div className="w-52 h-52 bg-neutral-300 rounded-md m-2"></div>
            <div className="w-52 h-52 bg-neutral-300 rounded-md m-2"></div>

            <div className="w-52 h-52 bg-neutral-300 rounded-md m-2"></div>
            <div className="w-52 h-52 bg-neutral-300 rounded-md m-2"></div>
            <div className="w-52 h-52 bg-neutral-300 rounded-md m-2"></div>
            <div className="w-52 h-52 bg-neutral-300 rounded-md m-2"></div>
            <div className="w-52 h-52 bg-neutral-300 rounded-md m-2"></div>
            <div className="w-52 h-52 bg-neutral-300 rounded-md m-2"></div>

            <div className="w-52 h-52 bg-neutral-300 rounded-md m-2"></div>
            <div className="w-52 h-52 bg-neutral-300 rounded-md m-2"></div>
            <div className="w-52 h-52 bg-neutral-300 rounded-md m-2"></div>
            <div className="w-52 h-52 bg-neutral-300 rounded-md m-2"></div>
            <div className="w-52 h-52 bg-neutral-300 rounded-md m-2"></div>
            <div className="w-52 h-52 bg-neutral-300 rounded-md m-2"></div>
          </div>
        </div>

      </main>
    </div>
  );
}

export default Home;