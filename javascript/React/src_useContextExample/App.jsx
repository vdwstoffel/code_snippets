import "./global.css";

import { useContext } from "react";
import AuthContext from "./context/auth-context";

export default function App() {
  const { isLoggedIn, login, logout } = useContext(AuthContext);

  return (
    <div>
      <h1>Logged In: {isLoggedIn ? "Yes" : "No"} </h1>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
