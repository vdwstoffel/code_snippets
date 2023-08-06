import { useRef } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function Index() {
  const myLabel = useRef();
  const router = useRouter();

  const submitHandler = async (e) => {
    e.preventDefault();
    const enteredLabel = myLabel.current.value; // get the value from the label
    // make a request to your own api backend
    await axios.post(
      "/api/firebase/",
      { myLabel: enteredLabel },
      { headers: { "Content-Type": "application/data" } }
    );
    router.push("/showItems"); // redirect to another page
  };

  return (
    <>
      <h1>Index</h1>
      <input ref={myLabel} />
      <button onClick={submitHandler}>Submit</button>
    </>
  );
}
