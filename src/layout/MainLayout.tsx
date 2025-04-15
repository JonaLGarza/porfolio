import { Outlet, NavLink } from "react-router-dom";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import Button from "../components/atoms/Button";
import useMobileDrawer from "../hooks/useMobileDrawer";

export default function MainLayout() {
  const { resolvedTheme, setTheme } = useTheme();
  const {
    menuOpen,
    menuRef,
    toggleMenu,
    closeMenu,
  } = useMobileDrawer();

  const handleToggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500 p-6">
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
          <NavLink to="/" className={({ isActive }) => isActive ? "text-primary font-semibold" : ""}>Home</NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? "text-primary font-semibold" : ""}>Projects</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "text-primary font-semibold" : ""}>Contact</NavLink>
        </nav>

        <div className="hidden sm:block">
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

      {menuOpen && (
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
      )}

      <Outlet />
    </div>
  );
}