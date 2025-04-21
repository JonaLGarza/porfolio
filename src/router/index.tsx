import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import MainLayout from "../layout/MainLayout";
import { LazyWrapper } from "../components/atoms/LazyWrapper/LazyWrapper";

const HomePage = lazy(() => import("../pages/Home"));
const ProjectsPage = lazy(() => import("../pages/Projects"));
const ContactPage = lazy(() => import("../pages/Contact"));
const FallbackMessage = lazy(() => import("../components/molecules/FallBackMessage/FallBackMessage"));

export const router = createBrowserRouter([
  {
    path: "/porfolio",
    element: <MainLayout />,
    errorElement: <FallbackMessage />,
    children: [
      {
        element: <LazyWrapper />,
        errorElement: <FallbackMessage />,
        children: [
          { index: true, element: <HomePage /> },
          { path: "projects", element: <ProjectsPage /> },
          { path: "contact", element: <ContactPage /> },
        ],
      },
    ],
  },
]);
