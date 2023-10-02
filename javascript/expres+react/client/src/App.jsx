import { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [text, setText] = useState("No Backend");

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("api/backend");
      console.log(res);
      setText(res.data)
    };
    getData();
  }, []);

  return <h1>Hello: {text}</h1>;
}
