import "./global.css";

import { useRef } from "react";

/*
Instead of giving state to an input give a reference to it
 */

function App() {
  const nameInputRef = useRef();

  const clickerHandler = (e) => {
    e.preventDefault();
    console.log(nameInputRef.current.value); // get the value without using state
    nameInputRef.current.value = ""; // usually you should not change DOM values yourself
  };

  return (
    <>
      <form onSubmit={clickerHandler}>
        <input type="text" ref={nameInputRef}></input> {/* identify by ref */}
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
