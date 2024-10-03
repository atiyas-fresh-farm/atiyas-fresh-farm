const Home = () => {
  return (
    <div className="w-full flex justify-center">
      <main className="container flex flex-col justify-start items-start pt-10">

        <div className="w-full h-[500px] bg-neutral-300 rounded-md mb-10"></div>
        <div className="w-full flex flex-row justify-between items-center">
          <div className="w-64 h-32 bg-neutral-300 rounded-md"></div>
          <div className="w-64 h-32 bg-neutral-300 rounded-md"></div>
          <div className="w-64 h-32 bg-neutral-300 rounded-md"></div>
          <div className="w-64 h-32 bg-neutral-300 rounded-md"></div>
          <div className="w-64 h-32 bg-neutral-300 rounded-md"></div>
        </div>
        
        <div id="explore-categories">
          <h2>Explore Categories</h2>
        </div>

      </main>
    </div>
  );
}

export default Home;