import { useState } from "react";

/* By convention prefix class with use */
export default function useToggler(value = false) {
  const [isOn, setIsOn] = useState(value); // set initial values with useState

  const toggle = () => {
    setIsOn(!isOn);
  }; // set the value is the opposite of what it is

  return [isOn, toggle]; // return the value and the toggle function
}
