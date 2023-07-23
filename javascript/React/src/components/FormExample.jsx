import { useState } from "react";

/**************************************
 ***** External custom input hook *****
 **************************************/

function useFormInput(initialValue) {
  // Custom hook to manage form input
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue("");
  };

  return [value, handleChange, reset];
}

/******************************************/

// import useFormInput from "./useFormInput";
function FormExample() {
  const [username, handleUsernameSubmit, usernameReset] = useFormInput(); // Custom hook to manage form input
  const [email, handleEmailSubmit, emailReset] = useFormInput();
  
  const [name, setName] = useState(""); // useState hook to manage state
  const [mail, setMail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(username);
    setMail(email);
    usernameReset();
    emailReset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Hello {name}</h1>
      <h1>Email {mail}</h1>
      <label>Name:</label>
      <input value={username} onChange={handleUsernameSubmit} />
      <label>Email:</label>
      <input value={email} onChange={handleEmailSubmit} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormExample;
