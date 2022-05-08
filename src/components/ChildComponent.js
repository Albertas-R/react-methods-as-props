import React from "react";

function ChildComponent(props) {
  console.log(props);

  return (
    <div>
      <button onClick={props.greetHandler}>Greet Parent</button>
    </div>
  );
}

export default ChildComponent;
