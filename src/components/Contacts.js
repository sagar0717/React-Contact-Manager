import React, { Component } from "react";
import Contact from "./Contact";
import PropTypes from "prop-types";

class Contacts extends Component {
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
  deleteContact = () => {
    console.log("Delete Clicked");
  };

  render() {
    const { contacts } = this.state;

    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteClickHandler={this.deleteContact}
          />
        ))}
      </React.Fragment>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};
export default Contacts;
