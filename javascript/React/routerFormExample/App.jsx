import { createBrowserRouter, RouterProvider } from "react-router-dom"; // npm i react-router-dom

import UserForm, { action as submitAction } from "./UserForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserForm />,
    action: submitAction, // action to be performed upon submit click
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
