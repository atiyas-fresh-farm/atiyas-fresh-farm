import { ThemeToggle } from "@/components/theme-toggle";

const Header = () => {
  return (
    <header className="w-full h-16 px-4 flex flex-row justify-between items-center border-b fixed">
      <h1>Atiyas Fresh Farm</h1>
      <ThemeToggle />
    </header>
  );
}

export { Header };