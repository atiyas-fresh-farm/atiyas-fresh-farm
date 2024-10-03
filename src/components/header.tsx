import { ThemeToggle } from "@/components/theme-toggle";
import { SearchBar } from "@/components/search/search-bar";

const Header = () => {
  return (
    <header className="w-full h-16 px-4 grid grid-cols-4 items-center border-b fixed">
      <span className="col-span-1">
        <h1>Atiyas Fresh Farm</h1>
      </span>
      <span className="col-span-2">
        <SearchBar />
      </span>
      <span className="col-span-1 flex flex-col items-end">
        <ThemeToggle />
      </span>
    </header>
  );
}

export { Header };