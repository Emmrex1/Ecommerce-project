import { ProductModal } from "@/myComponents/ProductModal";
import App from "../App";
import ProductList from "@/pages/ProductDetails";
import NotFoundPage from "@/pages/ErrorPage";
import Homepage from "@/pages/Homepage";
import { createBrowserRouter } from "react-router-dom";
import Listing from "@/pages/Listing";
import CartPage from "@/pages/CartPage";
import SignUpPage from "@/pages/Auth/SignUp";
import SignInPage from "@/pages/Auth/SignIn";
import ProductsDetails from "@/pages/ProductDetails";
import Layout from "@/myComponents/layout";
import ProductPage from "@/myComponents/ProductPage/ProductPage";

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
        path: "subcat/:id",
        element: <Listing />,
      },

      {
        path: "product/:id",
        element: <ProductsDetails />,
      },

      {
        path: "productz",
        element: <ProductPage />,
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
        path: "layout",
        element: <Layout />,
      },

      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
