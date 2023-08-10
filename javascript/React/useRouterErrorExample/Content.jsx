import { useLoaderData, json } from "react-router-dom";

export default function Content() {
  const data = useLoaderData(); // Gain access to the data from the api call

  return <h1>{data.name}</h1>;
}

/*
 * Loader function, declare as a export function with the component it will use
 * and export it to the routes
 */
export async function loader() {
  const response = await fetch("https://swapi.dev/api/wrong_peope/1/"); // notice wrong api url
  if (!response.ok) {
    throw json({ message: "Could not fetch data" }, { status: 400 }); // creates a response object
  } // will direct to the error page
  return await response;
}
