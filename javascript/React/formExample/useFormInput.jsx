import { useState } from "react";

export default function useFormInput(initialValue) {
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
