import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="w-full h-full flex flex-row justify-center items-center px-4 py-1 border border-neutral-300 rounded-full">
      <Search size={24} className="text-neutral-500" />
      <input className="w-min-[30rem] w-full h-10 p-2 bg-transparent outline-none" type="text" placeholder="Search" />
    </div>
  )
}

export { SearchBar };