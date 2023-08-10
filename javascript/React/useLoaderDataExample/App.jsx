import "./global.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Content, { loader as eventLoader } from "./Content"; // import the loader function

const router = createBrowserRouter([
  { path: "/", element: <Content />, loader: eventLoader }, // call the loader function before the page loads
]);

export default function App() {
  return <RouterProvider router={router} />;
}
