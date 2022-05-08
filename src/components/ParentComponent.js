import React, { Component } from "react";

import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "Parent",
    };

    this.greetParent = this.greetParent.bind(this);
  }

  // greetParent() {
  //   alert(`Hello ${this.state.parentName}`);
  // }

  // v2 pass parameter when calling the parent method from the child component (arrow function syntax is simplest way to pass paremeters from the child component to the parent component)
  greetParent(fromCild) {
    alert(`Hello ${this.state.parentName} from ${fromCild}`);
  }

  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent} />
      </div>
    );
  }
}

export default ParentComponent;
