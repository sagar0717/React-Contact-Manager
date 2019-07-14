import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <h4>{this.props.name}</h4>
        <ul>
          <li>Email: {email}</li>
          <li>Phone: 555-555-555</li>
        </ul>
      </div>
    );
  }
}

Contact.propTypes = {
  name: PropTypes.string.isRequired
};

export default Contact;
