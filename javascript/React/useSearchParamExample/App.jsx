import "./global.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Content from "./Content";

const router = createBrowserRouter([
  { path: "/content", element: <Content /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
