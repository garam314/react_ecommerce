import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from "../Pages/MainPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/trademark/:trademark",
    element: <MainPage />,
  },
  {
    path: "/category/:category",
    element: <MainPage />,
  },
]);

const MenuRouter = () => {
  return <RouterProvider router={router} />;
};

export default MenuRouter;
