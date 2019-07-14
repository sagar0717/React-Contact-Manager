import React, { Component } from "react";
import Contact from "./Contact";
class Contacts extends Component {
  constructor() {
    super();
    this.state = {
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
  }
  render() {
    const { contacts } = this.state;

    return (
      <div>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            name={contact.name}
            email={contact.email}
            phone={contact.phone}
          />
        ))}
      </div>
    );
  }
}

export default Contacts;
