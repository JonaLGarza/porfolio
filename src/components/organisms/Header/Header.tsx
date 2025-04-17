import { NavLink } from "react-router-dom";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import Button from "../../atoms/Button";

type HeaderProps = {
  menuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
};

export default function Header({ menuOpen, toggleMenu }: HeaderProps) {
  const { resolvedTheme, setTheme } = useTheme();

  const handleToggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <header className="flex justify-between items-center mb-10">
      <h1 className="text-xl font-bold">Jonathan Lopez</h1>

      <div className="sm:hidden">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <span className={`transition-transform duration-300 ${menuOpen ? "rotate-90 scale-110" : "rotate-0"}`}>
            {menuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </span>
        </Button>
      </div>

      <nav className="hidden sm:flex space-x-4 text-muted-foreground text-sm">
        <NavLink to="/porfolio" className={({ isActive }) => isActive ? "text-primary font-semibold" : ""}>Home</NavLink>
        <NavLink to="/porfolio/projects" className={({ isActive }) => isActive ? "text-primary font-semibold" : ""}>Projects</NavLink>
        <NavLink to="/porfolio/contact" className={({ isActive }) => isActive ? "text-primary font-semibold" : ""}>Contact</NavLink>
      </nav>

      <div className="hidden sm:block">
        Toggle { resolvedTheme === 'dark'? 'light' : 'dark' } mode
        <Button
          variant="ghost"
          size="icon"
          onClick={handleToggleTheme}
          aria-label="Toggle Theme"
        >
          {resolvedTheme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
        </Button>
      </div>
    </header>
  );
}
