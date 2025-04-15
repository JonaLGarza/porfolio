import { Outlet, NavLink } from "react-router-dom";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import Button from "../components/atoms/Button";

export default function MainLayout() {
  const { resolvedTheme, setTheme } = useTheme();

  const handleToggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500 p-6">
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-xl font-bold">Jonathan Lopez</h1>

        <nav className="space-x-4 text-muted-foreground text-sm">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-primary font-semibold" : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "text-primary font-semibold" : ""
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-primary font-semibold" : ""
            }
          >
            Contact
          </NavLink>
        </nav>

        <Button
          variant="ghost"
          size="icon"
          onClick={handleToggleTheme}
          aria-label="Toggle Theme"
        >
          {resolvedTheme === "dark" ? (
            <Sun className="size-4" />
          ) : (
            <Moon className="size-4" />
          )}
        </Button>
      </header>

      <Outlet />
    </div>
  );
}
