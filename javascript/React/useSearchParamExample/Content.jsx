import { useSearchParams } from "react-router-dom";

export default function Products() {
  // get everything in the params ex localhost/products?bread
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <div>
      <h1>{searchParams}</h1>
    </div>
  );
}
