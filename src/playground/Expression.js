import React, { Component } from "react";

export class Expression extends Component {
  render() {
    const name = "Larry";
    const showHello = false;
    const showMath = false;

    const num1 = 20;
    const num2 = 30;

    let math;
    if (showMath) {
      math = (
        <h4>
          {num1} + {num2} = {num1 + num2}
        </h4>
      );
    } else {
      math = null;
    }

    return (
      <div>
        {/* <h1>{console.log(`Hello ${name}`)} </h1> */}
        <h1>{name}</h1>
        {showHello ? <h2>Hello should appear</h2> : null}
        {math}
      </div>
    );
  }
}

export default Expression;
