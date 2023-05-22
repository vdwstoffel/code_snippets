import { useContext } from "react";
import AuthContext from "../context/auth-context";

function UseContextExample(props) {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div>
      <h1>{isLoggedIn ? "Logged In" : "Logged Out"}</h1>
        <button onClick={props.btnFn}>Change</button>
    </div>
  );
}

export default UseContextExample;
