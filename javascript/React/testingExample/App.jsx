import { useState } from "react";

export default function App() {
  const [changed, setChanged] = useState(false);

  const changeHandler = () => {
    setChanged(true);
  };

  return (
    <>
      <h1>Basic Testing</h1>
      {!changed ? <p>State Unchanged</p> : <p>State Changed</p>}
      <button onClick={changeHandler}>Change State</button>
    </>
  );
}
