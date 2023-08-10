import { useState } from "react";

import Names from "./Names";

export default function App() {
  const [names, setNames] = useState([]);

  const addName = (name) => {
    setNames([...names, name]);
  };

  return (
    <div>
      <h1>List of Names</h1>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <Names addNameFunction={addName} />
    </div>
  );
}
