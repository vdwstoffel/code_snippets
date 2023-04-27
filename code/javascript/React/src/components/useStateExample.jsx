import React, { useState } from "react";

function Counter() {
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

export default Counter;