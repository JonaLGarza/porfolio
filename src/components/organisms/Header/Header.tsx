import { NavLink } from "react-router-dom";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import Button from "../../atoms/Button";
import { FaReact } from "react-icons/fa"; // react-icons for a React logo
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "../../molecules/LanguageSwitcher/LanguageSwitcher";

type HeaderProps = {
  menuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
};

export default function Header({ menuOpen, toggleMenu }: HeaderProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const { t } = useTranslation();

  const handleToggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <header className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-10 gap-2 sm:gap-0">
      <div>
        <h1 className="text-xl font-bold">Jonathan Lopez</h1>
        <div className="flex items-center gap-1 text-muted-foreground text-xs mt-1">
          <FaReact className="text-sky-500 animate-spin-slow" />
          <span>{t('header.builtwith')}</span>
        </div>
      </div>

      <div className="sm:hidden">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <span
            className={`transition-transform duration-300 ${
              menuOpen ? "rotate-90 scale-110" : "rotate-0"
            }`}
          >
            {menuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </span>
        </Button>
      </div>

      <nav className="hidden sm:flex space-x-4 text-muted-foreground text-sm">
        <NavLink
          to="/porfolio"
          className={({ isActive }) => (isActive ? "text-primary font-semibold" : "")}
        >
          {t('header.home')}
        </NavLink>
        <NavLink
          to="/porfolio/projects"
          className={({ isActive }) => (isActive ? "text-primary font-semibold" : "")}
        >
          {t('header.projects')}
        </NavLink>
        <NavLink
          to="/porfolio/contact"
          className={({ isActive }) => (isActive ? "text-primary font-semibold" : "")}
        >
          {t('header.contact')}
        </NavLink>
      </nav>
      
      <div>
      <div className="hidden sm:block cursor-pointer" onClick={handleToggleTheme}>
        {t('header.toggle_theme', {
        theme: t(`header.${resolvedTheme === 'dark' ? 'light_mode' : 'dark_mode'}`)
        })}
        <Button
          variant="ghost"
          size="icon"
          aria-label="Toggle Theme"
          className="cursor-pointer"
        >
          {resolvedTheme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
        </Button>
      </div>
      <LanguageSwitcher />
      </div>
    </header>
  );
}