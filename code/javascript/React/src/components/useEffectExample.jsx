import React, { useState, useEffect } from "react";
import axios from "axios";

function SWMovies() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("https://swapi.dev/api/films/1/");
      setResults(res.data);
    };
    getData();
  }, []); // use callback array to run only when given argument changes

  return (
    <div>
      <h1>{results.title} </h1>
    </div>
  );
}

export default SWMovies;
