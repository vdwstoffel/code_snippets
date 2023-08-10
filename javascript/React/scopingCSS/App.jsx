import { useState } from "react";

// Name the .css file as a module and import as styles
import styles from "./App.module.css";

export default function App() {
  const [clicked, setClicked] = useState(false);

  const clickHandler = () => {
    setClicked(!clicked);
  };

  /*
  Call the class name from the styles module
  Dynamically add the class 'dynamic-bg' based on weather or not the state is clicked
  */
  return (
    <div>
      <h1 className={styles.heading} onClick={clickHandler}>
        Css Modules Example
      </h1>
      <div className={clicked && styles["dynamic-bg"]} onClick={clickHandler}>
        Click Me
      </div>
      <h2 className={`${styles.heading} ${clicked && styles["dynamic-bg"]}`}>
        Combined
      </h2>
    </div>
  );
}
