import ReactDOM from "react-dom";

/*
By creating a id in the .html you can move the portal to that id instead of the root
This can move it to the top to make semantics better
*/

function PortalExample() {
    // Pass the element and the id as arguments
  return ReactDOM.createPortal(
    <h1>This is a Portal at the top of the DOM</h1>,
    document.getElementById("portalExample")
  );
}

export default PortalExample;
