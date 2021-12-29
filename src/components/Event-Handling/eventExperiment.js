import React from "react";

function eventExperiment() {
  function clickHandler() {
      console.log("Click the button");
  }

  return (
    <div>
      <button onPointerMove={clickHandler}>Click</button>
    </div>
  );
}

export default eventExperiment;
