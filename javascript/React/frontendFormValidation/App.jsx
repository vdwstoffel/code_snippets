import { useState } from "react";
import style from "./App.module.css";

export default function App() {
  const [name, setName] = useState(""); // State for the name form input
  const nameIsValid = name.length > 0; // Check is name meets the requirement

  const submitHandler = (e) => {
    e.preventDefault();
    if (!name) {
      console.log("Name is Empty");
      // do something is form is bad
      return;
    }
    // do something is form is good
    window.location.href = "https://google.com";
  };

  const updateInput = (e) => {
    setName(e.target.value);
  };

  return (
    <form>
      <h1>Hello</h1>
      <label>Name:</label>
      <input
        value={name}
        onChange={updateInput}
        className={!nameIsValid ? style.error : null}
      />
      {!nameIsValid && <p>Name is required</p>}
      <button type="submit" onClick={submitHandler}>
        Submit
      </button>
    </form>
  );
}
