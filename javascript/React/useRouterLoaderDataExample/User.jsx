import { useRouteLoaderData } from "react-router-dom";

export default function User() {
  const user = useRouteLoaderData("root"); // id set in the app route definition

  return <h1>Hello: {user}</h1>;
}
