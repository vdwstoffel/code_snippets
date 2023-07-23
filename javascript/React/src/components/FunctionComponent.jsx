/*
Components can be created in separate files and imported using:
export default functionComponent

then in App.jsx import it as
import functionComponent from './path/to/functionComponent'

the component can then be used as
<functionComponent />
*/

import React from "react";

/* 
Create a separate css file and import it as
import 'file.css'
*/

// function based component
function FunctionComponent() {
  return (
    <h1 className="Heading">
      Hello World! This is a basic component
    </h1>
  );
}

export default FunctionComponent;