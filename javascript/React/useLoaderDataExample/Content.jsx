import { useLoaderData } from "react-router-dom";

export default function Content() {
  const data = useLoaderData(); // Gain access to the data from the api call

  return <h1>{data.name}</h1>;
}

/*
 * Loader function, declare as a export function with the component it will use
 * and export it to the routes
 */
export async function loader() {
  const response = await fetch("https://swapi.dev/api/people/1/");
  return await response;
}
