import { NavLink } from "react-router-dom";

export default function Products() {
  return (
    <>
      <h1>Products Page</h1>
      <NavLink to={"/products/1"}>
        <li>Product 1</li>
      </NavLink>
    </>
  );
}
