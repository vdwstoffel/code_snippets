import { useParams } from "react-router-dom";

export default function ProductItems() {
  const params = useParams();

  return (
    <>
      <h1>Product: {params.id}</h1>{" "} {/* params.id must match the dynamic route */}
    </>
  );
}
