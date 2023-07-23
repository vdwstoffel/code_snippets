import React from "react";

function PropsExample(props) {
  const { title } = props;

  return (
    <div className="note">
      <h1>{title}</h1>
    </div>
  );
}

export default PropsExample;