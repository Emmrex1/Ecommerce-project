import { ProductModal } from "@/myComponents/ProductModal";
import App from "../App";
import ProductList from "@/pages/ProductDetails";
import NotFoundPage from "@/pages/ErrorPage";
import Homepage from "@/pages/Homepage";
import ProductDetail from "@/myComponents/ProductDetail";
import { createBrowserRouter } from "react-router-dom";
import Listing from "@/pages/Listing";
import ProductDetails from "@/pages/ProductDetails";
import CartPage from "@/pages/CartPage";
import SignUpPage from "@/pages/Auth/SignUp";
import SignInPage from "@/pages/Auth/SignIn";

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
        path: "cat/:id",
        element: <Listing />,
      },

      {
        path: "product/:id",
        element: <ProductDetails />,
      },

      {
        path: "/products",
        element: <ProductDetail />,
      },

      {
        path: "cart",
        element: <CartPage />,
      },

      {
        path: "signin",
        element: <SignInPage />,
      },

      {
        path: "signup",
        element: <SignUpPage />,
      },

      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
