import { useState } from "react";

function FormExample(props) {
  const [username, setUsername] = useState("");

/***************************
****** Child Component *****
****************************/
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the page from refreshing
    props.addNameFunction(username); // Call the parent function
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

/****************************
****** Parent Component *****
*****************************/
function NamesList() {
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
      <FormExample addNameFunction={addName} />
    </div>
  );
}

export default NamesList;
