
import { ProductModal } from "@/myComponents/ProductModal";
import App from "../App";
import ProductList from "@/myComponents/ProductList";
import NotFoundPage from "@/pages/ErrorPage";
import Homepage from "@/pages/Homepage";
import ProductDetail from "@/pages/ProductDetail";
import { createBrowserRouter } from "react-router-dom";
import Listing from "@/pages/Listing";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/product/:productId",
        element: <ProductDetail />,
      },
      {
        path: "/products",
        element: <ProductList />,
      },

      {
        path: "/product",
        element: <ProductModal />,
      },

      {
        path: "cat/:id",
        element: <Listing/>,
      },

      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
