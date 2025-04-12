import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ContactPage from "./Contact";
import HomePage from "./Home";
import ProjectsPage from "./Projects";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "projects", element: <ProjectsPage /> },
      { path: "contact", element: <ContactPage /> },
    ],
  },
]);