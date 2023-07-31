import { Link } from "react-router-dom";

export default function MainNavigation() {
  return (
    <header>
      <p>
        <Link to="/">Home </Link>
      </p>{" "}
      {/* Not home component just a link*/}
      <p>
        <Link to="Products">Products</Link>
      </p>
    </header>
  );
}
