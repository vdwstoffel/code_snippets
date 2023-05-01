import { useState } from "react";

/* By convention prefix class with use */
function useToggler(value = false) {
  const [isOn, setIsOn] = useState(value); // set initial values with useState

  const toggle = () => {
    setIsOn(!isOn);
  }; // set the value is the opposite of what it is

  return [isOn, toggle]; // return the value and the toggle function
}

// export default useToggler;

function CustomHooks() {
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

export default CustomHooks;
