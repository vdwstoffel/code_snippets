import React from "react";

/*
Instead of wrapping everything in a div and creating a lot of divs
instead wrap your return in a Fragment which just return the props.children.
This will avoid creating a lot of divs
*/

function FragmentExample() {
  return (
    <React.Fragment>
      <h1>Hello</h1>
      <h1>World</h1>
    </React.Fragment>
  );
}

export default FragmentExample;
