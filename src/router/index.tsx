import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import MainLayout from "../layout/MainLayout";
import { LazyWrapper } from "../components/atoms/LazyWrapper/LazyWrapper";
import { FallbackMessage } from "../components/molecules/FallBackMessage/FallBackMessage";

const HomePage = lazy(() => import("../pages/Home"));
const ProjectsPage = lazy(() => import("../pages/Projects"));
const ContactPage = lazy(() => import("../pages/Contact"));

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
