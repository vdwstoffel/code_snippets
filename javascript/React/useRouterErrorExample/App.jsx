import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Content, { loader as eventLoader } from "./Content"; // import the loader function
import Error from "./Error";

const router = createBrowserRouter([
  {
    path: "/content",
    element: <Content />,
    loader: eventLoader,
    errorElement: <Error />,
  }, //add default error handler
]);

export default function App() {
  return <RouterProvider router={router} />;
}
