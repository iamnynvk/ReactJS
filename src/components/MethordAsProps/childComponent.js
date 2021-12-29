import React, { useState } from "react";

function childComponent(props) {
  return (
    <div>
      <button onClick={() => props.greets("Nayan")}>click here</button>
    </div>
  );
}

export default childComponent;
