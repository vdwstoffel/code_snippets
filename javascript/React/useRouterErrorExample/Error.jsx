import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError(); // gain access to thew error object

  return (
    <>
      <h1>{error.status}</h1>
      <h2>{error.data.message}</h2>
    </>
  );
}
