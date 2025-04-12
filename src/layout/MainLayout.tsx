import { Outlet, NavLink } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="min-h-screen p-6">
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-xl font-bold">Jonathan Lopez</h1>
        <nav className="space-x-4">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : "text-gray-600"}>Home</NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : "text-gray-600"}>Projects</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : "text-gray-600"}>Contact</NavLink>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}