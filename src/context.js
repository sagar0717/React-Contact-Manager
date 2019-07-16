import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "john@gmail.com",
        phone: "111 - 111 - 1111"
      },
      {
        id: 2,
        name: "Jim Bim",
        email: "jim@gmail.com",
        phone: "222 - 222 - 2222"
      },
      {
        id: 3,
        name: "kim bill",
        email: "kim@gmail.com",
        phone: "333 - 333 - 3333"
      }
    ]
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
