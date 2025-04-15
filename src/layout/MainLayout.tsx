import { Outlet } from "react-router-dom";
import useMobileDrawer from "../hooks/useMobileDrawer";
import Header from "../components/organisms/Header/Header";
import MobileMenu from "../components/organisms/MobileMenu/MobileMenu";

export default function MainLayout() {
  const drawer = useMobileDrawer();

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500 p-6">
      <Header {...drawer} />
      <MobileMenu {...drawer} />
      <Outlet />
    </div>
  );
}
