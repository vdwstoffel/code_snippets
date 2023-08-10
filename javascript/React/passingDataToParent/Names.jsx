import { useState } from "react";

export default function Names(props) {
  const { addNameFunction } = props;
  const [username, setUsername] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the page from refreshing
    addNameFunction(username); // Call the parent function
    setUsername(""); // Empty the input after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
