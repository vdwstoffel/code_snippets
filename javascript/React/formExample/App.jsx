import { useState } from "react";

import useFormInput from "./useFormInput";

export default function App() {
  const [username, handleUsernameSubmit, usernameReset] = useFormInput(); // Custom hook to manage form input
  const [email, handleEmailSubmit, emailReset] = useFormInput();

  const [name, setName] = useState(""); // useState hook to manage state
  const [mail, setMail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setName(username); // set the state to the form value
    setMail(email);
    usernameReset(); // reset values
    emailReset();

    // API call
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Hello {name}</h1>
      <h1>Email {mail}</h1>
      <label>Name:</label>
      <input value={username || ""} onChange={handleUsernameSubmit} />
      <label>Email:</label>
      <input value={email || ""} onChange={handleEmailSubmit} />
      <button type="submit">Submit</button>
    </form>
  );
}
