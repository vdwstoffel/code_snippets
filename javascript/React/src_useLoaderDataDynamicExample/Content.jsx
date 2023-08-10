import { useLoaderData } from "react-router-dom";

export default function Content() {
  const data = useLoaderData(); // Gain access to the data from the api call

  return <h1>{data.name}</h1>;
}

/*
 * Loader function, declare as a export function with the component it will use
 * and export it to the routes
 */
export async function loader({ request, params }) {
  const num = params.number; // should match the dynamic param from the path ex.  path: "/:number"
  const response = await fetch(`https://swapi.dev/api/people/${num}/`);
  return await response;
}
