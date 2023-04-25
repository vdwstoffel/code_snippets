import { useState } from "react";

function FormExample() {
  const [username, setUsername] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the page from refreshing
    console.log(username);
    setUsername(""); // Empty the input after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" id='name' name="name" value={username} onChange={((e) => setUsername(e.target.value))} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormExample;
