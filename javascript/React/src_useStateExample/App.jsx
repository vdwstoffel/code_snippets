import { useState } from "react";
import "./global.css";

export default function App() {
  // destruct array         // Set initial value
  const [count, setCount] = useState(1);

  function increase() {
    const newCount = count + 1;
    setCount(newCount); // Set a new value
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
    </div>
  );
}
