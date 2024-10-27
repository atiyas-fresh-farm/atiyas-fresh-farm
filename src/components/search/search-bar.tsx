'use client'

import { Search } from "lucide-react";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

const SearchBar = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="w-full h-full flex flex-row justify-center items-center px-4 py-1 border border-neutral-300 rounded-full">
      <Search size={24} className="text-neutral-500" />
      <input
        className="w-min-[30rem] w-full h-10 p-2 bg-transparent outline-none"
        type="text" placeholder="Search"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get('query')?.toString()}
      />
    </div>
  )
}

export { SearchBar };