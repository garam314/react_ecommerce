import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from "../Pages/MainPage";
import DetailProduct from "../Pages/DetailProduct.jsx"
import Checkout from "../Pages/Checkout"

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
  {
    path: "/product/:id",
    element: <DetailProduct />
  }
  ,
  {
    path: "/checkout",
    element: <Checkout />
  }
]);

const MenuRouter = () => {
  return (
      <RouterProvider router={router} />
  )
};

export default MenuRouter;
