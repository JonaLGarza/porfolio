import { NavLink } from "react-router-dom";
import { Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { RefObject } from "react";
import Button from "../../atoms/Button";

type MobileMenuProps = {
  menuOpen: boolean;
  menuRef: RefObject<HTMLDivElement | null>;
  closeMenu: () => void;
};

export default function MobileMenu({ menuOpen, menuRef, closeMenu }: MobileMenuProps) {
  const { resolvedTheme, setTheme } = useTheme();

  const handleToggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  if (!menuOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300" />
      <div
        ref={menuRef}
        className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md p-8 flex flex-col gap-6 text-lg text-muted-foreground transition-transform duration-500 ease-out animate-fade-in-up"
      >
        <div className="flex justify-end">
          <Button
            variant="ghost"
            size="icon"
            onClick={closeMenu}
            aria-label="Close Menu"
          >
            <X className="size-4 transition-transform duration-300 hover:rotate-90" />
          </Button>
        </div>

        <nav className="flex flex-col gap-4">
          {["Home", "Projects", "Contact"].map((label, index) => (
            <NavLink
              key={label}
              to={`/${label.toLowerCase() === "home" ? "" : label.toLowerCase()}`}
              className={({ isActive }) =>
                `transition-opacity transform duration-500 ease-out delay-${index * 100} ${isActive ? "text-primary font-semibold" : "opacity-80 hover:opacity-100"}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <Button
          variant="ghost"
          size="icon"
          onClick={handleToggleTheme}
          aria-label="Toggle Theme"
        >
          {resolvedTheme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
        </Button>
      </div>
    </>
  );
}