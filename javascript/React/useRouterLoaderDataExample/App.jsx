import "./global.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom"; // npm i react-router-dom

import User from "./User";
import { getUsername } from "./getUsername"; // custom function

const router = createBrowserRouter([
  {
    path: "/",
    element: <User />,
    loader: getUsername, // loader function to share data with other components
    id: "root", // set a id to refer to the data
    children: [{ index: true, element: <User /> }],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
