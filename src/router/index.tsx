import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ContactPage from "../pages/Contact";
import HomePage from "../pages/Home";
import ProjectsPage from "../pages/Projects";

export const router = createBrowserRouter([
  {
    path: "/porfolio",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/porfolio/projects", element: <ProjectsPage /> },
      { path: "/porfolio/contact", element: <ContactPage /> },
    ],
  },
]);