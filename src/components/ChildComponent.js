import React from "react";

function ChildComponent(props) {
  console.log(props);

  return (
    // <div>
    //   <button onClick={props.greetHandler}>Greet Parent</button>
    // </div>
    
    // v2 pass parameter when calling the parent method from the child component (arrow function syntax is simplest way to pass paremeters from the child component to the parent component)
    <div>
      <button onClick={() => props.greetHandler('ChildComponent')}>Greet Parent</button>
    </div>
  );
}

export default ChildComponent;
