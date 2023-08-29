import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from "../Pages/MainPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/:trademark",
    element: <MainPage />,
  },
]);

const MenuRouter = () => {
  return <RouterProvider router={router} />;
};

export default MenuRouter;
