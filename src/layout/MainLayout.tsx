import { Outlet, NavLink } from "react-router-dom";
import { useTheme } from "next-themes";
import Button from "../components/atoms/Button";
import { Moon, Sun } from "lucide-react";
import React from "react";

export default function MainLayout() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="min-h-screen p-6">
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-xl font-bold">Jonathan Lopez</h1>
        <nav className="space-x-4">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : "text-gray-600"}>Home</NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : "text-gray-600"}>Projects</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : "text-gray-600"}>Contact</NavLink>
        </nav>
        <div>
          Toggle {theme === "dark" ? "light" : "dark"} mode
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </Button>
        </div>
      </header>
      <Outlet />
    </div>
  );
}