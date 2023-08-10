import "./global.css";

import useToggler from "./hooks/useToggler";

export default function App() {
  const [btnOne, setBtnOne] = useToggler(false); // value , toggle function
  const [btnTwo, setBtnTwo] = useToggler(false); // value , toggle function

  return (
    <div>
      <h onClick={setBtnOne}>Button 1 is {btnOne ? "On" : "Off"}</h>
      <br />
      <h onClick={setBtnTwo}>Button 2 is {btnTwo ? "On" : "Off"}</h>
    </div>
  );
}
