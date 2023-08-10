import "./global.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom"; // npm i react-router-dom

import RootLayout from "./RootLayout";
import Products from "./Products";
import ProductItems from "./ProductItems";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, // Wrap the root layout and add other pages as children
    // errorElement: <ErrorPage />, // if page does not exists show a define error page
    children: [
      { path: "/products", element: <Products /> },
      { path: "products/:id", element: <ProductItems /> }, // dynamic routing
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
