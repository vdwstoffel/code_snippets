import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/products"); // programmatically go to another page
  };

  return (
    <div>
      <h1>Welcome Home</h1>
      <button onClick={clickHandler}>Go To Products</button>
    </div>
  );
}
